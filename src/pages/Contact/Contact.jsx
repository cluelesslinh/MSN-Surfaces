import { Background, Parallax } from 'react-parallax';
import {
    ContactTitleBox, ContactTitle, InfoBox, InfoDesc, MessageBox, MessageDesc
} from './contactstyle';
import "./contact.css";

const Contact = () => {
    return (
        <>

            <Parallax className="contactImgBox">
                <Background>
                    <img className="contactImg" src="https://images.unsplash.com/photo-1596205250168-c3583813eea0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="contact-img"></img>
                </Background>
                <ContactTitleBox>
                    <ContactTitle>Please contact our representative <b> Misel Sang Nguyen </b> with any inquiries.</ContactTitle>
                </ContactTitleBox>
                <InfoBox>
                    <InfoDesc><b>Office: </b>
                        <a href="tel:2398341511">239-834-1511</a>
                    </InfoDesc>
                    <InfoDesc><b>Cell: </b>
                        <a href="tel:8583496896">858-349-6896</a>
                    </InfoDesc>
                    <InfoDesc>
                        <b>Email: </b>
                        <a href="mailto:sangsite13@gmail.com">msnscn@yahoo.com</a>
                    </InfoDesc>
                </InfoBox>
                <MessageBox>
                    <MessageDesc>
                        * Please leave a message and we will get back to you within 24 hours *
                    </MessageDesc>
                </MessageBox>
            </Parallax >

        </>
    )
}

export default Contact