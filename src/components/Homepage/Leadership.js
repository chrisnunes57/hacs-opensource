import React from "react";
import "./Homepage.scss";
import OfficerCard from "../partials/OfficerCard";
import Fade from "react-reveal/Fade";

const placeholderLeadership = [
  {
    name: "América Quistiano",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=14T-iOQboTBx3QYo2Cd2tTa0p3NXvLygh",
    role: "President",
    linkedin: "",
    email: "",
  },
  {
    name: "Diana de la Torre",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=11Fg_ItALRS3GKPfYolAsKgr47o4wuRVZ",
    role: "Vice President",
    linkedin: "",
    email: "",
  },
  {
    name: "Jeffrey Moulckers",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=10mAaVpd7oNhA2jhPAtZ06vkRbP9eD6Iy",
    role: "Corporate",
    linkedin: "",
    email: "",
  },
  {
    name: "Chelsie M Barrientos",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=161WcEgIXfKBI5V-idLznI_i7zMm5kSgt",
    role: "Financial",
    linkedin: "",
    email: "",
  },
  {
    name: "Andrew Jaso",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=109HLNFRN-gtvuat7CF2qtfM5CpLbFBH1",
    role: "Social",
    linkedin: "",
    email: "",
  },
  {
    name: "Levi Villarreal",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1eXIqjfrgMaHQFa9OkNSXelAHN0p9oYMZ",
    role: "Professional Development",
    linkedin: "",
    email: "",
  },
  {
    name: "Ivan Romero",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1lbEV_yaqq_fPxsOlBvroUnFA3J5vIp4Y",
    role: "Academic",
    linkedin: "",
    email: "",
  },
  {
    name: "Fina Sierra",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1XuS85aMZMklyT9mpQDpo65Lo6Gwg5VyL",
    role: "Outreach",
    linkedin: "",
    email: "",
  },
  {
    name: "Michelle Sanchez",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1SFfUEke2--dz-x7HwIQs4aCv-nvsdE6i",
    role: "Marketing",
    linkedin: "",
    email: "",
  },
  {
    name: "Chris Nunes",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1WsNS0zkdosk15RGIM8ZN7vDlO9-m4jUO",
    role: "Web Development",
    linkedin: "",
    email: "",
  },
  {
    name: "Fidel Tinajero Soriano",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1tl2eVtgnFSrzdg5Ke9E3-tLYdGQJFrLY",
    role: "Junior Officer",
    linkedin: "",
    email: "",
  },
  {
    name: "Felipe Paz",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1iwAXvjON0vrKBRjC2ydfcAsfAuDYEtux",
    role: "Junior Officer",
    linkedin: "",
    email: "",
  },
];

function Leadership() {
    return (
        <section className="leadership">
            <div className="container">
                <h1>Leadership</h1>
                <div className="leadership-wrapper">
                    {placeholderLeadership.map( (officer, i) => {
                        return (
                          <Fade bottom>
                            <OfficerCard {...officer} key={i} />
                          </Fade>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Leadership;
