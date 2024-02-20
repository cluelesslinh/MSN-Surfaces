/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Parallax, Background } from 'react-parallax';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./countertopinfo.scss";

const CardInfo = ({ data }) => {
    const { name } = useParams();

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
                                <MDBCol className="slabImgBox col-lg-4 col-md-6 col-sm-6 col-12">
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
                                </MDBCol>
                            </MDBRow>

                            <MDBRow className="quoteBox">
                                <MDBCol className="col-5">
                                    <div className="recQuote"><center>* Receive quote within 24 hours *</center></div>
                                </MDBCol>
                                <MDBCol className="col-5">
                                    <div>
                                        <a href="mailto:sangsite13@gmail.com">
                                            <button className="availabilityButton">Request Quote Now</button>
                                        </a>
                                    </div>
                                </MDBCol>
                            </MDBRow>

                            <Fade
                                indicators={() => <div className="indicator"></div>}
                                arrows={false}
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



