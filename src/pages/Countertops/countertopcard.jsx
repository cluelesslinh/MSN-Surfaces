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
            <img className="countertopImageCard img-fluid" src={countertop.Image} />
            <div className="countertopTitleBox">
                <div className="countertopTitle">{countertop.Title}</div>
            </div>
        </div>

    );
};

CountertopCard.propTypes = {
    countertop: PropTypes.shape({
        Title: PropTypes.string,
        Material: PropTypes.string,
        Color: PropTypes.string,
        Description: PropTypes.string,
        Image: PropTypes.string
    }).isRequired,
    onCountertopClick: PropTypes.func.isRequired
};
