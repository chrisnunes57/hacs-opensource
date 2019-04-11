require("dotenv").config();

module.exports = {
  Facebook: {
    id: 1,
    name: "Facebook",
    package_type: "platinum",
    logo_link:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/200px-F_icon.svg.png",
    createdAt: new Date(Date.parse(process.env.SEED_DATE_ONE))
  },
  Microsoft: {
    id: 2,
    name: "Microsoft",
    package_type: "gold",
    logo_link:
      "https://i.pinimg.com/236x/e7/d7/c3/e7d7c3b9083afa752a4e9ce33f0025c4--popular-logos-famous-logos.jpg",
    createdAt: new Date(Date.parse(process.env.SEED_DATE_TWO))
  },
  Adobe: {
    id: 3,
    name: "Adobe",
    package_type: "silver",
    logo_link:
      "https://www.liverpool.ac.uk/media/livacuk/computingservices/software/adobe.png",
    createdAt: new Date(Date.parse(process.env.SEED_DATE_THREE))
  },
  Amazon: {
    id: 4,
    name: "Amazon",
    package_type: "bronze",
    logo_link:
      "https://media.licdn.com/dms/image/C4D0BAQHi-82ItMq_9g/company-logo_200_200/0?e=2159024400&v=beta&t=DBTnfI7EXCCPkUcWFKVvMINmnT33_xpVyXw_Zke_37I",
    createdAt: new Date(Date.parse(process.env.SEED_DATE_FOUR))
  },
  Google: {
    id: 5,
    name: "Google",
    package_type: "platinum",
    logo_link:
      "https://valleyspadoctor.com/wp-content/uploads/2016/08/Google-Logo-200x200.jpg",
    createdAt: new Date(Date.parse(process.env.SEED_DATE_FIVE))
  }
};
