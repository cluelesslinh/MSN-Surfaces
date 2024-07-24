import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CountertopCard from './pages/Countertops/countertopCardView';
import CardInfo from "./pages/Countertops/countertopCardInfo";

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
      image1:
        "https://rskmarbleandgranite.com/wp-content/uploads/2021/08/absolute-black-granite-countertop-1080x675.jpg",
      image2:
        "https://www.greatlakesgm.com/wp-content/uploads/2015/11/absolute-black-granite-countertop-kitchen-1.jpg",
      image3:
        "https://www.regattagranitesindia.com/wp-content/uploads/2019/08/Absolute-Black.jpg",
      image4:
        "https://graniteselection.com/wp-content/uploads/2019/12/Absolute-black-honed-granite.jpg",
      description:
        "Absolute Black granite is a solid black granite from India that has a very consistent color and texture. Absolute Black is recommended for both interior and exterior use to create beautiful granite countertops, floors, architectural features, and outdoor cladding."
    },
    {
      id: 2,
      name: "African Rainbow",
      material: "Granite",
      primarycolor: "White-Warm",
      accentcolor: "Gray-Light",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/african-rainbow-granite.jpg",
      image1:
        "https://sky-marble.com/wp-content/uploads/2018/07/African-Rainbow-Kitchen-Northern-Granite-And-Marble.jpg",
      image2:
        "https://sky-marble.com/wp-content/uploads/2018/07/African-Rainbow-Kitchen-Northern-Granite-And-Marble-2.jpg",
      image3:
        "https://intstonegallery.com/wp-content/uploads/2020/01/blog.jpg",
      image4:
        "https://st.hzcdn.com/simgs/pictures/kitchens/african-rainbow-granite-kitchen-northern-granite-and-marble-img~1ff17d9508dab638_14-7178-1-1f120e7.jpg",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/agatha-black-granite-c.jpg",
      image2:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/agatha-black-granite-e.jpg",
      image3:
        "https://aquakitchen.com/wp-content/uploads/2021/07/black-agatha-granite.jpeg",
      image4:
        "https://primestones.com/wp-content/uploads/2021/11/agatha-quartzite-kitchen-primestones-4.jpg",
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
      image1:
        "https://sky-marble.com/wp-content/uploads/2018/07/Alaska-White-Design-Edited.jpg",
      image2:
        "https://www.surfacesbypacific.com/wp-content/uploads/2020/03/Alaska-White-Counter.png",
      image3:
        "https://goodwillexports.com/wp-content/uploads/2022/11/Alaska-white-granite-kitchen-countertop.jpg",
      image4:
        "https://www.cgdcabinetry.com/wp-content/uploads/2019/12/alaska-white-granite-countertop-sample.jpg",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/alpine-white-granite-b.jpg",
      image2:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/alpine-valley-granite-a.jpg",
      image3:
        "https://kitchenbathdesignstudio.com/wp-content/uploads/2021/12/Oyster-White-granite-countertops-Charlotte.jpg",
      image4:
        "https://kitchenbathdesignstudio.com/wp-content/uploads/2021/12/Alpine-White-granite-countertops-Charlotte.jpeg",
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
      image1:
        "https://live.staticflickr.com/7158/6669059029_e0d2092850_b.jpg",
      image2:
        "https://granitecountertopchattanooga.com/wp-content/uploads/2017/12/Ornamental-Guidoni.jpg",
      image3:
        "https://live.staticflickr.com/7035/6669057287_ddbbdff13c_b.jpg",
      image4:
        "https://www.roomvo.com/services/room/rooms/e715ffd000d341f69ba3fb03548d7141/paint/?instance_spec=%7B%22product_id%22%3A%22260328d02%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A2%7D&instance_spec=%7B%22product_id%22%3A%22260328d02%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A3%7D&instance_spec=%7B%22product_id%22%3A%22260328d02%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A4%7D&instance_spec=%7B%22product_id%22%3A%22260328d02%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A5%7D&img_format=jpg&vendor=5043d50518074a2180bb36c9ca636077&visitor=c7ce9a3457124b2880de1ef9ea1709c8&locale=en-us&display_width=1024&display_height=1024",
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
      image1:
        "https://i.pinimg.com/originals/99/60/68/9960687af5af0b1745f546440ff867ef.jpg",
      image2:
        "https://www.granitemarblewa.com/wp-content/uploads/2017/05/Amber_Yello_P1.jpg",
      image3:
        "https://st.hzcdn.com/simgs/pictures/kitchens/yellow-river-granite-and-bathrooms-granite-grannies-img~2531f0c5006dd650_14-4470-1-02cfee2.jpg",
      image4:
        "https://st.hzcdn.com/simgs/pictures/kitchens/puebla-onyx-mosaic-hatches-in-kitchen-msi-img~4361fd69015b40fa_4-0619-1-a9eb2a8.jpg",
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
      image1:
        "https://www.granitemarblewa.com/wp-content/uploads/2017/05/andino_white_granite_kitchen.jpg",
      image2:
        "https://st.hzcdn.com/simgs/pictures/kitchens/case-design-remodeling-inc-case-design-remodeling-inc-img~f1b18e8c0ce6e8b7_8-1000-1-55ec5ca.jpg",
      image3:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/andino-white-granite-a.jpg",
      image4:
        "https://www.wp-stone.com/uploads/allimg/White-Granite-Countertops/16-kitchen-with-white-cabinets-and-arctic-white-granite-countertops.jpg",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/arctic-sand-granite-a.jpg",
      image2:
        "https://www.badgergranite.com/wp-content/uploads/2023/10/New-Venetian-Gold-Granite-Countertops-in-Oak-Creek-Milwaukee-Wisconsin-1.jpg",
      image3:
        "https://cdn.shopify.com/s/files/1/0555/4244/8263/products/msi-surfaces-alaska-white-granite-kitchenscene1_512x393.jpg?v=1666386591",
      image4:
        "https://cdn.shopify.com/s/files/1/0555/4244/8263/products/msi-surfaces-silver-falls-granite-kitchenscene_512x342.jpg?v=1666409872",
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
      image1:
        "https://louisvillegraniteandstone.com/wp-content/uploads/2021/08/7-1024x768.jpg",
      image2:
        "https://aquakitchen.com/wp-content/uploads/2016/04/the-one.jpg",
      image3:
        "https://st.hzcdn.com/simgs/pictures/kitchens/aspen-white-granite-kitchen-stone-action-img~40b128e00a46735a_9-2992-1-6b5f80b.jpg",
      image4:
        "https://www.ksdealscabinets.com/content/images/products/Aspen-White-1.jpg",
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
      image1:
        "https://www.ganeshstone.in/webroot/img/uploads/category_icon/1687866291image(210).png",
      image2:
        "https://greenvillecountertops.com/static/0e79263680f181d9ba971986b3f7c688/astoria-granite-kitchen-island-install.jpg",
      image3:
        "https://marble.com/uploads/albums/285/1280X720/XwPz08gXDsAV3qqurSmB.jpg",
      image4:
        "https://cms.countertop.agency/uploads/astoria_granite_kitchen_countertops_1ec08e0d1c.jpg",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/avalon-white-granite-a.jpg",
      image2:
        "https://i.pinimg.com/originals/e4/bd/2e/e4bd2ea8f71f4f19c186fce5d1cd3c17.jpg",
      image3:
        "https://st.hzcdn.com/simgs/pictures/kitchens/kitchen-echelon-custom-homes-img~dc212f970ecd0e33_14-3297-1-76daf7c.jpg",
      image4:
        "https://newviewgranite.com/wp-content/uploads/2021/04/GRANITE-COUNTERTOPS.jpg",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/azul-celeste-granite-b.jpg",
      image2:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/azul-celeste-granite-a.jpg",
      image3:
        "https://www.tingidastone.com/Content/uploads/2023844797/20231129114306d7941326981b480faa98b43cebb7a3af.jpg?size=x0",
      image4:
        "https://granitecountertopwarehouse.com/wp-content/uploads/2020/11/Azul-Celeste-Granite-Kitchen-03-14-2023-1-1.jpg",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/azul-platino-granite-a.jpg",
      image2:
        "https://st.hzcdn.com/simgs/e82292c1080678ec_9-9199/_.jpg",
      image3:
        "https://prestigeedition.co.uk/media/images/azul-platino-worktops.jpg",
      image4:
        "https://www.countertopshq.com/wp-content/uploads/2021/04/azul-platino-granite.jpg",
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
      image1:
        "https://cdn.msisurfaces.com/images/colornames/fullslab/azure-mist-granite.jpg",
      image2:
        "https://cdn.msisurfaces.com/images/colornames/fullslab/azure-mist-granite.jpg",
      image3:
        "https://cdn.msisurfaces.com/images/colornames/fullslab/azure-mist-granite.jpg",
      image4:
        "https://cdn.msisurfaces.com/images/colornames/fullslab/azure-mist-granite.jpg",
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
        "https://cdn.msisurfaces.com/images/colornames/azurite-granite.jpg",
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/azurite-granite-b.jpg",
      image2:
        "https://i0.wp.com/prostonecountertops.com/wp-content/uploads/2021/07/606425d6f507cb97d3231a89_Azurite%E2%80%93Granite%E2%80%93Install%E2%80%93Kitchen%E2%80%93Stone-Fabricators-1-1160x810-1.jpg?fit=1160%2C810&ssl=1",
      image3:
        "https://www.cawdorstonegallery.co.uk/wp-content/uploads/2019/11/azzurite-granite-hertford-heath-cawdor-stone-1.jpg",
      image4:
        "https://st.hzcdn.com/simgs/pictures/kitchens/azurite-granite-kitchen-pacific-crest-granite-redding-location-img~98716ebe0ab3f2f4_4-0083-1-b83bf18.jpg",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/bianco-antico-granite-b.jpg",
      image2:
        "https://dropinblog.net/34246798/files/featured/Bianco_Antico_Granite__Wrap_up_Your_New_kitchen_With_us.png",
      image3:
        "https://amsumash.com/wp-content/uploads/2018/09/Bianco-Antico-Granite.jpg",
      image4:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/bianco-antico-granite-a.jpg",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/bianco-frost-granite-a.jpg",
      image2:
        "https://www.novelkitchenbath.com/wp-content/uploads/2021/07/bianco-frost-granite-b.jpg",
      image3:
        "https://www.roomvo.com/services/room/rooms/fb1ec38a6f014021b2a3f215a2934c1e/paint/?instance_spec=%7B%22product_id%22%3A%2279420580%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A2%7D&instance_spec=%7B%22product_id%22%3A%2279420580%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A3%7D&instance_spec=%7B%22product_id%22%3A%2279420580%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A4%7D&img_format=jpg&vendor=5043d50518074a2180bb36c9ca636077&visitor=c7ce9a3457124b2880de1ef9ea1709c8&locale=en-us&display_width=1024&display_height=1024&img_quality=high",
      image4:
        "https://www.roomvo.com/services/room/rooms/e715ffd000d341f69ba3fb03548d7141/paint/?instance_spec=%7B%22product_id%22%3A%2279420580%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A2%7D&instance_spec=%7B%22product_id%22%3A%2279420580%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A3%7D&instance_spec=%7B%22product_id%22%3A%2279420580%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A4%7D&instance_spec=%7B%22product_id%22%3A%2279420580%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A5%7D&img_format=jpg&vendor=5043d50518074a2180bb36c9ca636077&visitor=c7ce9a3457124b2880de1ef9ea1709c8&locale=en-us&display_width=1024&display_height=1024",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/bianco-imperial-granite-a.jpg",
      image2:
        "https://www.roomvo.com/services/room/rooms/e715ffd000d341f69ba3fb03548d7141/paint/?instance_spec=%7B%22product_id%22%3A%226d6209298%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A2%7D&instance_spec=%7B%22product_id%22%3A%226d6209298%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A3%7D&instance_spec=%7B%22product_id%22%3A%226d6209298%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A4%7D&instance_spec=%7B%22product_id%22%3A%226d6209298%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A5%7D&img_format=jpg&vendor=5043d50518074a2180bb36c9ca636077&visitor=c7ce9a3457124b2880de1ef9ea1709c8&locale=en-us&display_width=1024&display_height=1024",
      image3:
        "https://www.roomvo.com/services/room/rooms/8c2d4c0144ae41dcb42f253a89678f3b/paint/?instance_spec=%7B%22product_id%22%3A%226d6209298%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A2%7D&instance_spec=%7B%22product_id%22%3A%226d6209298%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A4%7D&instance_spec=%7B%22product_id%22%3A%226d6209298%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A5%7D&instance_spec=%7B%22product_id%22%3A%226d6209298%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A6%7D&instance_spec=%7B%22product_id%22%3A%226d6209298%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A7%7D&instance_spec=%7B%22product_id%22%3A%226d6209298%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A8%7D&img_format=jpg&vendor=5043d50518074a2180bb36c9ca636077&visitor=c7ce9a3457124b2880de1ef9ea1709c8&locale=en-us&display_width=1024&display_height=1024",
      image4:
        "https://www.intermountainstone.com/wp-content/uploads/2018/10/granite.jpg",
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
      image1:
        "https://lovehomedesigns.com/wp-content/uploads/2017/04/Bianco-Romano-Granite-Featured.jpg",
      image2:
        "https://www.wp-stone.com/uploads/allimg/Bianco-Romano-Granite/17-bianco-romano-granite-on-white-cabinets.jpg",
      image3:
        "https://grandstrandmarblellc.com/wp-content/uploads/2018/08/BIANCO-ROMANO3-1.png",
      image4:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/bianco-romano-granite-a.jpg",
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
      image1:
        "https://www.wp-stone.com/uploads/allimg/Black-Granite-Countertops/cosmic-black-granite-countertops.jpg",
      image2:
        "https://www.igscountertops.com/wp-content/uploads/2017/05/Black-Forest-Granite-Kitchen.jpg",
      image3:
        "https://dropinblog.net/34246798/files/featured/Black_Forest_Granite_is_Durable.png",
      image4:
        "https://i.pinimg.com/736x/66/95/36/669536df4626532ea3aa4e9f1c974176.jpg",
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
      image1:
        "https://www.regattagranitesindia.com/wp-content/uploads/2019/04/2-Black-galaxy-Granite-kitchen-countertop.jpg",
      image2:
        "https://i.pinimg.com/736x/00/fe/32/00fe32f08780871b47319da7c3811a43.jpg",
      image3:
        "https://imgix.cosentino.com/usa/wp-content/uploads/2021/07/BG1-1.jpg?auto=format%2Ccompress&ixlib=php-3.3.0",
      image4:
        "https://i.pinimg.com/736x/3f/06/db/3f06dba8ddca644c19e09a98d1c3835d.jpg",
      description:
        "Black Galaxy granite is a mostly black granite with small gold or white flecks. Black Galaxy granite is available in both slabs and tiles to allow for creative and coordinated installations. This durable granite is suitable for both interior and exterior projects and recommended for granite countertops, accent walls, backsplashes, cladding, floors, and other features."
    },
    {
      id: 23,
      name: "Black Pearl",
      material: "Granite",
      primarycolor: "Black",
      accentcolor: "Black",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/black-pearl-granite.jpg",
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/black-pearl-granite-a.jpg",
      image2:
        "https://st.hzcdn.com/simgs/pictures/kitchens/black-pearl-granite-kitchen-countertops-sale-in-london-granite-sale-astrum-granite-img~5c212c690f63387b_9-0195-1-064b59f.jpg",
      image3:
        "https://www.shreenathstonex.com/wp-content/uploads/2020/06/black-pearl1.jpg",
      image4:
        "https://rocky-tops.com/wp-content/uploads/2021/07/Black-Pearl-Granite0710.jpg",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/blizzard-granite-a.jpg",
      image2:
        "https://i.ytimg.com/vi/S1MYwuhWdMQ/maxresdefault.jpg",
      image3:
        "https://www.tingidastone.com/uploads/202335220/blizzard-granite-slab6a3be0e6-2ff8-4728-b64f-9e4488157446.jpg",
      image4:
        "https://stoneproonline.com/wp-content/uploads/2023/06/granite-counter-top.jpg",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/blue-pearl-granite-b.jpg",
      image2:
        "https://eastcoast-granite.com/_ipx/w_3840,q_75/https%3A%2F%2Fcms.countertop.agency%2Fuploads%2Fblue_pearl_quartz_kitchen_countertops_c06e5ed8b0.jpg?url=https%3A%2F%2Fcms.countertop.agency%2Fuploads%2Fblue_pearl_quartz_kitchen_countertops_c06e5ed8b0.jpg&w=3840&q=75",
      image3:
        "https://st.hzcdn.com/simgs/pictures/kitchens/blue-pearl-classic-granite-and-marble-img~d6b1643304789129_16-7896-1-49df376.jpg",
      image4:
        "https://diastone.ee/wp-content/uploads/2019/02/blue-pearl-1-1024x768.jpg",
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
      image1:
        "https://www.qualitygranitenh.com/wp-content/uploads/2018/05/new-caledonia-granite.jpg",
      image2:
        "https://www.igscountertops.com/wp-content/uploads/New-Caledonia-Granite-Kitchen-scaled.jpeg",
      image3:
        "https://eastcoast-granite.com/_ipx/w_3840,q_75/https%3A%2F%2Fcms.countertop.agency%2Fuploads%2Fnew_caledonia_kitchen_counters_c3d1550626.jpg?url=https%3A%2F%2Fcms.countertop.agency%2Fuploads%2Fnew_caledonia_kitchen_counters_c3d1550626.jpg&w=3840&q=75",
      image4:
        "https://countertopsolutionsohio.com/wp-content/uploads/2019/07/Caledonia-granite-92338.jpg",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/caravelas-gold-granite_taos-picket-pattern-8mm-a.jpg",
      image2:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/caravelas-gold-granite-b.jpg",
      image3:
        "https://i0.wp.com/seattlevegasgranite.com/wp-content/uploads/2021/10/Caravelas-Gold-Granite-Kitchen-Countertops.jpg?ssl=1",
      image4:
        "https://www.novelkitchenbath.com/wp-content/uploads/2021/07/caravelas-gold-granite_taos-picket-pattern-8mm-b.jpg",
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
      image1:
        "https://hip3home.com/wp-content/uploads/2023/04/fort-1.jpg",
      image2:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/ceara-white-granite-a.jpg",
      image3:
        "https://cdn.msisurfaces.com/images/blogs/posts/2022/10/msi-white-napoli-granite-kitchen-island-min.jpg",
      image4:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/ceara-white-granite-b.jpg",
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
      image1:
        "https://www.wp-stone.com/uploads/allimg/Tan-Brown-Granite/11-tan-brown-granite-countertops-with-wood-cabinets.jpg",
      image2:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/coffee-brown-granite-a.jpg",
      image3:
        "https://rskmarbleandgranite.com/wp-content/uploads/2021/10/coffee-brown-granite-countertop.jpg",
      image4:
        "https://5.imimg.com/data5/SELLER/Default/2022/3/KC/ZX/PG/41582319/coffee-brown-granite.jpg",
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
      image1:
        "https://i0.wp.com/legacytops.com/wp-content/uploads/2019/09/mareski-kitchen-colonial-cream.jpeg?fit=1440%2C1080&ssl=1",
      image2:
        "https://www.igscountertops.com/wp-content/uploads/Colonial-Cream-Granite-Kitchen.jpeg",
      image3:
        "https://www.decor-eye.com/wp-content/uploads/2015/09/Colonial-Cream-Granite-Countertops-Cabinets-Backsplash.jpg",
      image4:
        "https://cdn.decorpad.com/photos/2016/06/09/kitchen-soapstone-crema-persa-granite-countertops.jpg",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/colonial-ice-granite-c.jpg",
      image2:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/colonial-ice-granite-c.jpg",
      image3:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/colonial-ice-granite-b.jpg",
      image4:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/colonial-ice-granite-a.jpg",
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
      image1:
        "https://i0.wp.com/prostonecountertops.com/wp-content/uploads/2021/07/6061ba06bc4ce1697a065e97_Colonial-White-4.jpg?fit=1000%2C586&ssl=1",
      image2:
        "https://www.shawstone.co.uk/wp-content/uploads/2018/07/cd0e5b89-eacf-469d-b499-829e23858c2a-002.jpg",
      image3:
        "https://www.wp-stone.com/uploads/allimg/White-Granite-Countertops/03-Kitchen-with-white-cabinets-and-colonial-white-granite-countertops.jpg",
      image4:
        "https://i.pinimg.com/originals/2e/c0/38/2ec038a35b1e174adedd242c15f7a8ab.jpg",
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
      image1:
        "https://i.pinimg.com/736x/70/d6/88/70d688f52d43ab45ad9dd829f0474dea.jpg",
      image2:
        "https://www.marblesystems.com/wp-content/uploads/2012/slabroomscenes/SL10553-4.jpg",
      image3:
        "https://i.pinimg.com/originals/44/f5/9d/44f59d4750b3c2c127de764adf54bd7e.jpg",
      image4:
        "https://i.pinimg.com/736x/0a/e3/10/0ae310ebfec4a9a866c11eed85129510.jpg",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/crema-atlantico-granite-b.jpg",
      image2:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/giallo-atlantico-granite-a.jpg",
      image3:
        "https://rocky-tops.com/wp-content/uploads/2021/07/Crema-Atlantico-Granite-Kitchen-Countertops-11-02-2023-1-jpg.webp",
      image4:
        "https://rocky-tops.com/wp-content/uploads/2021/07/Crema-Atlantico-Granite-Kitchen-Countertops-in-Nashville-TN-11-02-2023-jpg.webp",
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
      image1:
        "https://www.granitdesign.com/app/uploads/2020/05/Crema-Caramel-Granite-beautyshot.jpg",
      image2:
        "https://www.handsongranitenc.com/wp-content/uploads/Crema-Caramel.jpeg",
      image3:
        "https://cms.countertop.agency/uploads/crema_caramel_granite_countertps_dc116716b4.jpeg",
      image4:
        "https://st.hzcdn.com/simgs/pictures/kitchens/crema-caramel-granite-kitchen-stone-action-img~9781daa50a577f1d_16-4783-1-562309d.jpg",
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
      image1:
        "https://dropinblog.net/34246798/files/featured/Cygnus_Brown_Silk_Quartzite_A_Fantastic_Option_for_kitchen.png",
      image2:
        "https://i.pinimg.com/1200x/fa/c9/c8/fac9c87aa3c6f96e065badc9a90e18f5.jpg",
      image3:
        "https://i.pinimg.com/originals/61/58/24/61582468a5d15eb74cc682cce18f0a77.jpg",
      image4:
        "https://dropinblog.net/34246798/files/Cygnus_Brown_Silk_Quartzite_Slabs.png",
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
      image1:
        "https://dropinblog.net/34246798/files/featured/Delicatus_White_Granite_One_of_the_Best_White_Granite.png",
      image2:
        "https://i.pinimg.com/originals/da/9f/49/da9f491b321f05db8347b82037c22a76.png",
      image3:
        "https://www.eonyx.com/wp-content/uploads/2022/03/Delicatus-White-Granite-Kitchen-Countertops.jpg",
      image4:
        "https://eastcoast-granite.com/_ipx/w_2048,q_75/https%3A%2F%2Fcms.countertop.agency%2Fuploads%2Fdelicatus_granite_countertops_cabinets_16471e3964.jpg?url=https%3A%2F%2Fcms.countertop.agency%2Fuploads%2Fdelicatus_granite_countertops_cabinets_16471e3964.jpg&w=2048&q=75",
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
      image1:
        "https://pbs.twimg.com/media/F3qFSnjWsAEWSS2?format=jpg&name=large",
      image2:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/desert-beach-room-scene-a.jpg",
      image3:
        "https://www.igscountertops.com/wp-content/uploads/Desert-Beach-Granite-Kitchen1.jpeg",
      image4:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/desert-beach-room-scene-b.jpg",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/desert-dream-granite-c.jpg",
      image2:
        "https://goodwillexports.com/wp-content/uploads/2022/11/quartz-countertop.jpg",
      image3:
        "https://st.hzcdn.com/simgs/pictures/kitchens/kitchen-remodel-houston-granite-guy-img~6d0175760886a1bb_4-7114-1-dfd2bed.jpg",
      image4:
        "https://www.igscountertops.com/wp-content/uploads/Desert-Dream-Granite-Bathroom.jpg",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/eclipse-granite.jpg",
      image2:
        "https://www.fuleistone.com/wp-content/uploads/2023/08/eclipse-granite-kitchen-countertops-5.jpg",
      image3:
        "https://www.eonyx.com/wp-content/uploads/2022/04/Eclipse-Granite-Kitchen-Countertops.jpg",
      image4:
        "https://www.srsstone.com/uploads/202218635/eclipse-granite-slab56464854329.jpg",
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
      image1:
        "https://pbs.twimg.com/media/Eq5Vl7wW8AATR18.jpg",
      image2:
        "https://eastcoast-granite.com/_ipx/w_1920,q_75/https%3A%2F%2Fcms.countertop.agency%2Fuploads%2Fwhite_sparkle_granite_countertop_1d1a483836.jpg?url=https%3A%2F%2Fcms.countertop.agency%2Fuploads%2Fwhite_sparkle_granite_countertop_1d1a483836.jpg&w=1920&q=75",
      image3:
        "https://i.pinimg.com/736x/c7/2f/0b/c72f0b71ef42e37823615f477829b00c.jpg",
      image4:
        "https://i.pinimg.com/736x/fb/30/d1/fb30d11a876ccf7a978112d3da41224e.jpg",
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
      image1:
        "https://vipkitchenbath.com/wp-content/uploads/2021/10/ferro_gold_vip_kitchen_bath_granite-3.jpg",
      image2:
        "https://vipkitchenbath.com/wp-content/uploads/2021/10/ferro_gold_vip_kitchen_bath_granite-9.jpg",
      image3:
        "https://rocky-tops.com/wp-content/uploads/2023/09/Gold-Yellow-and-Cream-Granite-09-14-2023-1-jpg.webp",
      image4:
        "https://cdn.shopify.com/s/files/1/0758/1545/2962/products/df9bg1tsgbvndex3ia13.jpg?v=1696546662&width=533",
      description:
        "Ferro Gold Granite from Brazil is a distinctive warm golden granite with dark black veins. It is available in polished slabs and recommended for all interior projects including walls, countertops and floors and for outdoor landscaping projects in areas with freezing temperatures."
    },
    {
      id: 43,
      name: "Fortazela",
      material: "Granite",
      primarycolor: "Gray-Light",
      accentcolor: "Taupe, White-Cool",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/fortaleza-granite.jpg",
      image1:
        "https://i.pinimg.com/originals/85/1a/0a/851a0a21123ba582d821ff175468070e.jpg",
      image2:
        "https://www.eonyx.com/wp-content/uploads/2022/04/White-Plateau-Granite-Countertops-600x450.jpg",
      image3:
        "https://www.eonyx.com/wp-content/uploads/2022/04/White-Plateau-Granite-Kitchen-Countertops.jpg",
      image4:
        "https://www.eonyx.com/wp-content/uploads/2022/04/Fortaleza-White-Granite-Countertops.jpg",
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
      image1:
        "https://revelarekitchens.com/wp-content/uploads/2020/10/Bianco-Antico-Kitchen-1024x670.png",
      image2:
        "https://colossusgranite.net/wp-content/uploads/2020/10/thumbnail_20190131_114233_resized.jpg",
      image3:
        "https://i0.wp.com/www.ivocabinets.com/wp-content/uploads/2021/06/IMG_3855-scaled.jpg?fit=2560%2C1707&ssl=1",
      image4:
        "https://i0.wp.com/www.ivocabinets.com/wp-content/uploads/2021/06/4896975B-DF78-481F-98FD-A102941FBC84-scaled.jpeg?fit=2560%2C1920&ssl=1",
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
      image1:
        "https://www.greatlakesgm.com/wp-content/uploads/2015/01/giallo-ornamental-granite-kitchen-countertop-4.jpg",
      image2:
        "https://marble.com/uploads/albums/123/640X360/memOSKBlv38OOGhiUAZJ.jpg",
      image3:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/giallo-ornamental-granite.jpg",
      image4:
        "https://marble.com/uploads/albums/125/640X360/roJjPv09HrCkMGxS6BDl.jpg",
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
      image1:
        "https://www.mrright.in/ideas/wp-content/uploads/2017/05/featured-wikimedia-883x666.png",
      image2:
        "https://i.pinimg.com/originals/13/2f/1c/132f1c7638e09894b9ed9e38449bf75b.jpg",
      image3:
        "https://eastcoastgraniteraleigh.com/_ipx/w_3840,q_75/https%3A%2F%2Fcms.countertop.agency%2Fuploads%2Fverona_granite_countertops_sink_9abcc0c24d.jpg?url=https%3A%2F%2Fcms.countertop.agency%2Fuploads%2Fverona_granite_countertops_sink_9abcc0c24d.jpg&w=3840&q=75",
      image4:
        "https://eastcoastgraniteraleigh.com/_ipx/w_3840,q_75/https%3A%2F%2Fcms.countertop.agency%2Fuploads%2Fverona_granite_kitchen_countertop_nofridge_88aa2cfe20.jpg?url=https%3A%2F%2Fcms.countertop.agency%2Fuploads%2Fverona_granite_kitchen_countertop_nofridge_88aa2cfe20.jpg&w=3840&q=75",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/gran-valle-granite-a.jpg",
      image2:
        "https://granitekingtexas.com/files/2021/03/thumbnail_IMG_24271(1).jpg",
      image3:
        "https://www.roomvo.com/services/room/rooms/fb1ec38a6f014021b2a3f215a2934c1e/paint/?instance_spec=%7B%22product_id%22%3A%226d6201543%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A2%7D&instance_spec=%7B%22product_id%22%3A%226d6201543%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A3%7D&instance_spec=%7B%22product_id%22%3A%226d6201543%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A4%7D&img_format=jpg&vendor=5043d50518074a2180bb36c9ca636077&visitor=c7ce9a3457124b2880de1ef9ea1709c8&locale=en-us&display_width=1024&display_height=1024",
      image4:
        "https://www.roomvo.com/services/room/rooms/e715ffd000d341f69ba3fb03548d7141/paint/?instance_spec=%7B%22product_id%22%3A%226d6201543%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A2%7D&instance_spec=%7B%22product_id%22%3A%226d6201543%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A3%7D&instance_spec=%7B%22product_id%22%3A%226d6201543%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A4%7D&instance_spec=%7B%22product_id%22%3A%226d6201543%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A5%7D&img_format=jpg&vendor=5043d50518074a2180bb36c9ca636077&visitor=c7ce9a3457124b2880de1ef9ea1709c8&locale=en-us&display_width=1024&display_height=1024",
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
      image1:
        "https://dlqxt4mfnxo6k.cloudfront.net/olthofhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC83MWViNTAwODhlMjRkMmFmNmVmOTFhZTQ5ZWZlY2QzYi5qcGVn/webp/2000/2000",
      image2:
        "https://dlqxt4mfnxo6k.cloudfront.net/olthofhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC8zNmJiMmQwZTJjMGMxNmI2MTZiZmVlNDZkNjFmYjFhNy5qcGVn/webp/2000/2000",
      image3:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/gray-atlantico-granite.jpg",
      image4:
        "https://cdn.msisurfaces.com/images/blogs/posts/2022/01/msi-bianco-imperial-grey-granite-kitchen-slab.jpg",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/gray-mist-granite-b.jpg",
      image2:
        "https://mgl-granite.com/wp-content/uploads/2021/01/IMG_3904-scaled.jpg",
      image3:
        "https://newviewgranite.com/wp-content/uploads/2019/03/granite-countertops-in-gray.jpg",
      image4:
        "https://mgl-granite.com/wp-content/uploads/2021/01/FullSizeRender-1536x1152.jpg",
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
      image1:
        "https://images.squarespace-cdn.com/content/v1/63061b01708af81e2c340d0a/1680640378052-8BEN2VQIUUXR5DJWXBAN/gray+nuevo.jpg",
      image2:
        "https://schillings.com/wp-content/uploads/Gray-Nuevo-Granite-Countertop.jpg",
      image3:
        "https://st.hzcdn.com/simgs/pictures/kitchens/kitchen-projects-tops-solid-surface-img~8331c6fa09cd28be_14-6368-1-5c51cb6.jpg",
      image4:
        "https://st.hzcdn.com/simgs/pictures/kitchens/heathermore-whole-house-remodel-alair-homes-plano-img~4a21ef8a0473ec8f_14-8963-1-c5e842f.jpg",
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
      image1:
        "https://www.handsongranitenc.com/wp-content/uploads/2018/08/Himalaya-White.jpg",
      image2:
        "https://i.pinimg.com/originals/7b/71/c1/7b71c106afa0ba83a874be57a174f4be.jpg",
      image3:
        "https://st.hzcdn.com/simgs/pictures/kitchens/himalayan-white-granite-granite-world-countertops-inc-img~001121f40d36119d_4-7234-1-ba10f7c.jpg",
      image4:
        "https://st.hzcdn.com/simgs/pictures/kitchens/himalayan-white-granite-granite-world-countertops-inc-img~80b1bdfb0d361198_4-7234-1-a7543f7.jpg",
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
      image1:
        "https://pbs.twimg.com/media/EyPfd9ZWEAAajGh.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0555/4244/8263/products/msi-surfaces-blanco-perla-granite-kitchenscene_512x342.jpg?v=1666390413",
      image3:
        "https://pbs.twimg.com/media/EyPfd7IWUAEMCua?format=jpg&name=large",
      image4:
        "https://mkdkitchenandbath.com/wp-content/uploads/2023/03/Berwyn-Kitchen-Design-2.webp",
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
      image1:
        "https://images.squarespace-cdn.com/content/v1/5f5107b10f206063c983f438/a9138a42-aa94-4c5b-b573-8fb8bffeec39/Lapidus-Granite-houston-countertops.png",
      image2:
        "https://i.pinimg.com/originals/bf/bd/e4/bfbde4708dcec34a814609f27fdb9021.jpg",
      image3:
        "https://www.granitemarblewa.com/wp-content/uploads/2017/06/Lapidus_3.jpg",
      image4:
        "https://i.pinimg.com/originals/60/cf/96/60cf969a8d31160d15dc49a75e6279f6.png",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/lennon-granite-b.jpg",
      image2:
        "https://i.pinimg.com/736x/03/36/32/03363217a3425e71a08f139e950955c6.jpg",
      image3:
        "https://www.igscountertops.com/wp-content/uploads/Lennon-Granite-Kitchen.jpeg",
      image4:
        "https://img.archiexpo.com/images_ae/photo-g/58844-11763026.jpg",
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
      image1:
        "https://schillings.com/wp-content/uploads/lunaPearlGranite.jpg",
      image2:
        "https://sky-marble.com/wp-content/uploads/2018/06/Luna-Pearl-Granite-Kitchen-Countertop.jpg",
      image3:
        "https://eastcoastgranitewilmington.com/_ipx/w_1080,q_75/https%3A%2F%2Fcms.countertop.agency%2Fuploads%2FLuna_pearl_with_island_no_frifge_b84378d23c.jpg?url=https%3A%2F%2Fcms.countertop.agency%2Fuploads%2FLuna_pearl_with_island_no_frifge_b84378d23c.jpg&w=1080&q=75",
      image4:
        "https://eastcoastgranitewilmington.com/_ipx/w_1200,q_75/https%3A%2F%2Fcms.countertop.agency%2Fuploads%2Fluna_pearl_f59d995cfd.jpg?url=https%3A%2F%2Fcms.countertop.agency%2Fuploads%2Fluna_pearl_f59d995cfd.jpg&w=1200&q=75",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/makalu-bay-granite-a.jpg",
      image2:
        "https://i.pinimg.com/1200x/4a/01/83/4a018370017926862f32aa90ae3c1b4a.jpg",
      image3:
        "https://kscountertops.com/_img/_noticias/sh50.jpg",
      image4:
        "https://www.roomvo.com/services/room/rooms/8c2d4c0144ae41dcb42f253a89678f3b/paint/?instance_spec=%7B%22product_id%22%3A%22260324383%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A2%7D&instance_spec=%7B%22product_id%22%3A%22260324383%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A4%7D&instance_spec=%7B%22product_id%22%3A%22260324383%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A5%7D&instance_spec=%7B%22product_id%22%3A%22260324383%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A6%7D&instance_spec=%7B%22product_id%22%3A%22260324383%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A7%7D&instance_spec=%7B%22product_id%22%3A%22260324383%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A8%7D&img_format=jpg&vendor=5043d50518074a2180bb36c9ca636077&visitor=c7ce9a3457124b2880de1ef9ea1709c8&locale=en-us&display_width=1024&display_height=1024&img_quality=high",
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
      image1:
        "https://mirageaz.com/wp-content/uploads/2024/01/Kitchen-Pic-1-1.jpg",
      image2:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/mirage-white-granite.jpg",
      image3:
        "https://cf-images.us-east-1.prod.boltdns.net/v1/jit/66036796001/0ec3c9b2-b14c-477c-85cf-0425075d7ee5/main/1280x720/24s10ms/match/image.jpg",
      image4:
        "https://cdn.msisurfaces.com/images/blogs/posts/2019/12/featured+image_find+your+kitchen+soulmate_+granite+countertops+and+more!_msi.jpg",
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
      image1:
        "https://st.hzcdn.com/simgs/pictures/kitchens/monte-cristo-granite-in-owings-md-granite-grannies-img~1561fd06005a255a_14-5064-1-16c5708.jpg",
      image2:
        "https://st.hzcdn.com/simgs/pictures/kitchens/monte-cristo-granite-in-owings-md-granite-grannies-img~dcc11cb4005a2497_9-3251-1-b044cbf.jpg",
      image3:
        "https://i.pinimg.com/736x/7a/34/af/7a34af5af2d2f9725f79821e021e3118.jpg",
      image4:
        "https://st.hzcdn.com/simgs/pictures/kitchens/monte-cristo-granite-in-owings-md-granite-grannies-img~b681e589005a2582_14-5064-1-6cf42b1.jpg",
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
      image1:
        "https://dropinblog.net/34246798/files/Countertops_in_the_Kitchen_2.png",
      image2:
        "https://dropinblog.net/34246798/files/featured/Moon_White_Granite_with_Stylish_and_Luxurious_Appearance.png",
      image3:
        "https://www.regattagranitesindia.com/wp-content/uploads/2019/03/Moon-White-Granite-Countertop.jpg",
      image4:
        "https://i.pinimg.com/736x/8c/14/2e/8c142ee4e2755f66569e2ed9ced8131c.jpg",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/mystic-spring-granite-b.jpg",
      image2:
        "https://i.pinimg.com/originals/7d/ee/dd/7deedd4da72f2913555c46da9200f76a.jpg",
      image3:
        "https://i.pinimg.com/736x/89/4a/80/894a80a41e00d7ffac5c0b9107b7d710.jpg",
      image4:
        "https://i.pinimg.com/736x/32/21/0b/32210b817071b1d406b55bf44ffd571b.jpg",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/nero-mist-granite.jpg",
      image2:
        "https://www.surfacesbypacific.com/wp-content/uploads/2020/09/Nero-Mist-countertop-600x450.jpg",
      image3:
        "https://www.pbastones.com.br/wp-content/uploads/2023/02/pba-stones-nero-mist-granite-bancada.jpg",
      image4:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/nero-mist-granite-a.jpg",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/nevasca-mist-granite-a.jpg",
      image2:
        "https://pbs.twimg.com/media/D70zSpSXYAAQ7V0.jpg:large",
      image3:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/nevasca-mist-granite-a.jpg",
      image4:
        "https://www.luxcraftcabinets.com/sites/default/files/styles/900x600/public/Granite2.jpg?itok=EAplbT-X",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/new-river-white-granite-a.jpg",
      image2:
        "https://homeluf.com/wp-content/uploads/2017/01/06-river-white-granite-with-white-cabinets.jpg",
      image3:
        "https://i0.wp.com/infocuskitchenbath.com/wp-content/uploads/2019/03/N-River-White-Granite-Countertops-Kitchen-Granite-Benchtops.jpg?fit=914%2C514&ssl=1",
      image4:
        "https://www.srsstone.com/uploads/202218635/river-white-granite-slab37475701318.jpg",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/new-venetian-gold-granite-d.jpg",
      image2:
        "https://www.greatlakesgm.com/wp-content/uploads/2016/01/New-Venetian-Gold-Granite-Kitchen-Countertop.jpg",
      image3:
        "https://www.greatlakesgm.com/wp-content/uploads/2016/01/New-Venetian-Gold-Granite-Kitchen-Countertop-2.jpg",
      image4:
        "https://dropinblog.net/34246798/files/New_Venetian_Gold_Granite_to_design_your_kitchen_2.png",
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
      image1:
        "https://www.goldensourcekitchen.com/wp-content/uploads/elementor/thumbs/oyster-white-granite-countertops-2-pjajjhcta4sxon16lj62cduf7d1qq48mgk7rm7s6ps.jpg",
      image2:
        "https://i.pinimg.com/originals/72/4b/e2/724be26bb03362c502af1cc7e492935b.png",
      image3:
        "https://www.rocktopskc.com/wp-content/uploads/2020/03/whisperoyster-white-960x639.jpg",
      image4:
        "https://fortpiercecabinetsandgranite.com/wp-content/uploads/2023/07/alaska-white-kitchen-countertops-concentrate-1024x647.png",
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
      image1:
        "https://www.igscountertops.com/wp-content/uploads/2020/01/Peacock-Green.jpg",
      image2:
        "https://images.squarespace-cdn.com/content/v1/59da3e1a59cc686643439c96/1518043269654-09FP9T7Q13V2GHD44XNX/Emerald+green+granite+4.jpg",
      image3:
        "https://i.pinimg.com/originals/b3/24/2a/b3242a730e47c205410236278b92d3a5.jpg",
      image4:
        "https://dropinblog.net/34246798/files/featured/Ubatuba_Green_Granite__Gives_you_Nature_like_Appearence_2.png",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/pitaya-white-b.jpg",
      image2:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/pitaya-white-a.jpg",
      image3:
        "https://i.pinimg.com/736x/61/0e/50/610e502d30441b5b3f09183192a72bee.jpg",
      image4:
        "https://i.pinimg.com/1200x/bb/93/b4/bb93b49119b7888c2c7117aa5dfb3c97.jpg",
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
      image1:
        "https://dropinblog.net/34246798/files/featured/Premium_Black_Granite_Lets_Make_Your_Kitchen_Look_New.png",
      image2:
        "https://dropinblog.net/34246798/files/Countertops_in_the_Kitchen_3.png",
      image3:
        "https://dropinblog.net/34246798/files/What_Accessories_Look_Good_with_Black_Granite_Worktops.png",
      image4:
        "https://dropinblog.net/34246798/files/What_Paint_Colour_Complements_Black_Granite_Countertops.png",
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
      image1:
        "https://midwestmarbleandgranite.com/wp-content/uploads/2022/02/SF-real-granite-countertops-4-1.jpg",
      image2:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/s-f-real-granite-a.jpg",
      image3:
        "https://bobsgraniteplace.com/gallery/granite-and-quartz-countertops-portsmouth-nh.jpg",
      image4:
        "https://www.roomvo.com/services/room/rooms/e715ffd000d341f69ba3fb03548d7141/paint/?instance_spec=%7B%22product_id%22%3A%22226837d2%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A2%7D&instance_spec=%7B%22product_id%22%3A%22226837d2%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A3%7D&instance_spec=%7B%22product_id%22%3A%22226837d2%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A4%7D&instance_spec=%7B%22product_id%22%3A%22226837d2%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A5%7D&img_format=jpg&vendor=5043d50518074a2180bb36c9ca636077&visitor=c7ce9a3457124b2880de1ef9ea1709c8&locale=en-us&display_width=1024&display_height=1024&img_quality=high",
      description:
        "S F Real is a dramatic white-and-black granite from Brazil. Black and grey veins contrast sharply with a porcelain white background, making this an exceptional choice for granite countertops in a multitude of different design schemes. S F Real can also make a bold statement as a flooring material or as a wall or backsplash, indoors or out."
    },
    {
      id: 70,
      name: "Salinas White",
      material: "Granite",
      primarycolor: "White-Cool",
      accentcolor: "Gray-Light, Taupe",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/salinas-white-granite.jpg",
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/salinas-white-granite-h.jpg",
      image2:
        "https://www.landmarksurfaces.com/wp-content/uploads/elementor/thumbs/Moon-White-Granite-1-q8c0638w518lny3or1x3asoncmagpvufeyrle12pdk.jpg",
      image3:
        "https://www.landmarksurfaces.com/wp-content/uploads/elementor/thumbs/Salinas-White-Granite-1-q8c061d7rd6v3io4buyr3nmubsvb2cg05qc8lxci46.jpg",
      image4:
        "https://www.landmarksurfaces.com/wp-content/uploads/elementor/thumbs/Salinas-White-Granite.2jpg-q8c060fdkj5krwphhck4j5vdqezxunc9tlor4ndwae.jpg",
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
      image1:
        "https://dropinblog.net/34246798/files/featured/Santa_Cecilia_Light_Granite_is_a_Affordable_Stone_-_Discuss.png",
      image2:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/santa-cecelia-granite-b.jpg",
      image3:
        "https://dropinblog.net/34246798/files/Choosing_Granite_Worktops_from_Santa_Cecilia_Light_Granite.png",
      image4:
        "https://dropinblog.net/34246798/files/Advantages_Of_Santa_Cecilia_Granite_Worktops.jpg",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/santa-cecilia-lc-granite-a.jpg",
      image2:
        "https://rocky-tops.com/wp-content/uploads/2021/07/SCL-GRANITE-4-1024x768.jpg",
      image3:
        "https://rocky-tops.com/wp-content/uploads/2021/07/Project-Profile-Santa-Cecilia-Light-Granite-Kitchen-Countertops-in-Crossville-TN-10-26-2023-jpg.webp",
      image4:
        "https://dropinblog.net/34246798/files/Choosing_Granite_Worktops_from_Santa_Cecilia_Light_Granite.png",
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
      image1:
        "https://www.roomvo.com/services/room/rooms/e715ffd000d341f69ba3fb03548d7141/paint/?instance_spec=%7B%22product_id%22%3A%22d056792d9%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A2%7D&instance_spec=%7B%22product_id%22%3A%22d056792d9%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A3%7D&instance_spec=%7B%22product_id%22%3A%22d056792d9%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A4%7D&instance_spec=%7B%22product_id%22%3A%22d056792d9%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A5%7D&img_format=jpg&vendor=5043d50518074a2180bb36c9ca636077&visitor=550785dfa8a640d6af9a3f49804e8009&locale=en-us&display_width=1024&display_height=1024&img_quality=high",
      image2:
        "https://www.roomvo.com/services/room/rooms/8c2d4c0144ae41dcb42f253a89678f3b/paint/?instance_spec=%7B%22product_id%22%3A%22d056792d9%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A2%7D&instance_spec=%7B%22product_id%22%3A%22d056792d9%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A4%7D&instance_spec=%7B%22product_id%22%3A%22d056792d9%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A5%7D&instance_spec=%7B%22product_id%22%3A%22d056792d9%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A6%7D&instance_spec=%7B%22product_id%22%3A%22d056792d9%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A7%7D&instance_spec=%7B%22product_id%22%3A%22d056792d9%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A8%7D&img_format=jpg&vendor=5043d50518074a2180bb36c9ca636077&visitor=550785dfa8a640d6af9a3f49804e8009&locale=en-us&display_width=1024&display_height=1024&img_quality=high",
      image3:
        "https://i.pinimg.com/originals/00/6d/6f/006d6fbaee1f964b808ed395fb8f76cd.jpg",
      image4:
        "https://i.pinimg.com/736x/7b/b9/e9/7bb9e92e2091a3db8a3cdb05f9149915.jpg",
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
      image1:
        "https://st.hzcdn.com/simgs/pictures/kitchens/roasted-marshmallow-on-alder-cabinets-with-sapphire-blue-granite-countertops-davenport-kitchen-and-bath-img~3e011efe09025fb0_14-0331-1-75f691d.jpg",
      image2:
        "https://st.hzcdn.com/simgs/pictures/kitchens/rubinstein-kitchen-1-cameo-kitchens-inc-img~509149280e906183_8-7800-1-3c15cb1.jpg",
      image3:
        "https://st.hzcdn.com/simgs/pictures/kitchens/transitional-designed-kitchen-in-ashburn-va-abbey-design-remodel-img~b271342301dd771c_8-8451-1-f3b79c9.jpg",
      image4:
        "https://st.hzcdn.com/simgs/pictures/kitchens/brighton-place-jefferson-and-chandler-models-beazer-homes-maryland-virginia-img~6fe1a8c70f9ee240_8-6970-1-1e81ae5.jpg",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/savanna-gold-granite-a.jpg",
      image2:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/caravelas-gold-granite-b.jpg",
      image3:
        "https://www.roomvo.com/services/room/rooms/e715ffd000d341f69ba3fb03548d7141/paint/?instance_spec=%7B%22product_id%22%3A%22172085990%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A2%7D&instance_spec=%7B%22product_id%22%3A%22172085990%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A3%7D&instance_spec=%7B%22product_id%22%3A%22172085990%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A4%7D&instance_spec=%7B%22product_id%22%3A%22172085990%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A5%7D&img_format=jpg&vendor=5043d50518074a2180bb36c9ca636077&visitor=c7ce9a3457124b2880de1ef9ea1709c8&locale=en-us&display_width=1024&display_height=1024",
      image4:
        "https://www.roomvo.com/services/room/rooms/8c2d4c0144ae41dcb42f253a89678f3b/paint/?instance_spec=%7B%22product_id%22%3A%22172085990%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A2%7D&instance_spec=%7B%22product_id%22%3A%22172085990%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A4%7D&instance_spec=%7B%22product_id%22%3A%22172085990%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A5%7D&instance_spec=%7B%22product_id%22%3A%22172085990%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A6%7D&instance_spec=%7B%22product_id%22%3A%22172085990%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A7%7D&instance_spec=%7B%22product_id%22%3A%22172085990%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A8%7D&img_format=jpg&vendor=5043d50518074a2180bb36c9ca636077&visitor=c7ce9a3457124b2880de1ef9ea1709c8&locale=en-us&display_width=1024&display_height=1024",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/silver-cloud-b.jpg",
      image2:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/silver-cloud-granite-b.jpg",
      image3:
        "https://i.pinimg.com/736x/1e/ff/30/1eff309db75aad780f7bd30c1488ecd5.jpg",
      image4:
        "https://i.pinimg.com/736x/26/3e/91/263e91644ee006af12f6578f5e00d53e.jpg",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/silver-creek-granite_morning-fog-subway-tile-4x12-a.jpg",
      image2:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/silver-creek-granite_morning-fog-subway-tile-4x12-b.jpg",
      image3:
        "https://theworldofstone.com/wp-content/uploads/2020/08/Silver-Creek-3063-24.jpg",
      image4:
        "https://images.squarespace-cdn.com/content/v1/5dcc4d314031953170cb2a82/1575309395644-5UX9RIIWBXJPI09W84GB/02_01_19-Phenix-Marble-012.jpg",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/silver-falls-granite.jpg",
      image2:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/praia-grey-a.jpg",
      image3:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/praia-grey-c.jpg",
      image4:
        "https://marblelife.com/blog_img/img/100719-Backsplash-Beautiful.jpg",
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
      image1:
        "https://pbs.twimg.com/media/D7v8cEAV4AACobw?format=jpg&name=large",
      image2:
        "https://i0.wp.com/seattlevegasgranite.com/wp-content/uploads/2021/10/Silver-Wave-Granite-Slabs.jpg?ssl=1",
      image3:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/silver-waves-granite_carrara-white-2x4-polished-a.jpg",
      image4:
        "https://sloanstonedesign.com/wp-content/uploads/2019/05/DSC_3650-Edit2-1200x675.jpg",
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
      image1:
        "https://st.hzcdn.com/simgs/pictures/kitchens/snowfall-granite-kitchen-stokes-granite-and-stone-inc-img~1f51067f08d31744_16-7465-1-bab45dc.jpg",
      image2:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/snowfall-granite-b.jpg",
      image3:
        "https://dropinblog.net/34246798/files/Why_To_Choose_Snowfall_Granite_Worktops.jpg",
      image4:
        "https://dropinblog.net/34246798/files/featured/Snow_Fall_Granite__Style_Your_kitchen_with_This_Stone.png",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/solarius-granite-c.jpg",
      image2:
        "https://dropinblog.net/34246798/files/featured/Solarius_Granite__Need_to_Know_about_The_Stone__A_Close_Look.png",
      image3:
        "https://palmyrastone.com/wp-content/uploads/2018/08/granite-countertops.jpg",
      image4:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/solarius-granite-b.jpg",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/steel-grey-b.jpg",
      image2:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/steel-grey-granite_crema-arched-herringbone-polished-a.jpg",
      image3:
        "https://cms.countertop.agency/uploads/steel_gray_granite_kitchen_countertops_cbe9d97e7f.jpeg",
      image4:
        "https://rocky-tops.com/wp-content/uploads/2021/07/SG-Granite-Kitchen.jpg",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/stream-white-granite-a.jpg",
      image2:
        "https://frenchcreekdesigns.com/wp-content/uploads/2021/10/IMG_0026-scaled.jpg",
      image3:
        "https://www.marvamarble.com/uploads/cgblog/id159/hl19-lifestyle-fantasyWhite-03.jpg",
      image4:
        "https://graniteamerica.com/wp-content/uploads/2024/01/Stream-White-7.jpg",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/sunset-canyon-granite-c.jpg",
      image2:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/sunset-canyon-granite-b.jpg",
      image3:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/sunset-canyon-granite-a.jpg",
      image4:
        "https://www.gmtstoneworks.com/wp-content/uploads/2019/10/IMG952019073195144514066-1024x765.jpg",
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
      image1:
        "https://i.pinimg.com/originals/16/19/83/16198332be9788041934b2542a74a47a.jpg",
      image2:
        "https://i.pinimg.com/originals/1d/57/33/1d573385754ef95ade683076ed71a412.jpg",
      image3:
        "https://eastcoastgraniteraleigh.com/_ipx/w_1080,q_75/https%3A%2F%2Fcms.countertop.agency%2Fuploads%2Ftan_brown_granite_kitchen_island_countertops_8a71843835.jpeg?url=https%3A%2F%2Fcms.countertop.agency%2Fuploads%2Ftan_brown_granite_kitchen_island_countertops_8a71843835.jpeg&w=1080&q=75",
      image4:
        "https://st.hzcdn.com/simgs/pictures/kitchens/low-price-tan-brown-granite-worktop-sale-by-astrum-granite-london-astrum-granite-img~cf3144a10f8e7b79_9-0423-1-1b7a17d.jpg",
      description:
        "Tan Brown granite originates from India. It showcases a combination of dark brown, black, and grey flecks. Its low variations and enduring nature make it a prime selection for both indoor and outdoor applications in residential and commercial environments. This includes uses for walls, floors, countertops, and various architectural elements."
    },
    {
      id: 86,
      name: "Titanium",
      material: "Granite",
      primarycolor: "Black",
      accentcolor: "Gold",
      image:
        "https://cdn.msisurfaces.com/images/colornames/thumbnails/titanium-granite.jpg",
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/titanium-granite_crema-arched-herringbone-polished-c.jpg",
      image2:
        "https://www.sky-marble.com/wp-content/uploads/2019/12/Titanium-Granite-WebImage-3.jpg",
      image3:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/titanium-granite_crema-arched-herringbone-polished-b.jpg",
      image4:
        "https://stonelife.vn//upload/images/gallery/Titanium%20granite%20kichen2.jpg",
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
      image1:
        "https://dropinblog.net/34246798/files/featured/Typhoon_Bordeaux_Sienna_Granite.png",
      image2:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/typhoon-bordeaux-granite-b.jpg",
      image3:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/typhoon-bordeaux-granite_durango-cream-travertine-b.jpg",
      image4:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/typhoon-bordeaux-granite-a.jpg",
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
      image1:
        "https://dropinblog.net/34246798/files/featured/Ubatuba_Green_Granite__Gives_you_Nature_like_Appearence_2.png",
      image2:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/ubatuba-granite-c.jpg",
      image3:
        "https://dropinblog.net/34246798/files/Ubatuba_Green_Granite_Slab.png",
      image4:
        "https://eastcoastgraniteraleigh.com/_ipx/w_3840,q_75/https%3A%2F%2Fcms.countertop.agency%2Fuploads%2Fuba_tuba_countertops_2d8cb83613.jpg?url=https%3A%2F%2Fcms.countertop.agency%2Fuploads%2Fuba_tuba_countertops_2d8cb83613.jpg&w=3840&q=75",
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
      image1:
        "https://www.surfacesbypacific.com/wp-content/uploads/2020/09/Vella-Nevado-countertop.jpg",
      image2:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/valle-nevado-granite-a.jpg",
      image3:
        "https://brothersingranite.files.wordpress.com/2017/11/valle_nevado_counter.jpg",
      image4:
        "https://kdcountertops.com/files/2019/08/VALLE_NEVADO_GRANITE_(2-3).jpg",
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
      image1:
        "https://sky-marble.com/wp-content/uploads/2018/12/White-Cabinet-with-Black-Stone-1-1024x769.jpg",
      image2:
        "https://dropinblog.net/34246798/files/featured/Via_Lactea_Granite__The_Go-to_granite_for_Your_Entire_Place.png",
      image3:
        "https://dropinblog.net/34246798/files/Maintenance_of_Via_Lactea.png",
      image4:
        "https://dropinblog.net/34246798/files/Characteristics__amp__Finishes_of_Via_Lactea.png",
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
      image1:
        "https://st.hzcdn.com/simgs/pictures/kitchens/lorton-virginia-kitchen-remodel-nvs-kitchen-and-bath-img~4991f87001c1d043_14-9758-1-0d698eb.jpg",
      image2:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/virginia-mist-granite_vienna-blend-brick-0.625x3x8mm-a.jpg",
      image3:
        "https://indystonegallery.com/wp-content/uploads/2020/07/Virginia-Mist_3.jpg",
      image4:
        "https://www.marmirossi.com/images/virginia-black-granito-piano-cucina.jpg",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/whisper-white-granite-a.jpg",
      image2:
        "https://st.hzcdn.com/simgs/pictures/kitchens/whisper-white-granite-kitchen-sandia-marble-img~84f1183809aed110_9-2578-1-590d4bf.jpg",
      image3:
        "https://st.hzcdn.com/simgs/pictures/kitchens/whisper-white-granite-kitchen-sandia-marble-img~85614a3e09aed10c_9-2578-1-367f534.jpg",
      image4:
        "https://st.hzcdn.com/simgs/pictures/kitchens/whispering-circle-kitchen-alair-homes-plano-img~eb61207a0797a1a5_14-6498-1-581b6b3.jpg",
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
      image1:
        "https://www.roomvo.com/services/room/rooms/e715ffd000d341f69ba3fb03548d7141/paint/?instance_spec=%7B%22product_id%22%3A%22037604d34%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A2%7D&instance_spec=%7B%22product_id%22%3A%22037604d34%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A3%7D&instance_spec=%7B%22product_id%22%3A%22037604d34%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A4%7D&instance_spec=%7B%22product_id%22%3A%22037604d34%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A5%7D&img_format=jpg&vendor=5043d50518074a2180bb36c9ca636077&visitor=550785dfa8a640d6af9a3f49804e8009&locale=en-us&display_width=1024&display_height=1024&img_quality=high",
      image2:
        "https://www.roomvo.com/services/room/rooms/8c2d4c0144ae41dcb42f253a89678f3b/paint/?instance_spec=%7B%22product_id%22%3A%22037604d34%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A2%7D&instance_spec=%7B%22product_id%22%3A%22037604d34%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A4%7D&instance_spec=%7B%22product_id%22%3A%22037604d34%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A5%7D&instance_spec=%7B%22product_id%22%3A%22037604d34%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A6%7D&instance_spec=%7B%22product_id%22%3A%22037604d34%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A7%7D&instance_spec=%7B%22product_id%22%3A%22037604d34%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A8%7D&img_format=jpg&vendor=5043d50518074a2180bb36c9ca636077&visitor=550785dfa8a640d6af9a3f49804e8009&locale=en-us&display_width=1024&display_height=1024",
      image3:
        "https://www.roomvo.com/services/room/rooms/c55ab1a9f3a644fb9f8a8bd6f72deb34/paint/?instance_spec=%7B%22product_id%22%3A%22037604d34%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A2%7D&instance_spec=%7B%22product_id%22%3A%22037604d34%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A3%7D&instance_spec=%7B%22product_id%22%3A%22037604d34%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A4%7D&instance_spec=%7B%22product_id%22%3A%22037604d34%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A5%7D&img_format=jpg&vendor=5043d50518074a2180bb36c9ca636077&visitor=550785dfa8a640d6af9a3f49804e8009&locale=en-us&display_width=1024&display_height=1024&img_quality=high",
      image4:
        "https://www.roomvo.com/services/room/rooms/a79abfe950674948a82df073856acde7/paint/?instance_spec=%7B%22product_id%22%3A%22037604d34%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A2%7D&instance_spec=%7B%22product_id%22%3A%22037604d34%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A3%7D&instance_spec=%7B%22product_id%22%3A%22037604d34%22%2C%22orientation%22%3A0%2C%22instance_number%22%3A4%7D&img_format=jpg&vendor=5043d50518074a2180bb36c9ca636077&visitor=550785dfa8a640d6af9a3f49804e8009&locale=en-us&display_width=1024&display_height=1024&img_quality=high",
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
      image1:
        "https://aquakitchen.com/wp-content/uploads/2016/10/white-galaxy-granite-Kitchen-Traditional-with-custom-made-countertop-20.jpg",
      image2:
        "https://rskmarbleandgranite.com/wp-content/uploads/2019/09/how-much-do-granite-countertops-cost.jpg",
      image3:
        "https://www.homelane.com/blog/wp-content/uploads/2021/08/practicality-of-white-granite-countertops.jpg",
      image4:
        "https://pbs.twimg.com/media/Ek2bdb9W0AArwdy.jpg",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/white-glimmer-b.jpg",
      image2:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/white-glimmer-a.jpg",
      image3:
        "https://eurostone.vn/uploads/shops/granit/white/white_glimmer_1.jpg",
      image4:
        "https://eurostone.vn/uploads/shops/granit/white/white_glimmer_2.jpg",
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
      image1:
        "https://www.impressiveinteriordesign.com/wp-content/uploads/2019/11/t3-124.jpg",
      image2:
        "https://cdn.decoist.com/wp-content/uploads/2015/08/White-ice-granite-formica-laminate.jpg",
      image3:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/white-ice-granite-a.jpg",
      image4:
        "https://cms.countertop.agency/uploads/white_ice_granite_island_2e3fa7ca94.jpg",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/white-napoli-room-scene-a.jpg",
      image2:
        "https://mobileimages.lowes.com/productimages/ef4b62c1-2d14-4a9f-9d41-e4dc0c09d7bd/16099068.jpg",
      image3:
        "https://photos.zillowstatic.com/fp/38cac1de1ed0c564a0768e5f11f42b31-uncropped_scaled_within_1344_1008.webp",
      image4:
        "https://cdn.msisurfaces.com/images/colornames/fullslab/white-napoli-granite.png",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/white-ornamental-granite-b.jpg",
      image2:
        "https://www.lxhausys.com/us/blog/wp-content/uploads/2023/05/size_43ab86c1-4024-4684-adbc-f8c61b62e51f_Blog_1_25_1.jpg",
      image3:
        "https://greenvillecountertops.com/static/24568287484f228d07b84966c4c14d75/white-ornamental-granite-kitchen-countertops-with-island.jpg",
      image4:
        "https://eastcoastgranitecharlotte.com/_ipx/w_1080,q_75/https%3A%2F%2Fcms.countertop.agency%2Fuploads%2Fwhite_ornamental_kitchen_island_da25dea260.jpg?url=https%3A%2F%2Fcms.countertop.agency%2Fuploads%2Fwhite_ornamental_kitchen_island_da25dea260.jpg&w=1080&q=75",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/white-paradise-granite.jpg",
      image2:
        "https://www.work-tops.com/cdn/shop/products/biLTSrEvFp.jpg?v=1679492836&width=580",
      image3:
        "https://lh3.googleusercontent.com/proxy/i8h8oaAGp7Oz4YhXlGKwhwZPdLMOI5nlxny_7Qfe316BalicD4pSB0KbEnHNsZZ2MGBWl_UnKc_1ROI4soLPAsg5K7ehNAv83NuBNMgqqpwLwnTYZ0bisiMnmG8CciE9rOJMzYDDcj-MAw",
      image4:
        "https://andradestones.com/wp-content/uploads/2021/05/WHITE-PARADISE-AMBIENTE-1-600x338.jpg",
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
      image1:
        "https://st.hzcdn.com/simgs/pictures/kitchens/kitchen-remodel-updates-white-sand-granite-koch-painted-oak-cabinets-chris-robinson-img~3d11c00d0994a477_4-7701-1-dc6726c.jpg",
      image2:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/white-sand-granite-a.jpg",
      image3:
        "https://i.pinimg.com/originals/bd/b6/2a/bdb62ae7925412a0e5f4d2e7c474e7f6.jpg",
      image4:
        "https://cdn.msisurfaces.com/images/colornames/fullslab/white-sand-granite.jpg",
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
      image1:
        "https://i.pinimg.com/originals/6f/d4/cc/6fd4ccebf1cc48bb2da4a8fcdae44ddf.jpg",
      image2:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/white-sparkle-granite-a.jpg",
      image3:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/white-sparkle-granite-b.jpg",
      image4:
        "https://pbs.twimg.com/media/Eq5Vl7wW8AATR18.jpg",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/white-spring-granite-a.jpg",
      image2:
        "https://columbusgranite.com/wp-content/uploads/2018/07/Slider-4.jpg",
      image3:
        "https://graniteselection.com/wp-content/uploads/2019/02/White-Spring-Granite1.jpg",
      image4:
        "https://st.houzz.com/simgs/5ff133d200c14077_8-2237/contemporary-kitchen.jpg",
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
      image1:
        "https://cdn.msisurfaces.com/images/roomscenes/medium/white-valley-granite-a.jpg",
      image2:
        "https://www.igscountertops.com/wp-content/uploads/White-Valley-Granite-1.jpg",
      image3:
        "https://www.granitemarblewa.com/wp-content/uploads/2017/06/maple-valley-wa-white-cabinet-kitchen-granite-marble-quartz-countertop.jpg",
      image4:
        "https://detroitstone.com/wp-content/uploads/2017/10/granite-kitchen-countertop-Chelsea-MI.jpg",
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
      image1:
        "https://dropinblog.net/34246798/files/featured/White_Wave_Granite_Worktop_for_Kitchen__Bathroom_and_Flooring.png",
      image2:
        "https://dropinblog.net/34246798/files/White_Wave_Granite_Kitchen_Worktop.png",
      image3:
        "https://www.igscountertops.com/wp-content/uploads/2017/06/White-Wave-Granite-Island.jpg",
      image4:
        "https://www.work-tops.com/cdn/shop/products/253d3BpZBP.jpg?v=1623671629&width=1152",
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
