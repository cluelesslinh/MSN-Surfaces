export const CountertopCard = ({ countertop, onCountertopClick }) => {
    return (
        <>
            <img className="countertopImageCard img-fluid" src={countertop.image} />
            <div className="countertopTitleBox">
                <div className="countertopTitle">{countertop.title}</div>
            </div>
        </>
    );
};


import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import './countertops.scss';

export const CountertopCard = ({ data }) => {
    return (
        <>
            <section className="wrapper">
                <div className="container">
                    {data.title.map((item, index) => (
                        <div className="card" key={index}>
                            <h3>{item.name}</h3>
                            <p>{item.title}</p>
                            <Link to={`/countertops/${item.title}/`}>View Discription</Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

CountertopCard.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        material: PropTypes.string,
        primarycolor: PropTypes.string,
        accentcolor: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string
    }).isRequired,
    // onCountertopClick: PropTypes.func.isRequired
};


