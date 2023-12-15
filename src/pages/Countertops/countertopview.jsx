/* eslint-disable react/prop-types */
export const CountertopView = ({ countertop, onBackClick }) => {
    return (
        <div>
            <div>
                <img className="img-fluid" src={countertop.Image} />
            </div>
            <div>
                <span>{countertop.Title}</span>
            </div>
            <div>
                <span>Color: </span>
                <span>{countertop.Color}</span>
            </div>
            <div>
                <span>Material: </span>
                <span>{countertop.Material}</span>
            </div>
            <div>
                <span>Description: </span>
                <span>{countertop.Description}</span>
            </div>
            <button onClick={onBackClick}>Back</button>
        </div>
    );
};