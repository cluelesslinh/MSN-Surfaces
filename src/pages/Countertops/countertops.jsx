/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import { CountertopCard } from "./countertopcard";
import { CountertopView } from "./countertopview";
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./countertops.scss";

const Countertops = () => {
    const [countertops, setCountertops] = useState([]);
    const [selectedCountertop, setSelectedCountertop] = useState(null);

    useEffect(() => {
        fetch("https://sangsite.cyclic.app/countertops")
            .then((response) => response.json())
            .then((data) => {
                const countertopsFromApi = data.map((countertop) => {
                    return {
                        _id: countertop._id,
                        Title: countertop.Title,
                        Material: countertop.Material,
                        Color: countertop.Color,
                        Image: countertop.Image,
                        Description: countertop.Description
                    };
                });
                setCountertops(countertopsFromApi);
            });
    },);

    if (selectedCountertop) {
        return <CountertopView countertop={selectedCountertop} onBackClick={() => setSelectedCountertop(null)} />;
    }

    if (countertops.length === 0) {
        return <div>The list is empty!</div>;
    }

    return (
        <MDBRow className="countertopRow justify-content-center">
            {countertops.map((countertop) => (
                <MDBCol className="col-xl-2 col-lg-3 col-md-4 col-6" key={countertop._id}>
                    <CountertopCard
                        key={countertop._id}
                        countertop={countertop}
                        onCountertopClick={(newSelectedCountertop) => {
                            setSelectedCountertop(newSelectedCountertop);
                        }}
                    />
                </MDBCol>
            ))}
        </MDBRow>
    );
};

export default Countertops;