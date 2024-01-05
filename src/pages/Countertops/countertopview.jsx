/* eslint-disable react/prop-types */
export const CountertopView = ({ countertop, onBackClick }) => {
    return (
        <>
            <div>
                <img className="img-fluid" src={countertop.image} />
            </div>
            <div>
                <span>Description: </span>
                <span>{countertop.description}</span>
            </div>
            <div>
                <span>{countertop.title}</span>
            </div>
            <div>
                <span>Primary Color: </span>
                <span>{countertop.primarycolor}</span>
            </div>
            <div>
                <span>Accent Color: </span>
                <span>{countertop.accentcolor}</span>
            </div>
            <div>
                <span>Material: </span>
                <span>{countertop.material}</span>
            </div>
            <button onClick={onBackClick}>Back</button>
        </>
    );
};