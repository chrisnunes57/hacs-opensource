require("dotenv").config();

module.exports = {
  Theodor: {
    id: 1,
    name: "Theodor Van de Vlies",
    grade_level: "Senior",
    description:
      "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    email: "tvan0@nature.com",
    phone_number: "909-755-7353",
    photo_link: "https://robohash.org/exatquenihil.bmp?size=50x50&set=set1",
    createdAt: new Date(Date.parse(process.env.SEED_DATE_ONE))
  },
  Carmelina: {
    id: 2,
    name: "Carmelina Parradye",
    grade_level: "Junior",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    email: "cparradye1@ft.com",
    phone_number: "586-135-3044",
    photo_link: "https://robohash.org/omnisquisdebitis.png?size=50x50&set=set1",
    createdAt: new Date(Date.parse(process.env.SEED_DATE_TWO))
  },
  Garold: {
    id: 3,
    name: "Garold Goodsell",
    grade_level: "Sophomore",
    description:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
    email: "ggoodsell2@joomla.org",
    phone_number: "233-838-3908",
    photo_link:
      "https://robohash.org/liberovoluptasbeatae.bmp?size=50x50&set=set1",
    createdAt: new Date(Date.parse(process.env.SEED_DATE_THREE))
  },
  Felice: {
    id: 4,
    name: "Felice Hincks",
    grade_level: "Senior",
    description:
      "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    email: "fhincks3@springer.com",
    phone_number: "767-584-5405",
    photo_link:
      "https://robohash.org/quisquamducimusdolorem.jpg?size=50x50&set=set1",
    createdAt: new Date(Date.parse(process.env.SEED_DATE_FOUR))
  },
  Stacia: {
    id: 5,
    name: "Stacia Oldrey",
    grade_level: "Junior",
    description:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    email: "soldrey4@hugedomains.com",
    phone_number: "857-315-2635",
    photo_link:
      "https://robohash.org/molestiaefuganemo.bmp?size=50x50&set=set1",
    createdAt: new Date(Date.parse(process.env.SEED_DATE_FIVE))
  },
  Jeffrey: {
    id: 6,
    name: "Jeffrey Jefferson",
    grade_level: "Senior",
    description: "I am Jeffrey Jefferson, a Senior at UT.",
    email: "jjefferson@hugedomains.com",
    phone_number: "111-222-3333",
    photo_link:
      "https://robohash.org/molestiaefuganemo.bmp?size=50x50&set=set1",
    createdAt: new Date(Date.parse(process.env.SEED_DATE_FIVE))
  }
};
