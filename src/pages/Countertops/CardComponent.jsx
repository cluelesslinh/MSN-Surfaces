import { Link } from "react-router-dom";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import './countertops.scss';

function CardComponent({ data }) {
  return (
    <>
      <div className="countertopsTitle">Natural Stone Selection</div>
      <MDBRow className="countertopRow">
        {data.map((item, index) => (
          <MDBCol className="col-xl-2 col-lg-3 col-md-4 col-5" key={index}>
            <Link to={`/countertops/${item.name}/`}>
              <div>
                <img className="img-fluid" src={item.image} />
              </div>
              <div className="countertopName">{item.name}</div>
            </Link>
          </MDBCol>
        ))}
      </MDBRow>
    </>
  );
}
export default CardComponent;