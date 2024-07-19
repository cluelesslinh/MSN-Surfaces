import { Parallax, Background } from 'react-parallax';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import {
    TopTitleBox, TopTitle, TopDescriptionBox, TopDescription
} from './homestyle';
import './home.css';

const Home = () => {
    return (
        <>

            <section id="Sangsite">
                <Parallax className="homeTopBg" strength={700}>
                    <Background>
                        <img className="homeTopImg" src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="home-main" />
                    </Background>
                    <TopTitleBox>
                        <TopTitle>MSN Surfaces</TopTitle>
                    </TopTitleBox>
                    <TopDescriptionBox>
                        <TopDescription>Kitchen countertops</TopDescription>
                    </TopDescriptionBox>
                </Parallax>
            </section>

            <section id="MostPopular">
                <div>
                    <div className="mpTitle">Popular Brands</div>

                    <MDBRow className="brandRow col-lg-10 col-12 offset-lg-1">
                        <MDBCol className="col-lg-4 col-md-5 col-8">
                            <a href="https://pompeiiquartz.com/" target="_blank" rel="noreferrer">
                                <div className="brandImgBox">
                                    <img className="brandImg img-fluid" src="https://pompeiiquartz.com/wp-content/uploads/2019/04/NEW-POMPEII-LOGO-01-1.png" />
                                </div>
                                <div className="brandNameBox">
                                    <div className="brandName">Pompeii Quartz</div>
                                </div>
                            </a>
                        </MDBCol>
                        <MDBCol className="col-lg-4 col-md-5 col-8">
                            <a href="https://www.cosentino.com/usa/silestone/countertops/" target="_blank" rel="noreferrer">
                                <div className="brandImgBox">
                                    <img className="brandImg img-fluid" src="https://www.balduzzilumber.com/wp-content/uploads/silestone-logo.jpghttps://imgix.cosentino.com/wp-content/uploads/2021/05/SILESTONE-LOGO-2021-scaled-1-722x406.jpghttps://images.squarespace-cdn.com/content/v1/62f1080ed3d2764b987dc3ea/95479a56-09bb-4a83-8675-e02268b69569/silestone-2.png" />
                                </div>
                                <div className="brandNameBox">
                                    <div className="brandName">Sile-Stone</div>
                                </div>
                            </a>
                        </MDBCol>
                        <MDBCol className="col-lg-4 col-md-5 col-8">
                            <a href="https://hyundailncusa.com/hanstone-quartz" target="_blank" rel="noreferrer">
                                <div className="brandImgBox">
                                    <img className="brandImg img-fluid" src="https://hyundailncusa.com/uploads/brand/hanstone-quartz-logo.jpg" />
                                </div>
                                <div className="brandNameBox">
                                    <div className="brandName">HanStone</div>
                                </div>
                            </a>
                        </MDBCol>
                        <MDBCol className="col-lg-4 col-md-5 col-8">
                            <a href="https://quantumsurfacesusa.com/" target="_blank" rel="noreferrer">
                                <div className="brandImgBox">
                                    <img className="brandImg img-fluid" src="https://marblegranitecountertopstampa.com/wp-content/uploads/2018/06/Quantum-Quartz-Logo.jpg" />
                                </div>
                                <div className="brandNameBox">
                                    <div className="brandName">Quantum Quartz</div>
                                </div>
                            </a>
                        </MDBCol>
                        <MDBCol className="col-lg-4 col-md-5 col-8">
                            <a href="https://www.lxhausys.com/gl/products/viatera-quartz-surface/viatera-finder" target="_blank" rel="noreferrer">
                                <div className="brandImgBox">
                                    <img className="brandImg img-flud" src="https://www.wood2u.co.uk/media/amasty/amlabel/LX-Hausys_logo-01.png" />
                                </div>
                                <div className="brandNameBox">
                                    <div className="brandName">LG Viatera</div>
                                </div>
                            </a>
                        </MDBCol>
                        <MDBCol className="col-lg-4 col-md-5 col-8">
                            <a href="https://us.compac.es/quartz/" target="_blank" rel="noreferrer">
                                <div className="brandImgBox">
                                    <img className="brandImg img-fluid" src="https://us.compac.es/wp-content/themes/compac/images/logo40.png" />
                                </div>
                                <div className="brandNameBox">
                                    <div className="brandName">Compac</div>
                                </div>
                            </a>
                        </MDBCol>
                        <MDBCol className="col-lg-4 col-md-5 col-8">
                            <a href="https://www.curava.com/" target="_blank" rel="noreferrer">
                                <div className="brandImgBox">
                                    <img className="brandImg img-fluid" src="https://www.hammondkitchens.com/wp-content/uploads/2016/10/curava-glass-logo.jpg" />
                                </div>
                                <div className="brandNameBox">
                                    <div className="brandName">Curava</div>
                                </div>
                            </a>
                        </MDBCol>
                        <MDBCol className="col-lg-4 col-md-5 col-8">
                            <a href="https://www.cambriausa.com/" target="_blank" rel="noreferrer">
                                <div className="brandImgBox">
                                    <img className="brandImg img-fluid" src="https://www.2020spaces.com/wp-content/uploads/2016/06/Logo_Cambria_300w.png" />
                                </div>
                                <div className="brandNameBox">
                                    <div className="brandName">Cambria</div>
                                </div>
                            </a>
                        </MDBCol>
                        <MDBCol className="col-lg-4 col-md-5 col-8">
                            <a href="https://arcsurfaces.com/quartz/metroquartz/" target="_blank" rel="noreferrer">
                                <div className="brandImgBox">
                                    <img className="brandImg img-fluid" src="data:image/png;base64,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" />
                                </div>
                                <div className="brandNameBox">
                                    <div className="brandName">Metro Quartz</div>
                                </div>
                            </a>
                        </MDBCol>
                        <MDBCol className="col-lg-4 col-md-5 col-8">
                            <a href="https://www.msisurfaces.com/" target="_blank" rel="noreferrer">
                                <div className="brandImgBox">
                                    <img className="brandImg img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTficgypSZnw82qaneenmawUUn8yCSE4U40clTilLpIb3yNv1k6Y2NhIxg3cKtDdD8Gu_4&usqp=CAU" />
                                </div>
                                <div className="brandNameBox">
                                    <div className="brandName">MSI Surfaces</div>
                                </div>
                            </a>
                        </MDBCol>
                    </MDBRow>
                </div>

            </section>

        </>
    )
}

export default Home