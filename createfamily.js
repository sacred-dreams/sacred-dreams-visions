function createFamily() {
  var familyNameInput = document.createElement('input');
  familyNameInput.type = 'text';
  familyNameInput.placeholder = 'Family Name';

  var numChildrenInput = document.createElement('input');
  numChildrenInput.type = 'number';
  numChildrenInput.placeholder = 'Number of Children';

  var submitBtn = document.createElement('button');
  submitBtn.innerText = 'Create Family';

  var cancelBtn = document.createElement('button');
  cancelBtn.innerText = 'Cancel';

  var form = document.createElement('form');
  form.name = 'familyForm';
  form.appendChild(familyNameInput);
  form.appendChild(document.createElement('br'));
  form.appendChild(numChildrenInput);
  form.appendChild(document.createElement('br'));
  form.appendChild(submitBtn);
  form.appendChild(cancelBtn);

  submitBtn.addEventListener('click', function (event) {
    event.preventDefault();

    var familyName = familyNameInput.value;
    var numChildren = numChildrenInput.value;

    if (familyName === null || familyName === "") {
      alert("Family name must be filled out");
      return;
    }

    if (numChildren === null || numChildren === "" || isNaN(numChildren)) {
      alert("Please enter a valid number of children");
      return;
    }

    var fatherFirstName = "";
    var fatherLastName = "";

    // Create family members form
    var familyMembersForm = document.createElement('form');
    familyMembersForm.name = 'familyMembersForm';
    familyMembersForm.style.margin = '8%';
    familyMembersForm.style.width = '50%';
    familyMembersForm.innerHTML = `
      <h2>${familyName}'s Family Members</h2>
      <h3>Father</h3>
      <label for="fatherFirstName">First Name:</label>
      <input type="text" id="fatherFirstName" name="fatherFirstName" value="${fatherFirstName}" required><br><br>
      <label for="fatherLastName">Last Name:</label>
      <input type="text" id="fatherLastName" name="fatherLastName" value="${fatherLastName}" required><br><br>
      <label for="fatherSex">Sex:</label>
      <select id="fatherSex" name="fatherSex">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select><br><br>
      <label for="fatherDob">Date of Birth:</label>
      <input type="date" id="fatherDob" name="fatherDob" required><br><br>
      <label for="fatherMaritalStatus">Marital Status:</label>
      <select id="fatherMaritalStatus" name="fatherMaritalStatus">
        <option value="Single">Single</option>
        <option value="Married">Married</option>
        <option value="Divorced">Divorced</option>
        <option value="Widowed">Widowed</option>
      </select><br><br>
      <label for="fatherOccupation">Occupation:</label>
      <select id="fatherOccupation" name="fatherOccupation">
        <option value="Student">Student</option>
        <option value="Engineer">Engineer</option>
        <option value="Doctor">Doctor</option>
        <option value="Lawyer">Lawyer</option>
        <option value="Teacher">Teacher</option>
        <option value="Other">Other</option>
      </select><br><br>
      <label for="fatherCountry">Country/Continent:</label>
      <select id="fatherCountry" name="fatherCountry">
        <option value="afghanistan">Afghanistan - Asia</option>
        <option value="albania">Albania - Europe</option>
        <option value="algeria">Algeria - Africa</option>
        <option value="andorra">Andorra - Europe</option>
        <option value="angola">Angola - Africa</option>
        <option value="antigua-and-barbuda">Antigua and Barbuda - North America</option>
        <option value="argentina">Argentina - South America</option>
        <option value="armenia">Armenia - Asia</option>
        <option value="australia">Australia - Oceania</option>
        <option value="austria">Austria - Europe</option>
        <option value="azerbaijan">Azerbaijan - Asia</option>
        <option value="bahamas">Bahamas - North America</option>
        <option value="bahrain">Bahrain - Asia</option>
        <option value="bangladesh">Bangladesh - Asia</option>
        <option value="barbados">Barbados - North America</option>
        <option value="belarus">Belarus - Europe</option>
        <option value="belgium">Belgium - Europe</option>
        <option value="belize">Belize - North America</option>
        <option value="benin">Benin - Africa</option>
        <option value="bhutan">Bhutan - Asia</option>
        <option value="bolivia">Bolivia - South America</option>
        <option value="bosnia-and-herzegovina">Bosnia and Herzegovina - Europe</option>
        <option value="botswana">Botswana - Africa</option>
        <option value="brazil">Brazil - South America</option>
        <option value="brunei">Brunei - Asia</option>
        <option value="bulgaria">Bulgaria - Europe</option>
        <option value="burkina-faso">Burkina Faso - Africa</option>
        <option value="burundi">Burundi - Africa</option>
        <option value="cabo-verde">Cabo Verde - Africa</option>
        <option value="cambodia">Cambodia - Asia</option>
        <option value="cameroon">Cameroon - Africa</option>
        <option value="canada">Canada - North America</option>
        <option value="central-african-republic">Central African Republic - Africa</option>
        <option value="chad">Chad - Africa</option>
        <option value="chile">Chile - South America</option>
        <option value="china">China - Asia</option>
        <option value="colombia">Colombia - South America</option>
        <option value="comoros">Comoros - Africa</option>
        <option value="congo">Congo - Africa</option>
        <option value="costa-rica">Costa Rica - North America</option>
        <option value="croatia">Croatia - Europe</option>
        <option value="cuba">Cuba - North America</option>
        <option value="cyprus">Cyprus - Europe</option>
        <option value="czechia">Czechia - Europe</option>
        <option value="denmark">Denmark - Europe</option>
        <option value="djibouti">Djibouti - Africa</option>
        <option value="dominica">Dominica - North America</option>
        <option value="east-timor">East Timor (Timor-Leste) - Asia</option>
<option value="ecuador">Ecuador - South America</option>
<option value="egypt">Egypt - Africa</option>
<option value="el-salvador">El Salvador - North America</option>
<option value="equatorial-guinea">Equatorial Guinea - Africa</option>
<option value="eritrea">Eritrea - Africa</option>
<option value="estonia">Estonia - Europe</option>
<option value="eswatini">Eswatini - Africa</option>
<option value="ethiopia">Ethiopia - Africa</option>
<option value="fiji">Fiji - Oceania</option>
<option value="finland">Finland - Europe</option>
<option value="france">France - Europe</option>
<option value="gabon">Gabon - Africa</option>
<option value="gambia">Gambia - Africa</option>
<option value="georgia">Georgia - Asia</option>
<option value="germany">Germany - Europe</option>
<option value="ghana">Ghana - Africa</option>
<option value="greece">Greece - Europe</option>
<option value="grenada">Grenada - North America</option>
<option value="guatemala">Guatemala - North America</option>
<option value="guinea">Guinea - Africa</option>
<option value="guinea-bissau">Guinea-Bissau - Africa</option>
<option value="guyana">Guyana - South America</option>
<option value="haiti">Haiti - North America</option>
<option value="honduras">Honduras - North America</option>
<option value="hungary">Hungary - Europe</option>
<option value="iceland">Iceland - Europe</option>
<option value="india">India - Asia</option>
<option value="indonesia">Indonesia - Asia</option>
<option value="iran">Iran - Asia</option>
<option value="iraq">Iraq - Asia</option>
<option value="ireland">Ireland - Europe</option>
<option value="israel">Israel - Asia</option>
<option value="italy">Italy - Europe</option>
<option value="ivory-coast">Ivory Coast - Africa</option>
<option value="jamaica">Jamaica - North America</option>
<option value="japan">Japan - Asia</option>
<option value="jordan">Jordan - Asia</option>
<option value="kazakhstan">Kazakhstan - Asia</option>
<option value="kenya">Kenya - Africa</option>
<option value="kiribati">Kiribati - Oceania</option>
<option value="korea-north">Korea, North - Asia</option>
<option value="korea-south">Korea, South - Asia</option>
<option value="kosovo">Kosovo - Europe</option>
<option value="kuwait">Kuwait - Asia</option>
<option value="kyrgyzstan">Kyrgyzstan - Asia</option>
<option value="laos">Laos - Asia</option>
<option value="malaysia">Malaysia - Asia</option>
<option value="maldives">Maldives - Asia</option>
<option value="mali">Mali - Africa</option>
<option value="malta">Malta - Europe</option>
<option value="marshall-islands">Marshall Islands - Oceania</option>
<option value="mauritania">Mauritania - Africa</option>
<option value="mauritius">Mauritius - Africa</option>
<option value="mexico">Mexico - North America</option>
<option value="micronesia">Micronesia - Oceania</option>
<option value="moldova">Moldova - Europe</option>
<option value="latvia">Latvia - Europe</option>
<option value="lebanon">Lebanon - Asia</option>
<option value="lesotho">Lesotho - Africa</option>
<option value="liberia">Liberia - Africa</option>
<option value="libya">Libya - Africa</option>
<option value="liechtenstein">Liechtenstein - Europe</option>
<option value="lithuania">Lithuania - Europe</option>
<option value="luxembourg">Luxembourg - Europe</option>
<option value="madagascar">Madagascar - Africa</option>
<option value="malawi">Malawi - Africa</option>
<option value="malaysia">Malaysia - Asia</option>
<option value="maldives">Maldives - Asia</option>
<option value="mali">Mali - Africa</option>
<option value="malta">Malta - Europe</option>
<option value="marshall-islands">Marshall Islands - Oceania</option>
<option value="mauritania">Mauritania - Africa</option>
<option value="mauritius">Mauritius - Africa</option>
<option value="mexico">Mexico - North America</option>
<option value="micronesia">Micronesia - Oceania</option>
<option value="moldova">Moldova - Europe</option>
<option value="monaco">Monaco - Europe</option>
<option value="mongolia">Mongolia - Asia</option>
<option value="montenegro">Montenegro - Europe</option>
<option value="morocco">Morocco - Africa</option>
<option value="mozambique">Mozambique - Africa</option>
<option value="myanmar">Myanmar (Burma) - Asia</option>
<option value="namibia">Namibia - Africa</option>
<option value="nauru">Nauru - Oceania</option>
<option value="nepal">Nepal - Asia</option>
<option value="netherlands">Netherlands - Europe</option>
<option value="new-zealand">New Zealand - Oceania</option>
<option value="nicaragua">Nicaragua - North America</option>
<option value="niger">Niger - Africa</option>
<option value="nigeria">Nigeria - Africa</option>
<option value="north-macedonia">North Macedonia (formerly Macedonia) - Europe</option>
<option value="norway">Norway - Europe</option>
<option value="oman">Oman - Asia</option>
<option value="pakistan">Pakistan - Asia</option>
<option value="palau">Palau - Oceania</option>
<option value="panama">Panama - North America</option>
<option value="papua-new-guinea">Papua New Guinea - Oceania</option>
<option value="paraguay">Paraguay - South America</option>
<option value="peru">Peru - South America</option>
<option value="philippines">Philippines - Asia</option>
<option value="poland">Poland - Europe</option>
<option value="portugal">Portugal - Europe</option>
<option value="qatar">Qatar - Asia</option>
<option value="romania">Romania - Europe</option>
<option value="russia">Russia - Europe/Asia</option>
<option value="rwanda">Rwanda - Africa</option>
<option value="saint-kitts-and-nevis">Saint Kitts and Nevis - North America</option>
<option value="saint-lucia">Saint Lucia - North America</option>
<option value="saint-vincent-and-the-grenadines">Saint Vincent and the Grenadines - North America</option>
<option value="samoa">Samoa - Oceania</option>
<option value="san-marino">San Marino - Europe</option>
<option value="sao-tome-and-principe">Sao Tome and Principe - Africa</option>
<option value="saudi-arabia">Saudi Arabia - Asia</option>
<option value="senegal">Senegal - Africa</option>
<option value="serbia">Serbia - Europe</option>
<option value="seychelles">Seychelles - Africa</option>
<option value="sierra-leone">Sierra Leone - Africa</option>
<option value="singapore">Singapore - Asia</option>
<option value="slovakia">Slovakia - Europe</option>
<option value="slovenia">Slovenia - Europe</option>
<option value="solomon-islands">Solomon Islands - Oceania</option>
<option value="somalia">Somalia - Africa</option>
<option value="south-africa">South Africa - Africa</option>
<option value="south-sudan">South Sudan - Africa</option>
<option value="spain">Spain - Europe</option>
<option value="sri-lanka">Sri Lanka - Asia</option>
<option value="sudan">Sudan - Africa</option>
<option value="suriname">Suriname - South America</option>
<option value="sweden">Sweden - Europe</option>
<option value="switzerland">Switzerland - Europe</option>
<option value="syria">Syria - Asia</option>
<option value="taiwan">Taiwan - Asia</option>
<option value="tajikistan">Tajikistan - Asia</option>
<option value="tanzania">Tanzania - Africa</option>
<option value="thailand">Thailand - Asia</option>
<option value="togo">Togo - Africa</option>
<option value="tonga">Tonga - Oceania</option>
<option value="trinidad-and-tobago">Trinidad and Tobago - North America</option>
<option value="tunisia">Tunisia - Africa</option>
<option value="turkey">Turkey - Europe/Asia</option>
<option value="turkmenistan">Turkmenistan - Asia</option>
<option value="tuvalu">Tuvalu - Oceania</option>
<option value="uganda">Uganda - Africa</option>
<option value="ukraine">Ukraine - Europe</option>
<option value="united-arab-emirates">United Arab Emirates - Asia</option>
<option value="united-kingdom">United Kingdom - Europe</option>
<option value="united-states">United States - North America</option>
<option value="uruguay">Uruguay - South America</option>
<option value="uzbekistan">Uzbekistan - Asia</option>
<option value="vanuatu">Vanuatu - Oceania</option>
<option value="vatican-city">Vatican City - Europe</option>
<option value="venezuela">Venezuela - South America</option>
<option value="vietnam">Vietnam - Asia</option>
<option value="yemen">Yemen - Asia</option>
<option value="zambia">Zambia - Africa</option>
<option value="zimbabwe">Zimbabwe - Africa</option>
</select>
          </select><br><br>
      <label for="fatherEmail">Email:</label>
      <input type="email" id="fatherEmail" name="fatherEmail" required><br><br>
      <h3>Mother</h3>
      <label for="motherFirstName">First Name:</label>
      <input type="text" id="motherFirstName" name="motherFirstName" required><br><br>
      <label for="motherLastName">Last Name:</label>
      <input type="text" id="motherLastName" name="motherLastName" required><br><br>
      <label for="motherSex">Sex:</label>
      <select id="motherSex" name="motherSex">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select><br><br>
      <label for="motherDob">Date of Birth:</label>
      <input type="date" id="motherDob" name="motherDob" required><br><br>
      <label for="motherMaritalStatus">Marital Status:</label>
      <select id="motherMaritalStatus" name="motherMaritalStatus">
        <option value="Single">Single</option>
        <option value="Married">Married</option>
        <option value="Divorced">Divorced</option>
        <option value="Widowed">Widowed</option>
      </select><br><br>
      <label for="motherOccupation">Occupation:</label>
      <select id="motherOccupation" name="motherOccupation">
        <option value="Student">Student</option>
        <option value="Engineer">Engineer</option>
        <option value="Doctor">Doctor</option>
        <option value="Lawyer">Lawyer</option>
        <option value="Teacher">Teacher</option>
        <option value="Other">Other</option>
      </select><br><br>
     <label for="fatherCountry">Country/Continent:</label>
      <select id="fatherCountry" name="fatherCountry">
        <option value="afghanistan">Afghanistan - Asia</option>
        <option value="albania">Albania - Europe</option>
        <option value="algeria">Algeria - Africa</option>
        <option value="andorra">Andorra - Europe</option>
        <option value="angola">Angola - Africa</option>
        <option value="antigua-and-barbuda">Antigua and Barbuda - North America</option>
        <option value="argentina">Argentina - South America</option>
        <option value="armenia">Armenia - Asia</option>
        <option value="australia">Australia - Oceania</option>
        <option value="austria">Austria - Europe</option>
        <option value="azerbaijan">Azerbaijan - Asia</option>
        <option value="bahamas">Bahamas - North America</option>
        <option value="bahrain">Bahrain - Asia</option>
        <option value="bangladesh">Bangladesh - Asia</option>
        <option value="barbados">Barbados - North America</option>
        <option value="belarus">Belarus - Europe</option>
        <option value="belgium">Belgium - Europe</option>
        <option value="belize">Belize - North America</option>
        <option value="benin">Benin - Africa</option>
        <option value="bhutan">Bhutan - Asia</option>
        <option value="bolivia">Bolivia - South America</option>
        <option value="bosnia-and-herzegovina">Bosnia and Herzegovina - Europe</option>
        <option value="botswana">Botswana - Africa</option>
        <option value="brazil">Brazil - South America</option>
        <option value="brunei">Brunei - Asia</option>
        <option value="bulgaria">Bulgaria - Europe</option>
        <option value="burkina-faso">Burkina Faso - Africa</option>
        <option value="burundi">Burundi - Africa</option>
        <option value="cabo-verde">Cabo Verde - Africa</option>
        <option value="cambodia">Cambodia - Asia</option>
        <option value="cameroon">Cameroon - Africa</option>
        <option value="canada">Canada - North America</option>
        <option value="central-african-republic">Central African Republic - Africa</option>
        <option value="chad">Chad - Africa</option>
        <option value="chile">Chile - South America</option>
        <option value="china">China - Asia</option>
        <option value="colombia">Colombia - South America</option>
        <option value="comoros">Comoros - Africa</option>
        <option value="congo">Congo - Africa</option>
        <option value="costa-rica">Costa Rica - North America</option>
        <option value="croatia">Croatia - Europe</option>
        <option value="cuba">Cuba - North America</option>
        <option value="cyprus">Cyprus - Europe</option>
        <option value="czechia">Czechia - Europe</option>
        <option value="denmark">Denmark - Europe</option>
        <option value="djibouti">Djibouti - Africa</option>
        <option value="dominica">Dominica - North America</option>
        <option value="east-timor">East Timor (Timor-Leste) - Asia</option>
<option value="ecuador">Ecuador - South America</option>
<option value="egypt">Egypt - Africa</option>
<option value="el-salvador">El Salvador - North America</option>
<option value="equatorial-guinea">Equatorial Guinea - Africa</option>
<option value="eritrea">Eritrea - Africa</option>
<option value="estonia">Estonia - Europe</option>
<option value="eswatini">Eswatini - Africa</option>
<option value="ethiopia">Ethiopia - Africa</option>
<option value="fiji">Fiji - Oceania</option>
<option value="finland">Finland - Europe</option>
<option value="france">France - Europe</option>
<option value="gabon">Gabon - Africa</option>
<option value="gambia">Gambia - Africa</option>
<option value="georgia">Georgia - Asia</option>
<option value="germany">Germany - Europe</option>
<option value="ghana">Ghana - Africa</option>
<option value="greece">Greece - Europe</option>
<option value="grenada">Grenada - North America</option>
<option value="guatemala">Guatemala - North America</option>
<option value="guinea">Guinea - Africa</option>
<option value="guinea-bissau">Guinea-Bissau - Africa</option>
<option value="guyana">Guyana - South America</option>
<option value="haiti">Haiti - North America</option>
<option value="honduras">Honduras - North America</option>
<option value="hungary">Hungary - Europe</option>
<option value="iceland">Iceland - Europe</option>
<option value="india">India - Asia</option>
<option value="indonesia">Indonesia - Asia</option>
<option value="iran">Iran - Asia</option>
<option value="iraq">Iraq - Asia</option>
<option value="ireland">Ireland - Europe</option>
<option value="israel">Israel - Asia</option>
<option value="italy">Italy - Europe</option>
<option value="ivory-coast">Ivory Coast - Africa</option>
<option value="jamaica">Jamaica - North America</option>
<option value="japan">Japan - Asia</option>
<option value="jordan">Jordan - Asia</option>
<option value="kazakhstan">Kazakhstan - Asia</option>
<option value="kenya">Kenya - Africa</option>
<option value="kiribati">Kiribati - Oceania</option>
<option value="korea-north">Korea, North - Asia</option>
<option value="korea-south">Korea, South - Asia</option>
<option value="kosovo">Kosovo - Europe</option>
<option value="kuwait">Kuwait - Asia</option>
<option value="kyrgyzstan">Kyrgyzstan - Asia</option>
<option value="laos">Laos - Asia</option>
<option value="malaysia">Malaysia - Asia</option>
<option value="maldives">Maldives - Asia</option>
<option value="mali">Mali - Africa</option>
<option value="malta">Malta - Europe</option>
<option value="marshall-islands">Marshall Islands - Oceania</option>
<option value="mauritania">Mauritania - Africa</option>
<option value="mauritius">Mauritius - Africa</option>
<option value="mexico">Mexico - North America</option>
<option value="micronesia">Micronesia - Oceania</option>
<option value="moldova">Moldova - Europe</option>
<option value="latvia">Latvia - Europe</option>
<option value="lebanon">Lebanon - Asia</option>
<option value="lesotho">Lesotho - Africa</option>
<option value="liberia">Liberia - Africa</option>
<option value="libya">Libya - Africa</option>
<option value="liechtenstein">Liechtenstein - Europe</option>
<option value="lithuania">Lithuania - Europe</option>
<option value="luxembourg">Luxembourg - Europe</option>
<option value="madagascar">Madagascar - Africa</option>
<option value="malawi">Malawi - Africa</option>
<option value="malaysia">Malaysia - Asia</option>
<option value="maldives">Maldives - Asia</option>
<option value="mali">Mali - Africa</option>
<option value="malta">Malta - Europe</option>
<option value="marshall-islands">Marshall Islands - Oceania</option>
<option value="mauritania">Mauritania - Africa</option>
<option value="mauritius">Mauritius - Africa</option>
<option value="mexico">Mexico - North America</option>
<option value="micronesia">Micronesia - Oceania</option>
<option value="moldova">Moldova - Europe</option>
<option value="monaco">Monaco - Europe</option>
<option value="mongolia">Mongolia - Asia</option>
<option value="montenegro">Montenegro - Europe</option>
<option value="morocco">Morocco - Africa</option>
<option value="mozambique">Mozambique - Africa</option>
<option value="myanmar">Myanmar (Burma) - Asia</option>
<option value="namibia">Namibia - Africa</option>
<option value="nauru">Nauru - Oceania</option>
<option value="nepal">Nepal - Asia</option>
<option value="netherlands">Netherlands - Europe</option>
<option value="new-zealand">New Zealand - Oceania</option>
<option value="nicaragua">Nicaragua - North America</option>
<option value="niger">Niger - Africa</option>
<option value="nigeria">Nigeria - Africa</option>
<option value="north-macedonia">North Macedonia (formerly Macedonia) - Europe</option>
<option value="norway">Norway - Europe</option>
<option value="oman">Oman - Asia</option>
<option value="pakistan">Pakistan - Asia</option>
<option value="palau">Palau - Oceania</option>
<option value="panama">Panama - North America</option>
<option value="papua-new-guinea">Papua New Guinea - Oceania</option>
<option value="paraguay">Paraguay - South America</option>
<option value="peru">Peru - South America</option>
<option value="philippines">Philippines - Asia</option>
<option value="poland">Poland - Europe</option>
<option value="portugal">Portugal - Europe</option>
<option value="qatar">Qatar - Asia</option>
<option value="romania">Romania - Europe</option>
<option value="russia">Russia - Europe/Asia</option>
<option value="rwanda">Rwanda - Africa</option>
<option value="saint-kitts-and-nevis">Saint Kitts and Nevis - North America</option>
<option value="saint-lucia">Saint Lucia - North America</option>
<option value="saint-vincent-and-the-grenadines">Saint Vincent and the Grenadines - North America</option>
<option value="samoa">Samoa - Oceania</option>
<option value="san-marino">San Marino - Europe</option>
<option value="sao-tome-and-principe">Sao Tome and Principe - Africa</option>
<option value="saudi-arabia">Saudi Arabia - Asia</option>
<option value="senegal">Senegal - Africa</option>
<option value="serbia">Serbia - Europe</option>
<option value="seychelles">Seychelles - Africa</option>
<option value="sierra-leone">Sierra Leone - Africa</option>
<option value="singapore">Singapore - Asia</option>
<option value="slovakia">Slovakia - Europe</option>
<option value="slovenia">Slovenia - Europe</option>
<option value="solomon-islands">Solomon Islands - Oceania</option>
<option value="somalia">Somalia - Africa</option>
<option value="south-africa">South Africa - Africa</option>
<option value="south-sudan">South Sudan - Africa</option>
<option value="spain">Spain - Europe</option>
<option value="sri-lanka">Sri Lanka - Asia</option>
<option value="sudan">Sudan - Africa</option>
<option value="suriname">Suriname - South America</option>
<option value="sweden">Sweden - Europe</option>
<option value="switzerland">Switzerland - Europe</option>
<option value="syria">Syria - Asia</option>
<option value="taiwan">Taiwan - Asia</option>
<option value="tajikistan">Tajikistan - Asia</option>
<option value="tanzania">Tanzania - Africa</option>
<option value="thailand">Thailand - Asia</option>
<option value="togo">Togo - Africa</option>
<option value="tonga">Tonga - Oceania</option>
<option value="trinidad-and-tobago">Trinidad and Tobago - North America</option>
<option value="tunisia">Tunisia - Africa</option>
<option value="turkey">Turkey - Europe/Asia</option>
<option value="turkmenistan">Turkmenistan - Asia</option>
<option value="tuvalu">Tuvalu - Oceania</option>
<option value="uganda">Uganda - Africa</option>
<option value="ukraine">Ukraine - Europe</option>
<option value="united-arab-emirates">United Arab Emirates - Asia</option>
<option value="united-kingdom">United Kingdom - Europe</option>
<option value="united-states">United States - North America</option>
<option value="uruguay">Uruguay - South America</option>
<option value="uzbekistan">Uzbekistan - Asia</option>
<option value="vanuatu">Vanuatu - Oceania</option>
<option value="vatican-city">Vatican City - Europe</option>
<option value="venezuela">Venezuela - South America</option>
<option value="vietnam">Vietnam - Asia</option>
<option value="yemen">Yemen - Asia</option>
<option value="zambia">Zambia - Africa</option>
<option value="zimbabwe">Zimbabwe - Africa</option>
</select>
          </select><br><br>
      <label for="motherEmail">Email:</label>
      <input type="email" id="motherEmail" name="motherEmail" required><br><br>
      <h3>Children</h3>
    `;

    for (var i = 1; i <= numChildren; i++) {
      familyMembersForm.innerHTML += `
        <h4>Child ${i}</h4>
        <label for="firstName${i}">First Name:</label>
        <input type="text" id="firstName${i}" name="firstName${i}" required><br><br>
        <label for="lastName${i}">Last Name:</label>
        <input type="text" id="lastName${i}" name="lastName${i}" required><br><br>
        <label for="sex${i}">Sex:</label>
        <select id="sex${i}" name="sex${i}">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select><br><br>
        <label for="dob${i}">Date of Birth:</label>
        <input type="date" id="dob${i}" name="dob${i}" required><br><br>
        <label for="maritalStatus${i}">Marital Status:</label>
        <select id="maritalStatus${i}" name="maritalStatus${i}">
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Divorced">Divorced</option>
          <option value="Widowed">Widowed</option>
        </select><br><br>
        <label for="occupation${i}">Occupation:</label>
        <select id="occupation${i}" name="occupation${i}">
          <option value="Student">Student</option>
          <option value="Engineer">Engineer</option>
          <option value="Doctor">Doctor</option>
          <option value="Lawyer">Lawyer</option>
          <option value="Teacher">Teacher</option>
          <option value="Other">Other</option>
        </select><br><br>
        <label for="fatherCountry">Country/Continent:</label>
      <select id="fatherCountry" name="fatherCountry">
        <option value="afghanistan">Afghanistan - Asia</option>
        <option value="albania">Albania - Europe</option>
        <option value="algeria">Algeria - Africa</option>
        <option value="andorra">Andorra - Europe</option>
        <option value="angola">Angola - Africa</option>
        <option value="antigua-and-barbuda">Antigua and Barbuda - North America</option>
        <option value="argentina">Argentina - South America</option>
        <option value="armenia">Armenia - Asia</option>
        <option value="australia">Australia - Oceania</option>
        <option value="austria">Austria - Europe</option>
        <option value="azerbaijan">Azerbaijan - Asia</option>
        <option value="bahamas">Bahamas - North America</option>
        <option value="bahrain">Bahrain - Asia</option>
        <option value="bangladesh">Bangladesh - Asia</option>
        <option value="barbados">Barbados - North America</option>
        <option value="belarus">Belarus - Europe</option>
        <option value="belgium">Belgium - Europe</option>
        <option value="belize">Belize - North America</option>
        <option value="benin">Benin - Africa</option>
        <option value="bhutan">Bhutan - Asia</option>
        <option value="bolivia">Bolivia - South America</option>
        <option value="bosnia-and-herzegovina">Bosnia and Herzegovina - Europe</option>
        <option value="botswana">Botswana - Africa</option>
        <option value="brazil">Brazil - South America</option>
        <option value="brunei">Brunei - Asia</option>
        <option value="bulgaria">Bulgaria - Europe</option>
        <option value="burkina-faso">Burkina Faso - Africa</option>
        <option value="burundi">Burundi - Africa</option>
        <option value="cabo-verde">Cabo Verde - Africa</option>
        <option value="cambodia">Cambodia - Asia</option>
        <option value="cameroon">Cameroon - Africa</option>
        <option value="canada">Canada - North America</option>
        <option value="central-african-republic">Central African Republic - Africa</option>
        <option value="chad">Chad - Africa</option>
        <option value="chile">Chile - South America</option>
        <option value="china">China - Asia</option>
        <option value="colombia">Colombia - South America</option>
        <option value="comoros">Comoros - Africa</option>
        <option value="congo">Congo - Africa</option>
        <option value="costa-rica">Costa Rica - North America</option>
        <option value="croatia">Croatia - Europe</option>
        <option value="cuba">Cuba - North America</option>
        <option value="cyprus">Cyprus - Europe</option>
        <option value="czechia">Czechia - Europe</option>
        <option value="denmark">Denmark - Europe</option>
        <option value="djibouti">Djibouti - Africa</option>
        <option value="dominica">Dominica - North America</option>
        <option value="east-timor">East Timor (Timor-Leste) - Asia</option>
<option value="ecuador">Ecuador - South America</option>
<option value="egypt">Egypt - Africa</option>
<option value="el-salvador">El Salvador - North America</option>
<option value="equatorial-guinea">Equatorial Guinea - Africa</option>
<option value="eritrea">Eritrea - Africa</option>
<option value="estonia">Estonia - Europe</option>
<option value="eswatini">Eswatini - Africa</option>
<option value="ethiopia">Ethiopia - Africa</option>
<option value="fiji">Fiji - Oceania</option>
<option value="finland">Finland - Europe</option>
<option value="france">France - Europe</option>
<option value="gabon">Gabon - Africa</option>
<option value="gambia">Gambia - Africa</option>
<option value="georgia">Georgia - Asia</option>
<option value="germany">Germany - Europe</option>
<option value="ghana">Ghana - Africa</option>
<option value="greece">Greece - Europe</option>
<option value="grenada">Grenada - North America</option>
<option value="guatemala">Guatemala - North America</option>
<option value="guinea">Guinea - Africa</option>
<option value="guinea-bissau">Guinea-Bissau - Africa</option>
<option value="guyana">Guyana - South America</option>
<option value="haiti">Haiti - North America</option>
<option value="honduras">Honduras - North America</option>
<option value="hungary">Hungary - Europe</option>
<option value="iceland">Iceland - Europe</option>
<option value="india">India - Asia</option>
<option value="indonesia">Indonesia - Asia</option>
<option value="iran">Iran - Asia</option>
<option value="iraq">Iraq - Asia</option>
<option value="ireland">Ireland - Europe</option>
<option value="israel">Israel - Asia</option>
<option value="italy">Italy - Europe</option>
<option value="ivory-coast">Ivory Coast - Africa</option>
<option value="jamaica">Jamaica - North America</option>
<option value="japan">Japan - Asia</option>
<option value="jordan">Jordan - Asia</option>
<option value="kazakhstan">Kazakhstan - Asia</option>
<option value="kenya">Kenya - Africa</option>
<option value="kiribati">Kiribati - Oceania</option>
<option value="korea-north">Korea, North - Asia</option>
<option value="korea-south">Korea, South - Asia</option>
<option value="kosovo">Kosovo - Europe</option>
<option value="kuwait">Kuwait - Asia</option>
<option value="kyrgyzstan">Kyrgyzstan - Asia</option>
<option value="laos">Laos - Asia</option>
<option value="malaysia">Malaysia - Asia</option>
<option value="maldives">Maldives - Asia</option>
<option value="mali">Mali - Africa</option>
<option value="malta">Malta - Europe</option>
<option value="marshall-islands">Marshall Islands - Oceania</option>
<option value="mauritania">Mauritania - Africa</option>
<option value="mauritius">Mauritius - Africa</option>
<option value="mexico">Mexico - North America</option>
<option value="micronesia">Micronesia - Oceania</option>
<option value="moldova">Moldova - Europe</option>
<option value="latvia">Latvia - Europe</option>
<option value="lebanon">Lebanon - Asia</option>
<option value="lesotho">Lesotho - Africa</option>
<option value="liberia">Liberia - Africa</option>
<option value="libya">Libya - Africa</option>
<option value="liechtenstein">Liechtenstein - Europe</option>
<option value="lithuania">Lithuania - Europe</option>
<option value="luxembourg">Luxembourg - Europe</option>
<option value="madagascar">Madagascar - Africa</option>
<option value="malawi">Malawi - Africa</option>
<option value="malaysia">Malaysia - Asia</option>
<option value="maldives">Maldives - Asia</option>
<option value="mali">Mali - Africa</option>
<option value="malta">Malta - Europe</option>
<option value="marshall-islands">Marshall Islands - Oceania</option>
<option value="mauritania">Mauritania - Africa</option>
<option value="mauritius">Mauritius - Africa</option>
<option value="mexico">Mexico - North America</option>
<option value="micronesia">Micronesia - Oceania</option>
<option value="moldova">Moldova - Europe</option>
<option value="monaco">Monaco - Europe</option>
<option value="mongolia">Mongolia - Asia</option>
<option value="montenegro">Montenegro - Europe</option>
<option value="morocco">Morocco - Africa</option>
<option value="mozambique">Mozambique - Africa</option>
<option value="myanmar">Myanmar (Burma) - Asia</option>
<option value="namibia">Namibia - Africa</option>
<option value="nauru">Nauru - Oceania</option>
<option value="nepal">Nepal - Asia</option>
<option value="netherlands">Netherlands - Europe</option>
<option value="new-zealand">New Zealand - Oceania</option>
<option value="nicaragua">Nicaragua - North America</option>
<option value="niger">Niger - Africa</option>
<option value="nigeria">Nigeria - Africa</option>
<option value="north-macedonia">North Macedonia (formerly Macedonia) - Europe</option>
<option value="norway">Norway - Europe</option>
<option value="oman">Oman - Asia</option>
<option value="pakistan">Pakistan - Asia</option>
<option value="palau">Palau - Oceania</option>
<option value="panama">Panama - North America</option>
<option value="papua-new-guinea">Papua New Guinea - Oceania</option>
<option value="paraguay">Paraguay - South America</option>
<option value="peru">Peru - South America</option>
<option value="philippines">Philippines - Asia</option>
<option value="poland">Poland - Europe</option>
<option value="portugal">Portugal - Europe</option>
<option value="qatar">Qatar - Asia</option>
<option value="romania">Romania - Europe</option>
<option value="russia">Russia - Europe/Asia</option>
<option value="rwanda">Rwanda - Africa</option>
<option value="saint-kitts-and-nevis">Saint Kitts and Nevis - North America</option>
<option value="saint-lucia">Saint Lucia - North America</option>
<option value="saint-vincent-and-the-grenadines">Saint Vincent and the Grenadines - North America</option>
<option value="samoa">Samoa - Oceania</option>
<option value="san-marino">San Marino - Europe</option>
<option value="sao-tome-and-principe">Sao Tome and Principe - Africa</option>
<option value="saudi-arabia">Saudi Arabia - Asia</option>
<option value="senegal">Senegal - Africa</option>
<option value="serbia">Serbia - Europe</option>
<option value="seychelles">Seychelles - Africa</option>
<option value="sierra-leone">Sierra Leone - Africa</option>
<option value="singapore">Singapore - Asia</option>
<option value="slovakia">Slovakia - Europe</option>
<option value="slovenia">Slovenia - Europe</option>
<option value="solomon-islands">Solomon Islands - Oceania</option>
<option value="somalia">Somalia - Africa</option>
<option value="south-africa">South Africa - Africa</option>
<option value="south-sudan">South Sudan - Africa</option>
<option value="spain">Spain - Europe</option>
<option value="sri-lanka">Sri Lanka - Asia</option>
<option value="sudan">Sudan - Africa</option>
<option value="suriname">Suriname - South America</option>
<option value="sweden">Sweden - Europe</option>
<option value="switzerland">Switzerland - Europe</option>
<option value="syria">Syria - Asia</option>
<option value="taiwan">Taiwan - Asia</option>
<option value="tajikistan">Tajikistan - Asia</option>
<option value="tanzania">Tanzania - Africa</option>
<option value="thailand">Thailand - Asia</option>
<option value="togo">Togo - Africa</option>
<option value="tonga">Tonga - Oceania</option>
<option value="trinidad-and-tobago">Trinidad and Tobago - North America</option>
<option value="tunisia">Tunisia - Africa</option>
<option value="turkey">Turkey - Europe/Asia</option>
<option value="turkmenistan">Turkmenistan - Asia</option>
<option value="tuvalu">Tuvalu - Oceania</option>
<option value="uganda">Uganda - Africa</option>
<option value="ukraine">Ukraine - Europe</option>
<option value="united-arab-emirates">United Arab Emirates - Asia</option>
<option value="united-kingdom">United Kingdom - Europe</option>
<option value="united-states">United States - North America</option>
<option value="uruguay">Uruguay - South America</option>
<option value="uzbekistan">Uzbekistan - Asia</option>
<option value="vanuatu">Vanuatu - Oceania</option>
<option value="vatican-city">Vatican City - Europe</option>
<option value="venezuela">Venezuela - South America</option>
<option value="vietnam">Vietnam - Asia</option>
<option value="yemen">Yemen - Asia</option>
<option value="zambia">Zambia - Africa</option>
<option value="zimbabwe">Zimbabwe - Africa</option>
</select>
          </select><br><br>
        <label for="email${i}">Email:</label>
        <input type="email" id="email${i}" name="email${i}" required><br><br>
      `;
    }

    var saveBtn = document.createElement('button');
    saveBtn.innerText = 'Save';
    saveBtn.addEventListener('click', function (event) {
      event.preventDefault();

      var fatherFirstName = document.getElementById('fatherFirstName').value;
      var fatherLastName = document.getElementById('fatherLastName').value;
      var fatherSex = document.getElementById('fatherSex').value;
      var fatherDob = document.getElementById('fatherDob').value;
      var fatherMaritalStatus = document.getElementById('fatherMaritalStatus').value;
      var fatherOccupation = document.getElementById('fatherOccupation').value;
      var fatherEmail = document.getElementById('fatherEmail').value;

      var motherFirstName = document.getElementById('motherFirstName').value;
      var motherLastName = document.getElementById('motherLastName').value;
      var motherSex = document.getElementById('motherSex').value;
      var motherDob = document.getElementById('motherDob').value;
      var motherMaritalStatus = document.getElementById('motherMaritalStatus').value;
      var motherOccupation = document.getElementById('motherOccupation').value;
      var motherEmail = document.getElementById('motherEmail').value;

      var children = [];
      for (var i = 1; i <= numChildren; i++) {
        var firstName = document.getElementById(`firstName${i}`).value;
        var lastName = document.getElementById(`lastName${i}`).value;
        var sex = document.getElementById(`sex${i}`).value;
        var dob = document.getElementById(`dob${i}`).value;
        var maritalStatus = document.getElementById(`maritalStatus${i}`).value;
        var occupation = document.getElementById(`occupation${i}`).value;
        var email = document.getElementById(`email${i}`).value;
        var child = {
          firstName: firstName,
          lastName: lastName,
          sex: sex,
          dob: dob,
          maritalStatus: maritalStatus,
          occupation: occupation,
          email: email
        };
        children.push(child);
      }

      // Save data
      var family = {
        familyName: familyName,
        father: {
          firstName: fatherFirstName,
          lastName: fatherLastName,
          sex: fatherSex,
          dob: fatherDob,
          maritalStatus: fatherMaritalStatus,
          occupation: fatherOccupation,
          email: fatherEmail
        },
        mother: {
          firstName: motherFirstName,
          lastName: motherLastName,
          sex: motherSex,
          dob: motherDob,
          maritalStatus: motherMaritalStatus,
          occupation: motherOccupation,
          email: motherEmail
        },
        children: children
      };
      console.log(family);
    });

    var resetBtn = document.createElement('button');
    resetBtn.innerText = 'Reset';
    resetBtn.addEventListener('click', function (event) {
      event.preventDefault();
      familyMembersForm.reset();
    });

    var cancelBtn2 = document.createElement('button');
    cancelBtn2.innerText = 'Cancel';
    cancelBtn2.addEventListener('click', function (event) {
      event.preventDefault();
      familyMembersForm.remove();
    });

    familyMembersForm.appendChild(saveBtn);
    familyMembersForm.appendChild(resetBtn);
    familyMembersForm.appendChild(cancelBtn2);

    document.body.appendChild(familyMembersForm);
    form.remove();
  });

  cancelBtn.addEventListener('click', function (event) {
    event.preventDefault();
    form.reset();
  });

  document.body.appendChild(form);
}


