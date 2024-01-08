/* eslint-disable react/prop-types */
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import "./countertopview.scss";

export const CountertopView = ({ countertop, onBackClick }) => {

    return (
        <>

            <MDBRow>
                <MDBCol className="countertopViewTitle">
                    <span>{countertop.title}</span>
                </MDBCol>
            </MDBRow>

            <MDBRow className="countertopBox">
                <MDBCol className="slabImg col-lg-4 col-6">
                    <img className="img-fluid" src={countertop.image} />
                </MDBCol>
                <MDBCol className="countertopDetailBox col-lg-3 col-6">
                    <div className="detailBox">
                        <span className="countertopDetail">Primary Color:</span>
                        <span className="detailDescription">{countertop.primarycolor}</span>
                    </div>
                    <div className="detailBox">
                        <span className="countertopDetail">Accent Color:</span>
                        <span className="detailDescription">{countertop.accentcolor}</span>
                    </div>
                    <div className="detailBox">
                        <span className="countertopDetail">Material:</span>
                        <span className="detailDescription">{countertop.material}</span>
                    </div>
                </MDBCol>
                <MDBCol className="col-lg-4 col-12">
                    <div className="descriptionTitle">Description: </div>
                    <span>{countertop.description}</span>
                    <div>
                        <button className="availabilityButton" href="mailto:sangsite13@gmail.com">Check Availability</button>
                    </div>
                </MDBCol>
            </MDBRow>

            <MDBRow className="buttonRow">
                <MDBCol>
                    <div className="backButtonBox">
                        <button className="backButton" onClick={onBackClick}>Back</button>
                    </div>
                </MDBCol>
            </MDBRow>

        </>
    );
};