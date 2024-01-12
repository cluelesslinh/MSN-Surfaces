import { useParams } from "react-router-dom";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Parallax, Background } from 'react-parallax';
import "./countertopview.scss";

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

                        </div>
                    ))}
            </div>

        </>
    );
}

export default CardInfo;



