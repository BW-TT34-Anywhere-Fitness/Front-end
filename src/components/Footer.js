import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = (props) => {
  return (
    <StyledFooter>
        <section class='Contact'>
            <div class="Email">

            <div class='method'>
                <img src='data:image/png;base64,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'/>
                <h3> Email </h3>
            </div>
            <h4> information@untitled.tld </h4>

            </div>
            <div class="Phone">
                <div class='method'>
                    <img src='https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png'/>
                    <h3> Phone </h3>
                </div>
                <h4> (000) 000-0000 </h4>
            </div>
            <div class="Address">
            <div class='method'>
                <img src='data:image/jpeg;base64,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'/>
                <h3> Address </h3>
            </div>
            <h4> 1234 Somewhere Road #5432 <br /> Nashville, TN 00000 <br/> United States of America </h4>
            </div>
    </section>
    <div class="social">
      <img src='https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-512.png'/>
      <img src='https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/social-facebook-256.png'/>
      <img src='https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/social-instagram-256.png'/>
      <img src='https://cdn4.iconfinder.com/data/icons/social-media-free-13/32/Github_social_media_logo-256.png'/>
      <img src='https://cdn3.iconfinder.com/data/icons/picons-social/57/51-linkedin-256.png'/>
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
