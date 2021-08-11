import React from "react";
import "./AdminPage.scss";
import Login from "./Login.js";
import AdminPanel from "./AdminPanel";

function AdminPage(props) {
  const placeholderOfficer = {
    In5lUlNNRvmaWvzYZnJ3r: {
      email: "",
      imageURL:
        "https://drive.google.com/uc?export=view&id=1WsNS0zkdosk15RGIM8ZN7vDlO9-m4jUO",
      linkedin: "https://www.linkedin.com/in/jeffreymoulckers",
      name: "Chris Nunes",
      index: 1,
      role: "Web Development",
      uid: "In5lUlNNRvmaWvzYZnJ3r",
    },
  };

  const placeholderMeetingLink = {
    link: "https://utexas.zoom.us/j/95425172728",
  };

  const data = {
    officers: placeholderOfficer,
    meetingLink: placeholderMeetingLink,
  };

  if (props.user || window.location.href.includes("localhost")) {
    return (
      <AdminPanel
        data={data}
        // {...props.siteContent}
      />
    );
  } else {
    return <Login loginUser={props.loginUser} />;
  }
}

export default AdminPage;
