import { Link } from 'react-router-dom';
import styled from 'styled-components';


import twitterIcon from './img/43-twitter-512.webp';
import facebookIcon from './img/facebook-icon.webp';
import instagramIcon from './img/insta-icon.webp';
import githubIcon from './img/Github-icon.webp';
import linkedinIcon from './img/linkedin-icon.webp';
import emailIcon from './img/email-icon.png';
import phoneIcon from './img/phone-icon.webp';
import addressIcon from './img/address-icon.jpg';

const Footer = (props) => {
  return (
    <StyledFooter>
        <section className='Contact'>
            <div className="Email">

            <div className='method'>
                <img src={emailIcon} alt='email' />
                <h3> Email </h3>
            </div>
            <h4> information@untitled.tld </h4>

            </div>
            <div className="Phone">
                <div className='method'>
                    <img src={phoneIcon} alt='phone' />
                    <h3> Phone </h3>
                </div>
                <h4> (000) 000-0000 </h4>
            </div>
            <div className="Address">
            <div className='method'>
                <img src={addressIcon} alt='address' />
                <h3> Address </h3>
            </div>
            <h4> 1234 Somewhere Road #5432 <br /> Nashville, TN 00000 <br/> United States of America </h4>
            </div>
    </section>
    <div className="social">
      <img src={twitterIcon} alt='twitter' />
      <img src={facebookIcon} alt='facebook' />
      <img src={instagramIcon} alt='instagram' />
      <img src={githubIcon} alt='github' />
      <img src={linkedinIcon} alt='linkedIn' />
      <p> &copy; Untitled | Design: HTML5 UP</p>
    </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.header`
  padding: 20px;
  background: ${props => props.theme.field};
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.15);

  
.Started a {
  background-color: #ffffff;
  color: #232943;
}

.Started :hover {
  background-color: #9bf1ce;
}

.Login a {
  border: 5px solid #ffffff;
}

.Login a:hover {
  color: #9bf1ce;
  border: 5px solid #9bf1ce;
}

.navigation a {
  border-bottom: solid 1px rgba(212, 212, 255, 0.1);
}

.Contact {
    display: flex;
    flex-flow: row;
    justify-content: space-evenly;
    align-items: center;
}

.method {
    display: flex;
    flex-flow: row;
    justify-content: space-evenly;
}

.Email img {
  width: 30%;  
  height: auto;
  background-color: #ffffff;
  border-radius: 35%;
  padding: 15px, 0, 15px, 15px;
}

.Phone img {
  width: 14%;  
  height: auto;
  background-color: #ffffff;
  border-radius: 35%;
}

.Address img {
  width: 25%;
  height: auto;
  background-color: #ffffff;
  border-radius: 35%;
}

.Email {
  padding-top: 20px;
  
}

.Email .method {
    margin-top: -40px;
}

.Phone {
  padding-top: 20px;
}

.Phone h3 {
    margin-left: -90px;
}

.Phone h4{
    margin-left: 40%;
}

.Phone .method {
    margin-top: -40px;
}

.Address {
  padding-top: 20px;
}

.social {
  border-top: solid 1px rgba(212, 212, 255, 0.1);
  padding-top: 20px;
}
.social img {
  width: 2.4%;
  height: auto;
  margin: 10px;
}

.social p {
  color: rgba(212, 212, 255, 0.1);
}

`;

export default Footer;
