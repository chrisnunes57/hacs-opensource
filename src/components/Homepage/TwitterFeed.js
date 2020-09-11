import React from "react";
import "./Homepage.scss";
import Tweet from "../partials/Tweet";

const tweets = [
    {
        "content": "Come join HACS at our Back-to-School Bonanza, 3:30 PM on Zoom! Link -> https://zoom.gg/hacsjaja",
        "timestamp": "1 Day Ago"
    },
    {
        "content": "Come join HACS at our Back-to-School Bonanza, 3:30 PM on Zoom! Link -> https://zoom.gg/hacsjaja",
        "timestamp": "1 Day Ago"
    },
    {
        "content": "Come join HACS at our Back-to-School Bonanza, 3:30 PM on Zoom! Link -> https://zoom.gg/hacsjaja",
        "timestamp": "1 Day Ago"
    }
];


function TwitterFeed() {
    return (
        <div className="twitter-feed">
            <h3 className="section-title">Latest Tweets</h3>
            <div className="tweet-wrapper">
                {tweets.map( (tweet, i) => {
                    return <Tweet data={tweet} key={i} />
                })}
            </div>
        </div>
    );
}

export default TwitterFeed;
