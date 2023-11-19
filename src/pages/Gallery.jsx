import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Slider from 'react-slick'
import './gallery.css';

const Gallery = () => {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>

            <MDBRow className="flex justify-content-center">
                <MDBCol className="col-10">
                    <Slider {...settings}>
                        <div>
                            <img className="imageSlide" src="https://images.squarespace-cdn.com/content/v1/5c3c4ca8365f02e708cc7c8c/1632406898446-6YGVV5SI4PL0855W8WJD/coutertop+3.jpg" />
                        </div>
                        <div>
                            <img className="imageSlide" src="https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2016/12/Kitchen_Island_with_Quartz_Countertop.jpg" />
                        </div>
                        <div>
                            <img className="imageSlide" src="https://studio76kitchens.com/wp-content/uploads/2017/11/Sept-2017-Insta-Ad-3-1024x681.jpg" />
                        </div>
                        <div>
                            <img className="imageSlide" src="https://www.thespruce.com/thmb/ZRs5D1NS5DqSAj45lVo_cZffyw8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Hexagon-tile-kitchen-countertop-5babfb70c9e77c00250ff6b8.jpg" />
                        </div>
                    </Slider>
                </MDBCol>
            </MDBRow>

        </>
    );
}

export default Gallery;