let currentlyReading = false;
let currentUtterance = null;
let progressBar = null;
let progressInterval = null;

function speakText(form) {
  if (currentlyReading) {
    // Stop the current reading if it's already in progress
    window.speechSynthesis.cancel();
    currentlyReading = false;
    clearInterval(progressInterval); // Clear progress interval
  }

  let text = '';

  // Iterate over all elements in the form and concatenate their text content
  form.querySelectorAll('h1, h2, h3, p').forEach(element => {
    text += element.textContent + '\n';
  });

  const utterance = new SpeechSynthesisUtterance();
  utterance.text = text;
  currentlyReading = true;
  currentUtterance = utterance;

  utterance.onstart = function () {
    // Start progress bar update interval
    progressInterval = setInterval(updateProgressBar, 100);
  };

  utterance.onend = function () {
    currentlyReading = false;
    clearInterval(progressInterval); // Clear progress interval
    if (progressBar) {
      progressBar.style.width = '100%'; // Ensure progress bar reaches 100% on completion
    }
  };

  window.speechSynthesis.speak(utterance);
}

function updateProgressBar() {
  if (currentUtterance) {
    const progress = (window.speechSynthesis.speaking ? (window.speechSynthesis.elapsedTime / currentUtterance.duration) * 100 : 0);
    if (progressBar) {
      progressBar.style.width = progress + '%';
    }
  }
}

function addListenButton(form) {
  const listenButton = document.createElement('button');
  listenButton.textContent = 'Play';
  listenButton.addEventListener('click', function () {
    speakText(form);
  });
  form.insertBefore(listenButton, form.firstChild);

  const pauseButton = document.createElement('button');
  pauseButton.textContent = 'Pause';
  pauseButton.addEventListener('click', function () {
    if (currentUtterance) {
      window.speechSynthesis.pause();
      currentlyReading = false;
    }
  });
  form.insertBefore(pauseButton, form.firstChild);

  const unpauseButton = document.createElement('button');
  unpauseButton.textContent = 'Resume';
  unpauseButton.addEventListener('click', function () {
    if (currentUtterance) {
      window.speechSynthesis.resume();
      currentlyReading = true;
    }
  });
  form.insertBefore(unpauseButton, form.firstChild);

  const cancelButton = document.createElement('button');
  cancelButton.textContent = 'Close';
  cancelButton.addEventListener('click', function () {
    window.speechSynthesis.cancel();
    currentlyReading = false;
    form.remove();
  });
  form.insertBefore(cancelButton, form.firstChild);

  // Create progress bar
  progressBar = document.createElement('div');
  progressBar.className = 'progress-bar';
  progressBar.style.width = '0%';
  form.insertBefore(progressBar, form.firstChild);
}
