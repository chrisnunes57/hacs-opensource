require('dotenv').config();
const seedDate = new Date(Date.parse(process.env.SEED_DATE));

module.exports = [
  {
    "id": 1,
    "name": "Facebook",
    "package_type": "platinum",
    "logo_link": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/200px-F_icon.svg.png",
    "createdAt": seedDate
  }, 
  {
    "id": 2,
    "name": "Microsoft",
    "package_type": "gold",
    "logo_link": "https://i.pinimg.com/236x/e7/d7/c3/e7d7c3b9083afa752a4e9ce33f0025c4--popular-logos-famous-logos.jpg",
    "createdAt": seedDate
  }, {
    "id": 3,
    "name": "Adobe",
    "package_type": "silver",
    "logo_link": "https://www.liverpool.ac.uk/media/livacuk/computingservices/software/adobe.png",
    "createdAt": seedDate
  }, {
    "id": 4,
    "name": "Amazon",
    "package_type": "bronze",
    "logo_link": "https://media.licdn.com/dms/image/C4D0BAQHi-82ItMq_9g/company-logo_200_200/0?e=2159024400&v=beta&t=DBTnfI7EXCCPkUcWFKVvMINmnT33_xpVyXw_Zke_37I",
    "createdAt": seedDate
  }, {
    "id": 5,
    "name": "Google",
    "package_type": "platinum",
    "logo_link": "https://valleyspadoctor.com/wp-content/uploads/2016/08/Google-Logo-200x200.jpg",
    "createdAt": seedDate
  }
];
