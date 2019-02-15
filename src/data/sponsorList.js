import Sponsor1 from "../images/PaloAlto.png";
import Sponsor2 from "../images/Tableau.png";
import Sponsor3 from "../images/logo.svg";
import Sponsor4 from "../images/logo.svg";
import SponsorIcon from "../components/Wip/Corporate/SponsorIcon";

/**
 * This is dummy data for now, but will need the name of all our sponsors (maybe)
 * and a svg icon image (definitely) for each
 * Follow convention of
 * @type {{sponsors: *[]}}
 */
export const SponsorList = {
  sponsors: [
    {
      name: "Palo Alto",
      icon: Sponsor1
    },
    {
      name: "Tableau",
      icon: Sponsor2
    },
    {
      name: "dummy name 3",
      icon: Sponsor3
    },
    {
      name: "dummy name 4",
      icon: Sponsor4
    }
  ]
};
