import React from "react";
import { Container } from "reactstrap";

/**
 * This should contain an embed of the agenda view
 * for our google calendar.
 */
export default class Agenda extends React.Component {
  render() {
    return (
      <Container>
        <h1>Agenda</h1>

        <iframe
          src="https://calendar.google.com/calendar/embed?title=HACS%20Events&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=tq1ioak02stm95tttlompmnaq0%40group.calendar.google.com&amp;color=%23711616&amp;ctz=America%2FChicago"
          style={{
            width: "100%",
            height: 500,
            frameborder: 0,
            scrolling: "no"
          }}
          title="HACS Agenda"
        />
      </Container>
    );
  }
}
