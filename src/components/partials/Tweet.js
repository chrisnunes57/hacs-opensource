import React from "react";
import "./Tweet.scss";
import Logo from "../../media/hacs-logo.png";

function Tweet(props) {
    return (
        <div className="tweet">
            <div className="tweet-header">
                <img src={ Logo } alt="" />
                <div className="text">
                    <p>HACS at UT</p>
                    <a className="handle fancy" href="https://twitter.com/texasHACS">@texasHACS</a>
                </div>
            </div>
            <div className="tweet-content">
                <p>{props.content}</p>
                <p class="timestamp">{props.timestamp}</p>
            </div>
        </div>
    );
}

export default Tweet;
