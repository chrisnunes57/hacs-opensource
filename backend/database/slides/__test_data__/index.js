require("dotenv").config();

module.exports = {
  One: {
    id: 1,
    title: "Slide Deck #1",
    pdf_link: "www.hacs.com/slides/1",
    createdAt: new Date(Date.parse(process.env.SEED_DATE_ONE))
  },
  Two: {
    id: 2,
    title: "Slide Deck #2",
    pdf_link: "www.hacs.com/slides/2",
    createdAt: new Date(Date.parse(process.env.SEED_DATE_TWO))
  },
  Three: {
    id: 3,
    title: "Slide Deck #3",
    pdf_link: "www.hacs.com/slides/3",
    createdAt: new Date(Date.parse(process.env.SEED_DATE_THREE))
  },
  Four: {
    id: 4,
    title: "Slide Deck #4",
    pdf_link: "www.hacs.com/slides/4",
    createdAt: new Date(Date.parse(process.env.SEED_DATE_FOUR))
  },
  Five: {
    id: 5,
    title: "Slide Deck #5",
    pdf_link: "www.hacs.com/slides/5",
    createdAt: new Date(Date.parse(process.env.SEED_DATE_FIVE))
  }
};
