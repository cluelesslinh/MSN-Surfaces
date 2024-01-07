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
                        <TopTitle>Sangsite</TopTitle>
                    </TopTitleBox>
                    <TopDescriptionBox>
                        <TopDescription>Kitchen cabinets & countertops</TopDescription>
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
                            <a href="https://www.sile-stone.com/countertops/" target="_blank" rel="noreferrer">
                                <div className="brandImgBox">
                                    <img className="brandImg img-fluid" src="https://www.sile-stone.com/images/central.webp" />
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
                            <a href="http://quantumquartz.com.au/" target="_blank" rel="noreferrer">
                                <div className="brandImgBox">
                                    <img className="brandImg img-fluid" src="http://quantumquartz.com.au/WK-logo95.png" />
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
                                    <img className="brandImg img-fluid" src="data:image/jpeg;base64,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wIPMEQia1OvVFg7nsVPRbxx9l93Jx7Zq7O29PFOp9Id3amGKtUDDLKC3ZHcZ7dXVS406qWpMlTcdDTxx3xwO73jPKbGj2NOhbo4ohXFJd7CgMTuDI88iDuwbRXFZ2W2t23ajA1GfoiLyz4seHvm9oWpfSaIYjddSUdequvBh+ftkNpOitcBrms1RKtU5Kq25uoDimpHeBx9s9TTnsbtGpB3pV+xUBO8Vceq5PdjgYN+Wzc6hXuKz0bYhFpkLUrMN7DHjuU15FscyeUktL080A2atSozYJLkH3AAYEgrUVNOq1g1N6lCrUNYPTG+yM3rK688cOYk1p2sUrhiqBwQMneRlHvI5wK7oCLXLPVuagcV6irT9IFGFc7o3eZGJJ7Tak9J6VMP6JKhIavjO5jkozwBPeZD6FXo2++KtvUNT09Rlb0JbgzndIbHLjLNrd0iUwrUWq7+VCKm/k4654Lz5mCcNrT6ASmqh2cDjvsQxbPHJI5zbkFsrp1S2oFanAs7OqZ3hTVj2UB64k7IsIiIUmtXsqVTi9NGP7yq3xE2YgaX1TbfsKX8tPlH1TbfsKX8tPlN2IGl9U237Cl/LX5R9U237Cl/LX5TciBp/VNt+wpfy1+UfVNt+wpfy1+U3Igaf1TbfsKX8tPlH1TbfsKX8tPlN2IGtRsqVM5SminvVVX4CbMRAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA/9k=" />
                                </div>
                                <div className="brandNameBox">
                                    <div className="brandName">Curava</div>
                                </div>
                            </a>
                        </MDBCol>
                        <MDBCol className="col-lg-4 col-md-5 col-8">
                            <a href="https://www.cambriausa.com/" target="_blank" rel="noreferrer">
                                <div className="brandImgBox">
                                    <img className="brandImg img-fluid" src="https://accentcountertops.com/wp-content/uploads/2020/09/Cambria-logo-positive_7.522x3.jpg" />
                                </div>
                                <div className="brandNameBox">
                                    <div className="brandName">Cambria</div>
                                </div>
                            </a>
                        </MDBCol>
                        <MDBCol className="col-lg-4 col-md-5 col-8">
                            <a href="https://metroquartzs.ca/" target="_blank" rel="noreferrer">
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