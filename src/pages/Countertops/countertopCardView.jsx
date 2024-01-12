/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import './countertops.scss';

function CountertopCard({ data }) {
  return (
    <>
      <div className="countertopsTitle">Natural Stone Selection</div>
      <MDBRow className="countertopRow">
        {data.map((item, index) => (
          <MDBCol className="col-xl-2 col-lg-3 col-md-4 col-5" key={index}>
            <div className="countertopCardBox">
              <Link to={`/countertops/${item.name}/`}>
                <img className="img-fluid" src={item.image} />
                <div className="countertopName">{item.name}</div>
              </Link>
            </div>
          </MDBCol>
        ))}
      </MDBRow>
    </>
  );
}
export default CountertopCard; 