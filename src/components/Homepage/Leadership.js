import React from "react";
import "./Homepage.scss";
import OfficerCard from "../partials/OfficerCard";

const placeholderLeadership = [
    {
        name: "Chris Nunes",
        imageUrl: "https://avatars3.githubusercontent.com/u/20052335?s=460&u=20b01c4275495c7c9ee123aa97ac556fece087a8&v=4",
        role: "Web Development Officer",
        linkedin: "https://linkedin.com/in/chris-nunes",
        email: "chrisnunes57@gmail.com"
    },
    {
        name: "Chris Nunes",
        imageUrl: "https://avatars3.githubusercontent.com/u/20052335?s=460&u=20b01c4275495c7c9ee123aa97ac556fece087a8&v=4",
        role: "Web Development Officer",
        linkedin: "https://linkedin.com/in/chris-nunes",
        email: "chrisnunes57@gmail.com"
    },
    {
        name: "Chris Nunes",
        imageUrl: "https://avatars3.githubusercontent.com/u/20052335?s=460&u=20b01c4275495c7c9ee123aa97ac556fece087a8&v=4",
        role: "Web Development Officer",
        linkedin: "https://linkedin.com/in/chris-nunes",
        email: "chrisnunes57@gmail.com"
    },
    {
        name: "Chris Nunes",
        imageUrl: "https://avatars3.githubusercontent.com/u/20052335?s=460&u=20b01c4275495c7c9ee123aa97ac556fece087a8&v=4",
        role: "Web Development Officer",
        linkedin: "https://linkedin.com/in/chris-nunes",
        email: "chrisnunes57@gmail.com"
    },
    {
        name: "Chris Nunes",
        imageUrl: "https://avatars3.githubusercontent.com/u/20052335?s=460&u=20b01c4275495c7c9ee123aa97ac556fece087a8&v=4",
        role: "Web Development Officer",
        linkedin: "https://linkedin.com/in/chris-nunes",
        email: "chrisnunes57@gmail.com"
    },
    {
        name: "Chris Nunes",
        imageUrl: "https://avatars3.githubusercontent.com/u/20052335?s=460&u=20b01c4275495c7c9ee123aa97ac556fece087a8&v=4",
        role: "Web Development Officer",
        linkedin: "https://linkedin.com/in/chris-nunes",
        email: "chrisnunes57@gmail.com"
    },
    {
        name: "Chris Nunes",
        imageUrl: "https://avatars3.githubusercontent.com/u/20052335?s=460&u=20b01c4275495c7c9ee123aa97ac556fece087a8&v=4",
        role: "Web Development Officer",
        linkedin: "https://linkedin.com/in/chris-nunes",
        email: "chrisnunes57@gmail.com"
    },
    {
        name: "Chris Nunes",
        imageUrl: "https://avatars3.githubusercontent.com/u/20052335?s=460&u=20b01c4275495c7c9ee123aa97ac556fece087a8&v=4",
        role: "Web Development Officer",
        linkedin: "https://linkedin.com/in/chris-nunes",
        email: "chrisnunes57@gmail.com"
    },
    {
        name: "Chris Nunes",
        imageUrl: "https://avatars3.githubusercontent.com/u/20052335?s=460&u=20b01c4275495c7c9ee123aa97ac556fece087a8&v=4",
        role: "Web Development Officer",
        linkedin: "https://linkedin.com/in/chris-nunes",
        email: "chrisnunes57@gmail.com"
    },
    {
        name: "Chris Nunes",
        imageUrl: "https://avatars3.githubusercontent.com/u/20052335?s=460&u=20b01c4275495c7c9ee123aa97ac556fece087a8&v=4",
        role: "Web Development Officer",
        linkedin: "https://linkedin.com/in/chris-nunes",
        email: "chrisnunes57@gmail.com"
    },
    {
        name: "Chris Nunes",
        imageUrl: "https://avatars3.githubusercontent.com/u/20052335?s=460&u=20b01c4275495c7c9ee123aa97ac556fece087a8&v=4",
        role: "Web Development Officer",
        linkedin: "https://linkedin.com/in/chris-nunes",
        email: "chrisnunes57@gmail.com"
    },
    {
        name: "Chris Nunes",
        imageUrl: "https://avatars3.githubusercontent.com/u/20052335?s=460&u=20b01c4275495c7c9ee123aa97ac556fece087a8&v=4",
        role: "Web Development Officer",
        linkedin: "https://linkedin.com/in/chris-nunes",
        email: "chrisnunes57@gmail.com"
    }
]

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
