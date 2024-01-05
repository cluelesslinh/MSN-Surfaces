/* eslint-disable react/jsx-key */
import { useState } from "react";
import { CountertopCard } from "./countertopcard";
import { CountertopView } from "./countertopview";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import "./countertops.scss";

const Countertops = () => {
    const [countertops] = useState([
        {
            id: 1,
            title: "Absolute Black",
            material: "Granite",
            primarycolor: "Black",
            accentcolor: "Black",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/absolute-black-granite.jpg",
            description:
                "Absolute Black granite is a solid black granite from India that has a very consistent color and texture. Absolute Black is recommended for both interior and exterior use to create beautiful granite countertops, floors, architectural features, and outdoor cladding."
        },
        {
            id: 2,
            title: "African Rainbow",
            material: "Granite",
            primaryolor: "White-Warm",
            accentcolor: "Gray-Light",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/african-rainbow-granite.jpg",
            description:
                "African Rainbow granite is coarsely grained, primarily pale laced with multi-colored veins. Large ivory and alabaster grains give this beautiful stone its dominant coloring, while russet and midnight blue veins add unique appeal. Durable and low maintenance, this natural stone is suitable to create stunning granite countertops, walls, floors, and other architectural features."
        },
        {
            id: 3,
            title: "Agatha Black",
            material: "Granite",
            primarycolor: "Black",
            accentcolor: "Gray",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/agatha-black-granite.jpg",
            description:
                "Agatha Black granite features a dark black background that partners beautifully with light gray and white wavy veins that add movement and depth. Both 2CM and 3CM polished slabs are available and suitable for a wide range of interior and exterior design projects. Create dramatic, bold, and beautiful granite countertops, kitchen islands, backsplashes, floors, and accent walls wherever a durable natural stone is preferred."
        },
        {
            id: 4,
            title: "Alaska White",
            material: "Granite",
            primarycolor: "White-Cool",
            accentcolor: "Cream, Taupe",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/alaska-white-granite.jpg",
            description:
                "Alaska White granite is a frosty blend of pale silver and frosty whites, marketed with warm neutrals and onyx hues. Imported from Brazil, this durable natural stone is available in a range of slab sizes. With this granite create stunning granite countertops, backsplashes, accent walls, floors and other architectural features, both indoors, and out."
        },
        {
            id: 5,
            title: "Alpine Valley",
            material: "Granite",
            primarycolor: "White-Warm",
            accentcolor: "Blush, Olive",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/alpine-valley-granite.jpg",
            description:
                "Alpine Valley granite countertops are slabs of dazzling natural stone from India with their warm white backgrounds and scattered beige, charcoal, and black accents. The high-variation counters come with a polished finish and can create a fabulous tone-on-tone look installed over medium wood cabinetry or standout style atop lighter cabinetry."
        },
        {
            id: 6,
            title: "Amarello Ornamental",
            material: "Granite",
            primarycolor: "Yellow",
            accentcolor: "Terra-Cotta",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/amarello-ornamental-granite.jpg",
            description:
                "Amarello Ornamental polished granite from Brazil is rich with grays, beiges, yellows, and creams that add subtle warmth to this durable natural stone slab. Create stunning granite countertops, floors, backsplashes, and other architectural features for residential and commercial properties. This granite, available in both 2CM and 3CM slabs, is suitable for exterior projects even in climates with freezing tempeartures."
        },
        {
            id: 7,
            title: "Amber Yellow",
            material: "Granite",
            primarycolor: "Yellow",
            accentcolor: "Gold",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/amber-yellow-granite.jpg",
            description:
                "Amber Yellow granite from Brazil features warm gold and yellow undertones that contrast beautifully with the gray and dark brown veins. This beautiful natural granite is available in both slabs and tiles to create an elegant coordinated look. Use Amber Yellow for granite countertops, kitchen islands, floors, exterior cladding, landscaping features, showers, and backsplashes. Durable and low-maintenance, it is suitable for exterior and interior design projects in both residential and commercial properties."
        },
        {
            id: 8,
            title: "Andino White",
            material: "Granite",
            primarycolor: "White-Warm",
            accnetcolor: "Cream, Taupe",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/andino-white-granite.jpg",
            description:
                "Andino White granite from Brazil is a beautiful white and gray granite with accents of beiges and charcoals. This durable and low-maintenance granite is offered with a polished finish and is suitable for both interior and exterior design projects, even in freezing climates. Create elegant granite countertops, backsplashes, kitchen islands, floors, and landscaping features with Andino White granite."
        },
        {
            id: 9,
            title: "Arctic Sand",
            material: "Granite",
            primarycolor: "White-Warm",
            accentcolor: "Cream, Taupe",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/arctic-sand-granite.jpg",
            description:
                "Arctic Sand granite countertops from India offer visual appeal and lovely movement by mixing together warm whites with soft beige, taupe, and black colorways. The polished surfaces create smooth finishes and sophisticated sheen and will look fabulous with a variety of kitchen and bathroom designs that feature various wood tones."
        },
        {
            id: 10,
            title: "Aspen White",
            material: "Granite",
            primarycolor: "White-Warm",
            accentcolor: "Gray-Light, White-Cool",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/aspen-white-granite.jpg",
            description:
                "Elegant and sophisticated, Aspen White granite is suitable for interior and exterior projects in both residential and commercial properties. In this beautiful granite, cool whites and grays are complemented with warm gold veins making this unique natural stone ideal for a variety of design styles. Available in a polished finish in both 2CM and 3CM slabs this natural stone is perfect to create stunning granite countertops, waterfall kitchen islands, backsplashes, floors, and other architectural features."
        },
        {
            id: 11,
            title: "Astoria",
            material: "Granite",
            primarycolor: "Beige",
            accentcolor: "Blush, Terra-Cotta",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/astoria-granite.jpg",
            description:
                "Astoria granite is a durable granite from India with a deep cream background and darker veins of chocolates and grays. This durable slab granite is recommended for use as granite countertops, backsplashes, landscaping features and more, for interior and exterior usage, even in freezing climates."
        },
        {
            id: 12,
            title: "Avalon White",
            material: "Granite",
            primarycolor: "Gray-Light",
            accentcolor: "Taupe",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/avalon-white-granite.jpg",
            description:
                "Avalon White granite features warm white and cream tones complemented by dark gray and black veins. This beautiful natural stone is ideal for a variety of design projects including granite countertops, accent walls, fireplace surrounds, and floors throughout commercial and residential properties. Natural granite is also suitable for exterior installations, even in areas with temperatures below freezing."
        },
        {
            id: 13,
            title: "Azule Celeste",
            material: "Granite",
            primarycolor: "Olive",
            accentcolor: "Gold, Taupe",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/azul-celeste-granite.jpg",
            description:
                "Soothing grays, silvers, dusty blues, and threads of charcoal swirl together in harmony in Azul Celeste Granite. Durable, easy-to-clean, heat and stain resistant, and it requires virtually no maintenance, this slab granite is perfect for both residential and commercial properties. Create gorgeous granite countertops, kitchen islands, floors, accent walls, shower surrounds, and backsplashes wherever a timeless and extraordinary gray granite is desired to set the tone of your design."
        },
        {
            id: 14,
            title: "Azul Platino",
            material: "Granite",
            primarycolor: "Gray-Dark",
            accentcolor: "Navy",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/azul-platino-granite.jpg",
            description:
                "Azul Platino Granite from Spain is a low variation gray and white slab granite that blends well with all interiors and design features in bathrooms, kitchens, and outdoor spaces. This durable polished granite is recommended for both commercial and residential usage as flooring, granite countertops, landscaping projects and walls."
        },
        {
            id: 15,
            title: "Azure Mist",
            material: "Granite",
            primarycolor: "Gray-Light",
            accentcolor: "Gray-Dark, Gray-Light",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/azure-mist-granite.jpg",
            description:
                "Azure Mist Granite captivates with its stunning shades of cool gray and a serene blue, adorned with threads of charcoal swirls that add a touch of elegance to any space. This durable stone boasts heat and stain resistance, ensuring longevity and easy maintenance. Its easy-to-clean surface makes it a practical choice for both residential and commercial applications. Ideal for countertops, waterfall islands, shower surrounds, floors, and beyond, Azure Mist Granite offers versatility in design. Available in 2cm and 3cm slabs, this exquisite granite transforms spaces into sophisticated havens, combining aesthetic appeal with practical functionality."
        },
        {
            id: 16,
            title: "Azurite",
            material: "Granite",
            primarycolor: "Brown",
            accentcolor: "Taupe",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/bianco-antico-granite.jpg",
            description:
                "Azurite Granite from Brazil is a beautiful rich polished slab granite of blues and creams of medium variation with darker veining for elegant contrast. Indoor and outdoor applications for this exquisite granite include landscaping projects, granite countertops, flooring, and backsplashes."
        },
        {
            id: 17,
            title: "Bianco Antico",
            material: "Granite",
            primarycolor: "White-Warm",
            accentcolor: "Beige, Taupe",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/bianco-antico-granite.jpg",
            description:
                "Bianco Antico Granite countertops feature a soft gray background with warm taupe and pink flecks. In addition to countertops, this beautiful granite can be used for coordinating backsplashes, accent walls, and floors. Granite is recommended for both residential and commercial projects, and can be used in exterior projects for wall cladding, landscaping, and countertops."
        },
        {
            id: 18,
            title: "Bianco Frost",
            material: "Granite",
            primarycolor: "Gray-Light",
            accentcolor: "Taupe, White-Cool",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/bianco-frost-granite.jpg",
            description:
                "Bianco Frost Granite countertops feature a soft white background, with dramatic black veins, and specks of deep red. These beautiful natural stone slabs are available in both 2 CM and 3 CM thicknesses, and are suitable for a variety of interior and exterior installation projects including fireplace surrounds, flooring projects, countertops, and kitchen islands."
        },
        {
            id: 19,
            title: "Bianco Imperial",
            material: "Granite",
            primarycolor: "Gray-Light",
            accentcolor: "Taupe, White-Cool",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/bianco-imperial-granite.jpg",
            description:
                "Bianco Imperial granite countertops offer medium-variation patterns with its interesting mixture of light grays, medium grays, dark flecks, and black specks. The polished surfaces from Brazil offer a stately look and can be installed both inside and outside for residential and commercial applications that include countertops, wall installations, and flooring."
        },
        {
            id: 20,
            title: "Bianco Romano",
            material: "Granite",
            primarycolor: "White-Warm",
            accentcolor: "Taupe",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/bianco-romano-granite.jpg",
            description:
                "Bianco Romano granite is perfect for use as granite countertops, flooring and more in indoor and outdoor applications including landscaping projects, even in climates with freezing temperatures. Bianco Romano is mostly shades of white and gray with small darker flecks of browns and blacks."
        },
        {
            id: 21,
            title: "Black Forest",
            material: "Granite",
            primarycolor: "Black",
            accentcolor: "Lava Vechia",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/black-forest-granite.jpg",
            description:
                "Our Black Forest granite is a boldly patterned, polished, high variation stone, imported from Brazil. This deepest obsidian and sable granite is punctuated by a blizzard of snow-white streaks and flurries. Available in both 2 cm and 3 cm thicknesses, these slabs are ideal for granite countertops, flooring, and walls, indoors and out."
        },
        {
            id: 22,
            title: "Black Galaxy",
            material: "Granite",
            primarycolor: "Black",
            accentcolor: "Black",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/black-galaxy-granite.jpg",
            description:
                "Black Galaxy granite is a mostly black granite with small gold or white flecks. Black Galaxy granite is available in both slabs and tiles to allow for creative and coordinated installations. This durable granite is suitable for both interior and exterior projects and recommended for granite countertops, accent walls, backsplashes, cladding, floors, and other features."
        },
        {
            id: 23,
            title: "Black Peal",
            material: "Granite",
            primarycolor: "Black",
            accentcolor: "Black",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/black-pearl-granite.jpg",
            description:
                "Black Pearl granite is a predominately black granite of a semi-solid color tone with speckles of blacks, golds, silvers, browns, greens and shades of gray. This durable granite is recommended for granite countertops, backsplashes, and more. It is appropriate for both indoor and outdoor use and is available in a variety of finishes."
        },
        {
            id: 24,
            title: "Blizzard",
            material: "Granite",
            primarycolor: "White-Cool",
            accentcolor: "Taupe",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/blizzard-granite.jpg",
            description:
                "Blizzard granite features a soft white background with dramatic gray veins. This beautiful natural granite is suitable for both residential and commercial design projects including walls, backsplashes, floors, kitchen islands, outdoor granite countertops and table tops, and accent walls. 2CM and 3CM slabs are available from MSI for flexibility in design and installation."
        },
        {
            id: 25,
            title: "Blue Pearl",
            material: "Granite",
            primarycolor: "Blue",
            accentcolor: "Gray-Dark",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/blue-pearl-granite.jpg",
            description:
                "Blue Pearl granite from Norway features shades of blues, grays, and beige. This durable granite is an excellent choice for both commercial and residential projects including granite countertops, backsplashes and floors, and is an exceptional option for cladding of exterior walls."
        },
        {
            id: 26,
            title: "Caledonia",
            material: "Granite",
            primarycolor: "Gray-Dark",
            accentcolor: "Brown",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/caledonia-granite.jpg",
            description:
                "Caledonia granite is a beautiful intricate granite of shades of grays and white ranging from charcoal to light gray. It is available in slabs in a polished finish and is recommended for all indoor and outdoor projects, including granite coutertops, flooring, and more."
        },
        {
            id: 27,
            title: "Caravelas Gold",
            material: "Granite",
            primarycolor: "Gold",
            accentcolor: "Yellow",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/caravelas-gold-granite.jpg",
            description:
                "Caravelas Gold Granite countertops are dramatic, and stunning. Soft creams swirl together with warm browns and cool grays in this high movement natural granite. 2 CM and 3 CM slabs are available from MSI, allowing for creative architectural installations. This beautiful granite can even be safely used as countertops, bar tops, table tops, and other exterior design projects."
        },
        {
            id: 28,
            title: "Ceara White",
            material: "Granite",
            primarycolor: "White-Cool",
            accentcolor: "Gray",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/ceara-white-granite.jpg",
            description:
                "This Caera White Granite countertop from Brazil is a style chameleon. It flawlessly blends with many kitchen or bathroom styles and offers the same durability you get with all of MSI's granite countertops. The black and gray speck detailing in this countertop gives this cool white granite countertop a more natural feel, and allows this countertop to look good paired with styles ranging from modern to classic. You'll love how this looks in your home!"
        },
        {
            id: 29,
            title: "Coffee Brown",
            material: "Granite",
            primarycolor: "Brown",
            accentcolor: "Beige",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/coffee-brown-granite.jpg",
            description:
                "Coffee Brown granite features shades of brown including coffee and chocolate. It is available in both tiles and slabs and recommended for all commercial and residential projects including flooring, walls and granite countertops."
        },
        {
            id: 30,
            title: "Colonial Cream",
            material: "Granite",
            primarycolor: "White-Warm",
            accentcolor: "Gold, White-Warm",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/colonial-cream-granite.jpg",
            description:
                "Colonial Cream granite countertops from India features a captivating pattern of gold and ivory with contrasting veins. Available in both polished and brushed finishes, Colonial Cream is recommended for commercial and residential projects including floors, walls, countertops, and landscaping features."
        },
        {
            id: 31,
            title: "Colonial Ice",
            material: "Granite",
            primarycolor: "White-Cool",
            accentcolor: "Taupe, White-Cool",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/colonial-ice-granite.jpg",
            description:
                "Colonial Ice granite countertops feature cool white surfaces with an abundance of burgundy specks and subtle veins throughout. The beautiful natural stone countertops from Brazil include high variation patterns and polished finishes for a sophisticated style. Choose from 2 centimeters and 3 centimeters for a variety of countertop edge options."
        },
        {
            id: 32,
            title: "Colonial White",
            material: "Granite",
            primarycolor: "White-Cool",
            accentcolor: "Burgandy, Taupe",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/colonial-white-granite.jpg",
            description:
                "Colonial White granite is a blend of cottony-pale grey, blended with cloudy silver and accented by jet black speckles. This Indian granite is available in both slabs (2 cm and 3 cm) and granite tiles (12x12 and 18x18), and is an optimal choice for residential and commercial applications, including granite countertops."
        },
        {
            id: 33,
            title: "Costa Esmeralda",
            material: "Granite",
            primarycolor: "Green",
            accentcolor: "Sky",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/costa-esmeralda-granite.jpg",
            description:
                "Costa Esmeralda granite from Italy is a beautiful durable granite for interior and exterior projects, including commercial flooring and landscaping and residential applications such as granite countertops, backsplashes and more. The light green and gold veining is distinctive with medium variations."
        },
        {
            id: 34,
            title: "Crema Atlantico",
            material: "Granite",
            primarycolor: "Beige",
            accentcolor: "Gray-Light",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/crema-atlantico-granite.jpg",
            description:
                "An eggshell background, studded with obsidian and feathery grey, combines to form the dramatic, bold pattern of our Crema Atlantico granite, imported from Spain. This trendy pattern is a must-have for granite countertops for contemporary residential and commercial kitchens—especially those with stainless steel appliances and a minimalistic feel."
        },
        {
            id: 35,
            title: "Crema Caramel",
            material: "Granite",
            primarycolor: "Beige",
            accentcolor: "Gray-Light",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/crema-caramel-granite.jpg",
            description:
                "Crema Caramel from Spain is a cream granite with shades of gray and beiges. This durable slab granite is recommended for interior and exterior uses in climates with freezing temperatures such as flooring, landscaping, granite countertops and walls."
        },
        {
            id: 36,
            title: "Cygus",
            material: "Granite",
            primarycolor: "Brown",
            accentcolor: "Brown",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/cygnus-granite.jpg",
            description:
                "Bronze, cedar, antique copper, and coffee blend as the dominant hues of our polished Cygnus granite, dappled with ivory, pearl and inky black. Cygnus is imported from Brazil, and is a versatile choice for flooring, walls, backsplashes, and granite countertops. It can be used for indoor and outdoor applications in both residential and commercial settings."
        },
        {
            id: 37,
            title: "Delicatus White",
            material: "Granite",
            primarycolor: "White-Cool",
            accentcolor: "Cream",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/delicatus-white-granite.jpg",
            description:
                "Delicatus White Granite features a soft white background with beautiful contrasting rich, dark veins. Durable, easy to clean, and low maintenance, use it to create gorgeous granite countertops, floors, backsplashes, accent walls, and other features throughout homes and commercial properties. This natural slab granite is suitable for both interior and exterior use to allow for continuity of style and design from indoor kitchen to outdoor kitchen, and beyond."
        },
        {
            id: 38,
            title: "Desert Beach",
            material: "Granite",
            primarycolor: "Yellow",
            accentcolor: "Brown, Terra-Cotta",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/desert-beach.jpg",
            description:
                "The creamy white background of Desert Beach natural granite is punctuated with rich tones of cocoa. Polished for an elegant look and available in both 2 CM and 3 CM slabs, it is well-suited for installations in both residential and commercial properties. Create gorgeous granite countertops in kitchens and bathrooms, floors, backsplashes, fireplace accent walls, and other architectural features. To continue your design outdoors, Desert Beach granite can be used for countertops, bar and table tops, and other features in outdoor kitchens and other spaces."
        },
        {
            id: 39,
            title: "Desert Dream",
            material: "Granite",
            primarycolor: "Gold",
            accentcolor: "Black, Yellow",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/desert-dream-granite.jpg",
            description:
                "Desert Dream granite from Brazil is a dramatic statement with its black, gold, cream and gray pattern. This polished slab granite is durable and recommended for exterior use even in climates with freezing temperatures and all indoor applications including flooring, granite countertops and backsplashes."
        },
        {
            id: 40,
            title: "Eclipse",
            material: "Granite",
            primarycolor: "Black",
            accentcolor: "Gray-Light",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/eclipse-granite.jpg",
            description:
                "Eclipse granite countertops from Brazil are by far one of the boldest natural stone designs available. With dramatic patterns reminiscent of zebra stripes, these one-of-a-kind slabs feature flowy streaks of jet blacks that weave through the lighter lines and will certainly become the statement piece of any kitchen or bathroom."
        },
        {
            id: 41,
            title: "Everest Mist",
            material: "Granite",
            primarycolor: "White-Warm",
            accentcolor: "Gray",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/everest-mist-granite.jpg",
            description:
                "Everest Mist is a stunning Brazilian white granite countertop with black specks ranging from small to medium size, and will look great in any space."
        },
        {
            id: 42,
            title: "Ferro Gold",
            material: "Granite",
            primarycolor: "Gold",
            accentcolor: "Yellow",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/ferro-gold-granite.jpg",
            description:
                "Ferro Gold Granite from Brazil is a distinctive warm golden granite with dark black veins. It is available in polished slabs and recommended for all interior projects including walls, countertops and floors and for outdoor landscaping projects in areas with freezing temperatures."
        },
        {
            id: 43,
            title: "Fortazela Granite",
            material: "Granite",
            primarycolor: "Gray-Light",
            accentcolor: "Taupe, White-Cool",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/fortaleza-granite.jpg",
            description:
                "Fortaleza granite countertops offer light gray backgrounds that are highly speckled with small flecks of beiges and blacks for a low-variation natural stone that comes from Brazil. The polished finish gives it a smooth feel and sleek look for neutral granite that works with various kitchen and bath design aesthetics."
        },
        {
            id: 44,
            title: "Ganache",
            material: "Granite",
            primarycolor: "Beige",
            accentcolor: "Terra-Cotta",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/ganache-granite.jpg",
            description:
                "Mid-tone grays, white veins, and dark charcoal flecks come together in this beautiful natural granite. Create stunning Ganache Granite countertops, accent walls, shower and tub surrounds, and floors with this durable granite. Easy to clean and maintain, granite slabs are available in 2 CM and 3 CM thicknesses, and can be used in both residential and commercial properties."
        },
        {
            id: 45,
            title: "Giallo Ornamental",
            material: "Granite",
            primarycolor: "Yellow",
            accentcolor: "Gold, Taupe",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/giallo-ornamental-granite.jpg",
            description:
                "Giallo Ornamental granite is a veined granite with a creamy white background and dark gray and brown veins. This granite is great for both commercial and residential applications including walls, granite countertops and flooring."
        },
        {
            id: 46,
            material: "Giallo Verona",
            primarycolor: "Yellow",
            accentcolor: "Yellow",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/giallo-verona-granite.jpg",
            description:
                "Cool whites are softly blended with pewter and accented with sienna and umber in our Giallo Verona granite, imported from Brazil. These polished, medium variation slabs are well-suited to a broad range of residential and commercial applications, including both indoors and outdoors granite countertops, backsplashes, and flooring."
        },
        {
            id: 47,
            title: "Gran Valle",
            material: "Granite",
            primarycolor: "Gray-Light",
            accentcolor: "Gray-Light",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/gran-valle-granite.jpg",
            description:
                "Gran Valle polished, medium variation granite, imported from Spain, features large, off-white fragments complemented by obsidian and grey. Available in slabs 2 cm and 3 cm in thickness, this granite is ideal for a diverse collection of applications, including both residential and commercial, interior and exterior installations, including granite countertops."
        },
        {
            id: 48,
            title: "Gray Atlantico",
            material: "Granite",
            primarycolor: "Gray-Light",
            accentcolor: "Taupe, White-Cool",
            image:
                "https://cdn.msisurfaces.com/images/colornames/thumbnails/gray-atlantico-granite.jpg",
            description:
                "Gray Atlantico granite countertops mix together light gray, medium gray, dark gray, and black hues for highly speckled surfaces that look good with a wide range of stellar styles. Use the polished granite counters from Brazil in kitchens and bathrooms, or install them as fabulous feature walls or floor tiles."
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
            </MDBRow >

        </>
    );
};

export default Countertops;