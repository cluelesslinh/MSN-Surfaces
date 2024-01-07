/* eslint-disable react/prop-types */
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import "./countertopview.scss";

export const CountertopView = ({ countertop, onBackClick }) => {
    return (
        <>

            <MDBRow className="countertopBox">
                <MDBCol className="countertopViewTitle col-12">
                    <span>{countertop.title}</span>
                </MDBCol>
                <MDBCol className="countertopViewRow1 col-5">
                    <img className="img-fluid" src={countertop.image} />
                </MDBCol>
                <MDBCol className="countertopViewRow1 col-5">
                    <span>Description: </span>
                    <span>{countertop.description}</span>
                </MDBCol>
                <MDBCol className="col-3 offset-1">
                    <span>Primary Color: </span>
                    <span>{countertop.primarycolor}</span>
                </MDBCol>
                <MDBCol className="col-3">
                    <span>Accent Color: </span>
                    <span>{countertop.accentcolor}</span>
                </MDBCol>
                <MDBCol className="col-3">
                    <span>Material: </span>
                    <span>{countertop.material}</span>
                </MDBCol>
                <MDBCol className="backButton col-12">
                    <button onClick={onBackClick}>Back</button>
                </MDBCol>
            </MDBRow>

        </>
    );
};