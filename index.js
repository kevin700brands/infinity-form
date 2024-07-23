/**
 * Inifnity form
 * @function
 * @param {string} {endpoint} - Google Sheet URL
 * */
function infinityForm({ endpoint, imgSrc, name }) {
  // list of countries
  const countryListAlpha2 = {
    AF: "Afghanistan",
    AL: "Albania",
    DZ: "Algeria",
    AS: "American Samoa",
    AD: "Andorra",
    AO: "Angola",
    AI: "Anguilla",
    AQ: "Antarctica",
    AG: "Antigua and Barbuda",
    AR: "Argentina",
    AM: "Armenia",
    AW: "Aruba",
    AU: "Australia",
    AT: "Austria",
    AZ: "Azerbaijan",
    BS: "Bahamas (the)",
    BH: "Bahrain",
    BD: "Bangladesh",
    BB: "Barbados",
    BY: "Belarus",
    BE: "Belgium",
    BZ: "Belize",
    BJ: "Benin",
    BM: "Bermuda",
    BT: "Bhutan",
    BO: "Bolivia (Plurinational State of)",
    BQ: "Bonaire, Sint Eustatius and Saba",
    BA: "Bosnia and Herzegovina",
    BW: "Botswana",
    BV: "Bouvet Island",
    BR: "Brazil",
    IO: "British Indian Ocean Territory (the)",
    BN: "Brunei Darussalam",
    BG: "Bulgaria",
    BF: "Burkina Faso",
    BI: "Burundi",
    CV: "Cabo Verde",
    KH: "Cambodia",
    CM: "Cameroon",
    CA: "Canada",
    KY: "Cayman Islands (the)",
    CF: "Central African Republic (the)",
    TD: "Chad",
    CL: "Chile",
    CN: "China",
    CX: "Christmas Island",
    CC: "Cocos (Keeling) Islands (the)",
    CO: "Colombia",
    KM: "Comoros (the)",
    CD: "Congo (the Democratic Republic of the)",
    CG: "Congo (the)",
    CK: "Cook Islands (the)",
    CR: "Costa Rica",
    HR: "Croatia",
    CU: "Cuba",
    CW: "Curaçao",
    CY: "Cyprus",
    CZ: "Czechia",
    CI: "Côte d'Ivoire",
    DK: "Denmark",
    DJ: "Djibouti",
    DM: "Dominica",
    DO: "Dominican Republic (the)",
    EC: "Ecuador",
    EG: "Egypt",
    SV: "El Salvador",
    GQ: "Equatorial Guinea",
    ER: "Eritrea",
    EE: "Estonia",
    SZ: "Eswatini",
    ET: "Ethiopia",
    FK: "Falkland Islands (the) [Malvinas]",
    FO: "Faroe Islands (the)",
    FJ: "Fiji",
    FI: "Finland",
    FR: "France",
    GF: "French Guiana",
    PF: "French Polynesia",
    TF: "French Southern Territories (the)",
    GA: "Gabon",
    GM: "Gambia (the)",
    GE: "Georgia",
    DE: "Germany",
    GH: "Ghana",
    GI: "Gibraltar",
    GR: "Greece",
    GL: "Greenland",
    GD: "Grenada",
    GP: "Guadeloupe",
    GU: "Guam",
    GT: "Guatemala",
    GG: "Guernsey",
    GN: "Guinea",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HT: "Haiti",
    HM: "Heard Island and McDonald Islands",
    VA: "Holy See (the)",
    HN: "Honduras",
    HK: "Hong Kong",
    HU: "Hungary",
    IS: "Iceland",
    IN: "India",
    ID: "Indonesia",
    IR: "Iran (Islamic Republic of)",
    IQ: "Iraq",
    IE: "Ireland",
    IM: "Isle of Man",
    IL: "Israel",
    IT: "Italy",
    JM: "Jamaica",
    JP: "Japan",
    JE: "Jersey",
    JO: "Jordan",
    KZ: "Kazakhstan",
    KE: "Kenya",
    KI: "Kiribati",
    KP: "Korea (the Democratic People's Republic of)",
    KR: "Korea (the Republic of)",
    KW: "Kuwait",
    KG: "Kyrgyzstan",
    LA: "Lao People's Democratic Republic (the)",
    LV: "Latvia",
    LB: "Lebanon",
    LS: "Lesotho",
    LR: "Liberia",
    LY: "Libya",
    LI: "Liechtenstein",
    LT: "Lithuania",
    LU: "Luxembourg",
    MO: "Macao",
    MG: "Madagascar",
    MW: "Malawi",
    MY: "Malaysia",
    MV: "Maldives",
    ML: "Mali",
    MT: "Malta",
    MH: "Marshall Islands (the)",
    MQ: "Martinique",
    MR: "Mauritania",
    MU: "Mauritius",
    YT: "Mayotte",
    MX: "Mexico",
    FM: "Micronesia (Federated States of)",
    MD: "Moldova (the Republic of)",
    MC: "Monaco",
    MN: "Mongolia",
    ME: "Montenegro",
    MS: "Montserrat",
    MA: "Morocco",
    MZ: "Mozambique",
    MM: "Myanmar",
    NA: "Namibia",
    NR: "Nauru",
    NP: "Nepal",
    NL: "Netherlands (the)",
    NC: "New Caledonia",
    NZ: "New Zealand",
    NI: "Nicaragua",
    NE: "Niger (the)",
    NG: "Nigeria",
    NU: "Niue",
    NF: "Norfolk Island",
    MP: "Northern Mariana Islands (the)",
    NO: "Norway",
    OM: "Oman",
    PK: "Pakistan",
    PW: "Palau",
    PS: "Palestine, State of",
    PA: "Panama",
    PG: "Papua New Guinea",
    PY: "Paraguay",
    PE: "Peru",
    PH: "Philippines (the)",
    PN: "Pitcairn",
    PL: "Poland",
    PT: "Portugal",
    PR: "Puerto Rico",
    QA: "Qatar",
    MK: "Republic of North Macedonia",
    RO: "Romania",
    RU: "Russian Federation (the)",
    RW: "Rwanda",
    RE: "Réunion",
    BL: "Saint Barthélemy",
    SH: "Saint Helena, Ascension and Tristan da Cunha",
    KN: "Saint Kitts and Nevis",
    LC: "Saint Lucia",
    MF: "Saint Martin (French part)",
    PM: "Saint Pierre and Miquelon",
    VC: "Saint Vincent and the Grenadines",
    WS: "Samoa",
    SM: "San Marino",
    ST: "Sao Tome and Principe",
    SA: "Saudi Arabia",
    SN: "Senegal",
    RS: "Serbia",
    SC: "Seychelles",
    SL: "Sierra Leone",
    SG: "Singapore",
    SX: "Sint Maarten (Dutch part)",
    SK: "Slovakia",
    SI: "Slovenia",
    SB: "Solomon Islands",
    SO: "Somalia",
    ZA: "South Africa",
    GS: "South Georgia and the South Sandwich Islands",
    SS: "South Sudan",
    ES: "Spain",
    LK: "Sri Lanka",
    SD: "Sudan (the)",
    SR: "Suriname",
    SJ: "Svalbard and Jan Mayen",
    SE: "Sweden",
    CH: "Switzerland",
    SY: "Syrian Arab Republic",
    TW: "Taiwan",
    TJ: "Tajikistan",
    TZ: "Tanzania, United Republic of",
    TH: "Thailand",
    TL: "Timor-Leste",
    TG: "Togo",
    TK: "Tokelau",
    TO: "Tonga",
    TT: "Trinidad and Tobago",
    TN: "Tunisia",
    TR: "Turkey",
    TM: "Turkmenistan",
    TC: "Turks and Caicos Islands (the)",
    TV: "Tuvalu",
    UG: "Uganda",
    UA: "Ukraine",
    AE: "United Arab Emirates (the)",
    GB: "United Kingdom of Great Britain and Northern Ireland (the)",
    UM: "United States Minor Outlying Islands (the)",
    US: "United States of America (the)",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VU: "Vanuatu",
    VE: "Venezuela (Bolivarian Republic of)",
    VN: "Viet Nam",
    VG: "Virgin Islands (British)",
    VI: "Virgin Islands (U.S.)",
    WF: "Wallis and Futuna",
    EH: "Western Sahara",
    YE: "Yemen",
    ZM: "Zambia",
    ZW: "Zimbabwe",
    AX: "Åland Islands",
  };

  const htmlSpinner = `
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><script xmlns=""/><style>.spinner_P7sC{transform-origin:center;animation:spinner_svv2 .75s infinite linear}@keyframes spinner_svv2{100%{transform:rotate(360deg)}}</style><path fill="#fff" d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z" class="spinner_P7sC"/></svg>
			`;

  // html form element
  const htmlFormEl = `
    <div class="infinity__form--container">
    		<button class="infinity__close-btn">x</button>
        <img class="infinity__img" src="${imgSrc}" alt="logo" />
    		<form class="infinity__form" method="POST">
    			<div class="infinity__form-group">
    				<label class="infinity__form--label" for="name">name:</label>
    				<input required class="infinity__form--input" type="text" name="name">
    			</div>
    			<div class="infinity__form-group">
    				<label class="infinity__form--label" for="email">email:</label>
    				<input required class="infinity__form--input" type="text" name="email">
    			</div>
    			<div class="infinity__form-group">
    				<label class="infinity__form--label" for="mobile">mobile:</label>
    				<input required class="infinity__form--input" type="text" name="mobile">
    			</div>
    			<div class="infinity__form-group">
    				<label class="infinity__form--label" for="country">Country:</label>
    				<select required class="infinity__form--select" name="country">
    					<option value="">Please select country</option>
    				</select>
    			</div>
    			<div class="infinity__form-group">
    				<input class="infinity__form--checkbox" type="checkbox" name="receive_updates">
    				<label class="infinity__form--checkbox--label" for="name">I would like to receive SMS and email updates from ${name}.</label>
    			</div>
    			<div class="infinity__form-group">
    				<input class="infinity__form--checkbox" type="checkbox" name="join_rocnation">
    				<label class="infinity__form--checkbox--label" for="name">
    					Join the Roc Nation list to hear more about artists, offers, new music and more.
    				</label>
    			</div>
    			<button type="submit" class="infinity__form--submit-btn">${htmlSpinner} <span>sign up</span></button>
    		</form>
    		<div class="infinity__info">
    			You may withdraw your consent at any time. See Privacy Policy at <a href="https://www.rocnation.com/privacy-policy/" target="_blank">https://www.rocnation.com/privacy-policy/</a>
    		</div>
    </div>
		`;

  // insert to body
  document.body.insertAdjacentHTML("afterend", htmlFormEl);

  // selectors
  const container = document.querySelector(".infinity__form--container");
  const closeBtn = document.querySelector(".infinity__close-btn");
  const inputSelect = document.querySelector(".infinity__form--select");
  const infinityForm = document.querySelector(".infinity__form");
  const submitBtn = document.querySelector(".infinity__form--submit-btn");
  const btnSpinner = document.querySelector(".infinity__form--submit-btn svg");

  // show popup on load
  setTimeout(() => {
    togglePopup(true);
  }, 1000);

  // handle click on button x
  closeBtn.addEventListener("click", () => {
    togglePopup(false);
  });

  // add countries to select input
  Object.entries(countryListAlpha2).map(([key, value]) => {
    const html = `
				<option value="${key}">${value}</option>
			`;
    inputSelect.insertAdjacentHTML("beforeend", html);
  });

  // handle submit form
  infinityForm.onsubmit = async function (e) {
    e.preventDefault();

    const formData = new FormData(infinityForm);

    const {
      country,
      email,
      mobile,
      name,
      receive_updates = "No",
      join_rocnation = "No",
    } = Object.fromEntries(formData);

    // toggle spinner
    toggleSpinner(true);

    // submit form through ajax
    const { ip } = await getUsersIp();
    $.ajax({
      url: endpoint,
      type: "POST",
      data: {
        date: getCurrentDate(),
        ip,
        name,
        email,
        mobile,
        country,
        receive_updates: receive_updates === "on" ? "Yes" : receive_updates,
        join_rocnation: join_rocnation === "on" ? "Yes" : join_rocnation,
      },
    })
      .done(function () {
        Swal.fire({
          title: "SUCCESS",
          text: "THANK YOU FOR SUBMITTING",
          icon: "success",
          allowEscapeKey: false,
          confirmButtonColor: "#FF0000",
          heightAuto: false,
        });

        // closes the popup
        togglePopup(false);
        // toggle spinner
        toggleSpinner(false);
      })
      .fail(function () {
        alert("error");
      });
  };

  function getCurrentDate() {
    const date = new Date().toLocaleDateString("en-US", {
      timeZone: "America/New_York",
    });
    const time = new Date().toLocaleTimeString("en-US", {
      timeZone: "America/New_York",
    });
    return `${date} - ${time} (GMT-4)`;
  }

  async function getUsersIp() {
    const ip = fetch("https://api.ipify.org/?format=json")
      .then((res) => res.json())
      .catch((err) => "Can't find IP");

    return ip;
  }

  function toggleSpinner(isActive) {
    if (isActive) {
      btnSpinner.style.display = "block";
    } else {
      btnSpinner.style.display = "none";
    }
  }

  // toggle popup
  function togglePopup(isActive) {
    if (!container) return;

    if (isActive) {
      container.style.opacity = "1";
      container.style.zIndex = "50";
    } else {
      container.style.opacity = "0";
      container.style.zIndex = "-50";
    }
  }
}
