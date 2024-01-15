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
        prevArrow: <button style={{ ...buttonStyle }}><svg fill="#000000" height="100px" width="100px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330.00 330.00" stroke="#000000" strokeWidth="16.5001"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="9.90006"> <path id="XMLID_227_" d="M233.25,306.001L127.5,165.005L233.25,24.001c4.971-6.628,3.627-16.03-3-21c-6.627-4.971-16.03-3.626-21,3 L96.75,156.005c-4,5.333-4,12.667,0,18l112.5,149.996c2.947,3.93,7.451,6.001,12.012,6.001c3.131,0,6.29-0.978,8.988-3.001 C236.878,322.03,238.221,312.628,233.25,306.001z"></path> </g><g id="SVGRepo_iconCarrier"> <path id="XMLID_227_" d="M233.25,306.001L127.5,165.005L233.25,24.001c4.971-6.628,3.627-16.03-3-21c-6.627-4.971-16.03-3.626-21,3 L96.75,156.005c-4,5.333-4,12.667,0,18l112.5,149.996c2.947,3.93,7.451,6.001,12.012,6.001c3.131,0,6.29-0.978,8.988-3.001 C236.878,322.03,238.221,312.628,233.25,306.001z"></path> </g></svg></button>,
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
                                            alt="First image"
                                            src="https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                                        />
                                    </div>
                                </div>
                                <div className="each-slide">
                                    <div>
                                        <img
                                            alt="Second image"
                                            src="https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80"
                                        />
                                    </div>
                                </div>
                                <div className="each-slide">
                                    <div>
                                        <img
                                            alt="Third image"
                                            src="https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
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



