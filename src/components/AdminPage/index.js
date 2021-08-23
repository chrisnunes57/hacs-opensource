import React, { useState } from "react";
import "./AdminPage.scss";
import Login from "./Login.js";
import AdminPanel from "./AdminPanel";

function AdminPage(props) {
  if (props.user /*|| window.location.href.includes("localhost")*/) {
    var siteContent = props.siteContent;
    return (
      <AdminPanel
        data={siteContent}
        signoutUser={props.signoutUser}
        user={props.user}
        // {...props.siteContent}
      />
    );
  } else {
    return <Login loginUser={props.loginUser} />;
  }
}

export default AdminPage;
