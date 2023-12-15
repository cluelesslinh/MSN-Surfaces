/* eslint-disable react/jsx-key */
import { useState } from "react";
import { CountertopCard } from "./countertopcard";
import { CountertopView } from "./countertopview";
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import "./countertops.scss";

const Countertops = () => {
    const [countertops, setCountertops] = useState([
        {
            id: 1,
            title: "Absolute Black",
            material: "Granite",
            color: "Black",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/absolute-black-granite.jpg",
            description:
                "Absolute Black granite is a solid black granite from India that has a very consistent color and texture. Absolute Black is recommended for both interior and exterior use to create beautiful granite countertops, floors, architectural features, and outdoor cladding."
        },
        {
            id: 2,
            title: "Absolute White",
            material: "Marble",
            color: "White",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/absolute-white-marble.jpg",
            description:
                "Absolute White marble countertops feature a soft white background with subtle light gray veins. 2 CM and 3 CM polished slabs of Absolute White are available to create beautiful marble countertops, waterfall islands, shower surrounds, fireplace accent walls, and marble tile floors. Elegant and durable, this exquisite marble is suitable for residential and commercial property installations as well as for a myriad of exterior projects."
        },
        {
            id: 3,
            title: "Acquatic",
            material: "Quartzite",
            color: "Gray",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/acquatic.jpg",
            description:
                "Elevate your design vision with Acquatic Quartzite. This natural wonder seamlessly marries the tranquility of flowing waters with contemporary sophistication. Featuring a mesmerizing palette of cool grays and delicate veins, Acquatic Quartzite embodies nature's timeless elegance. Its durable composition ensures resilience in high-traffic areas, making it ideal for countertops, backsplashes, and outdoor applications. With its captivating aesthetics, this stone transforms any space into a work of art. Whether you're crafting a luxurious kitchen, bathroom, or an inviting outdoor oasis, Acquatic Quartzite delivers the perfect blend of durability and aesthetics. Dive into the epitome of luxury and style, and let Acquatic Quartzite grace your space with timeless beauty."
        },
        {
            id: 4,
            title: "Agatha Black",
            material: "Granite",
            color: "Black",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/agatha-black-granite.jpg",
            description:
                "Agatha Black granite features a dark black background that partners beautifully with light gray and white wavy veins that add movement and depth. Both 2CM and 3CM polished slabs are available and suitable for a wide range of interior and exterior design projects. Create dramatic, bold, and beautiful granite countertops, kitchen islands, backsplashes, floors, and accent walls wherever a durable natural stone is preferred."
        },
        {
            id: 5,
            title: "Arctic White",
            material: "Quartz",
            color: "White",
            image:
                "https://cdn.msisurfaces.com/images/quartz-countertops/products/thumbnails/arctic-white-quartz.jpg",
            description:
                "Arctic White Quartz is a solid bright white slab with no pattern or veins, perfect for creating a clean canvas with endless design possibilities. Available in both 2 cm and 3 cm slabs and prefabricated countertops, this quartz is a dazzling addition to any space. Create gorgeous white quartz countertops, accent walls, shower surrounds, and other architectural features where a timeless premium surface is desired. Stain-resistant, easy-to-clean, and requiring virtually no ongoing maintenance, Arctic White Quartz is the perfect choice for busy homes and commercial properties."
        },
        {
            id: 6,
            title: "Absolute Black",
            material: "Granite",
            color: "Black",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/absolute-black-granite.jpg",
            description:
                "Absolute Black granite is a solid black granite from India that has a very consistent color and texture. Absolute Black is recommended for both interior and exterior use to create beautiful granite countertops, floors, architectural features, and outdoor cladding."
        },
        {
            id: 7,
            title: "Absolute White",
            material: "Marble",
            color: "White",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/absolute-white-marble.jpg",
            description:
                "Absolute White marble countertops feature a soft white background with subtle light gray veins. 2 CM and 3 CM polished slabs of Absolute White are available to create beautiful marble countertops, waterfall islands, shower surrounds, fireplace accent walls, and marble tile floors. Elegant and durable, this exquisite marble is suitable for residential and commercial property installations as well as for a myriad of exterior projects."
        },
        {
            id: 8,
            title: "Acquatic",
            material: "Quartzite",
            color: "Gray",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/acquatic.jpg",
            description:
                "Elevate your design vision with Acquatic Quartzite. This natural wonder seamlessly marries the tranquility of flowing waters with contemporary sophistication. Featuring a mesmerizing palette of cool grays and delicate veins, Acquatic Quartzite embodies nature's timeless elegance. Its durable composition ensures resilience in high-traffic areas, making it ideal for countertops, backsplashes, and outdoor applications. With its captivating aesthetics, this stone transforms any space into a work of art. Whether you're crafting a luxurious kitchen, bathroom, or an inviting outdoor oasis, Acquatic Quartzite delivers the perfect blend of durability and aesthetics. Dive into the epitome of luxury and style, and let Acquatic Quartzite grace your space with timeless beauty."
        },
        {
            id: 9,
            title: "Agatha Black",
            material: "Granite",
            color: "Black",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/agatha-black-granite.jpg",
            description:
                "Agatha Black granite features a dark black background that partners beautifully with light gray and white wavy veins that add movement and depth. Both 2CM and 3CM polished slabs are available and suitable for a wide range of interior and exterior design projects. Create dramatic, bold, and beautiful granite countertops, kitchen islands, backsplashes, floors, and accent walls wherever a durable natural stone is preferred."
        },
        {
            id: 10,
            title: "Arctic White",
            material: "Quartz",
            color: "White",
            image:
                "https://cdn.msisurfaces.com/images/quartz-countertops/products/thumbnails/arctic-white-quartz.jpg",
            description:
                "Arctic White Quartz is a solid bright white slab with no pattern or veins, perfect for creating a clean canvas with endless design possibilities. Available in both 2 cm and 3 cm slabs and prefabricated countertops, this quartz is a dazzling addition to any space. Create gorgeous white quartz countertops, accent walls, shower surrounds, and other architectural features where a timeless premium surface is desired. Stain-resistant, easy-to-clean, and requiring virtually no ongoing maintenance, Arctic White Quartz is the perfect choice for busy homes and commercial properties."
        },
        {
            id: 11,
            title: "Absolute Black",
            material: "Granite",
            color: "Black",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/absolute-black-granite.jpg",
            description:
                "Absolute Black granite is a solid black granite from India that has a very consistent color and texture. Absolute Black is recommended for both interior and exterior use to create beautiful granite countertops, floors, architectural features, and outdoor cladding."
        },
        {
            id: 12,
            title: "Absolute White",
            material: "Marble",
            color: "White",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/absolute-white-marble.jpg",
            description:
                "Absolute White marble countertops feature a soft white background with subtle light gray veins. 2 CM and 3 CM polished slabs of Absolute White are available to create beautiful marble countertops, waterfall islands, shower surrounds, fireplace accent walls, and marble tile floors. Elegant and durable, this exquisite marble is suitable for residential and commercial property installations as well as for a myriad of exterior projects."
        },
        {
            id: 13,
            title: "Acquatic",
            material: "Quartzite",
            color: "Gray",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/acquatic.jpg",
            description:
                "Elevate your design vision with Acquatic Quartzite. This natural wonder seamlessly marries the tranquility of flowing waters with contemporary sophistication. Featuring a mesmerizing palette of cool grays and delicate veins, Acquatic Quartzite embodies nature's timeless elegance. Its durable composition ensures resilience in high-traffic areas, making it ideal for countertops, backsplashes, and outdoor applications. With its captivating aesthetics, this stone transforms any space into a work of art. Whether you're crafting a luxurious kitchen, bathroom, or an inviting outdoor oasis, Acquatic Quartzite delivers the perfect blend of durability and aesthetics. Dive into the epitome of luxury and style, and let Acquatic Quartzite grace your space with timeless beauty."
        },
        {
            id: 14,
            title: "Agatha Black",
            material: "Granite",
            color: "Black",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/agatha-black-granite.jpg",
            description:
                "Agatha Black granite features a dark black background that partners beautifully with light gray and white wavy veins that add movement and depth. Both 2CM and 3CM polished slabs are available and suitable for a wide range of interior and exterior design projects. Create dramatic, bold, and beautiful granite countertops, kitchen islands, backsplashes, floors, and accent walls wherever a durable natural stone is preferred."
        },
        {
            id: 15,
            title: "Arctic White",
            material: "Quartz",
            color: "White",
            image:
                "https://cdn.msisurfaces.com/images/quartz-countertops/products/thumbnails/arctic-white-quartz.jpg",
            description:
                "Arctic White Quartz is a solid bright white slab with no pattern or veins, perfect for creating a clean canvas with endless design possibilities. Available in both 2 cm and 3 cm slabs and prefabricated countertops, this quartz is a dazzling addition to any space. Create gorgeous white quartz countertops, accent walls, shower surrounds, and other architectural features where a timeless premium surface is desired. Stain-resistant, easy-to-clean, and requiring virtually no ongoing maintenance, Arctic White Quartz is the perfect choice for busy homes and commercial properties."
        },
        {
            id: 16,
            title: "Absolute Black",
            material: "Granite",
            color: "Black",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/absolute-black-granite.jpg",
            description:
                "Absolute Black granite is a solid black granite from India that has a very consistent color and texture. Absolute Black is recommended for both interior and exterior use to create beautiful granite countertops, floors, architectural features, and outdoor cladding."
        },
        {
            id: 17,
            title: "Absolute White",
            material: "Marble",
            color: "White",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/absolute-white-marble.jpg",
            description:
                "Absolute White marble countertops feature a soft white background with subtle light gray veins. 2 CM and 3 CM polished slabs of Absolute White are available to create beautiful marble countertops, waterfall islands, shower surrounds, fireplace accent walls, and marble tile floors. Elegant and durable, this exquisite marble is suitable for residential and commercial property installations as well as for a myriad of exterior projects."
        },
        {
            id: 18,
            title: "Acquatic",
            material: "Quartzite",
            color: "Gray",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/acquatic.jpg",
            description:
                "Elevate your design vision with Acquatic Quartzite. This natural wonder seamlessly marries the tranquility of flowing waters with contemporary sophistication. Featuring a mesmerizing palette of cool grays and delicate veins, Acquatic Quartzite embodies nature's timeless elegance. Its durable composition ensures resilience in high-traffic areas, making it ideal for countertops, backsplashes, and outdoor applications. With its captivating aesthetics, this stone transforms any space into a work of art. Whether you're crafting a luxurious kitchen, bathroom, or an inviting outdoor oasis, Acquatic Quartzite delivers the perfect blend of durability and aesthetics. Dive into the epitome of luxury and style, and let Acquatic Quartzite grace your space with timeless beauty."
        },
        {
            id: 19,
            title: "Agatha Black",
            material: "Granite",
            color: "Black",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/agatha-black-granite.jpg",
            description:
                "Agatha Black granite features a dark black background that partners beautifully with light gray and white wavy veins that add movement and depth. Both 2CM and 3CM polished slabs are available and suitable for a wide range of interior and exterior design projects. Create dramatic, bold, and beautiful granite countertops, kitchen islands, backsplashes, floors, and accent walls wherever a durable natural stone is preferred."
        },
        {
            id: 20,
            title: "Arctic White",
            material: "Quartz",
            color: "White",
            image:
                "https://cdn.msisurfaces.com/images/quartz-countertops/products/thumbnails/arctic-white-quartz.jpg",
            description:
                "Arctic White Quartz is a solid bright white slab with no pattern or veins, perfect for creating a clean canvas with endless design possibilities. Available in both 2 cm and 3 cm slabs and prefabricated countertops, this quartz is a dazzling addition to any space. Create gorgeous white quartz countertops, accent walls, shower surrounds, and other architectural features where a timeless premium surface is desired. Stain-resistant, easy-to-clean, and requiring virtually no ongoing maintenance, Arctic White Quartz is the perfect choice for busy homes and commercial properties."
        }
    ]);

    const [selectedCountertop, setSelectedCountertop] = useState(null);

    if (selectedCountertop) {
        return <CountertopView countertop={selectedCountertop} onBackClick={() => setSelectedCountertop(null)} />;
    }

    if (countertops.length === 0) {
        return <div>The list is empty!</div>;
    }

    return (
        <>

            <MDBRow className="countertopRow justify-content-center">
                {countertops.map((countertop) => (
                    <MDBCol className="col-xl-2 col-lg-3 col-md-4 col-6 " key={countertop.id}>
                        <CountertopCard
                            key={countertop.id}
                            countertop={countertop}
                            onCountertopClick={(newSelectedCountertop) => {
                                setSelectedCountertop(newSelectedCountertop);
                            }}
                        />
                    </MDBCol>
                ))}
            </MDBRow>

        </>
    );
};

export default Countertops;