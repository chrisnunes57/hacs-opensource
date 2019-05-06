import React from 'react';
import "./hover.css";

export default class TextOnHover extends React.PureComponent {
  render(){
    return(
      <div>
        <div className="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
            <div className="content-overlay"/>
            {this.props.children}
              <div className="content-details fadeIn-bottom">
                <h3>{this.props.name}</h3>
                <p>{this.props.blurb}</p>
              </div>
          </a>
        </div>
      </div>
    )
  }
}