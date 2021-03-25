// Return unixtime for JS Date
function getTimeStamp(date) {
  return Math.round(date.getTime() / 1000);
}

function isoDateToDateTimeString(isoDate) {
  let d = new Date(isoDate);

  return `${d.toLocaleDateString()} @${d.toLocaleTimeString("en-US")} CST`;
}

function isoDateToDateString(isoDate) {
  let d = new Date(isoDate);

  return `${d.toLocaleDateString()}`;
}

module.exports = { isoDateToDateTimeString, getTimeStamp };
