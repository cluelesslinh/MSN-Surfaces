import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import PaymentOptions from './pages/PaymentOptions/PaymentOptions';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CountertopCard from "./pages/Countertops/countertopCard";
import CardInfo from "./pages/Countertops/CardInfo";

const App = () => {

  const cardData = [
    {
      id: 1,
      name: "Absolute Black",
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
      name: "African Rainbow",
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
      name: "Agatha Black",
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
      name: "Alaska White",
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
      name: "Alpine Valley",
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
      name: "Amarello Ornamental",
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
      name: "Amber Yellow",
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
      name: "Andino White",
      material: "Granite",
      primarycolor: "White-Warm",
      accentcolor: "Cream, Taupe",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/andino-white-granite.jpg",
      description:
        "Andino White granite from Brazil is a beautiful white and gray granite with accents of beiges and charcoals. This durable and low-maintenance granite is offered with a polished finish and is suitable for both interior and exterior design projects, even in freezing climates. Create elegant granite countertops, backsplashes, kitchen islands, floors, and landscaping features with Andino White granite."
    },
    {
      id: 9,
      name: "Arctic Sand",
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
      name: "Aspen White",
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
      name: "Astoria",
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
      name: "Avalon White",
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
      name: "Azule Celeste",
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
      name: "Azul Platino",
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
      name: "Azure Mist",
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
      name: "Azurite",
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
      name: "Bianco Antico",
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
      name: "Bianco Frost",
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
      name: "Bianco Imperial",
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
      name: "Bianco Romano",
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
      name: "Black Forest",
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
      name: "Black Galaxy",
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
      name: "Black Peal",
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
      name: "Blizzard",
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
      name: "Blue Pearl",
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
      name: "Caledonia",
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
      name: "Caravelas Gold",
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
      name: "Ceara White",
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
      name: "Coffee Brown",
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
      name: "Colonial Cream",
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
      name: "Colonial Ice",
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
      name: "Colonial White",
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
      name: "Costa Esmeralda",
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
      name: "Crema Atlantico",
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
      name: "Crema Caramel",
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
      name: "Cygus",
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
      name: "Delicatus White",
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
      name: "Desert Beach",
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
      name: "Desert Dream",
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
      name: "Eclipse",
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
      name: "Everest Mist",
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
      name: "Ferro Gold",
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
      name: "Fortazela Granite",
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
      name: "Ganache",
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
      name: "Giallo Ornamental",
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
      name: "Giallo Verona",
      material: "Granite",
      primarycolor: "Yellow",
      accentcolor: "Yellow",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/giallo-verona-granite.jpg",
      description:
        "Cool whites are softly blended with pewter and accented with sienna and umber in our Giallo Verona granite, imported from Brazil. These polished, medium variation slabs are well-suited to a broad range of residential and commercial applications, including both indoors and outdoors granite countertops, backsplashes, and flooring."
    },
    {
      id: 47,
      name: "Gran Valle",
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
      name: "Gray Atlantico",
      material: "Granite",
      primarycolor: "Gray-Light",
      accentcolor: "Taupe, White-Cool",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/gray-atlantico-granite.jpg",
      description:
        "Gray Atlantico granite countertops mix together light gray, medium gray, dark gray, and black hues for highly speckled surfaces that look good with a wide range of stellar styles. Use the polished granite counters from Brazil in kitchens and bathrooms, or install them as fabulous feature walls or floor tiles."
    },
    {
      id: 49,
      name: "Gray Mist",
      material: "Granite",
      primarycolor: "Gray-Dark",
      accentcolor: "Gray-Light, Sky, White-Warm",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/gray-mist-granite.jpg",
      description:
        "Gray Mist Granite countertops are a perfect durable surface for busy home and commercial kitchens. The dark and light grays are highlighted by warmer tones that create movement and natural beauty. 2 CM and 3 CM polished slabs are available to create beautiful countertops and accent walls. Granite may be used for exterior projects, even in climates with freezing temperatures."
    },
    {
      id: 50,
      name: "Gray Nuevo",
      material: "Granite",
      primarycolor: "Gray-Light",
      accentcolor: "Navy, White-Cool, White-Warm",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/gray-nuevo-granite.jpg",
      description:
        "Sweeping gray and greige tones create a timeless palate in Gray Neuvo granite from India. This gorgeous polished granite features classic tones, in a dramatic pattern. Use this natural stone slab to create beautiful granite countertops, waterfall islands, floors, accent walls, bar and tabletops, and other architectural features, both indoors and out. Durable, low-maintenance, and easy to clean, this beautiful granite is recommended for use in both commercial and residential properties."
    },
    {
      id: 51,
      name: "Himalaya White",
      material: "Granite",
      primarycolor: "White-Cool",
      accentcolor: "Taupe",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/himalaya-white-granite.jpg",
      description:
        "Himalaya White granite countertops consist of a cool white background with small, dark gray speckles throughout. Coming from Brazil, these beautiful surfaces feature a polished finish and can be ordered in 2-centimeter or 3-centimeter thicknesses. The medium-variation granite stone slabs are a stylish choice for a kitchen or bathroom remodel."
    },
    {
      id: 52,
      name: "Kalix River",
      material: "Granite",
      primarycolor: "Beige",
      accentcolor: "Burgundy",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/kalix-river-granite.jpg",
      description:
        "Kalix River is an extraordinary blend of colors and patterns featuring dreamy shades of creams, whites, pinks, and chocolate browns. Available in both 2 CM and 3 CM slabs, this natural granite is a perfect choice to create durable and low-maintenance granite countertops, kitchen islands, bar tops and table tops, accent walls, and even floors. It is recommended for both residential and commercial properties and can be used for countertops and other features in outdoor kitchens and other spaces."
    },
    {
      id: 53,
      name: "Lapidus",
      material: "Granite",
      primarycolor: "Gold",
      accentcolor: "Terra-Cotta",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/lapidus-granite.jpg",
      description:
        "Lapidus is a durable granite in rich golds and browns with small flecks of light grays and creams. Lapidus is recommended for both commercial and residential projects including outdoor kitchen granite countertops and landscaping in areas with freezing climates."
    },
    {
      id: 54,
      name: "Lennon",
      material: "Granite",
      primarycolor: "Gray-Light",
      accentcolor: "Beige, Taupe",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/lennon-granite.jpg",
      description:
        "Eggshell, pewter, and onyx play across a mushroom grey background in this one of a kind Brazilian granite. Lennon granite countertops are beautiful and resilient, suitable for both home and business use, as are Lennon granite floors, walls and backsplashes. This granite is also superior for outdoor use, tolerating even sub-zero temperatures."
    },
    {
      id: 55,
      name: "Luna Pearl",
      material: "Granite",
      primarycolor: "Gray-Light",
      accentcolor: "Blush, Taupe, White-Cool",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/luna-pearl-granite.jpg",
      description:
        "Luna Pearl granite from Spain features a small intricate pattern of grays and whites. Luna Pearl is available in polished slabs and recommended for both commercial and residential projects including outdoor landscaping and flooring in climates with freezing temperatures. Indoor applications can include granite countertops, walls, backsplashes, and other design features."
    },
    {
      id: 56,
      name: "Makalu Bay",
      material: "Granite",
      primarycolor: "Beige",
      accentcolor: "Taupe, White-Warm",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/makalu-bay-granite.jpg",
      description:
        "Makalu Bay granite countertops from Brazil are made up of beige, brown, and golden hues. The striking veining and softer accents create a statement-making countertop for any kitchen or bathroom. The polished natural stone surfaces fit well with mid-tone wood cabinetry or will also stand out against the white cabinetry."
    },
    {
      id: 57,
      name: "Mirage White",
      material: "Granite",
      primarycolor: "White-Warm",
      accentcolor: "Gold, Sky, Taupe",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/mirage-white-granite.jpg",
      description:
        "Mirage White granite features cool whites, warm creams and golds that are beautifully complemented by black veins. For ultimate flexibility in design and installation, slabs are available in both 2CM and 3CM thickness allowing you to create stunning granite countertops, kitchen islands, accent walls, and floors throughout homes and commercial properties."
    },
    {
      id: 58,
      name: "Monte Cristo",
      material: "Granite",
      primarycolor: "White-Warm",
      accentcolor: "Beige, Navy, Taupe",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/monte-cristo-granite.jpg",
      description:
        "Monte Cristo granite features flowing patterns of jet cascading across a pearly white background. Delicate and dramatic at once Monte Cristo is an excellent choice for granite countertops, backsplashes, floors, and other architectural features both for interior and exterior projects."
    },
    {
      id: 59,
      name: "Moon White",
      material: "Granite",
      primarycolor: "White-Warm",
      accentcolor: "Gray-Dark, Gray-Light",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/moon-white-granite.jpg",
      description:
        "Our finely grained, intricately patterned Moon White granite features speckles and swirls of bright ivory threaded with silvery grey and jet black. This dependable stone is an elegant option for granite countertops, and a stunning choice for walls and flooring in homes as well as businesses, even in below-freezing temperatures."
    },
    {
      id: 60,
      name: "Mystic Spring",
      material: "Granite",
      primarycolor: "White-Cool",
      accentcolor: "Blush, Taupe",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/mystic-spring-granite.jpg",
      description:
        "Mystic Spring granite from Brazil is an elegant soft white background ground with dramatic black and gray veins. Use this durable natural stone to create stunning granite countertops, floors, and backsplashes throughout commercial and residential properties. It coordinates beautifully with other premium surfaces in MSI's collection of mosaics, natural stone tiles, and porcelain tiles."
    },
    {
      id: 61,
      name: "Nero Mist",
      material: "Granite",
      primarycolor: "Black",
      accentcolor: "Gray-Dark",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/nero-mist-granite.jpg",
      description:
        "Nero Mist Granite countertops are dark and dramatic. The black background is complemented with soft gray veins and flecks, creating a stunning combination. Available in a honed finish, this beautiful granite is perfect for interior and exterior design projects including bar tops, table tops, accent walls, islands, and many other architectural projects."
    },
    {
      id: 62,
      name: "Nevasca Mist",
      material: "Granite",
      primarycolor: "Gray-Light",
      accentcolor: "Beige, Taupe",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/nevasca-mist-granite.jpg",
      description:
        "On-trend grays, greiges, and beiges swirl together effortlessly in Nevasca Misa granite. This stunning gray slab granite from Brazil features and neutral palette that is anything but ordinary. Create stunning granite countertops, islands, fireplace walls, floors, shower surrounds, and backsplashes in homes and commercial properties. This natural granite is easy-to-clean, durable, stain and heat resistant, and can be used in outdoor projects, even in areas with freezing climates."
    },
    {
      id: 63,
      name: "New River White",
      material: "Granite",
      primarycolor: "White-Cool",
      accentcolor: "Gray-Light, White-Warm",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/new-river-white-granite.jpg",
      description:
        "Veined with stormy silver, and speckled with crimson across an alabaster base color, our New River White is an appealing granite with a dynamic pattern imported from India. Versatile as it is beautiful, New River White is well-suited to applications in both homes and businesses such as granite countertops, backsplashes and more, and can even be used in out-of-doors installations."
    },
    {
      id: 64,
      name: "New Venetian Gold",
      material: "Granite",
      primarycolor: "Gold",
      accentcolor: "Terra-Cotta, Yellow",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/new-venetian-gold-granite.jpg",
      description:
        "New Venetian Gold granite features beige and golden tones with light veining of deep reds, grays and browns. This granite is available in a polished finish and both slabs and tiles, and is suited for use as granite countertops, backsplashes, and more."
    },
    {
      id: 65,
      name: "Oyster White",
      material: "Granite",
      primarycolor: "White-Warm",
      accentcolor: "Black, Blush",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/oyster-white-granite.jpg",
      description:
        "Oyster White granite countertops feature a warm white background with gray and black veins. Use this timeless and durable natural stone to create stunning granite countertops, and backsplashes in the kitchen or bathroom. Low maintenance, and easy to clean, this granite can be used for exterior projects even in climates with freezing temperatures."
    },
    {
      id: 66,
      name: "Peacock Green",
      material: "Granite",
      primarycolor: "Green",
      accentcolor: "Green-Dark",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/peacock-green-granite.jpg",
      description:
        "Peacock Green granite is a deep green with gold flecks and is available in polished slabs. This durable granite is recommended for all commercial and residential applications including flooring, walls and granite countertops."
    },
    {
      id: 67,
      name: "Pitaya White",
      material: "Granite",
      primarycolor: "White-Cool",
      accentcolor: "White-Cool",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/pitaya-white-granite.jpg",
      description:
        "Pitaya White granite countertops feature delicate patterns with mostly cool white backgrounds and smaller dark speckles scattered throughout. These Brazilian natural stone slabs include polished finishes for a sleek look and are perfect for kitchens and bathrooms in a wide range of styles, including traditional, modern, and minimal design aesthetics."
    },
    {
      id: 68,
      name: "Premium Black",
      material: "Granite",
      primarycolor: "Black",
      accentcolor: "Black",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/premium-black-granite.jpg",
      description:
        "Premium Black Granite is a solid deep black, low variation durable granite. Available in slabs, mosaics, prefabricated granite countertops and a variety of tile sizes, it is perfect for both interior and exterior usage and offer the ultimate in flexibility for coordination."
    },
    {
      id: 69,
      name: "S F Real",
      material: "Granite",
      primarycolor: "White-Cool",
      accentcolor: "Burgundy, Cream, Taupe",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/s-f-real-granite.jpg",
      description:
        "S F Real is a dramatic white-and-black granite from Brazil. Black and grey veins contrast sharply with a porcelain white background, making this an exceptional choice for granite countertops in a multitude of different design schemes. S F Real can also make a bold statement as a flooring material or as a wall or backsplash, indoors or out."
    },
    {
      id: 70,
      name: "Slinas White",
      material: "Granite",
      primarycolor: "White-Cool",
      accentcolor: "Gray-Light, Taupe",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/salinas-white-granite.jpg",
      description:
        "Salinas White Granite is a medium variation, polished granite available in 2 cm and 3 cm slabs. This snowy white granite is accentuated with densely packed onyx speckles; light pewter eases the transition to lower the contrast. This attractive Brazilian stone is perfect for many different home and business applications, including granite countertops."
    },
    {
      id: 71,
      name: "Santa Cecelia",
      material: "Granite",
      primarycolor: "Yellow",
      accentcolor: "Gold",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/santa-cecelia-granite.jpg",
      description:
        "Santa Cecelia granite from Brazil is a beautiful beige background with burgundy, gold and dark gray veins. This durable polished slab granite is recommended for all indoor and outdoor projects including walls, granite countertops, landscape features, and flooring."
    },
    {
      id: 72,
      name: "Santa Cecelia LC",
      material: "Granite",
      primarycolor: "Gray-Light",
      accentcolor: "Taupe",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/santa-cecilia-lc-granite.jpg",
      description:
        "Santa Cecilia LC Granite from Brazil is a low variation durable granite features warm beiges, yellows and grays. It is available in polished slabs and is recommended for interior and exterior projects including landscaping, granite countertops, backsplashes, walls, and flooring."
    },
    {
      id: 73,
      name: "Santana",
      material: "Granite",
      primarycolor: "Yellow",
      accentcolor: "Beige",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/santana-granite.jpg",
      description:
        "Earthy taupe's, greiges, creamy whites, and hints of burgundy give Santana Granite its universal appeal. This gorgeous polished slab is perfectly at home in traditional, transitional, and contemporary designs. Create stunning granite countertops, backsplashes, islands, floors and accent walls that are as beautiful as they are durable. This slab granite is well-suited for both commercial and residential properties, and it can be used for exterior projects like outdoor kitchens, even in areas with freezing temperatures."
    },
    {
      id: 74,
      name: "Sapphire Blue",
      material: "Granite",
      primarycolor: "Blue",
      accentcolor: "Black, Navy",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/sapphire-blue-granite.jpg",
      description:
        "Sapphire blue granite is an elegant combination of blues, grays, blacks and brown. From India, this durable and versatile granite features a small intricate pattern of flecks, and is suited for use as granite countertops, backsplashes, and more."
    },
    {
      id: 75,
      name: "Savanna Gold",
      material: "Granite",
      primarycolor: "Gold",
      accentcolor: "Beige, Brown",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/savanna-gold-granite.jpg",
      description:
        "The essence of sophisticated glamour, Savanna Gold Granite features rich chocolate browns and creams woven together with spectacular gold threads. This beautiful Brazilian granite is recommended for both residential and commercial properties and it can be used indoors as well as outdoors. Create gorgeous granite countertops, kitchen islands, floors, accent walls, backsplashes, and shower surrounds with this earthy and rich natural slab granite. Explore our inventory of floor tiles and wall tiles to complete your project and create your unique space."
    },
    {
      id: 76,
      name: "Silver Cloud",
      material: "Granite",
      primarycolor: "Gray-Light",
      accentcolor: "Gray-Dark",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/silver-cloud-granite.jpg",
      description:
        "Finely-grained jet, sterling, and fog grey swirl through ivory, alabaster, and white in this refined and sophisticated granite. Silver Cloud is suitable for granite countertops, floors, walls, and backsplashes. This durable material can be used in interior and exterior installations and in both homes and business settings."
    },
    {
      id: 77,
      name: "Silver Creek",
      material: "Granite",
      primarycolor: "Gray-Dark",
      accentcolor: "Navy",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/silver-creek-granite.jpg",
      description:
        "Silver Creek granite slabs from Brazil feature gray tones that run the spectrum from light to dark. This handsome natural granite is durable and low maintenance, making it suitable for a variety of installation projects in both homes and commercial properties. Create stunning granite countertops, waterfall islands, accent walls, or floors wherever gray granite is desired."
    },
    {
      id: 78,
      name: "Silver Falls",
      material: "Granite",
      primarycolor: "Gray-Light",
      accentcolor: "Taupe, White-Warm",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/silver-falls-granite.jpg",
      description:
        "Silver Falls granite countertops from India feature a mixture of light grays with medium- and dark-gray tones. The stunning natural stone slabs come with polished finishes and medium variations for counters that can be installed in traditional to contemporary kitchens, outdoor kitchens, and bathrooms for both residential and commercial use."
    },
    {
      id: 79,
      name: "Silver Waves",
      material: "Granite",
      primarycolor: "Black",
      accentcolor: "White",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/silver-waves-granite.jpg",
      description:
        "Silver Waves Granite from India is a stunning black and gray durable slab granite available in both honed and polished finishes. It is recommended for both interior and exterior uses including granite countertops, landscaping, walls, floors and backsplashes in residential and commercial properties."
    },
    {
      id: 80,
      name: "Snowfall",
      material: "Granite",
      primarycolor: "Beige",
      accentcolor: "Taupe",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/snowfall-granite.jpg",
      description:
        "Snowfall is a polished, natural granite imported from Brazil. This pristine, snowy white granite is studded with ebony and charcoal and kissed with a clouds of tawny, warm fawn. Available in 2 cm and 3 cm polished slabs, this stone is perfect for residential and commercial granite countertops as well as flooring, walls, and backsplashes."
    },
    {
      id: 81,
      name: "Solarius",
      material: "Granite",
      primarycolor: "Gold",
      accentcolor: "Terra-Cotta",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/solarius-granite.jpg",
      description:
        "Solarius granite from Brazil features yellow and gold background with darker veins of brown and gray. This durable slab polished granite is recommended for commercial and residential properties including granite countertops, landscaping and flooring in climates with freezing temperatures, as well as all indoor applications."
    },
    {
      id: 82,
      name: "Steel Grey",
      material: "Granite",
      primarycolor: "Gray-Dark",
      accentcolor: "Black",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/steel-grey-granite.jpg",
      description:
        "Steel Grey granite from India is a low variation durable granite with shades of grays and small flecks of lighter grays. It is available in slabs in a polished finish and recommended for interior and exterior projects for both commercial and residential projects including landscaping, flooring, granite countertops and walls."
    },
    {
      id: 83,
      name: "Stream White",
      material: "Granite",
      primarycolor: "White-Warm",
      accentcolor: "Grey-Light, White-Cool",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/stream-white-granite.jpg",
      description:
        "Stream White granite countertops come from India and feature tiny speckles of wine-colored dots and gorgeous gray veining across warm white backdrops. The patterns of the high-variation surfaces create lots of movement and interest, and the polished slabs look stunning in kitchens and bathrooms with white or gray color palettes."
    },
    {
      id: 84,
      name: "Sunset Canyon",
      material: "Granite",
      primarycolor: "Beige",
      accentcolor: "Blush, Gold, Taupe",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/sunset-canyon-granite.jpg",
      description:
        "Sunset Canyon granite countertops include a neutral beige backdrop highlighted with sprinkles of white and taupe colorways along with small streaks of black veining. The sophisticated natural stone surfaces from India come in brushed and polished finishes to suit different design styles that result in stunning kitchen and bathroom countertops."
    },
    {
      id: 85,
      name: "Tan Brown",
      material: "Granite",
      primarycolor: "Brown",
      accentcolor: "Black",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/tan-brown-granite.jpg",
      description:
        "Tan Brown granite originates from India. It showcases a combination of dark brown, black, and grey flecks. Its low variations and enduring nature make it a prime selection for both indoor and outdoor applications in residential and commercial environments. This includes uses for walls, floors, countertops, and various architectural elements."
    },
    {
      id: 86,
      name: "Titanium Granite",
      material: "Granite",
      primarycolor: "Black",
      accentcolor: "Gold",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/titanium-granite.jpg",
      description:
        "Titanium Granite from Brazil is filled with elegant movement of grays, blacks, golds, creams and ivory. This durable granite is perfect for any indoor or outdoor project in freezing climates and can include landscaping, countertops, kitchens and bathrooms."
    },
    {
      id: 87,
      name: "Typhoon Bordeaux",
      material: "Granite",
      primarycolor: "Terra-Cotta",
      accentcolor: "Burgundy, Terra-Cotta",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/typhoon-bordeaux-granite.jpg",
      description:
        "Typhoon Bordeaux granite is a dramatic durable granite of golds and beiges with deep golden veins. Typhoon Bordeaux is recommended for freezing climates for exterior landscaping and flooring projects and all indoor applications such as granite countertops, backsplashes and more."
    },
    {
      id: 88,
      name: "Ubatuba",
      material: "Granite",
      primarycolor: "Green-Dark",
      accentcolor: "Green",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/ubatuba-granite.jpg",
      description:
        "Ubatuba granite from Brazil is a finely textured granite featuring black, gold, gray and green speckles. The shimmering speckles of Ubatuba granite make it a perfect statement piece for indoor and outdoor applications such as granite countertops, backsplashes and more.",
    },
    {
      id: 89,
      name: "Valle Nevado",
      material: "Granite",
      primarycolor: "Gray-Light",
      accentcolor: "Taupe, White-Cool",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/valle-nevado-granite.jpg",
      description:
        "Valle Nevado granite slabs feature low variation design making it the perfect subtle backdrop in kitchens, baths, and other areas of homes and commercial properties. Use this durable natural stone to create elegant granite countertops, backsplashes, waterfall islands, floors, and accent walls. This stone can also be used for exterior projects including outdoor kitchens, patios, and other features."
    },
    {
      id: 90,
      name: "Via Lactea",
      material: "Granite",
      primarycolor: "Black",
      accentcolor: "Black",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/via-lactea-granite.jpg",
      description:
        "Via Lactea Granite is a durable and elegant black natural stone from Brazil that has a polished, leathered, or honed surface; featuring striking white veins. Ideal for countertops and kitchen islands."
    },
    {
      id: 91,
      name: "Virginia Mist",
      material: "Granite",
      primarycolor: "Gray-Dark",
      accentcolor: "Gray",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/virginia-mist-granite.jpg",
      description:
        "Made in the USA, Virginia Mist is a soothing gray durable granite slab. This granite is recommended for both interior and exterior projects including landscaping, countertops and walls in areas with freezing climates."
    },
    {
      id: 92,
      name: "Whisper White",
      material: "Granite",
      primarycolor: "White-Cool",
      accentcolor: "Gray-Light, Sky, Taupe",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/whisper-white-granite.jpg",
      description:
        "Whisper White granite from MSI features a cool white background and dramatic black veins. Create beautiful granite countertops, waterfall islands, accent walls, and even floors for homes and commercial properties. Granite is durable, and low-maintenance making it ideal for exterior design projects including outdoor kitchens and other architectural elements."
    },
    {
      id: 93,
      name: "White Alpha",
      material: "Granite",
      primarycolor: "White-Cool",
      accentcolor: "Taupe",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/white-alpha-granite.jpg",
      description:
        "White Alpha granite countertops feature a soft white background with contrasting light and dark gray specks, making it ideal for a variety of design styles from traditional to modern. This beautiful granite, available in both 2CM and 3CM slabs, is suitable for residential and commercial projects including countertops, accent walls, floors, and other architectural projects."
    },
    {
      id: 94,
      name: "White Galaxy",
      material: "Granite",
      primarycolor: "White-Cool",
      accentcolor: "White-Cool",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/white-galaxy-granite.jpg",
      description:
        "White Galaxy Granite is mostly white in color, there are varying shades of gray throughout this beautiful natural stone. The gray mineral deposits are both in a speckled pattern as well as flowing veins, this is just one of the features that will make each slab of White Galaxy granite unique."
    },
    {
      id: 95,
      name: "White Glimmer",
      material: "Granite",
      primarycolor: "White-Warm",
      accentcolor: "Brown, Cream",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/white-glimmer-granite.jpg",
      description:
        "White Glimmer granite is timeless and elegant with its warm white background and dramatic brown and black veins and specks. Use this beautiful natural stone to create stunning granite countertops, floors, and accent walls in both commercial and residential properties. Because it is low-maintenance and durable, this granite can be used for exterior projects as well as interior projects."
    },
    {
      id: 96,
      name: "White Ice",
      material: "Granite",
      primarycolor: "White-Cool",
      accentcolor: "Cream, Sky",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/white-ice-granite.jpg",
      description:
        "Pale steel grey and bright white are flecked with black in our White Ice granite, imported from Brazil. White Ice is a dramatic, modern choice for granite countertops, walls, and flooring, and is durable enough for use in commercial installations as well as residential ones. In addition to interior design, White Ice can be used out of doors as well."
    },
    {
      id: 97,
      name: "White Napoli",
      material: "Granite",
      primarycolor: "White-Cool",
      accentcolor: "White-Cool",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/white-napoli-granite.jpg",
      description:
        "White Napoli: Features soft white undertones speckled with grey and black and hints of burgundy. Pair with white cabinets for a timeless look."
    },
    {
      id: 98,
      name: "White Ornamental",
      material: "Granite",
      primarycolor: "White-Cool",
      accentcolor: "Cream, Taupe",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/white-ornamental-granite.jpg",
      description:
        "White Ornamental is a low-variation white granite suitable for a wide array of interior and exterior design projects including granite countertops, accent walls, floors, backsplashes, and other architectural elements. This granite coordinates beautifully with other premium surfaces from MSI's collection including mosaics, natural stone tiles and pavers, and porcelain tiles."
    },
    {
      id: 99,
      name: "White Paradise",
      material: "Granite",
      primarycolor: "White-Cool",
      accentcolor: "Gray-Light",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/white-paradise-granite.jpg",
      description:
        "White Paradise granite countertops from Brazil beautifully mix together waves of cool whites and warm beiges swirled with streaks of silvers and accented by bold black specks. The dreamy patterns and polished finishes in these natural stone slabs suit a wide range of design aesthetics for beautiful kitchens and bathrooms."
    },
    {
      id: 100,
      name: "White Sand",
      material: "Granite",
      primarycolor: "White-Cool",
      accentcolor: "Cream",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/white-sand-granite.jpg",
      description:
        "White Sand granite is an elegant granite that features a soft creamy white background highlighted by gold and brown flecks. This durable and low maintenance granite is ideal for design projects in both residential and commercial properties. Create stunning granite countertops, accent walls, floors, and other design elements where the beauty of natural stone is desired."
    },
    {
      id: 101,
      name: "White Sparkle",
      material: "Granite",
      primarycolor: "Gray-Light",
      accentcolor: "Gray-Dark, White-Cool",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/white-sparkle-granite.jpg",
      description:
        "White Sparkle granite features cool white tones and grays highlighted by just a touch of sparkle. These elegant white granite slabs are durable enough to be used for exterior projects including outdoor kitchens, as well as a variety of interior projects in homes and commercial properties including granite countertops, accent walls, floors, and backsplashes."
    },
    {
      id: 102,
      name: "White Spring",
      material: "Granite",
      primarycolor: "White-Warm",
      accentcolor: "Taupe",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/white-spring-granite.jpg",
      description:
        "White spring granite is a durable granite with the illusion of movement with its varying veining of whites, grays and deep reds. White Spring is recommended for interior and exterior projects including flooring, countertops, landscaping and wall applications."
    },
    {
      id: 103,
      name: "White Valley",
      material: "Granite",
      primarycolor: "White Warm",
      accentcolor: "Cream, Taupe",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/white-valley-granite.jpg",
      description:
        "White Valley granite is durable and elegant. Use this stunning natural stone to create granite countertops, accent walls, floors, and to create other eye-catching architectural elements within the property. The soft white background blends beautifully with the dramatic gray veins that run throughout the slabs. Coordinates with other premium surfaces from MSI's collection."
    },
    {
      id: 104,
      name: "White Wave",
      material: "Granite",
      primarycolor: "Gray-Light",
      accentcolor: "Gray-Dark",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/white-wave-granite.jpg",
      description:
        "White Wave granite from Brazil is a durable polished slab granite of whites and gray with medium variation. White Wave is recommended for all commercial and residential projects including high traffic floors in commercial properties and all interior projects."
    }
  ];

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="paymentoptions" element={<PaymentOptions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/countertops" element={<CountertopCard data={cardData} />} />
          <Route path="/countertops/:name" element={<CardInfo data={cardData} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
