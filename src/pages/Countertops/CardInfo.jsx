import { useParams } from "react-router-dom";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

const CardInfo = ({ data }) => {
    const { name } = useParams();

    return (
        <>
            <section className="card-wrapper">
                <div className="card-container">
                    {data
                        .filter((item) => item.name === name)
                        .map((item, index) => (
                            <div key={index}>
                                <MDBRow>
                                    <MDBCol className="col-xl-2 col-lg-3 col-md-4 col-6">
                                        <img className="countertopImageCard img-fluid" src={item.image} />
                                        <div className="countertopTitleBox">
                                            <div>{item.name}</div>
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </div>
                        ))}
                </div>
            </section>
        </>
    );
}

export default CardInfo;

