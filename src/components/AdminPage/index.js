import React from "react";
import "./AdminPage.scss";
import Login from "./Login.js";
import AdminPanel from "./AdminPanel";

function AdminPage(props) {
  if (props.user || window.location.href.includes("localhost")) {
      return <AdminPanel {...props.siteContent}/>;
  } else {
      return <Login loginUser={props.loginUser} />;
  }
}

export default AdminPage;