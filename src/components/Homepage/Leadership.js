import React from "react";
import "./Homepage.scss";
import OfficerCard from "../partials/OfficerCard";

const placeholderLeadership = [
  {
    name: "América Quistiano",
    imageUrl:
      "https://media-exp1.licdn.com/dms/image/C4E03AQEo09iqOX19fw/profile-displayphoto-shrink_400_400/0?e=1605139200&v=beta&t=Ho50nBxnoA7KiR5ZMUld14SCOP8boSNPGTZdhNvwLRE",
    role: "President",
    linkedin: "https://www.linkedin.com/in/america-quistiano/",
    email: "quistianoamerica@gmail.com",
  },
  {
    name: "Diana de la Torre",
    imageUrl:
      "https://media-exp1.licdn.com/dms/image/C5603AQEB_yldWq071Q/profile-displayphoto-shrink_400_400/0?e=1605139200&v=beta&t=bXdZKNgszmFoVkftt1P9h22kdEDRMbe89Ki3fGE4AFc",
    role: "Vice President",
    linkedin: "https://www.linkedin.com/in/dianadlt/",
    email: "dianadelatorre098@gmail.com",
  },
  {
    name: "Jeffrey Moulckers",
    imageUrl:
      "https://media-exp1.licdn.com/dms/image/C4E03AQHfdVwA6hSiQw/profile-displayphoto-shrink_400_400/0?e=1605139200&v=beta&t=_koQq-6djS0DupvJwvF7Uh-HqLZpI6w543O3EXtI_6Y",
    role: "Corporate",
    linkedin: "https://www.linkedin.com/in/jeffreymoulckers",
    email: "jrmoulckers@gmail.com",
  },
  {
    name: "Chelsie M Barrientos",
    imageUrl:
      "https://media-exp1.licdn.com/dms/image/C4E03AQHuSVhdZdrEnw/profile-displayphoto-shrink_400_400/0?e=1605139200&v=beta&t=2o26RqQChQegNzTqExXRDsdRJBhaGLNeER4D7r1-NT4",
    role: "Financial",
    linkedin: "https://www.linkedin.com/in/chelsie-barrientos/",
    email: "csant1391@outlook.com",
  },
  {
    name: "Max Patrick",
    imageUrl:
      "https://avatars3.githubusercontent.com/u/20052335?s=460&u=20b01c4275495c7c9ee123aa97ac556fece087a8&v=4",
    role: "Social",
    linkedin: "https://linkedin.com/in/chris-nunes",
    email: "chrisnunes57@gmail.com",
  },
  {
    name: "Levi Villarreal",
    imageUrl:
      "https://media-exp1.licdn.com/dms/image/C4E03AQGZGfiJ5-twMA/profile-displayphoto-shrink_400_400/0?e=1605139200&v=beta&t=-xDQ3kD3d-QqcXhPuiowex6wvsR8ZTQuLHemcBAThCc",
    role: "Professional Development",
    linkedin: "https://www.linkedin.com/in/villarreallevi/",
    email: "villarreallevi@gmail.com",
  },
  {
    name: "Ivan Romero",
    imageUrl:
      "https://avatars3.githubusercontent.com/u/20052335?s=460&u=20b01c4275495c7c9ee123aa97ac556fece087a8&v=4",
    role: "Academic",
    linkedin: "https://linkedin.com/in/chris-nunes",
    email: "chrisnunes57@gmail.com",
  },
  {
    name: "Maria Maynard",
    imageUrl:
      "https://media-exp1.licdn.com/dms/image/C4E03AQH1ouQwC71jUA/profile-displayphoto-shrink_400_400/0?e=1605139200&v=beta&t=yU6C_EA--CNUEJLNZZuFRRWLW4pbrooTp1F5tLKZ9UQ",
    role: "Outreach",
    linkedin: "https://www.linkedin.com/in/mariamaynard/",
    email: "chrisnunes57@gmail.com",
  },
  {
    name: "Michelle Sanchez",
    imageUrl:
      "https://avatars3.githubusercontent.com/u/20052335?s=460&u=20b01c4275495c7c9ee123aa97ac556fece087a8&v=4",
    role: "Marketing",
    linkedin: "https://linkedin.com/in/chris-nunes",
    email: "chrisnunes57@gmail.com",
  },
  {
    name: "Chris Nunes",
    imageUrl:
      "https://avatars3.githubusercontent.com/u/20052335?s=460&u=20b01c4275495c7c9ee123aa97ac556fece087a8&v=4",
    role: "Web Development",
    linkedin: "https://linkedin.com/in/chris-nunes",
    email: "chrisnunes57@gmail.com",
  },
  {
    name: "Fidel Tinajero Soriano",
    imageUrl:
      "https://media-exp1.licdn.com/dms/image/C4E03AQEV2oi5WxcQXA/profile-displayphoto-shrink_400_400/0?e=1605139200&v=beta&t=6IaQ3cX9aS-y_yUBShL89yL1NHEQMy7ceEFcLwVjaAA",
    role: "Junior Officer",
    linkedin: "https://www.linkedin.com/in/fideltinajero/",
    email: "chrisnunes57@gmail.com",
  },
  {
    name: "Fina Sierra",
    imageUrl:
      "https://media-exp1.licdn.com/dms/image/C4E03AQFMtcLlY35IUw/profile-displayphoto-shrink_400_400/0?e=1605139200&v=beta&t=yNejO96gJ0ho9PKuhU-_VAETW01pPCiXsiraCtDrgFY",
    role: "Junior Officer",
    linkedin: "https://www.linkedin.com/in/mariasierra09/",
    email: "mariasierra023@gmail.com",
  },
];

function Leadership() {
    return (
        <section className="leadership">
            <div className="container">
                <h1>Leadership</h1>
                <div className="leadership-wrapper">
                    {placeholderLeadership.map( (officer, i) => {
                        return <OfficerCard {...officer} key={i} />
                    })}
                </div>
            </div>
        </section>
    );
}

export default Leadership;
