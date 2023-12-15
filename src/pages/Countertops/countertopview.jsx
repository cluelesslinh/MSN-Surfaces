/* eslint-disable react/prop-types */
export const CountertopView = ({ countertop, onBackClick }) => {
    return (
        <div>
            <div>
                <img className="img-fluid" src={countertop.image} />
            </div>
            <div>
                <span>{countertop.title}</span>
            </div>
            <div>
                <span>Color: </span>
                <span>{countertop.color}</span>
            </div>
            <div>
                <span>Material: </span>
                <span>{countertop.material}</span>
            </div>
            <div>
                <span>Description: </span>
                <span>{countertop.description}</span>
            </div>
            <button onClick={onBackClick}>Back</button>
        </div>
    );
};