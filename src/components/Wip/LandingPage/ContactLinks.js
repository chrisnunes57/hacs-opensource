import React from 'react';
import {Container} from "reactstrap";
import TwitterLogo from './logoPics/twitter.png'
import FacebookLogo from './logoPics/facebook.png'
import InstagramLogo from './logoPics/instagram.png'


export default class ContactLinks extends React.Component {

    render(){
        return(
            <Container>
                <h1>HACS Contact Links</h1>
                <a  target="_blank" href={"https://twitter.com/texashacs?lang=en"}>
                    <img src={TwitterLogo} alt="Twitter Logo" style={{width:'100px'}} />
                </a>
                <a target="_blank" href={"https://www.instagram.com/texashacs/"}>
                    <img src={InstagramLogo} alt="Instagram Logo" style={{width:'125px', padding: '15px'}} />
                </a>
                <a target="_blank" href={"https://www.facebook.com/groups/TexasHACS"}>
                    <img src={FacebookLogo} alt="Facebook Logo" style={{width:'95px'}} />
                </a>
            </Container>
        )
    }
}
