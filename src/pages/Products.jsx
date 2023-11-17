import { Parallax, Background } from 'react-parallax';
import {
    CTTitleBox, CTTitle, CTDescriptionBox, CTDescription, CBTitleBox, CBTitle, CBDescriptionBox, CBDescription
} from './productsstyle';
import './products.css';

const Products = () => {
    return (
        <>

            <section id="Products">
                <div className="productsMain flex justify-content-center">

                    <div className="productsBGBox">
                        <Parallax className="countertopBG" strength={700}>
                            <Background>
                                <img className="countertopImg"
                                    src="https://static.wixstatic.com/media/29ebc0_b968aad46c494edaa363cb99f6d08be0~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/29ebc0_b968aad46c494edaa363cb99f6d08be0~mv2.jpg"
                                    alt="countertopOption" />
                            </Background>
                            <CTTitleBox>
                                <CTTitle>Countertops</CTTitle>
                            </CTTitleBox>
                            <CTDescriptionBox>
                                <CTDescription>countertops description</CTDescription>
                            </CTDescriptionBox>
                        </Parallax>
                    </div>

                    <div className="productsBGBox">
                        <Parallax className="cabinetBG" strength={700}>
                            <Background>
                                <img className="cabinetImg"
                                    src="https://vevano.com/cdn/shop/files/hero-cabinets.webp?v=1659013333"
                                    alt="cabinetOption" />
                            </Background>
                            <CBTitleBox>
                                <CBTitle>Cabinets</CBTitle>
                            </CBTitleBox>
                            <CBDescriptionBox>
                                <CBDescription>cabinets description</CBDescription>
                            </CBDescriptionBox>
                        </Parallax>
                    </div>

                </div>
            </section>

            <section id="Countertops">
                <div>
                    <div className="CTtitle">Countertop Selection</div>
                </div>
            </section>

            <section id="Cabinets">
                <div>
                    <div className="CBtitle">Cabinets Selection</div>
                </div>
            </section>

        </>
    )
}

export default Products