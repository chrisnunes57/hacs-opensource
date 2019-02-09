import React from "react";
import {Container} from "reactstrap";

/**
 * Component for announcements, not limited to events, but including things like signups to stuff
 * dates of volunteer events, and news immediately relevant to our members.
 * TODO:
 * Announcements will be retrieved via an API Call to our backend,
 * So we'll need at least some mock data to be able to complete this
 */
 const announcement = {
  title : 'Example Announcement',
  date : 'Example Date',
  description : 'Example Description',
}
export default class Announcements extends React.Component {
  render() {
    return (
      <Container>
           <dl>
          <dt> Title: {announcement.title} </dt>
          {announcement.date && <dd>- {announcement.date}</dd> }
          <dd>- {announcement.description}</dd> 

          <dt> Title: {announcement.title} </dt>
          {announcement.date && <dd>- {announcement.date}</dd> }
          <dd>- {announcement.description}</dd> 
          
            <dt> Title: {announcement.title} </dt>
          {announcement.date && <dd>- {announcement.date}</dd> }
          <dd>- {announcement.description}</dd> 
          </dl>
      </Container>
    );
  }
}
