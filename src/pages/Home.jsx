import { Parallax, Background } from 'react-parallax';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import {
    TopTitleBox, TopTitle, TopDescriptionBox, TopDescription
} from './homestyle';
import './home.css';

const Home = () => {
    return (
        <div>

            <section id="Sangsite" className="col-12">
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
                    <div className="mpTitle">Most Popular</div>

                    <MDBRow className="mpRow col-lg-10 col-12 offset-lg-1">
                        <MDBCol className="mpMaterialBox col-lg-4 col-5">
                            <img className="mpMaterialImg img-fluid" src="https://images.unsplash.com/photo-1634672050277-16639332c727?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            <div className="mpMaterialName">Quartz</div>
                        </MDBCol>
                        <MDBCol className="mpMaterialBox col-lg-4 col-5">
                            <img className="mpMaterialImg img-fluid" src="https://images.unsplash.com/photo-1652918320907-f9ec8623ab30?q=80&w=1542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            <div className="mpMaterialName">Quartzite</div>
                        </MDBCol>
                        <MDBCol className="mpMaterialBox col-lg-4 col-5">
                            <img className="mpMaterialImg img-fluid" src="https://images.unsplash.com/photo-1526868452228-6590028c2fac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            <div className="mpMaterialName">Granite</div>
                        </MDBCol>
                        <MDBCol className="mpMaterialBox col-lg-4 col-5">
                            <img className="mpMaterialImg img-fluid" src="https://images.unsplash.com/photo-1610276099118-c929abaaa80a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                            <div className="mpMaterialName">Marble</div>
                        </MDBCol>
                        <MDBCol className="mpMaterialBox col-lg-4 col-5">
                            <img className="mpMaterialImg img-flud" src="https://images.ctfassets.net/9aljq1ivr2md/cCuQg1kMS0cQtuI74REpu/f1dac52130250a0503520fc42a0163a4/prefab-vs-slab-countertops.jpg?w=1000&h=563&q=50&fm=webp" />
                            <div className="mpMaterialName">Prefabricated</div>
                        </MDBCol>
                        <MDBCol className="mpMaterialBox col-lg-4 col-5">
                            <img className="mpMaterialImg img-fluid" src="https://www.porcelain-tiles.co.uk/wp-content/uploads/delicato-bianco-kitchen-ambient-03-800x566.jpg" />
                            <div className="mpMaterialName">Porcelain</div>
                        </MDBCol>
                    </MDBRow>
                </div>

            </section>

        </div>
    )
}

export default Home