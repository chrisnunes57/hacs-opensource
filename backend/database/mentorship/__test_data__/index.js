require("dotenv").config();

module.exports = {
  BerkyPatric: {
    id: 1,
    mentor: "Berky Vasyagin",
    mentee: "Patric Jobb",
    point_total: 35,
    createdAt: new Date(Date.parse(process.env.SEED_DATE_ONE))
  },
  PiperOdo: {
    id: 2,
    mentor: "Piper Crasford",
    mentee: "Odo Boays",
    point_total: 18,
    createdAt: new Date(Date.parse(process.env.SEED_DATE_TWO))
  },
  JohannahAndros: {
    id: 3,
    mentor: "Johannah Matis",
    mentee: "Andros Myatt",
    point_total: 51,
    createdAt: new Date(Date.parse(process.env.SEED_DATE_THREE))
  },
  MahliaArvie: {
    id: 4,
    mentor: "Mahalia Anglish",
    mentee: "Arvie Haydn",
    point_total: 7,
    createdAt: new Date(Date.parse(process.env.SEED_DATE_FOUR))
  },
  RaynerEricha: {
    id: 5,
    mentor: "Rayner Grain",
    mentee: "Ericha Jiruch",
    point_total: 12,
    createdAt: new Date(Date.parse(process.env.SEED_DATE_FIVE))
  }
};
