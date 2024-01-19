/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Parallax, Background } from 'react-parallax';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./countertopinfo.scss";

const CardInfo = ({ data }) => {
    const { name } = useParams();

    const buttonStyle = {
        width: "50px",
        margin: "3.5em"
    };

    const properties = {
        prevArrow: <button style={{ ...buttonStyle }}><svg fill="#000000" height="100px" width="100px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" transform="rotate(180)" stroke="#000000" strokeWidth="16.5"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="9.9"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path> </g><g id="SVGRepo_iconCarrier"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path> </g></svg></button>,
        nextArrow: <button style={{ ...buttonStyle }}><svg fill="#000000" height="100px" width="100px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" stroke="#000000" strokeWidth="16.5"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="9.9"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path> </g><g id="SVGRepo_iconCarrier"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path> </g></svg></button>
    }

    return (
        <>

            <div className="card-container">
                {data
                    .filter((item) => item.name === name)
                    .map((item, index) => (
                        <div key={index}>

                            <Parallax className="viewTitleBox" strength={100}>
                                <Background>
                                    <img className="titleImage" src={item.image} />
                                </Background>
                                <div className="titleBox">
                                    <div className="countertopViewTitle">{item.name}</div>
                                </div>
                            </Parallax>

                            <MDBRow className="countertopBox">
                                <MDBCol className="slabImgBox col-lg-4 col-6">
                                    <img className="slabImg img-fluid" src={item.image} />
                                </MDBCol>
                                <MDBCol className="countertopDetailBox col-lg-3 col-6">
                                    <div className="detailBox">
                                        <span className="countertopDetail">Primary Color:</span>
                                        <span className="detailDescription">{item.primarycolor}</span>
                                    </div>
                                    <div className="detailBox">
                                        <span className="countertopDetail">Accent Color:</span>
                                        <span className="detailDescription">{item.accentcolor}</span>
                                    </div>
                                    <div className="detailBox">
                                        <span className="countertopDetail">Material:</span>
                                        <span className="detailDescription">{item.material}</span>
                                    </div>
                                </MDBCol>
                                <MDBCol className="col-lg-4 col-12">
                                    <div className="descriptionTitle">Description: </div>
                                    <span>{item.description}</span>
                                    <div>
                                        <a href="mailto:sangsite13@gmail.com">
                                            <button className="availabilityButton">Check Availability</button>
                                        </a>
                                    </div>
                                </MDBCol>
                            </MDBRow>


                            <Fade
                                {...properties}
                                indicators={() => <div className="indicator"></div>}
                                duration={10000}
                                pauseOnHover={true}
                                canSwipe={true}
                                onChange={function noRefCheck() { }}
                                onStartChange={function noRefCheck() { }}
                            >
                                <div className="each-slide">
                                    <div>
                                        <img
                                            className="img-fluid"
                                            alt="First image"
                                            src={item.image1}
                                        />
                                    </div>
                                </div>
                                <div className="each-slide">
                                    <div>
                                        <img
                                            alt="Second image"
                                            src={item.image2}
                                        />
                                    </div>
                                </div>
                                <div className="each-slide">
                                    <div>
                                        <img
                                            alt="Third image"
                                            src={item.image3}
                                        />
                                    </div>
                                </div>
                                <div className="each-slide">
                                    <div>
                                        <img
                                            alt="Fourth image"
                                            src={item.image4}
                                        />
                                    </div>
                                </div>
                            </Fade>

                        </div>
                    ))}
            </div>

        </>
    );
}

export default CardInfo;



