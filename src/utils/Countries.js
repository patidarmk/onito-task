const countries = [
  {
    id: 1,
    name: "Afghanistan",
    isoCode: "AF",
    dialCode: 93
  },
  {
    id: 2,
    name: "Albania",
    isoCode: "AL",
    dialCode: 355
  },
  {
    id: 3,
    name: "Algeria",
    isoCode: "DZ",
    dialCode: 213
  },
  {
    id: 4,
    name: "American Samoa",
    isoCode: "AS",
    dialCode: 1684
  },
  {
    id: 5,
    name: "Andorra",
    isoCode: "AD",
    dialCode: 376
  },
  {
    id: 6,
    name: "Angola",
    isoCode: "AO",
    dialCode: 244
  },
  {
    id: 7,
    name: "Anguilla",
    isoCode: "AI",
    dialCode: 1264
  },
  {
    id: 8,
    name: "Antarctica",
    isoCode: "AQ",
    dialCode: 0
  },
  {
    id: 9,
    name: "Antigua And Barbuda",
    isoCode: "AG",
    dialCode: 1268
  },
  {
    id: 10,
    name: "Argentina",
    isoCode: "AR",
    dialCode: 54
  },
  {
    id: 11,
    name: "Armenia",
    isoCode: "AM",
    dialCode: 374
  },
  {
    id: 12,
    name: "Aruba",
    isoCode: "AW",
    dialCode: 297
  },
  {
    id: 13,
    name: "Australia",
    isoCode: "AU",
    dialCode: 61
  },
  {
    id: 14,
    name: "Austria",
    isoCode: "AT",
    dialCode: 43
  },
  {
    id: 15,
    name: "Azerbaijan",
    isoCode: "AZ",
    dialCode: 994
  },
  {
    id: 16,
    name: "Bahamas The",
    isoCode: "BS",
    dialCode: 1242
  },
  {
    id: 17,
    name: "Bahrain",
    isoCode: "BH",
    dialCode: 973
  },
  {
    id: 18,
    name: "Bangladesh",
    isoCode: "BD",
    dialCode: 880
  },
  {
    id: 19,
    name: "Barbados",
    isoCode: "BB",
    dialCode: 1246
  },
  {
    id: 20,
    name: "Belarus",
    isoCode: "BY",
    dialCode: 375
  },
  {
    id: 21,
    name: "Belgium",
    isoCode: "BE",
    dialCode: 32
  },
  {
    id: 22,
    name: "Belize",
    isoCode: "BZ",
    dialCode: 501
  },
  {
    id: 23,
    name: "Benin",
    isoCode: "BJ",
    dialCode: 229
  },
  {
    id: 24,
    name: "Bermuda",
    isoCode: "BM",
    dialCode: 1441
  },
  {
    id: 25,
    name: "Bhutan",
    isoCode: "BT",
    dialCode: 975
  },
  {
    id: 26,
    name: "Bolivia",
    isoCode: "BO",
    dialCode: 591
  },
  {
    id: 27,
    name: "Bosnia and Herzegovina",
    isoCode: "BA",
    dialCode: 387
  },
  {
    id: 28,
    name: "Botswana",
    isoCode: "BW",
    dialCode: 267
  },
  {
    id: 29,
    name: "Bouvet Island",
    isoCode: "BV",
    dialCode: 0
  },
  {
    id: 30,
    name: "Brazil",
    isoCode: "BR",
    dialCode: 55
  },
  {
    id: 31,
    name: "British Indian Ocean Territory",
    isoCode: "IO",
    dialCode: 246
  },
  {
    id: 32,
    name: "Brunei",
    isoCode: "BN",
    dialCode: 673
  },
  {
    id: 33,
    name: "Bulgaria",
    isoCode: "BG",
    dialCode: 359
  },
  {
    id: 34,
    name: "Burkina Faso",
    isoCode: "BF",
    dialCode: 226
  },
  {
    id: 35,
    name: "Burundi",
    isoCode: "BI",
    dialCode: 257
  },
  {
    id: 36,
    name: "Cambodia",
    isoCode: "KH",
    dialCode: 855
  },
  {
    id: 37,
    name: "Cameroon",
    isoCode: "CM",
    dialCode: 237
  },
  {
    id: 38,
    name: "Canada",
    isoCode: "CA",
    dialCode: 1
  },
  {
    id: 39,
    name: "Cape Verde",
    isoCode: "CV",
    dialCode: 238
  },
  {
    id: 40,
    name: "Cayman Islands",
    isoCode: "KY",
    dialCode: 1345
  },
  {
    id: 41,
    name: "Central African Republic",
    isoCode: "CF",
    dialCode: 236
  },
  {
    id: 42,
    name: "Chad",
    isoCode: "TD",
    dialCode: 235
  },
  {
    id: 43,
    name: "Chile",
    isoCode: "CL",
    dialCode: 56
  },
  {
    id: 44,
    name: "China",
    isoCode: "CN",
    dialCode: 86
  },
  {
    id: 45,
    name: "Christmas Island",
    isoCode: "CX",
    dialCode: 61
  },
  {
    id: 46,
    name: "Cocos (Keeling) Islands",
    isoCode: "CC",
    dialCode: 672
  },
  {
    id: 47,
    name: "Colombia",
    isoCode: "CO",
    dialCode: 57
  },
  {
    id: 48,
    name: "Comoros",
    isoCode: "KM",
    dialCode: 269
  },
  {
    id: 51,
    name: "Cook Islands",
    isoCode: "CK",
    dialCode: 682
  },
  {
    id: 52,
    name: "Costa Rica",
    isoCode: "CR",
    dialCode: 506
  },
  {
    id: 53,
    name: "Cote D'Ivoire (Ivory Coast)",
    isoCode: "CI",
    dialCode: 225
  },
  {
    id: 54,
    name: "Croatia (Hrvatska)",
    isoCode: "HR",
    dialCode: 385
  },
  {
    id: 55,
    name: "Cuba",
    isoCode: "CU",
    dialCode: 53
  },
  {
    id: 56,
    name: "Cyprus",
    isoCode: "CY",
    dialCode: 357
  },
  {
    id: 57,
    name: "Czech Republic",
    isoCode: "CZ",
    dialCode: 420
  },
  {
    id: 50,
    name: "Democratic Republic Of The Congo",
    isoCode: "CD",
    dialCode: 242
  },
  {
    id: 58,
    name: "Denmark",
    isoCode: "DK",
    dialCode: 45
  },
  {
    id: 59,
    name: "Djibouti",
    isoCode: "DJ",
    dialCode: 253
  },
  {
    id: 60,
    name: "Dominica",
    isoCode: "DM",
    dialCode: 1767
  },
  {
    id: 61,
    name: "Dominican Republic",
    isoCode: "DO",
    dialCode: 1809
  },
  {
    id: 62,
    name: "East Timor",
    isoCode: "TP",
    dialCode: 670
  },
  {
    id: 63,
    name: "Ecuador",
    isoCode: "EC",
    dialCode: 593
  },
  {
    id: 64,
    name: "Egypt",
    isoCode: "EG",
    dialCode: 20
  },
  {
    id: 65,
    name: "El Salvador",
    isoCode: "SV",
    dialCode: 503
  },
  {
    id: 66,
    name: "Equatorial Guinea",
    isoCode: "GQ",
    dialCode: 240
  },
  {
    id: 67,
    name: "Eritrea",
    isoCode: "ER",
    dialCode: 291
  },
  {
    id: 68,
    name: "Estonia",
    isoCode: "EE",
    dialCode: 372
  },
  {
    id: 69,
    name: "Ethiopia",
    isoCode: "ET",
    dialCode: 251
  },
  {
    id: 70,
    name: "External Territories of Australia",
    isoCode: "XA",
    dialCode: 61
  },
  {
    id: 71,
    name: "Falkland Islands",
    isoCode: "FK",
    dialCode: 500
  },
  {
    id: 72,
    name: "Faroe Islands",
    isoCode: "FO",
    dialCode: 298
  },
  {
    id: 73,
    name: "Fiji Islands",
    isoCode: "FJ",
    dialCode: 679
  },
  {
    id: 74,
    name: "Finland",
    isoCode: "FI",
    dialCode: 358
  },
  {
    id: 75,
    name: "France",
    isoCode: "FR",
    dialCode: 33
  },
  {
    id: 76,
    name: "French Guiana",
    isoCode: "GF",
    dialCode: 594
  },
  {
    id: 77,
    name: "French Polynesia",
    isoCode: "PF",
    dialCode: 689
  },
  {
    id: 78,
    name: "French Southern Territories",
    isoCode: "TF",
    dialCode: 0
  },
  {
    id: 79,
    name: "Gabon",
    isoCode: "GA",
    dialCode: 241
  },
  {
    id: 80,
    name: "Gambia The",
    isoCode: "GM",
    dialCode: 220
  },
  {
    id: 81,
    name: "Georgia",
    isoCode: "GE",
    dialCode: 995
  },
  {
    id: 82,
    name: "Germany",
    isoCode: "DE",
    dialCode: 49
  },
  {
    id: 83,
    name: "Ghana",
    isoCode: "GH",
    dialCode: 233
  },
  {
    id: 84,
    name: "Gibraltar",
    isoCode: "GI",
    dialCode: 350
  },
  {
    id: 85,
    name: "Greece",
    isoCode: "GR",
    dialCode: 30
  },
  {
    id: 86,
    name: "Greenland",
    isoCode: "GL",
    dialCode: 299
  },
  {
    id: 87,
    name: "Grenada",
    isoCode: "GD",
    dialCode: 1473
  },
  {
    id: 88,
    name: "Guadeloupe",
    isoCode: "GP",
    dialCode: 590
  },
  {
    id: 89,
    name: "Guam",
    isoCode: "GU",
    dialCode: 1671
  },
  {
    id: 90,
    name: "Guatemala",
    isoCode: "GT",
    dialCode: 502
  },
  {
    id: 91,
    name: "Guernsey and Alderney",
    isoCode: "XU",
    dialCode: 44
  },
  {
    id: 92,
    name: "Guinea",
    isoCode: "GN",
    dialCode: 224
  },
  {
    id: 93,
    name: "Guinea-Bissau",
    isoCode: "GW",
    dialCode: 245
  },
  {
    id: 94,
    name: "Guyana",
    isoCode: "GY",
    dialCode: 592
  },
  {
    id: 95,
    name: "Haiti",
    isoCode: "HT",
    dialCode: 509
  },
  {
    id: 96,
    name: "Heard and McDonald Islands",
    isoCode: "HM",
    dialCode: 0
  },
  {
    id: 97,
    name: "Honduras",
    isoCode: "HN",
    dialCode: 504
  },
  {
    id: 98,
    name: "Hong Kong S.A.R.",
    isoCode: "HK",
    dialCode: 852
  },
  {
    id: 99,
    name: "Hungary",
    isoCode: "HU",
    dialCode: 36
  },
  {
    id: 100,
    name: "Iceland",
    isoCode: "IS",
    dialCode: 354
  },
  {
    id: 101,
    name: "India",
    isoCode: "IN",
    dialCode: 91
  },
  {
    id: 102,
    name: "Indonesia",
    isoCode: "ID",
    dialCode: 62
  },
  {
    id: 103,
    name: "Iran",
    isoCode: "IR",
    dialCode: 98
  },
  {
    id: 104,
    name: "Iraq",
    isoCode: "IQ",
    dialCode: 964
  },
  {
    id: 105,
    name: "Ireland",
    isoCode: "IE",
    dialCode: 353
  },
  {
    id: 106,
    name: "Israel",
    isoCode: "IL",
    dialCode: 972
  },
  {
    id: 107,
    name: "Italy",
    isoCode: "IT",
    dialCode: 39
  },
  {
    id: 108,
    name: "Jamaica",
    isoCode: "JM",
    dialCode: 1876
  },
  {
    id: 109,
    name: "Japan",
    isoCode: "JP",
    dialCode: 81
  },
  {
    id: 110,
    name: "Jersey",
    isoCode: "XJ",
    dialCode: 44
  },
  {
    id: 111,
    name: "Jordan",
    isoCode: "JO",
    dialCode: 962
  },
  {
    id: 112,
    name: "Kazakhstan",
    isoCode: "KZ",
    dialCode: 7
  },
  {
    id: 113,
    name: "Kenya",
    isoCode: "KE",
    dialCode: 254
  },
  {
    id: 114,
    name: "Kiribati",
    isoCode: "KI",
    dialCode: 686
  },
  {
    id: 115,
    name: "Korea North",
    isoCode: "KP",
    dialCode: 850
  },
  {
    id: 116,
    name: "Korea South",
    isoCode: "KR",
    dialCode: 82
  },
  {
    id: 117,
    name: "Kuwait",
    isoCode: "KW",
    dialCode: 965
  },
  {
    id: 118,
    name: "Kyrgyzstan",
    isoCode: "KG",
    dialCode: 996
  },
  {
    id: 119,
    name: "Laos",
    isoCode: "LA",
    dialCode: 856
  },
  {
    id: 120,
    name: "Latvia",
    isoCode: "LV",
    dialCode: 371
  },
  {
    id: 121,
    name: "Lebanon",
    isoCode: "LB",
    dialCode: 961
  },
  {
    id: 122,
    name: "Lesotho",
    isoCode: "LS",
    dialCode: 266
  },
  {
    id: 123,
    name: "Liberia",
    isoCode: "LR",
    dialCode: 231
  },
  {
    id: 124,
    name: "Libya",
    isoCode: "LY",
    dialCode: 218
  },
  {
    id: 125,
    name: "Liechtenstein",
    isoCode: "LI",
    dialCode: 423
  },
  {
    id: 126,
    name: "Lithuania",
    isoCode: "LT",
    dialCode: 370
  },
  {
    id: 127,
    name: "Luxembourg",
    isoCode: "LU",
    dialCode: 352
  },
  {
    id: 128,
    name: "Macau S.A.R.",
    isoCode: "MO",
    dialCode: 853
  },
  {
    id: 129,
    name: "Macedonia",
    isoCode: "MK",
    dialCode: 389
  },
  {
    id: 130,
    name: "Madagascar",
    isoCode: "MG",
    dialCode: 261
  },
  {
    id: 131,
    name: "Malawi",
    isoCode: "MW",
    dialCode: 265
  },
  {
    id: 132,
    name: "Malaysia",
    isoCode: "MY",
    dialCode: 60
  },
  {
    id: 133,
    name: "Maldives",
    isoCode: "MV",
    dialCode: 960
  },
  {
    id: 134,
    name: "Mali",
    isoCode: "ML",
    dialCode: 223
  },
  {
    id: 135,
    name: "Malta",
    isoCode: "MT",
    dialCode: 356
  },
  {
    id: 136,
    name: "Man (Isle of)",
    isoCode: "XM",
    dialCode: 44
  },
  {
    id: 137,
    name: "Marshall Islands",
    isoCode: "MH",
    dialCode: 692
  },
  {
    id: 138,
    name: "Martinique",
    isoCode: "MQ",
    dialCode: 596
  },
  {
    id: 139,
    name: "Mauritania",
    isoCode: "MR",
    dialCode: 222
  },
  {
    id: 140,
    name: "Mauritius",
    isoCode: "MU",
    dialCode: 230
  },
  {
    id: 141,
    name: "Mayotte",
    isoCode: "YT",
    dialCode: 269
  },
  {
    id: 142,
    name: "Mexico",
    isoCode: "MX",
    dialCode: 52
  },
  {
    id: 143,
    name: "Micronesia",
    isoCode: "FM",
    dialCode: 691
  },
  {
    id: 144,
    name: "Moldova",
    isoCode: "MD",
    dialCode: 373
  },
  {
    id: 145,
    name: "Monaco",
    isoCode: "MC",
    dialCode: 377
  },
  {
    id: 146,
    name: "Mongolia",
    isoCode: "MN",
    dialCode: 976
  },
  {
    id: 147,
    name: "Montserrat",
    isoCode: "MS",
    dialCode: 1664
  },
  {
    id: 148,
    name: "Morocco",
    isoCode: "MA",
    dialCode: 212
  },
  {
    id: 149,
    name: "Mozambique",
    isoCode: "MZ",
    dialCode: 258
  },
  {
    id: 150,
    name: "Myanmar",
    isoCode: "MM",
    dialCode: 95
  },
  {
    id: 151,
    name: "Namibia",
    isoCode: "NA",
    dialCode: 264
  },
  {
    id: 152,
    name: "Nauru",
    isoCode: "NR",
    dialCode: 674
  },
  {
    id: 153,
    name: "Nepal",
    isoCode: "NP",
    dialCode: 977
  },
  {
    id: 154,
    name: "Netherlands Antilles",
    isoCode: "AN",
    dialCode: 599
  },
  {
    id: 155,
    name: "Netherlands The",
    isoCode: "NL",
    dialCode: 31
  },
  {
    id: 156,
    name: "New Caledonia",
    isoCode: "NC",
    dialCode: 687
  },
  {
    id: 157,
    name: "New Zealand",
    isoCode: "NZ",
    dialCode: 64
  },
  {
    id: 158,
    name: "Nicaragua",
    isoCode: "NI",
    dialCode: 505
  },
  {
    id: 159,
    name: "Niger",
    isoCode: "NE",
    dialCode: 227
  },
  {
    id: 160,
    name: "Nigeria",
    isoCode: "NG",
    dialCode: 234
  },
  {
    id: 161,
    name: "Niue",
    isoCode: "NU",
    dialCode: 683
  },
  {
    id: 162,
    name: "Norfolk Island",
    isoCode: "NF",
    dialCode: 672
  },
  {
    id: 163,
    name: "Northern Mariana Islands",
    isoCode: "MP",
    dialCode: 1670
  },
  {
    id: 164,
    name: "Norway",
    isoCode: "NO",
    dialCode: 47
  },
  {
    id: 165,
    name: "Oman",
    isoCode: "OM",
    dialCode: 968
  },
  {
    id: 166,
    name: "Pakistan",
    isoCode: "PK",
    dialCode: 92
  },
  {
    id: 167,
    name: "Palau",
    isoCode: "PW",
    dialCode: 680
  },
  {
    id: 168,
    name: "Palestinian Territory Occupied",
    isoCode: "PS",
    dialCode: 970
  },
  {
    id: 169,
    name: "Panama",
    isoCode: "PA",
    dialCode: 507
  },
  {
    id: 170,
    name: "Papua new Guinea",
    isoCode: "PG",
    dialCode: 675
  },
  {
    id: 171,
    name: "Paraguay",
    isoCode: "PY",
    dialCode: 595
  },
  {
    id: 172,
    name: "Peru",
    isoCode: "PE",
    dialCode: 51
  },
  {
    id: 173,
    name: "Philippines",
    isoCode: "PH",
    dialCode: 63
  },
  {
    id: 174,
    name: "Pitcairn Island",
    isoCode: "PN",
    dialCode: 0
  },
  {
    id: 175,
    name: "Poland",
    isoCode: "PL",
    dialCode: 48
  },
  {
    id: 176,
    name: "Portugal",
    isoCode: "PT",
    dialCode: 351
  },
  {
    id: 177,
    name: "Puerto Rico",
    isoCode: "PR",
    dialCode: 1787
  },
  {
    id: 178,
    name: "Qatar",
    isoCode: "QA",
    dialCode: 974
  },
  {
    id: 49,
    name: "Republic Of The Congo",
    isoCode: "CG",
    dialCode: 242
  },
  {
    id: 179,
    name: "Reunion",
    isoCode: "RE",
    dialCode: 262
  },
  {
    id: 180,
    name: "Romania",
    isoCode: "RO",
    dialCode: 40
  },
  {
    id: 181,
    name: "Russia",
    isoCode: "RU",
    dialCode: 70
  },
  {
    id: 182,
    name: "Rwanda",
    isoCode: "RW",
    dialCode: 250
  },
  {
    id: 183,
    name: "Saint Helena",
    isoCode: "SH",
    dialCode: 290
  },
  {
    id: 184,
    name: "Saint Kitts And Nevis",
    isoCode: "KN",
    dialCode: 1869
  },
  {
    id: 185,
    name: "Saint Lucia",
    isoCode: "LC",
    dialCode: 1758
  },
  {
    id: 186,
    name: "Saint Pierre and Miquelon",
    isoCode: "PM",
    dialCode: 508
  },
  {
    id: 187,
    name: "Saint Vincent And The Grenadines",
    isoCode: "VC",
    dialCode: 1784
  },
  {
    id: 188,
    name: "Samoa",
    isoCode: "WS",
    dialCode: 684
  },
  {
    id: 189,
    name: "San Marino",
    isoCode: "SM",
    dialCode: 378
  },
  {
    id: 190,
    name: "Sao Tome and Principe",
    isoCode: "ST",
    dialCode: 239
  },
  {
    id: 191,
    name: "Saudi Arabia",
    isoCode: "SA",
    dialCode: 966
  },
  {
    id: 192,
    name: "Senegal",
    isoCode: "SN",
    dialCode: 221
  },
  {
    id: 193,
    name: "Serbia",
    isoCode: "RS",
    dialCode: 381
  },
  {
    id: 194,
    name: "Seychelles",
    isoCode: "SC",
    dialCode: 248
  },
  {
    id: 195,
    name: "Sierra Leone",
    isoCode: "SL",
    dialCode: 232
  },
  {
    id: 196,
    name: "Singapore",
    isoCode: "SG",
    dialCode: 65
  },
  {
    id: 197,
    name: "Slovakia",
    isoCode: "SK",
    dialCode: 421
  },
  {
    id: 198,
    name: "Slovenia",
    isoCode: "SI",
    dialCode: 386
  },
  {
    id: 199,
    name: "Smaller Territories of the UK",
    isoCode: "XG",
    dialCode: 44
  },
  {
    id: 200,
    name: "Solomon Islands",
    isoCode: "SB",
    dialCode: 677
  },
  {
    id: 201,
    name: "Somalia",
    isoCode: "SO",
    dialCode: 252
  },
  {
    id: 202,
    name: "South Africa",
    isoCode: "ZA",
    dialCode: 27
  },
  {
    id: 203,
    name: "South Georgia",
    isoCode: "GS",
    dialCode: 0
  },
  {
    id: 204,
    name: "South Sudan",
    isoCode: "SS",
    dialCode: 211
  },
  {
    id: 205,
    name: "Spain",
    isoCode: "ES",
    dialCode: 34
  },
  {
    id: 206,
    name: "Sri Lanka",
    isoCode: "LK",
    dialCode: 94
  },
  {
    id: 207,
    name: "Sudan",
    isoCode: "SD",
    dialCode: 249
  },
  {
    id: 208,
    name: "Suriname",
    isoCode: "SR",
    dialCode: 597
  },
  {
    id: 209,
    name: "Svalbard And Jan Mayen Islands",
    isoCode: "SJ",
    dialCode: 47
  },
  {
    id: 210,
    name: "Swaziland",
    isoCode: "SZ",
    dialCode: 268
  },
  {
    id: 211,
    name: "Sweden",
    isoCode: "SE",
    dialCode: 46
  },
  {
    id: 212,
    name: "Switzerland",
    isoCode: "CH",
    dialCode: 41
  },
  {
    id: 213,
    name: "Syria",
    isoCode: "SY",
    dialCode: 963
  },
  {
    id: 214,
    name: "Taiwan",
    isoCode: "TW",
    dialCode: 886
  },
  {
    id: 215,
    name: "Tajikistan",
    isoCode: "TJ",
    dialCode: 992
  },
  {
    id: 216,
    name: "Tanzania",
    isoCode: "TZ",
    dialCode: 255
  },
  {
    id: 217,
    name: "Thailand",
    isoCode: "TH",
    dialCode: 66
  },
  {
    id: 218,
    name: "Togo",
    isoCode: "TG",
    dialCode: 228
  },
  {
    id: 219,
    name: "Tokelau",
    isoCode: "TK",
    dialCode: 690
  },
  {
    id: 220,
    name: "Tonga",
    isoCode: "TO",
    dialCode: 676
  },
  {
    id: 221,
    name: "Trinidad And Tobago",
    isoCode: "TT",
    dialCode: 1868
  },
  {
    id: 222,
    name: "Tunisia",
    isoCode: "TN",
    dialCode: 216
  },
  {
    id: 223,
    name: "Turkey",
    isoCode: "TR",
    dialCode: 90
  },
  {
    id: 224,
    name: "Turkmenistan",
    isoCode: "TM",
    dialCode: 7370
  },
  {
    id: 225,
    name: "Turks And Caicos Islands",
    isoCode: "TC",
    dialCode: 1649
  },
  {
    id: 226,
    name: "Tuvalu",
    isoCode: "TV",
    dialCode: 688
  },
  {
    id: 227,
    name: "Uganda",
    isoCode: "UG",
    dialCode: 256
  },
  {
    id: 228,
    name: "Ukraine",
    isoCode: "UA",
    dialCode: 380
  },
  {
    id: 229,
    name: "United Arab Emirates",
    isoCode: "AE",
    dialCode: 971
  },
  {
    id: 230,
    name: "United Kingdom",
    isoCode: "GB",
    dialCode: 44
  },
  {
    id: 231,
    name: "United States",
    isoCode: "US",
    dialCode: 1
  },
  {
    id: 232,
    name: "United States Minor Outlying Islands",
    isoCode: "UM",
    dialCode: 1
  },
  {
    id: 233,
    name: "Uruguay",
    isoCode: "UY",
    dialCode: 598
  },
  {
    id: 234,
    name: "Uzbekistan",
    isoCode: "UZ",
    dialCode: 998
  },
  {
    id: 235,
    name: "Vanuatu",
    isoCode: "VU",
    dialCode: 678
  },
  {
    id: 236,
    name: "Vatican City State (Holy See)",
    isoCode: "VA",
    dialCode: 39
  },
  {
    id: 237,
    name: "Venezuela",
    isoCode: "VE",
    dialCode: 58
  },
  {
    id: 238,
    name: "Vietnam",
    isoCode: "VN",
    dialCode: 84
  },
  {
    id: 239,
    name: "Virgin Islands (British)",
    isoCode: "VG",
    dialCode: 1284
  },
  {
    id: 240,
    name: "Virgin Islands (US)",
    isoCode: "VI",
    dialCode: 1340
  },
  {
    id: 241,
    name: "Wallis And Futuna Islands",
    isoCode: "WF",
    dialCode: 681
  },
  {
    id: 242,
    name: "Western Sahara",
    isoCode: "EH",
    dialCode: 212
  },
  {
    id: 243,
    name: "Yemen",
    isoCode: "YE",
    dialCode: 967
  },
  {
    id: 244,
    name: "Yugoslavia",
    isoCode: "YU",
    dialCode: 38
  },
  {
    id: 245,
    name: "Zambia",
    isoCode: "ZM",
    dialCode: 260
  },
  {
    id: 246,
    name: "Zimbabwe",
    isoCode: "ZW",
    dialCode: 263
  }
];

export default countries;
