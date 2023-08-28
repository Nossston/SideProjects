const arrayHelpers = require("./arrayHelper");
const countries = [
  {
    name: "Canada",
    id: "CA",
  },
  {
    name: "United States",
    id: "US",
  },
  // {
  //   name: "United Kingdom",
  //   id: "GB",
  // },
  // {
  //   name: "Mexico",
  //   id: "MX",
  // },
  // {
  //   name: "Australia",
  //   id: "AU",
  // },
  {
    name: "China",
    id: "CN",
  },
];

/*
TODO: Need to add to the countries list
germany (DE)
belgium (BE)
netherlands (NL)
denmark (DK)
Turkey (TR)
Indonesia (ID)
Jordan (JO)
India (IN)
Cambodia (KH)
Ethiopia (ET)
Peru (PE)
Cuba (CU)
Argentina (AR)
Chile (CL)
Bolivia (BO)
Spain (ES)
Bangladesh (BD)
Pakistan (PK)
Nigeria (NG)
Japan (JP)
austria (AT)
brazil (BR)
Philippines (PH)
Vietnam (VN)
*/

const provinces = [
  {
    id: "AL",
    name: "Alabama",
    countryID: "US",
  },
  {
    id: "AK",
    name: "Alaska",
    countryID: "US",
  },
  {
    id: "AZ",
    name: "Arizona",
    countryID: "US",
  },
  {
    id: "AR",
    name: "Arkansas",
    countryID: "US",
  },
  {
    id: "CA",
    name: "California",
    countryID: "US",
  },
  {
    id: "CO",
    name: "Colorado",
    countryID: "US",
  },
  {
    id: "CT",
    name: "Connecticut",
    countryID: "US",
  },
  {
    id: "DC",
    name: "District of Columbia",
    alt: ["Washington DC", "Washington D.C."],
    countryID: "US",
  },
  {
    id: "DE",
    name: "Delaware",
    countryID: "US",
  },
  {
    id: "FL",
    name: "Florida",
    countryID: "US",
  },
  {
    id: "GA",
    name: "Georgia",
    countryID: "US",
  },
  {
    id: "HI",
    name: "Hawaii",
    countryID: "US",
  },
  {
    id: "ID",
    name: "Idaho",
    countryID: "US",
  },
  {
    id: "IL",
    name: "Illinois",
    countryID: "US",
  },
  {
    id: "IN",
    name: "Indiana",
    countryID: "US",
  },
  {
    id: "IA",
    name: "Iowa",
    countryID: "US",
  },
  {
    id: "KS",
    name: "Kansas",
    countryID: "US",
  },
  {
    id: "KY",
    name: "Kentucky",
    countryID: "US",
  },
  {
    id: "LA",
    name: "Louisiana",
    countryID: "US",
  },
  {
    id: "ME",
    name: "Maine",
    countryID: "US",
  },
  {
    id: "MD",
    name: "Maryland",
    countryID: "US",
  },
  {
    id: "MA",
    name: "Massachusetts",
    countryID: "US",
  },
  {
    id: "MI",
    name: "Michigan",
    countryID: "US",
  },
  {
    id: "MN",
    name: "Minnesota",
    countryID: "US",
  },
  {
    id: "MS",
    name: "Mississippi",
    countryID: "US",
  },
  {
    id: "MO",
    name: "Missouri",
    countryID: "US",
  },
  {
    id: "MT",
    name: "Montana",
    countryID: "US",
  },
  {
    id: "NE",
    name: "Nebraska",
    countryID: "US",
  },
  {
    id: "NV",
    name: "Nevada",
    countryID: "US",
  },
  {
    id: "NH",
    name: "New Hampshire",
    countryID: "US",
  },
  {
    id: "NJ",
    name: "New Jersey",
    countryID: "US",
  },
  {
    id: "NM",
    name: "New Mexico",
    countryID: "US",
  },
  {
    id: "NY",
    name: "New York",
    countryID: "US",
  },
  {
    id: "NC",
    name: "North Carolina",
    countryID: "US",
  },
  {
    id: "ND",
    name: "North Dakota",
    countryID: "US",
  },
  {
    id: "OH",
    name: "Ohio",
    countryID: "US",
  },
  {
    id: "OK",
    name: "Oklahoma",
    countryID: "US",
  },
  {
    id: "OR",
    name: "Oregon",
    countryID: "US",
  },
  {
    id: "PA",
    name: "Pennsylvania",
    countryID: "US",
  },
  {
    id: "RI",
    name: "Rhode Island",
    countryID: "US",
  },
  {
    id: "SC",
    name: "South Carolina",
    countryID: "US",
  },
  {
    id: "SD",
    name: "South Dakota",
    countryID: "US",
  },
  {
    id: "TN",
    name: "Tennessee",
    countryID: "US",
  },
  {
    id: "TX",
    name: "Texas",
    countryID: "US",
  },
  {
    id: "UT",
    name: "Utah",
    countryID: "US",
  },
  {
    id: "VT",
    name: "Vermont",
    countryID: "US",
  },
  {
    id: "VA",
    name: "Virginia",
    countryID: "US",
  },
  {
    id: "WA",
    name: "Washington",
    countryID: "US",
  },
  {
    id: "WV",
    name: "West Virginia",
    countryID: "US",
  },
  {
    id: "WI",
    name: "Wisconsin",
    countryID: "US",
  },
  {
    id: "WY",
    name: "Wyoming",
    countryID: "US",
  },
  {
    id: "AS",
    name: "American Samoa",
    countryID: "US",
  },
  {
    id: "GU",
    name: "Guam",
    countryID: "US",
  },
  {
    id: "MP",
    name: "Northern Mariana Islands",
    countryID: "US",
  },
  {
    id: "PR",
    name: "Puerto Rico",
    countryID: "US",
  },
  {
    id: "UM",
    name: "United States Minor Outlying Islands",
    countryID: "US",
  },
  {
    id: "VI",
    name: "Virgin Islands",
    countryID: "US",
  },
  {
    id: "AB",
    name: "Alberta",
    countryID: "CA",
  },
  {
    id: "BC",
    name: "British Columbia",
    countryID: "CA",
  },
  {
    id: "MB",
    name: "Manitoba",
    countryID: "CA",
  },
  {
    id: "NB",
    name: "New Brunswick",
    countryID: "CA",
  },
  {
    id: "NL",
    name: "Newfoundland and Labrador",
    countryID: "CA",
    alt: ["Newfoundland", "Labrador"],
  },
  {
    id: "NS",
    name: "Nova Scotia",
    countryID: "CA",
  },
  {
    id: "NU",
    name: "Nunavut",
    countryID: "CA",
  },
  {
    id: "NT",
    name: "Northwest Territories",
    countryID: "CA",
  },
  {
    id: "ON",
    name: "Ontario",
    countryID: "CA",
  },
  {
    id: "PE",
    name: "Prince Edward Island",
    countryID: "CA",
  },
  {
    id: "QC",
    name: "Quebec",
    countryID: "CA",
  },
  {
    id: "SK",
    name: "Saskatchewan",
    countryID: "CA",
  },
  {
    id: "YT",
    name: "Yukon",
    countryID: "CA",
  },
  // {
  //   name: "Ashmore and Cartier Islands",
  //   countryID: "AU",
  // },
  // {
  //   name: "Australian Antarctic Territory",
  //   countryID: "AU",
  // },
  // {
  //   id: "ACT",
  //   name: "Australian Capital Territory",
  //   countryID: "AU",
  // },
  // {
  //   id: "CX",
  //   name: "Christmas Island",
  //   countryID: "AU",
  // },
  // {
  //   id: "CC",
  //   name: "Cocos Islands",
  //   alt: ["Keeling Islands"],
  //   countryID: "AU",
  // },
  // {
  //   name: "Coral Sea Islands",
  //   countryID: "AU",
  // },
  // {
  //   id: "HM",
  //   name: "Heard Island and McDonald Islands",
  //   countryID: "AU",
  // },
  // {
  //   id: "JBT",
  //   name: "Jervis Bay Territory",
  //   countryID: "AU",
  // },
  // {
  //   id: "NSW",
  //   name: "New South Wales",
  //   countryID: "AU",
  // },
  // {
  //   id: "NF",
  //   name: "Norfolk Island",
  //   countryID: "AU",
  // },
  // {
  //   id: "NT",
  //   name: "Northern Territory",
  //   countryID: "AU",
  // },
  // {
  //   id: "QLD",
  //   name: "Queensland",
  //   countryID: "AU",
  // },
  // {
  //   id: "SA",
  //   name: "South Australia",
  //   countryID: "AU",
  // },
  // {
  //   id: "TAS",
  //   name: "Tasmania",
  //   countryID: "AU",
  // },
  // {
  //   id: "VIC",
  //   name: "Victoria",
  //   countryID: "AU",
  // },
  // {
  //   id: "WA",
  //   name: "Western Australia",
  //   countryID: "AU",
  // },
  // {
  //   name: "Aguascalientes",
  //   id: "AG",
  //   alt: ["AGS"],
  //   countryID: "MX",
  // },
  // {
  //   name: "Baja California",
  //   id: "BC",
  //   alt: ["BCN"],
  //   countryID: "MX",
  // },
  // {
  //   name: "Baja California Sur",
  //   id: "BS",
  //   alt: ["BCS"],
  //   countryID: "MX",
  // },
  // {
  //   name: "Campeche",
  //   id: "CM",
  //   alt: ["Camp", "CAM"],
  //   countryID: "MX",
  // },
  // {
  //   name: "Chiapas",
  //   id: "CS",
  //   alt: ["Chis", "CHP"],
  //   countryID: "MX",
  // },
  // {
  //   name: "Chihuahua",
  //   id: "CH",
  //   alt: ["Chih", "CHH"],
  //   countryID: "MX",
  // },
  // {
  //   name: "Coahuila",
  //   id: "MX",
  //   alt: ["Coah", "COA"],
  //   countryID: "MX",
  // },
  // {
  //   name: "Colima",
  //   id: "CL",
  //   alt: ["COL"],
  //   countryID: "MX",
  // },
  // {
  //   name: "Federal District",
  //   id: "DF",
  //   alt: ["DIF"],
  //   countryID: "MX",
  // },
  // {
  //   name: "Durango",
  //   id: "DG",
  //   alt: ["Dgo", "DUR"],
  //   countryID: "MX",
  // },
  // {
  //   name: "Guanajuato",
  //   id: "GT",
  //   alt: ["Gto", "GUA"],
  //   countryID: "MX",
  // },
  // {
  //   name: "Guerrero",
  //   id: "GR",
  //   alt: ["Gro", "GRO"],
  //   countryID: "MX",
  // },
  // {
  //   name: "Hidalgo",
  //   id: "HG",
  //   alt: ["Hgo", "HID"],
  //   countryID: "MX",
  // },
  // {
  //   name: "Jalisco",
  //   id: "JA",
  //   alt: ["Jal", "JAL"],
  //   countryID: "MX",
  // },
  // {
  //   name: "Mexico",
  //   id: "ME",
  //   alt: ["Edomex", "MEX"],
  //   countryID: "MX",
  // },
  // {
  //   name: "Michoacán",
  //   id: "MI",
  //   alt: ["Mich", "MIC"],
  //   countryID: "MX",
  // },
  // {
  //   name: "Morelos",
  //   id: "MO",
  //   alt: ["Mor", "MOR"],
  //   countryID: "MX",
  // },
  // {
  //   name: "Nayarit",
  //   id: "NA",
  //   alt: ["Nay", "NAY"],
  //   countryID: "MX",
  // },
  // {
  //   name: "Nuevo León",
  //   id: "NL",
  //   alt: ["NLE"],
  //   countryID: "MX",
  // },
  // {
  //   name: "Oaxaca",
  //   id: "OA",
  //   alt: ["Oax", "OAX"],
  //   countryID: "MX",
  // },
  // {
  //   name: "Puebla",
  //   id: "PU",
  //   alt: ["Pue", "PUE"],
  //   countryID: "MX",
  // },
  // {
  //   name: "Querétaro",
  //   id: "QE",
  //   alt: ["Qro", "QUE"],
  //   countryID: "MX",
  // },
  // {
  //   name: "Quintana Roo",
  //   id: "QR",
  //   alt: ["Q Roo", "ROO"],
  //   countryID: "MX",
  // },
  // {
  //   name: "San Luis Potosí",
  //   id: "SL",
  //   alt: ["SLP"],
  //   countryID: "MX",
  // },
  // {
  //   name: "Sinaloa",
  //   id: "SI",
  //   alt: ["SIN"],
  //   countryID: "MX",
  // },
  // {
  //   name: "Sonora",
  //   id: "SO",
  //   alt: ["SON"],
  //   countryID: "MX",
  // },
  // {
  //   name: "Tabasco",
  //   id: "TB",
  //   alt: ["TAB"],
  //   countryID: "MX",
  // },
  // {
  //   name: "Tamaulipas",
  //   id: "TM",
  //   alt: ["Tamps", "TAM"],
  //   countryID: "MX",
  // },
  // {
  //   name: "Tlaxcala",
  //   id: "TL",
  //   alt: ["Tlax", "TLA"],
  //   countryID: "MX",
  // },
  // {
  //   name: "Veracruz",
  //   id: "VE",
  //   alt: ["VER"],
  //   countryID: "MX",
  // },
  // {
  //   name: "Yucatán",
  //   id: "YU",
  //   alt: ["YUC"],
  //   countryID: "MX",
  // },
  // {
  //   name: "Zacatecas",
  //   id: "ZA",
  //   alt: ["ZAC"],
  //   countryID: "MX",
  // },
  {
    name: "Chongqing",
    id: "CQ",
    english: "Chongqing",
    countryID: "CN",
  },
  {
    name: "Heilongjiang",
    id: "HLJ",
    english: "Heilongjiang",
    countryID: "CN",
  },
  {
    name: "Jilin",
    id: "JL",
    english: "Jilin",
    countryID: "CN",
  },
  {
    name: "Hainan",
    id: "HN",
    english: "Hainan",
    countryID: "CN",
  },
  {
    name: "Beijing",
    id: "BJ",
    english: "Beijing",
    countryID: "CN",
  },
  {
    name: "Liaoning",
    id: "LN",
    english: "Liaoning",
    countryID: "CN",
  },
  {
    name: "Neimenggu",
    id: "NMG",
    english: "Neimenggu",
    alt: ["Nei Menggu"],
    countryID: "CN",
  },
  {
    name: "Xizang",
    id: "XZ",
    english: "Xizang",
    alt: ["Tibet"],
    countryID: "CN",
  },
  {
    name: "Qinghai",
    id: "QH",
    english: "Qinghai",
    countryID: "CN",
  },
  {
    name: "Ningxia",
    id: "NX",
    english: "Ningxia",
    countryID: "CN",
  },
  {
    name: "Xinjiang",
    id: "XJ",
    english: "Xinjiang",
    alt: ["Uygur"],
    countryID: "CN",
  },
  {
    name: "Gansu",
    id: "GS",
    english: "Gansu",
    countryID: "CN",
  },
  {
    name: "Hebei",
    id: "HB",
    english: "Hebei",
    countryID: "CN",
  },
  {
    name: "Henan",
    id: "HN",
    english: "Henan",
    countryID: "CN",
  },
  {
    name: "Hubei",
    id: "HB",
    english: "Hubei",
    countryID: "CN",
  },
  {
    name: "Hunan",
    id: "HN",
    english: "Hunan",
    countryID: "CN",
  },
  {
    name: "Shandong",
    id: "SD",
    english: "Shandong",
    countryID: "CN",
  },
  {
    name: "Jiangsu",
    id: "JS",
    english: "Jiangsu",
    countryID: "CN",
  },
  {
    name: "Anhui",
    id: "AH",
    english: "Anhui",
    countryID: "CN",
  },
  {
    name: "Shanxi",
    id: "SX",
    english: "Shanxi",
    countryID: "CN",
  },
  {
    name: "Shaanxi",
    id: "SAX",
    english: "Shaanxi",
    countryID: "CN",
  },
  {
    name: "Sichuan",
    id: "SC",
    english: "Sichuan",
    countryID: "CN",
  },
  {
    name: "Yunnan",
    id: "YN",
    english: "Yunnan",
    countryID: "CN",
  },
  {
    name: "Guizhou",
    id: "GZ",
    english: "Guizhou",
    countryID: "CN",
  },
  {
    name: "Zhejiang",
    id: "ZJ",
    english: "Zhejiang",
    countryID: "CN",
  },
  {
    name: "Fujian",
    id: "FJ",
    english: "Fujian",
    countryID: "CN",
  },
  {
    name: "Guangxi",
    id: "GX",
    english: "Guangxi",
    countryID: "CN",
  },
  {
    name: "Shanghai",
    id: "SH",
    english: "Shanghai",
    countryID: "CN",
  },
  {
    name: "Tianjin",
    id: "TJ",
    english: "Tianjin",
    countryID: "CN",
  },
  {
    name: "Hongkong",
    id: "HK",
    english: "Hongkong",
    alt: ["Hong Kong"],
    countryID: "CN",
  },
  {
    name: "Macau",
    id: "M",
    english: "Macau",
    alt: ["Macao"],
    countryID: "CN",
  },
  {
    name: "Taiwan",
    id: "TW",
    english: "Taiwan",
    countryID: "CN",
  },
  {
    name: "Jiangxi",
    id: "JX",
    english: "Jiangxi",
    countryID: "CN",
  },
  {
    name: "Guangdong",
    id: "GD",
    english: "Guangdong",
    countryID: "CN",
  },
  {
    name: "Avon",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Bedfordshire",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Berkshire",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Borders",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Bristol",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Buckinghamshire",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Cambridgeshire",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Channel Islands",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Cheshire",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Cleveland",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Cornwall",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Cumbria",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Derbyshire",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Devon",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Dorset",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Durham",
    countryID: "GB",
    region: "England",
  },
  {
    name: "East Riding of Yorkshire",
    countryID: "GB",
    region: "England",
  },
  {
    name: "East Sussex",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Essex",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Gloucestershire",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Greater Manchester",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Hampshire",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Herefordshire",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Hertfordshire",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Humberside",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Isle of Man",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Isle of Wight",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Isles of Scilly",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Kent",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Lancashire",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Leicestershire",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Lincolnshire",
    countryID: "GB",
    region: "England",
  },
  {
    name: "London",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Merseyside",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Middlesex",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Norfolk",
    countryID: "GB",
    region: "England",
  },
  {
    name: "North Yorkshire",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Northamptonshire",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Northumberland",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Nottinghamshire",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Oxfordshire",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Rutland",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Shropshire",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Somerset",
    countryID: "GB",
    region: "England",
  },
  {
    name: "South Yorkshire",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Staffordshire",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Suffolk",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Surrey",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Tyne and Wear",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Warwickshire",
    countryID: "GB",
    region: "England",
  },
  {
    name: "West Midlands",
    countryID: "GB",
    region: "England",
  },
  {
    name: "West Sussex",
    countryID: "GB",
    region: "England",
  },
  {
    name: "West Yorkshire",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Wiltshire",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Worcestershire",
    countryID: "GB",
    region: "England",
  },
  {
    name: "Antrim",
    countryID: "GB",
    region: "Northern Ireland",
  },
  {
    name: "Down",
    countryID: "GB",
    region: "Northern Ireland",
  },
  {
    name: "Fermanagh",
    countryID: "GB",
    region: "Northern Ireland",
  },
  {
    name: "Londonderry",
    countryID: "GB",
    region: "Northern Ireland",
  },
  {
    name: "Tyrone",
    countryID: "GB",
    region: "Northern Ireland",
  },
  {
    name: "Aberdeen City",
    countryID: "GB",
    region: "Scotland",
  },
  {
    name: "Aberdeenshire",
    countryID: "GB",
    region: "Scotland",
  },
  {
    name: "Angus",
    countryID: "GB",
    region: "Scotland",
  },
  {
    name: "Argyll and Bute",
    countryID: "GB",
    region: "Scotland",
  },
  {
    name: "Armagh",
    countryID: "GB",
    region: "Scotland",
  },
  {
    name: "Carmarthenshire",
    countryID: "GB",
    region: "Scotland",
  },
  {
    name: "Clackmannan",
    countryID: "GB",
    region: "Scotland",
  },
  {
    name: "Dumfries and Galloway",
    countryID: "GB",
    region: "Scotland",
  },
  {
    name: "East Ayrshire",
    countryID: "GB",
    region: "Scotland",
  },
  {
    name: "East Dunbartonshire",
    countryID: "GB",
    region: "Scotland",
  },
  {
    name: "East Lothian",
    countryID: "GB",
    region: "Scotland",
  },
  {
    name: "East Renfrewshire",
    countryID: "GB",
    region: "Scotland",
  },
  {
    name: "Edinburgh City",
    countryID: "GB",
    region: "Scotland",
  },
  {
    name: "Falkirk",
    countryID: "GB",
    region: "Scotland",
  },
  {
    name: "Fife",
    countryID: "GB",
    region: "Scotland",
  },
  {
    name: "Glasgow",
    countryID: "GB",
    region: "Scotland",
  },
  {
    name: "Highland",
    countryID: "GB",
    region: "Scotland",
  },
  {
    name: "Inverclyde",
    countryID: "GB",
    region: "Scotland",
  },
  {
    name: "Midlothian",
    countryID: "GB",
    region: "Scotland",
  },
  {
    name: "Moray",
    countryID: "GB",
    region: "Scotland",
  },
  {
    name: "North Ayrshire",
    countryID: "GB",
    region: "Scotland",
  },
  {
    name: "North Lanarkshire",
    countryID: "GB",
    region: "Scotland",
  },
  {
    name: "Orkney",
    countryID: "GB",
    region: "Scotland",
  },
  {
    name: "Perthshire and Kinross",
    countryID: "GB",
    region: "Scotland",
  },
  {
    name: "Renfrewshire",
    countryID: "GB",
    region: "Scotland",
  },
  {
    name: "Roxburghshire",
    countryID: "GB",
    region: "Scotland",
  },
  {
    name: "Shetland",
    countryID: "GB",
    region: "Scotland",
  },
  {
    name: "South Ayrshire",
    countryID: "GB",
    region: "Scotland",
  },
  {
    name: "South Lanarkshire",
    countryID: "GB",
    region: "Scotland",
  },
  {
    name: "Stirling",
    countryID: "GB",
    region: "Scotland",
  },
  {
    name: "West Dunbartonshire",
    countryID: "GB",
    region: "Scotland",
  },
  {
    name: "West Lothian",
    countryID: "GB",
    region: "Scotland",
  },
  {
    name: "Western Isles",
    countryID: "GB",
    region: "Scotland",
  },
  {
    name: "Blaenau Gwent",
    countryID: "GB",
    region: "Wales",
  },
  {
    name: "Bridgend",
    countryID: "GB",
    region: "Wales",
  },
  {
    name: "Caerphilly",
    countryID: "GB",
    region: "Wales",
  },
  {
    name: "Cardiff",
    countryID: "GB",
    region: "Wales",
  },
  {
    name: "Ceredigion",
    countryID: "GB",
    region: "Wales",
  },
  {
    name: "Conwy",
    countryID: "GB",
    region: "Wales",
  },
  {
    name: "Denbighshire",
    countryID: "GB",
    region: "Wales",
  },
  {
    name: "Flintshire",
    countryID: "GB",
    region: "Wales",
  },
  {
    name: "Gwynedd",
    countryID: "GB",
    region: "Wales",
  },
  {
    name: "Isle of Anglesey",
    countryID: "GB",
    region: "Wales",
  },
  {
    name: "Merthyr Tydfil",
    countryID: "GB",
    region: "Wales",
  },
  {
    name: "Monmouthshire",
    countryID: "GB",
    region: "Wales",
  },
  {
    name: "Neath Port Talbot",
    countryID: "GB",
    region: "Wales",
  },
  {
    name: "Newport",
    countryID: "GB",
    region: "Wales",
  },
  {
    name: "Pembrokeshire",
    countryID: "GB",
    region: "Wales",
  },
  {
    name: "Powys",
    countryID: "GB",
    region: "Wales",
  },
  {
    name: "Rhondda Cynon Taff",
    countryID: "GB",
    region: "Wales",
  },
  {
    name: "Swansea",
    countryID: "GB",
    region: "Wales",
  },
  {
    name: "The Vale of Glamorgan",
    countryID: "GB",
    region: "Wales",
  },
  {
    name: "Torfaen",
    countryID: "GB",
    region: "Wales",
  },
  {
    name: "Wrexham",
    countryID: "GB",
    region: "Wales",
  },
  {
    id: "BW",
    name: "Baden-Württemberg",
    countryID: "DE",
  },
  {
    id: "BY",
    name: "Bayern",
    countryID: "DE",
  },
  {
    id: "BE",
    name: "Berlin",
    countryID: "DE",
  },
  {
    id: "BB",
    name: "Brandenburg",
    countryID: "DE",
  },
  {
    id: "HB",
    name: "Bremen",
    countryID: "DE",
  },
  {
    id: "HH",
    name: "Hamburg",
    countryID: "DE",
  },
  {
    id: "HE",
    name: "Hessen",
    countryID: "DE",
  },
  {
    id: "MV",
    name: "Mecklenburg-Vorpommern",
    countryID: "DE",
  },
  {
    id: "NI",
    name: "Niedersachsen",
    countryID: "DE",
  },
  {
    id: "NW",
    name: "Nordrhein-Westfalen",
    countryID: "DE",
  },
  {
    id: "RP",
    name: "Rheinland-Pfalz",
    countryID: "DE",
  },
  {
    id: "SL",
    name: "Saarland",
    countryID: "DE",
  },
  {
    id: "SN",
    name: "Sachsen",
    countryID: "DE",
  },
  {
    id: "ST",
    name: "Sachsen-Anhalt",
    countryID: "DE",
  },
  {
    id: "SH",
    name: "Schleswig-Holstein",
    countryID: "DE",
  },
  {
    id: "TH",
    name: "Thüringen",
    countryID: "DE",
  },
  {
    id: "DR",
    name: "Drenthe",
    countryID: "NL",
  },
  {
    id: "FL",
    name: "Flevoland",
    countryID: "NL",
  },
  {
    id: "FR",
    name: "Friesland",
    countryID: "NL",
    alt: ["Fryslân"],
  },
  {
    id: "GD",
    name: "Gelderland",
    countryID: "NL",
  },
  {
    id: "GR",
    name: "Groningen",
    countryID: "NL",
  },
  {
    id: "LB",
    name: "Limburg",
    countryID: "NL",
  },
  {
    id: "NB",
    name: "Noord-Brabant",
    countryID: "NL",
  },
  {
    id: "NH",
    name: "Noord-Holland",
    countryID: "NL",
  },
  {
    id: "OV",
    name: "Overijssel",
    countryID: "NL",
  },
  {
    id: "UT",
    name: "Utrecht",
    countryID: "NL",
  },
  {
    id: "ZH",
    name: "Zuid-Holland",
    countryID: "NL",
  },
  {
    id: "ZL",
    name: "Zeeland",
    countryID: "NL",
  },
  {
    id: "ANT",
    name: "Antwerpen",
    countryID: "BE",
  },
  {
    id: "HAI",
    name: "Henegouwen",
    countryID: "BE",
    alt: ["Hainaut"],
  },
  {
    id: "LIE",
    name: "Luik",
    countryID: "BE",
    alt: ["Liège"],
  },
  {
    id: "LIM",
    name: "Limburg",
    countryID: "BE",
  },
  {
    id: "LUX",
    name: "Luxemburg",
    countryID: "BE",
  },
  {
    id: "NAM",
    name: "Namen",
    countryID: "BE",
  },
  {
    id: "OVL",
    name: "Oost-Vlaanderen",
    countryID: "BE",
  },
  {
    id: "VBR",
    name: "Vlaams-Brabant",
    countryID: "BE",
  },
  {
    id: "WBR",
    name: "Waals-Brabant",
    countryID: "BE",
  },
  {
    id: "WVL",
    name: "West-Vlaanderen",
    countryID: "BE",
  },
  {
    name: "Hovedstaden",
    countryID: "DK",
  },
  {
    name: "Midtjylland",
    countryID: "DK",
  },
  {
    name: "Nordjylland",
    countryID: "DK",
  },
  {
    name: "Sjælland",
    countryID: "DK",
  },
  {
    name: "Syddanmark",
    countryID: "DK",
  },
  {
    name: "Adana",
    countryID: "TR",
  },
  {
    name: "Adıyaman",
    countryID: "TR",
  },
  {
    name: "Afyonkarahisar",
    countryID: "TR",
  },
  {
    name: "Ağrı",
    countryID: "TR",
  },
  {
    name: "Amasya",
    countryID: "TR",
  },
  {
    name: "Ankara",
    countryID: "TR",
  },
  {
    name: "Antalya",
    countryID: "TR",
  },
  {
    name: "Artvin",
    countryID: "TR",
  },
  {
    name: "Aydın",
    countryID: "TR",
  },
  {
    name: "Balıkesir",
    countryID: "TR",
  },
  {
    name: "Bilecik",
    countryID: "TR",
  },
  {
    name: "Bingöl",
    countryID: "TR",
  },
  {
    name: "Bitlis",
    countryID: "TR",
  },
  {
    name: "Bolu",
    countryID: "TR",
  },
  {
    name: "Burdur",
    countryID: "TR",
  },
  {
    name: "Bursa",
    countryID: "TR",
  },
  {
    name: "Çanakkale",
    countryID: "TR",
  },
  {
    name: "Çankırı",
    countryID: "TR",
  },
  {
    name: "Çorum",
    countryID: "TR",
  },
  {
    name: "Denizli",
    countryID: "TR",
  },
  {
    name: "Diyarbakır",
    countryID: "TR",
  },
  {
    name: "Edirne",
    countryID: "TR",
  },
  {
    name: "Elazığ",
    countryID: "TR",
  },
  {
    name: "Erzincan",
    countryID: "TR",
  },
  {
    name: "Erzurum",
    countryID: "TR",
  },
  {
    name: "Eskişehir",
    countryID: "TR",
  },
  {
    name: "Gaziantep",
    countryID: "TR",
  },
  {
    name: "Giresun",
    countryID: "TR",
  },
  {
    name: "Gümüşhane",
    countryID: "TR",
  },
  {
    name: "Hakkâri",
    countryID: "TR",
  },
  {
    name: "Hatay",
    countryID: "TR",
  },
  {
    name: "Isparta",
    countryID: "TR",
  },
  {
    name: "Mersin",
    countryID: "TR",
  },
  {
    name: "Istanbul",
    countryID: "TR",
  },
  {
    name: "İzmir",
    countryID: "TR",
  },
  {
    name: "Kars",
    countryID: "TR",
  },
  {
    name: "Kastamonu",
    countryID: "TR",
  },
  {
    name: "Kayseri",
    countryID: "TR",
  },
  {
    name: "Kırklareli",
    countryID: "TR",
  },
  {
    name: "Kırşehir",
    countryID: "TR",
  },
  {
    name: "Kocaeli",
    countryID: "TR",
  },
  {
    name: "Konya",
    countryID: "TR",
  },
  {
    name: "Kütahya",
    countryID: "TR",
  },
  {
    name: "Malatya",
    countryID: "TR",
  },
  {
    name: "Manisa",
    countryID: "TR",
  },
  {
    name: "Kahramanmaraş",
    countryID: "TR",
  },
  {
    name: "Mardin",
    countryID: "TR",
  },
  {
    name: "Muğla",
    countryID: "TR",
  },
  {
    name: "Muş",
    countryID: "TR",
  },
  {
    name: "Nevşehir",
    countryID: "TR",
  },
  {
    name: "Niğde",
    countryID: "TR",
  },
  {
    name: "Ordu",
    countryID: "TR",
  },
  {
    name: "Rize",
    countryID: "TR",
  },
  {
    name: "Sakarya",
    countryID: "TR",
  },
  {
    name: "Samsun",
    countryID: "TR",
  },
  {
    name: "Siirt",
    countryID: "TR",
  },
  {
    name: "Sinop",
    countryID: "TR",
  },
  {
    name: "Sivas",
    countryID: "TR",
  },
  {
    name: "Tekirdağ",
    countryID: "TR",
  },
  {
    name: "Tokat",
    countryID: "TR",
  },
  {
    name: "Trabzon",
    countryID: "TR",
  },
  {
    name: "Tunceli",
    countryID: "TR",
  },
  {
    name: "Şanlıurfa",
    countryID: "TR",
  },
  {
    name: "Uşak",
    countryID: "TR",
  },
  {
    name: "Van",
    countryID: "TR",
  },
  {
    name: "Yozgat",
    countryID: "TR",
  },
  {
    name: "Zonguldak",
    countryID: "TR",
  },
  {
    name: "Aksaray",
    countryID: "TR",
  },
  {
    name: "Bayburt",
    countryID: "TR",
  },
  {
    name: "Karaman",
    countryID: "TR",
  },
  {
    name: "Kırıkkale",
    countryID: "TR",
  },
  {
    name: "Batman",
    countryID: "TR",
  },
  {
    name: "Şırnak",
    countryID: "TR",
  },
  {
    name: "Bartın",
    countryID: "TR",
  },
  {
    name: "Ardahan",
    countryID: "TR",
  },
  {
    name: "Iğdır",
    countryID: "TR",
  },
  {
    name: "Yalova",
    countryID: "TR",
  },
  {
    name: "Karabük",
    countryID: "TR",
  },
  {
    name: "Kilis",
    countryID: "TR",
  },
  {
    name: "Osmaniye",
    countryID: "TR",
  },
  {
    name: "Düzce",
    countryID: "TR",
  },
  {
    id: "ID-AC",
    name: "Special Region of Aceh",
    countryID: "ID",
  },
  {
    id: "ID-BA",
    name: "Bali",
    countryID: "ID",
  },
  {
    id: "ID-BB",
    name: "Bangka–Belitung Islands",
    countryID: "ID",
  },
  {
    id: "ID-BT",
    name: "Banten",
    countryID: "ID",
  },
  {
    id: "ID-BE",
    name: "Bengkulu",
    countryID: "ID",
  },
  {
    id: "ID-JT",
    name: "Central Java",
    countryID: "ID",
  },
  {
    id: "ID-KT",
    name: "Central Kalimantan",
    countryID: "ID",
  },
  {
    id: "ID-ST",
    name: "Central Sulawesi",
    countryID: "ID",
  },
  {
    id: "ID-JI",
    name: "East Java",
    countryID: "ID",
  },
  {
    id: "ID-KI",
    name: "East Kalimantan",
    countryID: "ID",
  },
  {
    id: "ID-NT",
    name: "East Nusa Tenggara",
    countryID: "ID",
  },
  {
    id: "ID-GO",
    name: "Gorontalo",
    countryID: "ID",
  },
  {
    id: "ID-JK",
    name: "Jakarta Special Capital Region",
    countryID: "ID",
  },
  {
    id: "ID-JA",
    name: "Jambi",
    countryID: "ID",
  },
  {
    id: "ID-LA",
    name: "Lampung",
    countryID: "ID",
  },
  {
    id: "ID-MA",
    name: "Maluku",
    countryID: "ID",
  },
  {
    id: "ID-KU",
    name: "North Kalimantan",
    countryID: "ID",
  },
  {
    id: "ID-MU",
    name: "North Maluku",
    countryID: "ID",
  },
  {
    id: "ID-SA",
    name: "North Sulawesi",
    countryID: "ID",
  },
  {
    id: "ID-SU",
    name: "North Sumatra",
    countryID: "ID",
  },
  {
    id: "ID-PA",
    name: "Special Region of Papua",
    countryID: "ID",
  },
  {
    id: "ID-RI",
    name: "Riau",
    countryID: "ID",
  },
  {
    id: "ID-KR",
    name: "Riau Islands",
    countryID: "ID",
  },
  {
    id: "ID-SG",
    name: "Southeast Sulawesi",
    countryID: "ID",
  },
  {
    id: "ID-KS",
    name: "South Kalimantan",
    countryID: "ID",
  },
  {
    id: "ID-SN",
    name: "South Sulawesi",
    countryID: "ID",
  },
  {
    id: "ID-SS",
    name: "South Sumatra",
    countryID: "ID",
  },
  {
    id: "ID-JB",
    name: "West Java",
    countryID: "ID",
  },
  {
    id: "ID-KB",
    name: "West Kalimantan",
    countryID: "ID",
  },
  {
    id: "ID-NB",
    name: "West Nusa Tenggara",
    countryID: "ID",
  },
  {
    id: "ID-PB",
    name: "Special Region of West Papua",
    countryID: "ID",
  },
  {
    id: "ID-SR",
    name: "West Sulawesi",
    countryID: "ID",
  },
  {
    id: "ID-SB",
    name: "West Sumatra",
    countryID: "ID",
  },
  {
    id: "ID-YO",
    name: "Special Region of Yogyakarta",
    countryID: "ID",
  },
  {
    name: "Irbid",
    countryID: "JO",
  },
  {
    name: "Ajloun",
    countryID: "JO",
  },
  {
    name: "Jerash",
    countryID: "JO",
  },
  {
    name: "Mafraq",
    countryID: "JO",
  },
  {
    name: "Balqa",
    countryID: "JO",
  },
  {
    name: "Amman",
    countryID: "JO",
  },
  {
    name: "Zarqa",
    countryID: "JO",
  },
  {
    name: "Madaba",
    countryID: "JO",
  },
  {
    name: "Karak",
    countryID: "JO",
  },
  {
    name: "Tafilah",
    countryID: "JO",
  },
  {
    name: "Ma'an",
    countryID: "JO",
  },
  {
    name: "Aqaba",
    countryID: "JO",
  },
  {
    id: "AP",
    name: "Andhra Pradesh",
    countryID: "IN",
  },
  {
    id: "AR",
    name: "Arunachal Pradesh",
    countryID: "IN",
  },
  {
    id: "AS",
    name: "Assam",
    countryID: "IN",
  },
  {
    id: "BR",
    name: "Bihar",
    countryID: "IN",
  },
  {
    id: "CT",
    name: "Chhattisgarh",
    countryID: "IN",
  },
  {
    id: "GA",
    name: "Goa",
    countryID: "IN",
  },
  {
    id: "GJ",
    name: "Gujarat",
    countryID: "IN",
  },
  {
    id: "HR",
    name: "Haryana",
    countryID: "IN",
  },
  {
    id: "HP",
    name: "Himachal Pradesh",
    countryID: "IN",
  },
  {
    id: "JK",
    name: "Jammu and Kashmir",
    countryID: "IN",
  },
  {
    id: "JH",
    name: "Jharkhand",
    countryID: "IN",
  },
  {
    id: "KA",
    name: "Karnataka",
    countryID: "IN",
  },
  {
    id: "KL",
    name: "Kerala",
    countryID: "IN",
  },
  {
    id: "MP",
    name: "Madhya Pradesh",
    countryID: "IN",
  },
  {
    id: "MH",
    name: "Maharashtra",
    countryID: "IN",
  },
  {
    id: "MN",
    name: "Manipur",
    countryID: "IN",
  },
  {
    id: "ML",
    name: "Meghalaya",
    countryID: "IN",
  },
  {
    id: "MZ",
    name: "Mizoram",
    countryID: "IN",
  },
  {
    id: "NL",
    name: "Nagaland",
    countryID: "IN",
  },
  {
    id: "OR",
    name: "Odisha",
    countryID: "IN",
  },
  {
    id: "PB",
    name: "Punjab",
    countryID: "IN",
  },
  {
    id: "RJ",
    name: "Rajasthan",
    countryID: "IN",
  },
  {
    id: "SK",
    name: "Sikkim",
    countryID: "IN",
  },
  {
    id: "TN",
    name: "Tamil Nadu",
    countryID: "IN",
  },
  {
    id: "TG",
    name: "Telangana",
    countryID: "IN",
  },
  {
    id: "TR",
    name: "Tripura",
    countryID: "IN",
  },
  {
    id: "UP",
    name: "Uttar Pradesh",
    countryID: "IN",
  },
  {
    id: "UT",
    name: "Uttarakhand",
    countryID: "IN",
  },
  {
    id: "WB",
    name: "West Bengal",
    countryID: "IN",
  },
  {
    id: "AN",
    name: "Andaman and Nicobar Islands",
    countryID: "IN",
  },
  {
    id: "CH",
    name: "Chandigarh",
    countryID: "IN",
  },
  {
    id: "DN",
    name: "Dadra and Nagar Haveli",
    countryID: "IN",
  },
  {
    id: "DD",
    name: "Daman and Diu",
    countryID: "IN",
  },
  {
    id: "LD",
    name: "Lakshadweep",
    countryID: "IN",
  },
  {
    id: "DL",
    name: "National Capital Territory of Delhi",
    countryID: "IN",
  },
  {
    id: "PY",
    name: "Puducherry",
    countryID: "IN",
  },
  {
    name: "ភ្នំពេញ",
    english: "Phnom Penh Municipality",
    countryID: "KH",
  },
  {
    name: "បន្ទាយមានជ័យ",
    english: "Banteay Meanchey",
    countryID: "KH",
  },
  {
    name: "បាត់ដំបង",
    english: "Battambang",
    countryID: "KH",
  },
  {
    name: "កំពង់ចាម",
    english: "Kampong Cham",
    countryID: "KH",
  },
  {
    name: "កំពង់ឆ្នាំង",
    english: "Kampong Chhnang",
    countryID: "KH",
  },
  {
    name: "កំពង់ស្ពឺ",
    english: "Kampong Speu",
    countryID: "KH",
  },
  {
    name: "កំពង់ធំ",
    english: "Kampong Thom",
    countryID: "KH",
  },
  {
    name: "កំពត",
    english: "Kampot",
    countryID: "KH",
  },
  {
    name: "កណ្តាល",
    english: "Kandal",
    countryID: "KH",
  },
  {
    name: "កោះកុង",
    english: "Koh Kong",
    countryID: "KH",
  },
  {
    name: "កែប",
    english: "Kep",
    countryID: "KH",
  },
  {
    name: "ក្រចេះ",
    english: "Kratié",
    countryID: "KH",
  },
  {
    name: "មណ្ឌលគីរី",
    english: "Mondulkiri",
    countryID: "KH",
  },
  {
    name: "ឧត្តរមានជ័យ",
    english: "Oddar Meanchey",
    countryID: "KH",
  },
  {
    name: "បៃលិន",
    english: "Pailin",
    countryID: "KH",
  },
  {
    name: "ព្រះសីហនុ",
    english: "Preah Sihanouk",
    countryID: "KH",
  },
  {
    name: "ព្រះវិហារ",
    english: "Preah Vihear",
    countryID: "KH",
  },
  {
    name: "ពោធិ៍សាត់",
    english: "Pursat",
    countryID: "KH",
  },
  {
    name: "ព្រៃវែង",
    english: "Prey Veng",
    countryID: "KH",
  },
  {
    name: "រតនគីរី",
    english: "Ratanakiri",
    countryID: "KH",
  },
  {
    name: "សៀមរាប",
    english: "Siem Reap",
    countryID: "KH",
  },
  {
    name: "ស្ទឹងត្រែង",
    english: "Stung Treng",
    countryID: "KH",
  },
  {
    name: "ស្វាយរៀង",
    english: "Svay Rieng",
    countryID: "KH",
  },
  {
    name: "តាកែវ",
    english: "Takéo",
    countryID: "KH",
  },
  {
    name: "ត្បូងឃ្មុំ",
    english: "Tbong Khmum",
    countryID: "KH",
  },
  {
    name: "Addis Ababa",
    countryID: "ET",
  },
  {
    name: "Afar Region",
    countryID: "ET",
  },
  {
    name: "Amhara Region",
    countryID: "ET",
  },
  {
    name: "Benishangul-Gumuz",
    countryID: "ET",
  },
  {
    name: "Dire Dawa",
    countryID: "ET",
  },
  {
    name: "Gambela",
    countryID: "ET",
  },
  {
    name: "Harari",
    countryID: "ET",
  },
  {
    name: "Oromia",
    countryID: "ET",
  },
  {
    name: "Somali",
    countryID: "ET",
  },
  {
    name: "Southern Nations, Nationalities, and Peoples' Region",
    countryID: "ET",
  },
  {
    name: "Tigray Region",
    countryID: "ET",
  },
  {
    name: "Chachapoyas",
    region: "Amazonas",
    countryID: "PE",
  },
  {
    name: "Bagua",
    region: "Amazonas",
    countryID: "PE",
  },
  {
    name: "Bongará",
    region: "Amazonas",
    countryID: "PE",
  },
  {
    name: "Condorcanqui",
    region: "Amazonas",
    countryID: "PE",
  },
  {
    name: "Luya",
    region: "Amazonas",
    countryID: "PE",
  },
  {
    name: "Rodríguez de Mendoza",
    region: "Amazonas",
    countryID: "PE",
  },
  {
    name: "Utcubamba",
    region: "Amazonas",
    countryID: "PE",
  },
  {
    name: "Huaraz",
    region: "Ancash",
    countryID: "PE",
  },
  {
    name: "Aija",
    region: "Ancash",
    countryID: "PE",
  },
  {
    name: "Antonio Raymondi",
    region: "Ancash",
    countryID: "PE",
  },
  {
    name: "Asunción",
    region: "Ancash",
    countryID: "PE",
  },
  {
    name: "Bolognesi",
    region: "Ancash",
    countryID: "PE",
  },
  {
    name: "Carhuaz",
    region: "Ancash",
    countryID: "PE",
  },
  {
    name: "Carlos Fermín Fitzcarrald",
    region: "Ancash",
    countryID: "PE",
  },
  {
    name: "Casma",
    region: "Ancash",
    countryID: "PE",
  },
  {
    name: "Corongo",
    region: "Ancash",
    countryID: "PE",
  },
  {
    name: "Huari",
    region: "Ancash",
    countryID: "PE",
  },
  {
    name: "Huarmey",
    region: "Ancash",
    countryID: "PE",
  },
  {
    name: "Huaylas",
    region: "Ancash",
    countryID: "PE",
  },
  {
    name: "Mariscal Luzuriaga",
    region: "Ancash",
    countryID: "PE",
  },
  {
    name: "Ocros",
    region: "Ancash",
    countryID: "PE",
  },
  {
    name: "Pallasca",
    region: "Ancash",
    countryID: "PE",
  },
  {
    name: "Pomabamba",
    region: "Ancash",
    countryID: "PE",
  },
  {
    name: "Recuay",
    region: "Ancash",
    countryID: "PE",
  },
  {
    name: "Santa",
    region: "Ancash",
    countryID: "PE",
  },
  {
    name: "Sihuas",
    region: "Ancash",
    countryID: "PE",
  },
  {
    name: "Yungay",
    region: "Ancash",
    countryID: "PE",
  },
  {
    name: "Abancay",
    region: "Apurímac",
    countryID: "PE",
  },
  {
    name: "Andahuaylas",
    region: "Apurímac",
    countryID: "PE",
  },
  {
    name: "Antabamba",
    region: "Apurímac",
    countryID: "PE",
  },
  {
    name: "Aymaraes",
    region: "Apurímac",
    countryID: "PE",
  },
  {
    name: "Cotabambas",
    region: "Apurímac",
    countryID: "PE",
  },
  {
    name: "Chincheros",
    region: "Apurímac",
    countryID: "PE",
  },
  {
    name: "Grau",
    region: "Apurímac",
    countryID: "PE",
  },
  {
    name: "Arequipa",
    region: "Arequipa",
    countryID: "PE",
  },
  {
    name: "Camaná",
    region: "Arequipa",
    countryID: "PE",
  },
  {
    name: "Caravelí",
    region: "Arequipa",
    countryID: "PE",
  },
  {
    name: "Castilla",
    region: "Arequipa",
    countryID: "PE",
  },
  {
    name: "Caylloma",
    region: "Arequipa",
    countryID: "PE",
  },
  {
    name: "Condesuyos",
    region: "Arequipa",
    countryID: "PE",
  },
  {
    name: "Islay",
    region: "Arequipa",
    countryID: "PE",
  },
  {
    name: "La Unión",
    region: "Arequipa",
    countryID: "PE",
  },
  {
    name: "Huamanga",
    region: "Ayacucho",
    countryID: "PE",
  },
  {
    name: "Cangallo",
    region: "Ayacucho",
    countryID: "PE",
  },
  {
    name: "Huanca Sancos",
    region: "Ayacucho",
    countryID: "PE",
  },
  {
    name: "Huanta",
    region: "Ayacucho",
    countryID: "PE",
  },
  {
    name: "La Mar",
    region: "Ayacucho",
    countryID: "PE",
  },
  {
    name: "Lucanas",
    region: "Ayacucho",
    countryID: "PE",
  },
  {
    name: "Parinacochas",
    region: "Ayacucho",
    countryID: "PE",
  },
  {
    name: "Páucar del Sara Sara",
    region: "Ayacucho",
    countryID: "PE",
  },
  {
    name: "Sucre",
    region: "Ayacucho",
    countryID: "PE",
  },
  {
    name: "Víctor Fajardo",
    region: "Ayacucho",
    countryID: "PE",
  },
  {
    name: "Vilcas Huamán",
    region: "Ayacucho",
    countryID: "PE",
  },
  {
    name: "Cajamarca",
    region: "Cajamarca",
    countryID: "PE",
  },
  {
    name: "Cajabamba",
    region: "Cajamarca",
    countryID: "PE",
  },
  {
    name: "Celendín",
    region: "Cajamarca",
    countryID: "PE",
  },
  {
    name: "Chota",
    region: "Cajamarca",
    countryID: "PE",
  },
  {
    name: "Contumazá",
    region: "Cajamarca",
    countryID: "PE",
  },
  {
    name: "Cutervo",
    region: "Cajamarca",
    countryID: "PE",
  },
  {
    name: "Hualgayoc",
    region: "Cajamarca",
    countryID: "PE",
  },
  {
    name: "Jaén",
    region: "Cajamarca",
    countryID: "PE",
  },
  {
    name: "San Ignacio",
    region: "Cajamarca",
    countryID: "PE",
  },
  {
    name: "San Marcos",
    region: "Cajamarca",
    countryID: "PE",
  },
  {
    name: "San Miguel",
    region: "Cajamarca",
    countryID: "PE",
  },
  {
    name: "San Pablo",
    region: "Cajamarca",
    countryID: "PE",
  },
  {
    name: "Santa Cruz",
    region: "Cajamarca",
    countryID: "PE",
  },
  {
    name: "Callao",
    region: "Callao",
    countryID: "PE",
  },
  {
    name: "Cusco",
    region: "Cusco",
    countryID: "PE",
  },
  {
    name: "Acomayo",
    region: "Cusco",
    countryID: "PE",
  },
  {
    name: "Anta",
    region: "Cusco",
    countryID: "PE",
  },
  {
    name: "Calca",
    region: "Cusco",
    countryID: "PE",
  },
  {
    name: "Canas",
    region: "Cusco",
    countryID: "PE",
  },
  {
    name: "Canchis",
    region: "Cusco",
    countryID: "PE",
  },
  {
    name: "Chumbivilcas",
    region: "Cusco",
    countryID: "PE",
  },
  {
    name: "Espinar",
    region: "Cusco",
    countryID: "PE",
  },
  {
    name: "La Convención",
    region: "Cusco",
    countryID: "PE",
  },
  {
    name: "Paruro",
    region: "Cusco",
    countryID: "PE",
  },
  {
    name: "Paucartambo",
    region: "Cusco",
    countryID: "PE",
  },
  {
    name: "Quispicanchi",
    region: "Cusco",
    countryID: "PE",
  },
  {
    name: "Urubamba",
    region: "Cusco",
    countryID: "PE",
  },
  {
    name: "Huancavelica",
    region: "Huancavelica",
    countryID: "PE",
  },
  {
    name: "Acobamba",
    region: "Huancavelica",
    countryID: "PE",
  },
  {
    name: "Angaraes",
    region: "Huancavelica",
    countryID: "PE",
  },
  {
    name: "Castrovirreyna",
    region: "Huancavelica",
    countryID: "PE",
  },
  {
    name: "Churcampa",
    region: "Huancavelica",
    countryID: "PE",
  },
  {
    name: "Huaytará",
    region: "Huancavelica",
    countryID: "PE",
  },
  {
    name: "Tayacaja",
    region: "Huancavelica",
    countryID: "PE",
  },
  {
    name: "Huánuco",
    region: "Huánuco",
    countryID: "PE",
  },
  {
    name: "Ambo",
    region: "Huánuco",
    countryID: "PE",
  },
  {
    name: "Dos de Mayo",
    region: "Huánuco",
    countryID: "PE",
  },
  {
    name: "Huacaybamba",
    region: "Huánuco",
    countryID: "PE",
  },
  {
    name: "Huamalíes",
    region: "Huánuco",
    countryID: "PE",
  },
  {
    name: "Leoncio Prado",
    region: "Huánuco",
    countryID: "PE",
  },
  {
    name: "Marañón",
    region: "Huánuco",
    countryID: "PE",
  },
  {
    name: "Pachitea",
    region: "Huánuco",
    countryID: "PE",
  },
  {
    name: "Puerto Inca",
    region: "Huánuco",
    countryID: "PE",
  },
  {
    name: "Lauricocha",
    region: "Huánuco",
    countryID: "PE",
  },
  {
    name: "Yarowilca",
    region: "Huánuco",
    countryID: "PE",
  },
  {
    name: "Ica",
    region: "Ica",
    countryID: "PE",
  },
  {
    name: "Chincha",
    region: "Ica",
    countryID: "PE",
  },
  {
    name: "Nazca",
    region: "Ica",
    countryID: "PE",
  },
  {
    name: "Palpa",
    region: "Ica",
    countryID: "PE",
  },
  {
    name: "Pisco",
    region: "Ica",
    countryID: "PE",
  },
  {
    name: "Huancayo",
    region: "Junín",
    countryID: "PE",
  },
  {
    name: "Concepción",
    region: "Junín",
    countryID: "PE",
  },
  {
    name: "Chanchamayo",
    region: "Junín",
    countryID: "PE",
  },
  {
    name: "Jauja",
    region: "Junín",
    countryID: "PE",
  },
  {
    name: "Junín",
    region: "Junín",
    countryID: "PE",
  },
  {
    name: "Satipo",
    region: "Junín",
    countryID: "PE",
  },
  {
    name: "Tarma",
    region: "Junín",
    countryID: "PE",
  },
  {
    name: "Yauli",
    region: "Junín",
    countryID: "PE",
  },
  {
    name: "Chupaca",
    region: "Junín",
    countryID: "PE",
  },
  {
    name: "Trujillo",
    region: "La Libertad",
    countryID: "PE",
  },
  {
    name: "Ascope",
    region: "La Libertad",
    countryID: "PE",
  },
  {
    name: "Bolívar",
    region: "La Libertad",
    countryID: "PE",
  },
  {
    name: "Chepén",
    region: "La Libertad",
    countryID: "PE",
  },
  {
    name: "Julcán",
    region: "La Libertad",
    countryID: "PE",
  },
  {
    name: "Otuzco",
    region: "La Libertad",
    countryID: "PE",
  },
  {
    name: "Pacasmayo",
    region: "La Libertad",
    countryID: "PE",
  },
  {
    name: "Pataz",
    region: "La Libertad",
    countryID: "PE",
  },
  {
    name: "Sánchez Carrión",
    region: "La Libertad",
    countryID: "PE",
  },
  {
    name: "Santiago de Chuco",
    region: "La Libertad",
    countryID: "PE",
  },
  {
    name: "Gran Chimú",
    region: "La Libertad",
    countryID: "PE",
  },
  {
    name: "Virú",
    region: "La Libertad",
    countryID: "PE",
  },
  {
    name: "Chiclayo",
    region: "Lambayeque",
    countryID: "PE",
  },
  {
    name: "Ferreñafe",
    region: "Lambayeque",
    countryID: "PE",
  },
  {
    name: "Lambayeque",
    region: "Lambayeque",
    countryID: "PE",
  },
  {
    name: "Lima",
    region: "autonomous",
    countryID: "PE",
  },
  {
    name: "Huaura",
    region: "Lima",
    countryID: "PE",
  },
  {
    name: "Barranca",
    region: "Lima",
    countryID: "PE",
  },
  {
    name: "Cajatambo",
    region: "Lima",
    countryID: "PE",
  },
  {
    name: "Canta",
    region: "Lima",
    countryID: "PE",
  },
  {
    name: "Cañete",
    region: "Lima",
    countryID: "PE",
  },
  {
    name: "Huaral",
    region: "Lima",
    countryID: "PE",
  },
  {
    name: "Huarochirí",
    region: "Lima",
    countryID: "PE",
  },
  {
    name: "Oyón",
    region: "Lima",
    countryID: "PE",
  },
  {
    name: "Yauyos",
    region: "Lima",
    countryID: "PE",
  },
  {
    name: "Maynas",
    region: "Loreto",
    countryID: "PE",
  },
  {
    name: "Alto Amazonas",
    region: "Loreto",
    countryID: "PE",
  },
  {
    name: "Loreto",
    region: "Loreto",
    countryID: "PE",
  },
  {
    name: "Mariscal Ramón Castilla",
    region: "Loreto",
    countryID: "PE",
  },
  {
    name: "Putumayo",
    region: "Loreto",
    countryID: "PE",
  },
  {
    name: "Requena",
    region: "Loreto",
    countryID: "PE",
  },
  {
    name: "Ucayali",
    region: "Loreto",
    countryID: "PE",
  },
  {
    name: "Datem del Marañón",
    region: "Loreto",
    countryID: "PE",
  },
  {
    name: "Tambopata",
    region: "Madre de Dios",
    countryID: "PE",
  },
  {
    name: "Manú",
    region: "Madre de Dios",
    countryID: "PE",
  },
  {
    name: "Tahuamanu",
    region: "Madre de Dios",
    countryID: "PE",
  },
  {
    name: "Mariscal Nieto",
    region: "Moquegua",
    countryID: "PE",
  },
  {
    name: "General Sánchez Cerro",
    region: "Moquegua",
    countryID: "PE",
  },
  {
    name: "Ilo",
    region: "Moquegua",
    countryID: "PE",
  },
  {
    name: "Pasco",
    region: "Pasco",
    countryID: "PE",
  },
  {
    name: "Daniel Alcídes Carrión",
    region: "Pasco",
    countryID: "PE",
  },
  {
    name: "Oxapampa",
    region: "Pasco",
    countryID: "PE",
  },
  {
    name: "Piura",
    region: "Piura",
    countryID: "PE",
  },
  {
    name: "Ayabaca",
    region: "Piura",
    countryID: "PE",
  },
  {
    name: "Huancabamba",
    region: "Piura",
    countryID: "PE",
  },
  {
    name: "Morropón",
    region: "Piura",
    countryID: "PE",
  },
  {
    name: "Paita",
    region: "Piura",
    countryID: "PE",
  },
  {
    name: "Sullana",
    region: "Piura",
    countryID: "PE",
  },
  {
    name: "Talara",
    region: "Piura",
    countryID: "PE",
  },
  {
    name: "Sechura",
    region: "Piura",
    countryID: "PE",
  },
  {
    name: "Puno",
    region: "Puno",
    countryID: "PE",
  },
  {
    name: "Azángaro",
    region: "Puno",
    countryID: "PE",
  },
  {
    name: "Carabaya",
    region: "Puno",
    countryID: "PE",
  },
  {
    name: "Chucuito",
    region: "Puno",
    countryID: "PE",
  },
  {
    name: "El Collao",
    region: "Puno",
    countryID: "PE",
  },
  {
    name: "Huancané",
    region: "Puno",
    countryID: "PE",
  },
  {
    name: "Lampa",
    region: "Puno",
    countryID: "PE",
  },
  {
    name: "Melgar",
    region: "Puno",
    countryID: "PE",
  },
  {
    name: "Moho",
    region: "Puno",
    countryID: "PE",
  },
  {
    name: "San Antonio de Putina",
    region: "Puno",
    countryID: "PE",
  },
  {
    name: "San Román",
    region: "Puno",
    countryID: "PE",
  },
  {
    name: "Sandia",
    region: "Puno",
    countryID: "PE",
  },
  {
    name: "Yunguyo",
    region: "Puno",
    countryID: "PE",
  },
  {
    name: "Moyobamba",
    region: "San Martín",
    countryID: "PE",
  },
  {
    name: "Bellavista",
    region: "San Martín",
    countryID: "PE",
  },
  {
    name: "El Dorado",
    region: "San Martín",
    countryID: "PE",
  },
  {
    name: "Huallaga",
    region: "San Martín",
    countryID: "PE",
  },
  {
    name: "Lamas",
    region: "San Martín",
    countryID: "PE",
  },
  {
    name: "Mariscal Cáceres",
    region: "San Martín",
    countryID: "PE",
  },
  {
    name: "Picota",
    region: "San Martín",
    countryID: "PE",
  },
  {
    name: "Rioja",
    region: "San Martín",
    countryID: "PE",
  },
  {
    name: "San Martín",
    region: "San Martín",
    countryID: "PE",
  },
  {
    name: "Tocache",
    region: "San Martín",
    countryID: "PE",
  },
  {
    name: "Tacna",
    region: "Tacna",
    countryID: "PE",
  },
  {
    name: "Candarave",
    region: "Tacna",
    countryID: "PE",
  },
  {
    name: "Jorge Basadre",
    region: "Tacna",
    countryID: "PE",
  },
  {
    name: "Tarata",
    region: "Tacna",
    countryID: "PE",
  },
  {
    name: "Tumbes",
    region: "Tumbes",
    countryID: "PE",
  },
  {
    name: "Contralmirante Villar",
    region: "Tumbes",
    countryID: "PE",
  },
  {
    name: "Zarumilla",
    region: "Tumbes",
    countryID: "PE",
  },
  {
    name: "Coronel Portillo",
    region: "Ucayali",
    countryID: "PE",
  },
  {
    name: "Atalaya",
    region: "Ucayali",
    countryID: "PE",
  },
  {
    name: "Padre Abad",
    region: "Ucayali",
    countryID: "PE",
  },
  {
    name: "Purús",
    region: "Ucayali",
    countryID: "PE",
  },
  {
    name: "Camagüey",
    countryID: "CU",
  },
  {
    name: "Ciego de Ávila",
    countryID: "CU",
  },
  {
    name: "Cienfuegos",
    countryID: "CU",
  },
  {
    name: "Havana",
    countryID: "CU",
  },
  {
    name: "Bayamo",
    countryID: "CU",
  },
  {
    name: "Guantánamo",
    countryID: "CU",
  },
  {
    name: "Holguín",
    countryID: "CU",
  },
  {
    name: "Nueva Gerona",
    countryID: "CU",
  },
  {
    name: "Artemisa",
    countryID: "CU",
  },
  {
    name: "Las Tunas",
    countryID: "CU",
  },
  {
    name: "Matanzas",
    countryID: "CU",
  },
  {
    name: "San José de las Lajas",
    countryID: "CU",
  },
  {
    name: "Pinar del Río",
    countryID: "CU",
  },
  {
    name: "Sancti Spíritus",
    countryID: "CU",
  },
  {
    name: "Santiago de Cuba",
    countryID: "CU",
  },
  {
    name: "Santa Clara",
    countryID: "CU",
  },
  {
    name: "Ciudad Autónoma de Buenos Aires",
    countryID: "AR",
  },
  {
    name: "Buenos Aires",
    countryID: "AR",
  },
  {
    name: "Catamarca",
    countryID: "AR",
  },
  {
    name: "Chaco",
    countryID: "AR",
  },
  {
    name: "Chubut",
    countryID: "AR",
  },
  {
    name: "Córdoba",
    countryID: "AR",
  },
  {
    name: "Corrientes",
    countryID: "AR",
  },
  {
    name: "Entre Ríos",
    countryID: "AR",
  },
  {
    name: "Formosa",
    countryID: "AR",
  },
  {
    name: "Jujuy",
    countryID: "AR",
  },
  {
    name: "La Pampa",
    countryID: "AR",
  },
  {
    name: "La Rioja",
    countryID: "AR",
  },
  {
    name: "Mendoza",
    countryID: "AR",
  },
  {
    name: "Misiones",
    countryID: "AR",
  },
  {
    name: "Neuquén",
    countryID: "AR",
  },
  {
    name: "Río Negro",
    countryID: "AR",
  },
  {
    name: "Salta",
    countryID: "AR",
  },
  {
    name: "San Juan",
    countryID: "AR",
  },
  {
    name: "San Luis",
    countryID: "AR",
  },
  {
    name: "Santa Cruz",
    countryID: "AR",
  },
  {
    name: "Santa Fe",
    countryID: "AR",
  },
  {
    name: "Santiago del Estero",
    countryID: "AR",
  },
  {
    name: "Tierra del Fuego, Antártida e Islas del Atlántico Sur",
    countryID: "AR",
  },
  {
    name: "Tucumán",
    countryID: "AR",
  },
  {
    name: "Arica",
    region: "XV Arica and Parinacota",
    countryID: "CL",
  },
  {
    name: "Parinacota",
    region: "XV Arica and Parinacota",
    countryID: "CL",
  },
  {
    name: "Iquique",
    region: "I Tarapacá",
    countryID: "CL",
  },
  {
    name: "Tamarugal",
    region: "I Tarapacá",
    countryID: "CL",
  },
  {
    name: "Antofagasta",
    region: "II Antofagasta",
    countryID: "CL",
  },
  {
    name: "El Loa",
    region: "II Antofagasta",
    countryID: "CL",
  },
  {
    name: "Tocopilla",
    region: "II Antofagasta",
    countryID: "CL",
  },
  {
    name: "Copiapó",
    region: "III Atacama",
    countryID: "CL",
  },
  {
    name: "Huasco",
    region: "III Atacama",
    countryID: "CL",
  },
  {
    name: "Chañaral",
    region: "III Atacama",
    countryID: "CL",
  },
  {
    name: "Elqui",
    region: "IV Coquimbo",
    countryID: "CL",
  },
  {
    name: "Limarí",
    region: "IV Coquimbo",
    countryID: "CL",
  },
  {
    name: "Choapa",
    region: "IV Coquimbo",
    countryID: "CL",
  },
  {
    name: "Isla de Pascua",
    region: "V Valparaíso",
    countryID: "CL",
  },
  {
    name: "Los Andes",
    region: "V Valparaíso",
    countryID: "CL",
  },
  {
    name: "Marga Marga",
    region: "V Valparaíso",
    countryID: "CL",
  },
  {
    name: "Petorca",
    region: "V Valparaíso",
    countryID: "CL",
  },
  {
    name: "Quillota",
    region: "V Valparaíso",
    countryID: "CL",
  },
  {
    name: "San Antonio",
    region: "V Valparaíso",
    countryID: "CL",
  },
  {
    name: "San Felipe de Aconcagua",
    region: "V Valparaíso",
    countryID: "CL",
  },
  {
    name: "Valparaíso",
    region: "V Valparaíso",
    countryID: "CL",
  },
  {
    name: "Cachapoal",
    region: "VI O'Higgins",
    countryID: "CL",
  },
  {
    name: "Colchagua",
    region: "VI O'Higgins",
    countryID: "CL",
  },
  {
    name: "Cardenal Caro",
    region: "VI O'Higgins",
    countryID: "CL",
  },
  {
    name: "Talca",
    region: "VII Maule",
    countryID: "CL",
  },
  {
    name: "Linares",
    region: "VII Maule",
    countryID: "CL",
  },
  {
    name: "Curicó",
    region: "VII Maule",
    countryID: "CL",
  },
  {
    name: "Cauquenes",
    region: "VII Maule",
    countryID: "CL",
  },
  {
    name: "Concepción",
    region: "VIII Biobío",
    countryID: "CL",
  },
  {
    name: "Ñuble",
    region: "VIII Biobío",
    countryID: "CL",
  },
  {
    name: "Biobío",
    region: "VIII Biobío",
    countryID: "CL",
  },
  {
    name: "Arauco",
    region: "VIII Biobío",
    countryID: "CL",
  },
  {
    name: "Cautin",
    region: "IX Araucanía",
    countryID: "CL",
  },
  {
    name: "Malleco",
    region: "IX Araucanía",
    countryID: "CL",
  },
  {
    name: "Valdivia",
    region: "XIV Los Ríos",
    countryID: "CL",
  },
  {
    name: "Ranco",
    region: "XIV Los Ríos",
    countryID: "CL",
  },
  {
    name: "Llanquihue",
    region: "X Los Lagos",
    countryID: "CL",
  },
  {
    name: "Osorno",
    region: "X Los Lagos",
    countryID: "CL",
  },
  {
    name: "Chiloe",
    region: "X Los Lagos",
    countryID: "CL",
  },
  {
    name: "Palena",
    region: "X Los Lagos",
    countryID: "CL",
  },
  {
    name: "Coihaique",
    region: "XI Aisén",
    countryID: "CL",
  },
  {
    name: "Aisén",
    region: "XI Aisén",
    countryID: "CL",
  },
  {
    name: "General Carrera",
    region: "XI Aisén",
    countryID: "CL",
  },
  {
    name: "Capitan Prat",
    region: "XI Aisén",
    countryID: "CL",
  },
  {
    name: "Magallanes",
    region: "XII Magallanes",
    countryID: "CL",
  },
  {
    name: "Ultima Esperanza",
    region: "XII Magallanes",
    countryID: "CL",
  },
  {
    name: "Tierra del Fuego",
    region: "XII Magallanes",
    countryID: "CL",
  },
  {
    name: "Antártica Chilena",
    region: "XII Magallanes",
    countryID: "CL",
  },
  {
    name: "Santiago",
    region: "RM Santiago Metropolitan",
    countryID: "CL",
  },
  {
    name: "Cordillera",
    region: "RM Santiago Metropolitan",
    countryID: "CL",
  },
  {
    name: "Maipo",
    region: "RM Santiago Metropolitan",
    countryID: "CL",
  },
  {
    name: "Talagante",
    region: "RM Santiago Metropolitan",
    countryID: "CL",
  },
  {
    name: "Melipilla",
    region: "RM Santiago Metropolitan",
    countryID: "CL",
  },
  {
    name: "Chacabuco",
    region: "RM Santiago Metropolitan",
    countryID: "CL",
  },
  {
    name: "Cercado",
    region: "Beni",
    countryID: "BO",
  },
  {
    name: "Iténez",
    region: "Beni",
    countryID: "BO",
  },
  {
    name: "José Ballivián",
    region: "Beni",
    countryID: "BO",
  },
  {
    name: "Mamoré",
    region: "Beni",
    countryID: "BO",
  },
  {
    name: "Marbán",
    region: "Beni",
    countryID: "BO",
  },
  {
    name: "Moxos",
    region: "Beni",
    countryID: "BO",
  },
  {
    name: "Vaca Díez",
    region: "Beni",
    countryID: "BO",
  },
  {
    name: "Yacuma",
    region: "Beni",
    countryID: "BO",
  },
  {
    name: "Azurduy",
    region: "Chuquisaca",
    countryID: "BO",
  },
  {
    name: "Belisario Boeto",
    region: "Chuquisaca",
    countryID: "BO",
  },
  {
    name: "Hernando Siles",
    region: "Chuquisaca",
    countryID: "BO",
  },
  {
    name: "Jaime Zudáñez",
    region: "Chuquisaca",
    countryID: "BO",
  },
  {
    name: "Luis Calvo",
    region: "Chuquisaca",
    countryID: "BO",
  },
  {
    name: "Nor Cinti",
    region: "Chuquisaca",
    countryID: "BO",
  },
  {
    name: "Oropeza",
    region: "Chuquisaca",
    countryID: "BO",
  },
  {
    name: "Sud Cinti",
    region: "Chuquisaca",
    countryID: "BO",
  },
  {
    name: "Tomina",
    region: "Chuquisaca",
    countryID: "BO",
  },
  {
    name: "Yamparáez",
    region: "Chuquisaca",
    countryID: "BO",
  },
  {
    name: "Arani",
    region: "Cochabamba",
    countryID: "BO",
  },
  {
    name: "Arque",
    region: "Cochabamba",
    countryID: "BO",
  },
  {
    name: "Ayopaya",
    region: "Cochabamba",
    countryID: "BO",
  },
  {
    name: "Capinota",
    region: "Cochabamba",
    countryID: "BO",
  },
  {
    name: "Carrasco",
    region: "Cochabamba",
    countryID: "BO",
  },
  {
    name: "Cercado",
    region: "Cochabamba",
    countryID: "BO",
  },
  {
    name: "Chapare",
    region: "Cochabamba",
    countryID: "BO",
  },
  {
    name: "Esteban Arce",
    region: "Cochabamba",
    countryID: "BO",
  },
  {
    name: "Germán Jordán",
    region: "Cochabamba",
    countryID: "BO",
  },
  {
    name: "Mizque",
    region: "Cochabamba",
    countryID: "BO",
  },
  {
    name: "Campero",
    region: "Cochabamba",
    countryID: "BO",
  },
  {
    name: "Punata",
    region: "Cochabamba",
    countryID: "BO",
  },
  {
    name: "Quillacollo",
    region: "Cochabamba",
    countryID: "BO",
  },
  {
    name: "Bolívar",
    region: "Cochabamba",
    countryID: "BO",
  },
  {
    name: "Tapacarí",
    region: "Cochabamba",
    countryID: "BO",
  },
  {
    name: "Tiraque",
    region: "Cochabamba",
    countryID: "BO",
  },
  {
    name: "Abel Iturralde",
    region: "La Paz",
    countryID: "BO",
  },
  {
    name: "Aroma",
    region: "La Paz",
    countryID: "BO",
  },
  {
    name: "Bautista Saavedra",
    region: "La Paz",
    countryID: "BO",
  },
  {
    name: "Caranavi",
    region: "La Paz",
    countryID: "BO",
  },
  {
    name: "Eliodoro Camacho",
    region: "La Paz",
    countryID: "BO",
  },
  {
    name: "Franz Tamayo",
    region: "La Paz",
    countryID: "BO",
  },
  {
    name: "Gualberto Villarroel",
    region: "La Paz",
    countryID: "BO",
  },
  {
    name: "Ingavi",
    region: "La Paz",
    countryID: "BO",
  },
  {
    name: "Inquisivi",
    region: "La Paz",
    countryID: "BO",
  },
  {
    name: "José Manuel Pando",
    region: "La Paz",
    countryID: "BO",
  },
  {
    name: "Larecaja",
    region: "La Paz",
    countryID: "BO",
  },
  {
    name: "Loayza",
    region: "La Paz",
    countryID: "BO",
  },
  {
    name: "Los Andes",
    region: "La Paz",
    countryID: "BO",
  },
  {
    name: "Manco Kapac",
    region: "La Paz",
    countryID: "BO",
  },
  {
    name: "Muñecas",
    region: "La Paz",
    countryID: "BO",
  },
  {
    name: "Nor Yungas",
    region: "La Paz",
    countryID: "BO",
  },
  {
    name: "Omasuyos",
    region: "La Paz",
    countryID: "BO",
  },
  {
    name: "Pacajes",
    region: "La Paz",
    countryID: "BO",
  },
  {
    name: "Murillo",
    region: "La Paz",
    countryID: "BO",
  },
  {
    name: "Sud Yungas",
    region: "La Paz",
    countryID: "BO",
  },
  {
    name: "Atahuallpa",
    region: "Oruro",
    countryID: "BO",
  },
  {
    name: "Carangas",
    region: "Oruro",
    countryID: "BO",
  },
  {
    name: "Cercado",
    region: "Oruro",
    countryID: "BO",
  },
  {
    name: "Eduardo Avaroa",
    region: "Oruro",
    countryID: "BO",
  },
  {
    name: "Ladislao Cabrera",
    region: "Oruro",
    countryID: "BO",
  },
  {
    name: "Litoral",
    region: "Oruro",
    countryID: "BO",
  },
  {
    name: "Nor Carangas",
    region: "Oruro",
    countryID: "BO",
  },
  {
    name: "Pantaléon Dalence",
    region: "Oruro",
    countryID: "BO",
  },
  {
    name: "Poopó",
    region: "Oruro",
    countryID: "BO",
  },
  {
    name: "Puerto de Mejillones",
    region: "Oruro",
    countryID: "BO",
  },
  {
    name: "Sajama",
    region: "Oruro",
    countryID: "BO",
  },
  {
    name: "San Pedro de Totora",
    region: "Oruro",
    countryID: "BO",
  },
  {
    name: "Saucarí",
    region: "Oruro",
    countryID: "BO",
  },
  {
    name: "Sebastián Pagador",
    region: "Oruro",
    countryID: "BO",
  },
  {
    name: "Sud Carangas",
    region: "Oruro",
    countryID: "BO",
  },
  {
    name: "Tomas Barrón",
    region: "Oruro",
    countryID: "BO",
  },
  {
    name: "Abuná",
    region: "Pando",
    countryID: "BO",
  },
  {
    name: "Federico Román",
    region: "Pando",
    countryID: "BO",
  },
  {
    name: "Madre de Dios",
    region: "Pando",
    countryID: "BO",
  },
  {
    name: "Manuripi",
    region: "Pando",
    countryID: "BO",
  },
  {
    name: "Nicolás Suárez",
    region: "Pando",
    countryID: "BO",
  },
  {
    name: "Alonso de Ibáñez",
    region: "Potosí",
    countryID: "BO",
  },
  {
    name: "Antonio Quijarro",
    region: "Potosí",
    countryID: "BO",
  },
  {
    name: "Bernardino Bilbao",
    region: "Potosí",
    countryID: "BO",
  },
  {
    name: "Charcas",
    region: "Potosí",
    countryID: "BO",
  },
  {
    name: "Chayanta",
    region: "Potosí",
    countryID: "BO",
  },
  {
    name: "Cornelio Saavedra",
    region: "Potosí",
    countryID: "BO",
  },
  {
    name: "Daniel Campos",
    region: "Potosí",
    countryID: "BO",
  },
  {
    name: "Enrique Baldivieso",
    region: "Potosí",
    countryID: "BO",
  },
  {
    name: "José María Linares",
    region: "Potosí",
    countryID: "BO",
  },
  {
    name: "Modesto Omiste",
    region: "Potosí",
    countryID: "BO",
  },
  {
    name: "Nor Chichas",
    region: "Potosí",
    countryID: "BO",
  },
  {
    name: "Nor Lípez",
    region: "Potosí",
    countryID: "BO",
  },
  {
    name: "Rafael Bustillo",
    region: "Potosí",
    countryID: "BO",
  },
  {
    name: "Sur Chichas",
    region: "Potosí",
    countryID: "BO",
  },
  {
    name: "Sur Lípez",
    region: "Potosí",
    countryID: "BO",
  },
  {
    name: "Tomás Frías",
    region: "Potosí",
    countryID: "BO",
  },
  {
    name: "Andrés Ibáñez",
    region: "Santa Cruz",
    countryID: "BO",
  },
  {
    name: "Ángel Sandoval",
    region: "Santa Cruz",
    countryID: "BO",
  },
  {
    name: "Chiquitos",
    region: "Santa Cruz",
    countryID: "BO",
  },
  {
    name: "Cordillera",
    region: "Santa Cruz",
    countryID: "BO",
  },
  {
    name: "Florida",
    region: "Santa Cruz",
    countryID: "BO",
  },
  {
    name: "Germán Busch",
    region: "Santa Cruz",
    countryID: "BO",
  },
  {
    name: "Guarayos",
    region: "Santa Cruz",
    countryID: "BO",
  },
  {
    name: "Ichilo",
    region: "Santa Cruz",
    countryID: "BO",
  },
  {
    name: "Ignacio Warnes",
    region: "Santa Cruz",
    countryID: "BO",
  },
  {
    name: "José Miguel de Velasco",
    region: "Santa Cruz",
    countryID: "BO",
  },
  {
    name: "Manuel María Caballero",
    region: "Santa Cruz",
    countryID: "BO",
  },
  {
    name: "Ñuflo de Chávez",
    region: "Santa Cruz",
    countryID: "BO",
  },
  {
    name: "Obispo Santistevan",
    region: "Santa Cruz",
    countryID: "BO",
  },
  {
    name: "Sara",
    region: "Santa Cruz",
    countryID: "BO",
  },
  {
    name: "Vallegrande",
    region: "Santa Cruz",
    countryID: "BO",
  },
  {
    name: "Aniceto Arce",
    region: "Tarija",
    countryID: "BO",
  },
  {
    name: "Burnet O'Connor",
    region: "Tarija",
    countryID: "BO",
  },
  {
    name: "Cercado",
    region: "Tarija",
    countryID: "BO",
  },
  {
    name: "Eustaquio Méndez",
    region: "Tarija",
    countryID: "BO",
  },
  {
    name: "Gran Chaco",
    region: "Tarija",
    countryID: "BO",
  },
  {
    name: "José María Avilés",
    region: "Tarija",
    countryID: "BO",
  },
  {
    name: "La Coruña",
    id: "C",
    countryID: "ES",
  },
  {
    name: "Lugo",
    id: "LU",
    countryID: "ES",
  },
  {
    name: "Vizcaya",
    id: "BI",
    countryID: "ES",
  },
  {
    name: "Guipúzcoa",
    id: "SS",
    countryID: "ES",
  },
  {
    name: "Huesca",
    id: "HU",
    countryID: "ES",
  },
  {
    name: "Lérida",
    id: "L",
    countryID: "ES",
  },
  {
    name: "Gerona",
    id: "GI",
    countryID: "ES",
  },
  {
    name: "Barcelona",
    id: "B",
    countryID: "ES",
  },
  {
    name: "Tarragona",
    id: "T",
    countryID: "ES",
  },
  {
    name: "Castellón",
    id: "CS",
    countryID: "ES",
  },
  {
    name: "Valencia",
    id: "V",
    countryID: "ES",
  },
  {
    name: "Alicante",
    id: "A",
    countryID: "ES",
  },
  {
    name: "Murcia",
    id: "MU",
    countryID: "ES",
  },
  {
    name: "Zaragoza",
    id: "Z",
    countryID: "ES",
  },
  {
    name: "Teruel",
    id: "TE",
    countryID: "ES",
  },
  {
    name: "Cuenca",
    id: "CU",
    countryID: "ES",
  },
  {
    name: "Albacete",
    id: "AB",
    countryID: "ES",
  },
  {
    name: "Almeria",
    id: "AL",
    countryID: "ES",
  },
  {
    name: "Granada",
    id: "GR",
    countryID: "ES",
  },
  {
    name: "Málaga",
    id: "MA",
    countryID: "ES",
  },
  {
    name: "Tenerife",
    id: "TF",
    countryID: "ES",
  },
  {
    name: "Cádiz",
    id: "CA",
    countryID: "ES",
  },
  {
    name: "Sevilla",
    id: "SE",
    countryID: "ES",
  },
  {
    name: "Huelva",
    id: "H",
    countryID: "ES",
  },
  {
    name: "Las Palmas",
    id: "GC",
    countryID: "ES",
  },
  {
    name: "Madrid",
    id: "M",
    countryID: "ES",
  },
  {
    name: "Badajoz",
    id: "BA",
    countryID: "ES",
  },
  {
    name: "Cáceres",
    id: "CC",
    countryID: "ES",
  },
  {
    name: "Toledo",
    id: "TO",
    countryID: "ES",
  },
  {
    name: "Ciudad Real",
    id: "CR",
    countryID: "ES",
  },
  {
    name: "Salamanca",
    id: "SA",
    countryID: "ES",
  },
  {
    name: "Córdoba",
    id: "CO",
    countryID: "ES",
  },
  {
    name: "Jaén",
    id: "J",
    countryID: "ES",
  },
  {
    name: "Ávila",
    id: "AV",
    countryID: "ES",
  },
  {
    name: "Valladolid",
    id: "VA",
    countryID: "ES",
  },
  {
    name: "Zamora",
    id: "ZA",
    countryID: "ES",
  },
  {
    name: "Álava",
    id: "VI",
    countryID: "ES",
  },
  {
    name: "Segovia",
    id: "SG",
    countryID: "ES",
  },
  {
    name: "Burgos",
    id: "BU",
    countryID: "ES",
  },
  {
    name: "Pontevedra",
    id: "PO",
    countryID: "ES",
  },
  {
    name: "León",
    id: "LE",
    countryID: "ES",
  },
  {
    name: "Orense",
    id: "OU",
    countryID: "ES",
  },
  {
    name: "Palencia",
    id: "P",
    countryID: "ES",
  },
  {
    name: "La Rioja",
    id: "LO",
    countryID: "ES",
  },
  {
    name: "Soria",
    id: "SO",
    countryID: "ES",
  },
  {
    name: "Guadalajara",
    id: "GU",
    countryID: "ES",
  },
  {
    name: "বরগুনা",
    english: "Barguna",
    region: "Barisal",
    countryID: "BD",
  },
  {
    name: "বরিশাল",
    english: "Barisal",
    region: "Barisal",
    countryID: "BD",
  },
  {
    name: "ভোলা",
    english: "Bhola",
    region: "Barisal",
    countryID: "BD",
  },
  {
    name: "ঝালকাঠি",
    english: "Jhalokati",
    region: "Barisal",
    countryID: "BD",
  },
  {
    name: "পটুয়াখালী",
    english: "Patuakhali",
    region: "Barisal",
    countryID: "BD",
  },
  {
    name: "পিরোজপুর",
    english: "Pirojpur",
    region: "Barisal",
    countryID: "BD",
  },
  {
    name: "বান্দরবান",
    english: "Bandarban",
    region: "Chittagong",
    countryID: "BD",
  },
  {
    name: "ব্রাহ্মণবাড়ীয়া",
    english: "Brahmanbaria",
    region: "Chittagong",
    countryID: "BD",
  },
  {
    name: "চাঁদপুর",
    english: "Chandpur",
    region: "Chittagong",
    countryID: "BD",
  },
  {
    name: "চট্টগ্রাম",
    english: "Chittagong",
    region: "Chittagong",
    countryID: "BD",
  },
  {
    name: "কুমিল্লা",
    english: "Comilla",
    region: "Chittagong",
    countryID: "BD",
  },
  {
    name: "কক্সবাজার",
    english: "Cox's Bazar",
    region: "Chittagong",
    countryID: "BD",
  },
  {
    name: "ফেনী",
    english: "Feni",
    region: "Chittagong",
    countryID: "BD",
  },
  {
    name: "খাগড়াছড়ি",
    english: "Khagrachhari",
    region: "Chittagong",
    countryID: "BD",
  },
  {
    name: "লক্ষীপুর",
    english: "Lakshmipur",
    region: "Chittagong",
    countryID: "BD",
  },
  {
    name: "নোয়াখালী",
    english: "Noakhali",
    region: "Chittagong",
    countryID: "BD",
  },
  {
    name: "রাঙ্গামাটি",
    english: "Rangamati",
    region: "Chittagong",
    countryID: "BD",
  },
  {
    name: "ঢাকা",
    english: "Dhaka",
    region: "Dhaka",
    countryID: "BD",
  },
  {
    name: "ফরিদপুর",
    english: "Faridpur",
    region: "Dhaka",
    countryID: "BD",
  },
  {
    name: "গাজীপুর",
    english: "Gazipur",
    region: "Dhaka",
    countryID: "BD",
  },
  {
    name: "গোপালগঞ্জ",
    english: "Gopalganj",
    region: "Dhaka",
    countryID: "BD",
  },
  {
    name: "জামালপুর",
    english: "Jamalpur",
    region: "Dhaka",
    countryID: "BD",
  },
  {
    name: "কিশোরগঞ্জ",
    english: "Kishoreganj",
    region: "Dhaka",
    countryID: "BD",
  },
  {
    name: "মাদারীপুর",
    english: "Madaripur",
    region: "Dhaka",
    countryID: "BD",
  },
  {
    name: "মানিকগঞ্জ",
    english: "Manikganj",
    region: "Dhaka",
    countryID: "BD",
  },
  {
    name: "মুন্সীগঞ্জ",
    english: "Munshiganj",
    region: "Dhaka",
    countryID: "BD",
  },
  {
    name: "ময়মনসিংহ",
    english: "Mymensingh",
    region: "Dhaka",
    countryID: "BD",
  },
  {
    name: "নারায়ণগঞ্জ",
    english: "Narayanganj",
    region: "Dhaka",
    countryID: "BD",
  },
  {
    name: "নরসিংদী",
    english: "Narsingdi",
    region: "Dhaka",
    countryID: "BD",
  },
  {
    name: "নেত্রকোনা",
    english: "Netrakona",
    region: "Dhaka",
    countryID: "BD",
  },
  {
    name: "রাজবাড়ী",
    english: "Rajbari",
    region: "Dhaka",
    countryID: "BD",
  },
  {
    name: "শরীয়তপুর",
    english: "Shariatpur",
    region: "Dhaka",
    countryID: "BD",
  },
  {
    name: "শেরপুর",
    english: "Sherpur",
    region: "Dhaka",
    countryID: "BD",
  },
  {
    name: "টাঙ্গাইল",
    english: "Tangail",
    region: "Dhaka",
    countryID: "BD",
  },
  {
    name: "বাগেরহাট",
    english: "Bagerhat",
    region: "Khulna",
    countryID: "BD",
  },
  {
    name: "চুয়াডাঙ্গা",
    english: "Chuadanga",
    region: "Khulna",
    countryID: "BD",
  },
  {
    name: "যশোর",
    english: "Jessore",
    region: "Khulna",
    countryID: "BD",
  },
  {
    name: "ঝিনাইদহ",
    english: "Jhenaidah",
    region: "Khulna",
    countryID: "BD",
  },
  {
    name: "খুলনা",
    english: "Khulna",
    region: "Khulna",
    countryID: "BD",
  },
  {
    name: "কুষ্টিয়া",
    english: "Kushtia",
    region: "Khulna",
    countryID: "BD",
  },
  {
    name: "মাগুরা",
    english: "Magura",
    region: "Khulna",
    countryID: "BD",
  },
  {
    name: "মেহেরপুর",
    english: "Meherpur",
    region: "Khulna",
    countryID: "BD",
  },
  {
    name: "নড়াইল",
    english: "Narail",
    region: "Khulna",
    countryID: "BD",
  },
  {
    name: "সাতক্ষিরা",
    english: "Satkhira",
    region: "Khulna",
    countryID: "BD",
  },
  {
    name: "বগুড়া",
    english: "Bogra",
    region: "Rajshahi",
    countryID: "BD",
  },
  {
    name: "জয়পুরহাট",
    english: "Joypurhat",
    region: "Rajshahi",
    countryID: "BD",
  },
  {
    name: "নওগাঁ",
    english: "Naogaon",
    region: "Rajshahi",
    countryID: "BD",
  },
  {
    name: "নাটোর",
    english: "Natore",
    region: "Rajshahi",
    countryID: "BD",
  },
  {
    name: "নওয়াবগঞ্জ",
    english: "Chapainawabganj",
    region: "Rajshahi",
    countryID: "BD",
  },
  {
    name: "পাবনা",
    english: "Pabna",
    region: "Rajshahi",
    countryID: "BD",
  },
  {
    name: "রাজশাহী",
    english: "Rajshahi",
    region: "Rajshahi",
    countryID: "BD",
  },
  {
    name: "সিরাজগঞ্জ",
    english: "Sirajganj",
    region: "Rajshahi",
    countryID: "BD",
  },
  {
    name: "দিনাজপুর",
    english: "Dinajpur",
    region: "Rangpur",
    countryID: "BD",
  },
  {
    name: "গাইবান্ধা",
    english: "Gaibandha",
    region: "Rangpur",
    countryID: "BD",
  },
  {
    name: "কুড়িগ্রাম",
    english: "Kurigram",
    region: "Rangpur",
    countryID: "BD",
  },
  {
    name: "লালমনিরহাট",
    english: "Lalmonirhat",
    region: "Rangpur",
    countryID: "BD",
  },
  {
    name: "নীলফামারী",
    english: "Nilphamari",
    region: "Rangpur",
    countryID: "BD",
  },
  {
    name: "পঞ্চগড়",
    english: "Panchagarh",
    region: "Rangpur",
    countryID: "BD",
  },
  {
    name: "রংপুর",
    english: "Rangpur",
    region: "Rangpur",
    countryID: "BD",
  },
  {
    name: "ঠাকুরগাঁ",
    english: "Thakurgaon",
    region: "Rangpur",
    countryID: "BD",
  },
  {
    name: "হবিগঞ্জ",
    english: "Habiganj",
    region: "Sylhet",
    countryID: "BD",
  },
  {
    name: "মৌলভীবাজার",
    english: "Moulvibazar",
    region: "Sylhet",
    countryID: "BD",
  },
  {
    name: "সুনামগঞ্জ",
    english: "Sunamganj",
    region: "Sylhet",
    countryID: "BD",
  },
  {
    name: "সিলেট",
    english: "Sylhet",
    region: "Sylhet",
    countryID: "BD",
  },
  {
    name: "Azad Kashmir",
    countryID: "PK",
  },
  {
    name: "Bahawalpur",
    countryID: "PK",
  },
  {
    name: "Bannu",
    countryID: "PK",
  },
  {
    name: "Dera Ghazi Khan",
    countryID: "PK",
  },
  {
    name: "Dera Ismail Khan",
    countryID: "PK",
  },
  {
    name: "Faisalabad",
    countryID: "PK",
  },
  {
    name: "F.A.T.A.",
    countryID: "PK",
  },
  {
    name: "Gujranwala",
    countryID: "PK",
  },
  {
    name: "Hazara",
    countryID: "PK",
  },
  {
    name: "Hyderabad",
    countryID: "PK",
  },
  {
    name: "Islamabad",
    countryID: "PK",
  },
  {
    name: "Kalat",
    countryID: "PK",
  },
  {
    name: "Karachi",
    countryID: "PK",
  },
  {
    name: "Kohat",
    countryID: "PK",
  },
  {
    name: "Lahore",
    countryID: "PK",
  },
  {
    name: "Larkana",
    countryID: "PK",
  },
  {
    name: "Makran",
    countryID: "PK",
  },
  {
    name: "Malakand",
    countryID: "PK",
  },
  {
    name: "Mardan",
    countryID: "PK",
  },
  {
    name: "Mirpur Khas",
    countryID: "PK",
  },
  {
    name: "Multan",
    countryID: "PK",
  },
  {
    name: "Nasirabad",
    countryID: "PK",
  },
  {
    name: "Northern Areas",
    countryID: "PK",
  },
  {
    name: "Peshawar",
    countryID: "PK",
  },
  {
    name: "Quetta",
    countryID: "PK",
  },
  {
    name: "Rawalpindi",
    countryID: "PK",
  },
  {
    name: "Sargodha",
    countryID: "PK",
  },
  {
    name: "Sahiwal",
    countryID: "PK",
  },
  {
    name: "Sibi",
    countryID: "PK",
  },
  {
    name: "Sukkur",
    countryID: "PK",
  },
  {
    name: "Zhob",
    countryID: "PK",
  },
  {
    id: "AB",
    name: "Abia",
    countryID: "NG",
  },
  {
    id: "FC",
    name: "Abuja",
    countryID: "NG",
  },
  {
    id: "AD",
    name: "Adamawa",
    countryID: "NG",
  },
  {
    id: "AK",
    name: "Akwa Ibom",
    countryID: "NG",
  },
  {
    id: "AN",
    name: "Anambra",
    countryID: "NG",
  },
  {
    id: "BA",
    name: "Bauchi",
    countryID: "NG",
  },
  {
    id: "BY",
    name: "Bayelsa",
    countryID: "NG",
  },
  {
    id: "BE",
    name: "Benue",
    countryID: "NG",
  },
  {
    id: "BO",
    name: "Borno",
    countryID: "NG",
  },
  {
    id: "CR",
    name: "Cross River",
    countryID: "NG",
  },
  {
    id: "DE",
    name: "Delta",
    countryID: "NG",
  },
  {
    id: "EB",
    name: "Ebonyi",
    countryID: "NG",
  },
  {
    id: "ED",
    name: "Edo",
    countryID: "NG",
  },
  {
    id: "EK",
    name: "Ekiti",
    countryID: "NG",
  },
  {
    id: "EN",
    name: "Enugu",
    countryID: "NG",
  },
  {
    id: "GO",
    name: "Gombe",
    countryID: "NG",
  },
  {
    id: "IM",
    name: "Imo",
    countryID: "NG",
  },
  {
    id: "JI",
    name: "Jigawa",
    countryID: "NG",
  },
  {
    id: "KD",
    name: "Kaduna",
    countryID: "NG",
  },
  {
    id: "KN",
    name: "Kano",
    countryID: "NG",
  },
  {
    id: "KT",
    name: "Katsina",
    countryID: "NG",
  },
  {
    id: "KE",
    name: "Kebbi",
    countryID: "NG",
  },
  {
    id: "KO",
    name: "Kogi",
    countryID: "NG",
  },
  {
    id: "KW",
    name: "Kwara",
    countryID: "NG",
  },
  {
    id: "LA",
    name: "Lagos",
    countryID: "NG",
  },
  {
    id: "NA",
    name: "Nasarawa",
    countryID: "NG",
  },
  {
    id: "NI",
    name: "Niger",
    countryID: "NG",
  },
  {
    id: "OG",
    name: "Ogun",
    countryID: "NG",
  },
  {
    id: "ON",
    name: "Ondo",
    countryID: "NG",
  },
  {
    id: "OS",
    name: "Osun",
    countryID: "NG",
  },
  {
    id: "OY",
    name: "Oyo",
    countryID: "NG",
  },
  {
    id: "PL",
    name: "Plateau",
    countryID: "NG",
  },
  {
    id: "RI",
    name: "Rivers",
    countryID: "NG",
  },
  {
    id: "SO",
    name: "Sokoto",
    countryID: "NG",
  },
  {
    id: "TA",
    name: "Taraba",
    countryID: "NG",
  },
  {
    id: "YO",
    name: "Yobe",
    countryID: "NG",
  },
  {
    id: "ZA",
    name: "Zamfara",
    countryID: "NG",
  },
  {
    name: "愛知県",
    english: "Aichi",
    countryID: "JP",
  },
  {
    name: "秋田県",
    english: "Akita",
    countryID: "JP",
  },
  {
    name: "青森県",
    english: "Aomori",
    countryID: "JP",
  },
  {
    name: "千葉県",
    english: "Chiba",
    countryID: "JP",
  },
  {
    name: "愛媛県",
    english: "Ehime",
    countryID: "JP",
  },
  {
    name: "福井県",
    english: "Fukui",
    countryID: "JP",
  },
  {
    name: "福岡県",
    english: "Fukuoka",
    countryID: "JP",
  },
  {
    name: "福島県",
    english: "Fukushima",
    countryID: "JP",
  },
  {
    name: "岐阜県",
    english: "Gifu",
    countryID: "JP",
  },
  {
    name: "群馬県",
    english: "Gunma",
    countryID: "JP",
  },
  {
    name: "広島県",
    english: "Hiroshima",
    countryID: "JP",
  },
  {
    name: "北海道",
    english: "Hokkaidō",
    countryID: "JP",
  },
  {
    name: "兵庫県",
    english: "Hyōgo",
    countryID: "JP",
  },
  {
    name: "茨城県",
    english: "Ibaraki",
    countryID: "JP",
  },
  {
    name: "石川県",
    english: "Ishikawa",
    countryID: "JP",
  },
  {
    name: "岩手県",
    english: "Iwate",
    countryID: "JP",
  },
  {
    name: "香川県",
    english: "Kagawa",
    countryID: "JP",
  },
  {
    name: "鹿児島県",
    english: "Kagoshima",
    countryID: "JP",
  },
  {
    name: "神奈川県",
    english: "Kanagawa",
    countryID: "JP",
  },
  {
    name: "高知県",
    english: "Kōchi",
    countryID: "JP",
  },
  {
    name: "熊本県",
    english: "Kumamoto",
    countryID: "JP",
  },
  {
    name: "京都府",
    english: "Kyōto",
    countryID: "JP",
  },
  {
    name: "三重県",
    english: "Mie",
    countryID: "JP",
  },
  {
    name: "宮城県",
    english: "Miyagi",
    countryID: "JP",
  },
  {
    name: "宮崎県",
    english: "Miyazaki",
    countryID: "JP",
  },
  {
    name: "長野県",
    english: "Nagano",
    countryID: "JP",
  },
  {
    name: "長崎県",
    english: "Nagasaki",
    countryID: "JP",
  },
  {
    name: "奈良県",
    english: "Nara",
    countryID: "JP",
  },
  {
    name: "新潟県",
    english: "Niigata",
    countryID: "JP",
  },
  {
    name: "大分県",
    english: "Ōita",
    countryID: "JP",
  },
  {
    name: "岡山県",
    english: "Okayama",
    countryID: "JP",
  },
  {
    name: "沖縄県",
    english: "Okinawa",
    countryID: "JP",
  },
  {
    name: "大阪府",
    english: "Ōsaka",
    countryID: "JP",
  },
  {
    name: "佐賀県",
    english: "Saga",
    countryID: "JP",
  },
  {
    name: "埼玉県",
    english: "Saitama",
    countryID: "JP",
  },
  {
    name: "滋賀県",
    english: "Shiga",
    countryID: "JP",
  },
  {
    name: "島根県",
    english: "Shimane",
    countryID: "JP",
  },
  {
    name: "静岡県",
    english: "Shizuoka",
    countryID: "JP",
  },
  {
    name: "栃木県",
    english: "Tochigi",
    countryID: "JP",
  },
  {
    name: "徳島県",
    english: "Tokushima",
    countryID: "JP",
  },
  {
    name: "東京都",
    english: "Tōkyō",
    countryID: "JP",
  },
  {
    name: "鳥取県",
    english: "Tottori",
    countryID: "JP",
  },
  {
    name: "富山県",
    english: "Toyama",
    countryID: "JP",
  },
  {
    name: "和歌山県",
    english: "Wakayama",
    countryID: "JP",
  },
  {
    name: "山形県",
    english: "Yamagata",
    countryID: "JP",
  },
  {
    name: "山口県",
    english: "Yamaguchi",
    countryID: "JP",
  },
  {
    name: "山梨県",
    english: "Yamanashi",
    countryID: "JP",
  },
  {
    id: "B",
    name: "Burgenland",
    countryID: "AT",
  },
  {
    id: "K",
    name: "Kärnten",
    countryID: "AT",
  },
  {
    id: "NÖ",
    name: "Niederösterreich",
    countryID: "AT",
  },
  {
    id: "OÖ",
    name: "Oberösterreich",
    countryID: "AT",
  },
  {
    id: "S",
    name: "Salzburg",
    countryID: "AT",
  },
  {
    id: "ST",
    name: "Steiermark",
    countryID: "AT",
  },
  {
    id: "T",
    name: "Tirol",
    countryID: "AT",
  },
  {
    id: "V",
    name: "Vorarlberg",
    countryID: "AT",
  },
  {
    id: "W",
    name: "Wien",
    countryID: "AT",
  },
  {
    id: "AC",
    name: "Acre",
    countryID: "BR",
  },
  {
    id: "AL",
    name: "Alagoas",
    countryID: "BR",
  },
  {
    id: "AP",
    name: "Amapá",
    countryID: "BR",
  },
  {
    id: "AM",
    name: "Amazonas",
    countryID: "BR",
  },
  {
    id: "BA",
    name: "Bahia",
    countryID: "BR",
  },
  {
    id: "CE",
    name: "Ceará",
    countryID: "BR",
  },
  {
    id: "DF",
    name: "Distrito Federal",
    countryID: "BR",
  },
  {
    id: "ES",
    name: "Espírito Santo",
    countryID: "BR",
  },
  {
    id: "GO",
    name: "Goiás",
    countryID: "BR",
  },
  {
    id: "MA",
    name: "Maranhão",
    countryID: "BR",
  },
  {
    id: "MT",
    name: "Mato Grosso",
    countryID: "BR",
  },
  {
    id: "MS",
    name: "Mato Grosso do Sul",
    countryID: "BR",
  },
  {
    id: "MG",
    name: "Minas Gerais",
    countryID: "BR",
  },
  {
    id: "PA",
    name: "Pará",
    countryID: "BR",
  },
  {
    id: "PB",
    name: "Paraíba",
    countryID: "BR",
  },
  {
    id: "PR",
    name: "Paraná",
    countryID: "BR",
  },
  {
    id: "PE",
    name: "Pernambuco",
    countryID: "BR",
  },
  {
    id: "PI",
    name: "Piauí",
    countryID: "BR",
  },
  {
    id: "RJ",
    name: "Rio de Janeiro",
    countryID: "BR",
  },
  {
    id: "RN",
    name: "Rio Grande do Norte",
    countryID: "BR",
  },
  {
    id: "RS",
    name: "Rio Grande do Sul",
    countryID: "BR",
  },
  {
    id: "RO",
    name: "Rondônia",
    countryID: "BR",
  },
  {
    id: "RR",
    name: "Roraima",
    countryID: "BR",
  },
  {
    id: "SC",
    name: "Santa Catarina",
    countryID: "BR",
  },
  {
    id: "SP",
    name: "São Paulo",
    countryID: "BR",
  },
  {
    id: "SE",
    name: "Sergipe",
    countryID: "BR",
  },
  {
    id: "TO",
    name: "Tocantins",
    countryID: "BR",
  },
  {
    name: "Abra",
    countryID: "PH",
  },
  {
    name: "Agusan del Norte",
    countryID: "PH",
  },
  {
    name: "Agusan del Sur",
    countryID: "PH",
  },
  {
    name: "Aklan",
    countryID: "PH",
  },
  {
    name: "Albay",
    countryID: "PH",
  },
  {
    name: "Antique",
    countryID: "PH",
  },
  {
    name: "Apayao",
    countryID: "PH",
  },
  {
    name: "Aurora",
    countryID: "PH",
  },
  {
    name: "Basilan",
    countryID: "PH",
  },
  {
    name: "Bataan",
    countryID: "PH",
  },
  {
    name: "Batanes",
    countryID: "PH",
  },
  {
    name: "Batangas",
    countryID: "PH",
  },
  {
    name: "Benguet",
    countryID: "PH",
  },
  {
    name: "Biliran",
    countryID: "PH",
  },
  {
    name: "Bohol",
    countryID: "PH",
  },
  {
    name: "Bukidnon",
    countryID: "PH",
  },
  {
    name: "Bulacan",
    countryID: "PH",
  },
  {
    name: "Cagayan",
    countryID: "PH",
  },
  {
    name: "Camarines Norte",
    countryID: "PH",
  },
  {
    name: "Camarines Sur",
    countryID: "PH",
  },
  {
    name: "Camiguin",
    countryID: "PH",
  },
  {
    name: "Capiz",
    countryID: "PH",
  },
  {
    name: "Catanduanes",
    countryID: "PH",
  },
  {
    name: "Cavite",
    countryID: "PH",
  },
  {
    name: "Cebu",
    countryID: "PH",
  },
  {
    name: "Compostela Valley",
    countryID: "PH",
  },
  {
    name: "Cotabato",
    countryID: "PH",
  },
  {
    name: "Davao del Norte",
    countryID: "PH",
  },
  {
    name: "Davao del Sur",
    countryID: "PH",
  },
  {
    name: "Davao Occidental",
    countryID: "PH",
  },
  {
    name: "Davao Oriental",
    countryID: "PH",
  },
  {
    name: "Dinagat Islands",
    countryID: "PH",
  },
  {
    name: "Eastern Samar",
    countryID: "PH",
  },
  {
    name: "Guimaras",
    countryID: "PH",
  },
  {
    name: "Ifugao",
    countryID: "PH",
  },
  {
    name: "Ilocos Norte",
    countryID: "PH",
  },
  {
    name: "Ilocos Sur",
    countryID: "PH",
  },
  {
    name: "Iloilo",
    countryID: "PH",
  },
  {
    name: "Isabela",
    countryID: "PH",
  },
  {
    name: "Kalinga",
    countryID: "PH",
  },
  {
    name: "La Union",
    countryID: "PH",
  },
  {
    name: "Laguna",
    countryID: "PH",
  },
  {
    name: "Lanao del Norte",
    countryID: "PH",
  },
  {
    name: "Lanao del Sur",
    countryID: "PH",
  },
  {
    name: "Leyte",
    countryID: "PH",
  },
  {
    name: "Maguindanao",
    countryID: "PH",
  },
  {
    name: "Marinduque",
    countryID: "PH",
  },
  {
    name: "Masbate",
    countryID: "PH",
  },
  {
    name: "Misamis Occidental",
    countryID: "PH",
  },
  {
    name: "Misamis Oriental",
    countryID: "PH",
  },
  {
    name: "Mountain Province",
    countryID: "PH",
  },
  {
    name: "Negros Occidental",
    countryID: "PH",
  },
  {
    name: "Negros Oriental",
    countryID: "PH",
  },
  {
    name: "Northern Samar",
    countryID: "PH",
  },
  {
    name: "Nueva Ecija",
    countryID: "PH",
  },
  {
    name: "Nueva Vizcaya",
    countryID: "PH",
  },
  {
    name: "Occidental Mindoro",
    countryID: "PH",
  },
  {
    name: "Oriental Mindoro",
    countryID: "PH",
  },
  {
    name: "Palawan",
    countryID: "PH",
  },
  {
    name: "Pampanga",
    countryID: "PH",
  },
  {
    name: "Pangasinan",
    countryID: "PH",
  },
  {
    name: "Quezon",
    countryID: "PH",
  },
  {
    name: "Quirino",
    countryID: "PH",
  },
  {
    name: "Rizal",
    countryID: "PH",
  },
  {
    name: "Romblon",
    countryID: "PH",
  },
  {
    name: "Samar",
    countryID: "PH",
  },
  {
    name: "Sarangani",
    countryID: "PH",
  },
  {
    name: "Siquijor",
    countryID: "PH",
  },
  {
    name: "Sorsogon",
    countryID: "PH",
  },
  {
    name: "South Cotabato",
    countryID: "PH",
  },
  {
    name: "Southern Leyte",
    countryID: "PH",
  },
  {
    name: "Sultan Kudarat",
    countryID: "PH",
  },
  {
    name: "Sulu",
    countryID: "PH",
  },
  {
    name: "Surigao del Norte",
    countryID: "PH",
  },
  {
    name: "Surigao del Sur",
    countryID: "PH",
  },
  {
    name: "Tarlac",
    countryID: "PH",
  },
  {
    name: "Tawi-Tawi",
    countryID: "PH",
  },
  {
    name: "Zambales",
    countryID: "PH",
  },
  {
    name: "Zamboanga del Norte",
    countryID: "PH",
  },
  {
    name: "Zamboanga del Sur",
    countryID: "PH",
  },
  {
    name: "Zamboanga Sibugay",
    countryID: "PH",
  },
  {
    name: "Metro Manila",
    countryID: "PH",
  },
  {
    name: "Hà Nội",
    countryID: "VN",
  },
  {
    name: "Hà Giang",
    countryID: "VN",
  },
  {
    name: "Cao Bằng",
    countryID: "VN",
  },
  {
    name: "Bắc Kạn",
    countryID: "VN",
  },
  {
    name: "Tuyên Quang",
    countryID: "VN",
  },
  {
    name: "Lào Cai",
    countryID: "VN",
  },
  {
    name: "Điện Biên",
    countryID: "VN",
  },
  {
    name: "Lai Châu",
    countryID: "VN",
  },
  {
    name: "Sơn La",
    countryID: "VN",
  },
  {
    name: "Yên Bái",
    countryID: "VN",
  },
  {
    name: "Hòa Bình",
    countryID: "VN",
  },
  {
    name: "Thái Nguyên",
    countryID: "VN",
  },
  {
    name: "Lạng Sơn",
    countryID: "VN",
  },
  {
    name: "Quảng Ninh",
    countryID: "VN",
  },
  {
    name: "Bắc Giang",
    countryID: "VN",
  },
  {
    name: "Phú Thọ",
    countryID: "VN",
  },
  {
    name: "Vĩnh Phúc",
    countryID: "VN",
  },
  {
    name: "Bắc Ninh",
    countryID: "VN",
  },
  {
    name: "Hải Dương",
    countryID: "VN",
  },
  {
    name: "Hải Phòng",
    countryID: "VN",
  },
  {
    name: "Hưng Yên",
    countryID: "VN",
  },
  {
    name: "Thái Bình",
    countryID: "VN",
  },
  {
    name: "Hà Nam",
    countryID: "VN",
  },
  {
    name: "Nam Định",
    countryID: "VN",
  },
  {
    name: "Ninh Bình",
    countryID: "VN",
  },
  {
    name: "Thanh Hóa",
    countryID: "VN",
  },
  {
    name: "Nghệ An",
    countryID: "VN",
  },
  {
    name: "Hà Tĩnh",
    countryID: "VN",
  },
  {
    name: "Quảng Bình",
    countryID: "VN",
  },
  {
    name: "Quảng Trị",
    countryID: "VN",
  },
  {
    name: "Thừa Thiên–Huế",
    countryID: "VN",
  },
  {
    name: "Đà Nẵng",
    countryID: "VN",
  },
  {
    name: "Quảng Nam",
    countryID: "VN",
  },
  {
    name: "Quảng Ngãi",
    countryID: "VN",
  },
  {
    name: "Bình Định",
    countryID: "VN",
  },
  {
    name: "Phú Yên",
    countryID: "VN",
  },
  {
    name: "Khánh Hòa",
    countryID: "VN",
  },
  {
    name: "Ninh Thuận",
    countryID: "VN",
  },
  {
    name: "Bình Thuận",
    countryID: "VN",
  },
  {
    name: "Kon Tum",
    countryID: "VN",
  },
  {
    name: "Gia Lai",
    countryID: "VN",
  },
  {
    name: "Đắk Lắk",
    countryID: "VN",
  },
  {
    name: "Đắk Nông",
    countryID: "VN",
  },
  {
    name: "Lâm Đồng",
    countryID: "VN",
  },
  {
    name: "Bình Phước",
    countryID: "VN",
  },
  {
    name: "Tây Ninh",
    countryID: "VN",
  },
  {
    name: "Bình Dương",
    countryID: "VN",
  },
  {
    name: "Đồng Nai",
    countryID: "VN",
  },
  {
    name: "Bà Rịa–Vũng Tàu",
    countryID: "VN",
  },
  {
    name: "Thành phố Hồ Chí Minh",
    countryID: "VN",
  },
  {
    name: "Long An",
    countryID: "VN",
  },
  {
    name: "Tiền Giang",
    countryID: "VN",
  },
  {
    name: "Bến Tre",
    countryID: "VN",
  },
  {
    name: "Trà Vinh",
    countryID: "VN",
  },
  {
    name: "Vĩnh Long",
    countryID: "VN",
  },
  {
    name: "Đồng Tháp",
    countryID: "VN",
  },
  {
    name: "An Giang",
    countryID: "VN",
  },
  {
    name: "Kiên Giang",
    countryID: "VN",
  },
  {
    name: "Cần Thơ",
    countryID: "VN",
  },
  {
    name: "Hậu Giang",
    countryID: "VN",
  },
  {
    name: "Sóc Trăng",
    countryID: "VN",
  },
  {
    name: "Bạc Liêu",
    countryID: "VN",
  },
  {
    name: "Cà Mau",
    countryID: "VN",
  },
  {
    name: "Auckland",
    countryID: "NZ",
  },
  {
    name: "New Plymouth",
    countryID: "NZ",
  },
  {
    name: "Hawke's Bay",
    countryID: "NZ",
  },
  {
    name: "Wellington",
    countryID: "NZ",
  },
  {
    name: "Nelson",
    countryID: "NZ",
  },
  {
    name: "Marlborough",
    countryID: "NZ",
  },
  {
    name: "Westland",
    countryID: "NZ",
  },
  {
    name: "Canterbury",
    countryID: "NZ",
  },
  {
    name: "Otago",
    countryID: "NZ",
  },
  {
    name: "Southland",
    countryID: "NZ",
  },
];

const getCountriesAndProvinces = () => {
  let countriesWithProvinces = [];

  for (let i = 0; i < countries.length; i++) {
    const country = countries[i];

    const prov = arrayHelpers.where(
      provinces,
      (x) => x.countryID === country.id
    );

    countriesWithProvinces.push({
      name: country.name,
      id: country.id,
      provinces: arrayHelpers.sortAsc(prov),
    });
  }
  countriesWithProvinces = arrayHelpers.sortAsc(countriesWithProvinces);
  return countriesWithProvinces;
};

module.exports = { getCountriesAndProvinces, countries, provinces };
