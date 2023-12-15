/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import './countertops.scss';

export const CountertopCard = ({ countertop, onCountertopClick }) => {
    return (
        <div className="countertopCardBox"
            onClick={() => {
                onCountertopClick(countertop);
            }}
        >
            <img className="countertopImageCard img-fluid" src={countertop.image} />
            <div className="countertopTitleBox">
                <div className="countertopTitle">{countertop.title}</div>
            </div>
        </div>

    );
};

CountertopCard.propTypes = {
    countertop: PropTypes.shape({
        title: PropTypes.string,
        material: PropTypes.string,
        color: PropTypes.string,
        description: PropTypes.string,
        iamge: PropTypes.string
    }).isRequired,
    onCountertopClick: PropTypes.func.isRequired
};
