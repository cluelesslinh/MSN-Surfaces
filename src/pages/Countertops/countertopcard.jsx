/* eslint-disable react/prop-types */
import './countertopcard.scss';

export const CountertopCard = ({ countertop, onCountertopClick }) => {
    return (
        <div className="countertopCardBox"
            onClick={() => {
                onCountertopClick(countertop);
            }}
        >
            <img className="countertopImageCard img-fluid" src={countertop.image} />
            <div className="countertopTitle">
                {countertop.title}
            </div>
        </div>
    );
};