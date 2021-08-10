import React, {
  forwardRef,
  useRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import firebase from "../../_firebase";
import "./AdminPage.scss";

const updateInDB = (data) => {
  firebase
    .auth()
    .currentUser.getIdToken(/* forceRefresh */ true)
    .then((idToken) => {
      fetch("http://localhost:5000/opportunities/", {
        method: "POST", // or 'PUT'
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          Authorization: idToken,
        },
        body: JSON.stringify(data),
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const OpportunitiesEdit = forwardRef((props, ref) => {
  const [data, updateData] = useState({});
  const [eventUpdates, setEventUpdates] = useState(null);
  const [jobUpdates, setJobUpdates] = useState(null);
  const [scholarshipUpdates, setScholarshipUpdates] = useState(null);
  const inputData = useRef(null);
  const refs = [inputData];

  useImperativeHandle(ref, () => ({
    update() {
      // var updates = {
      //   events: updateEvents(),
      //   scholarships: updateScholarships(),
      //   jobs: updateJobs(),
      // };
      // value.data = inputData.current.value;
      // updateData(value);
      // updateInDB(value);
    },
  }));

  // an initial api call to get our member of the week
  useEffect(() => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then((idToken) => {
        fetch("https://enigmatic-shore-29691.herokuapp.com/opportunities", {
          headers: { Authorization: idToken },
        });
      })
      .then((res) => {
        updateData(res.json);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="opportunitiesEdit">
      <input
        // ref={inputEvents}
        type="text"
        className="form-control"
        id="eventsInput"
        placeholder="Enter JSON for events"
        defaultValue={props.data}
        onChange={setEventUpdates(this.value)}
      />
      <input
        // ref={inputScholarships}
        type="text"
        className="form-control"
        id="scholarshipsInput"
        placeholder="Enter JSON for scholarships"
        defaultValue={props.data}
        onChange={setScholarshipUpdates(this.value)}
      />
      <input
        // ref={inputJobs}
        type="text"
        className="form-control"
        id="jobsInput"
        placeholder="Enter JSON for jobs"
        defaultValue={props.data}
        onChange={setJobUpdates(this.value)}
      />
    </div>
  );
});

export default OpportunitiesEdit;
