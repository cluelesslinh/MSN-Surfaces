import { Parallax, Background } from 'react-parallax';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import {
    TopTitleBox, TopTitle, TopDescriptionBox, TopDescription, MPContainer
} from "./homestyle";
import './home.css';

const Home = () => {
    return (
        <div>

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

                <div className="mpTitle"><center>Most Popular</center></div>

                <MPContainer>
                    <MDBRow className="mpRow flex col-12">
                        <MDBCol className="mpMaterialBox col-4">
                            <img className="mpMaterialImg img-fluid" src="https://images.unsplash.com/photo-1634672050277-16639332c727?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            <div className="mpMatieralName">Quartz</div>
                        </MDBCol>
                        <MDBCol className="mpMaterialBox col-4">
                            <img className="mpMaterialImg img-fluid" src="https://images.unsplash.com/photo-1652918320907-f9ec8623ab30?q=80&w=1542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            <div className="mpMaterialName">Quartzite</div>
                        </MDBCol>
                    </MDBRow>
                </MPContainer>

            </section>

        </div>
    )
}

export default Home