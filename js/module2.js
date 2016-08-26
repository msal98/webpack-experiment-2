var _ = require('lodash');

var people = [{
  "id": 1,
  "first_name": "Donald",
  "last_name": "Fisher",
  "email": "dfisher0@e-recht24.de",
  "gender": "Male",
  "ip_address": "94.35.108.72"
}, {
  "id": 2,
  "first_name": "Eugene",
  "last_name": "Romero",
  "email": "eromero1@topsy.com",
  "gender": "Male",
  "ip_address": "12.111.243.218"
}, {
  "id": 3,
  "first_name": "Harold",
  "last_name": "Patterson",
  "email": "hpatterson2@mashable.com",
  "gender": "Male",
  "ip_address": "91.228.144.243"
}, {
  "id": 4,
  "first_name": "Jessica",
  "last_name": "Elliott",
  "email": "jelliott3@tripadvisor.com",
  "gender": "Female",
  "ip_address": "213.218.60.203"
}, {
  "id": 5,
  "first_name": "Cheryl",
  "last_name": "Schmidt",
  "email": "cschmidt4@howstuffworks.com",
  "gender": "Female",
  "ip_address": "96.119.65.167"
}, {
  "id": 6,
  "first_name": "Shawn",
  "last_name": "Chapman",
  "email": "schapman5@live.com",
  "gender": "Male",
  "ip_address": "203.167.92.231"
}, {
  "id": 7,
  "first_name": "Nicholas",
  "last_name": "Brown",
  "email": "nbrown6@washington.edu",
  "gender": "Male",
  "ip_address": "240.45.66.159"
}, {
  "id": 8,
  "first_name": "Brian",
  "last_name": "Murray",
  "email": "bmurray7@statcounter.com",
  "gender": "Male",
  "ip_address": "69.73.210.35"
}, {
  "id": 9,
  "first_name": "Karen",
  "last_name": "Payne",
  "email": "kpayne8@ucsd.edu",
  "gender": "Female",
  "ip_address": "70.1.106.211"
}, {
  "id": 10,
  "first_name": "Ralph",
  "last_name": "Black",
  "email": "rblack9@altervista.org",
  "gender": "Male",
  "ip_address": "209.136.38.238"
}, {
  "id": 11,
  "first_name": "Judith",
  "last_name": "Jenkins",
  "email": "jjenkinsa@bandcamp.com",
  "gender": "Female",
  "ip_address": "43.49.21.57"
}, {
  "id": 12,
  "first_name": "Jack",
  "last_name": "Mendoza",
  "email": "jmendozab@baidu.com",
  "gender": "Male",
  "ip_address": "74.101.33.96"
}, {
  "id": 13,
  "first_name": "David",
  "last_name": "Graham",
  "email": "dgrahamc@cargocollective.com",
  "gender": "Male",
  "ip_address": "8.243.137.24"
}, {
  "id": 14,
  "first_name": "Norma",
  "last_name": "Ruiz",
  "email": "nruizd@nhs.uk",
  "gender": "Female",
  "ip_address": "180.144.71.63"
}, {
  "id": 15,
  "first_name": "Dennis",
  "last_name": "Wells",
  "email": "dwellse@blogspot.com",
  "gender": "Male",
  "ip_address": "48.253.113.52"
}, {
  "id": 16,
  "first_name": "Alice",
  "last_name": "Bryant",
  "email": "abryantf@woothemes.com",
  "gender": "Female",
  "ip_address": "125.97.211.165"
}, {
  "id": 17,
  "first_name": "Clarence",
  "last_name": "Mason",
  "email": "cmasong@washington.edu",
  "gender": "Male",
  "ip_address": "194.124.58.194"
}, {
  "id": 18,
  "first_name": "Ernest",
  "last_name": "Williamson",
  "email": "ewilliamsonh@skype.com",
  "gender": "Male",
  "ip_address": "186.223.31.161"
}, {
  "id": 19,
  "first_name": "Sandra",
  "last_name": "Cruz",
  "email": "scruzi@oaic.gov.au",
  "gender": "Female",
  "ip_address": "183.158.78.115"
}, {
  "id": 20,
  "first_name": "Kathleen",
  "last_name": "Fox",
  "email": "kfoxj@trellian.com",
  "gender": "Female",
  "ip_address": "82.97.11.117"
}]

var femaleCount = _.filter(people, {gender: "Female"}).length;

alert(femaleCount + " females!");
console.log("module2 stuff");