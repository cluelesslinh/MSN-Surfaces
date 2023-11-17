import { Parallax, Background } from 'react-parallax';
import {
    POTitleBox, POTitle, PODescriptionBox, PODescription
} from './paymentoptionsstyle';
import './paymentoptions.css';

const PaymentOptions = () => {
    return (
        <section id="PaymentOptions">
            <Parallax className="homeTopBg" strength={700}>
                <Background>
                    <img className="paymentoptionsImg" src="https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/3/2020/05/18060242/Cover.png" alt="paymentoptions" />
                </Background>
                <POTitleBox>
                    <POTitle>Payment Options</POTitle>
                </POTitleBox>
                <PODescriptionBox>
                    <PODescription>We accept ...</PODescription>
                </PODescriptionBox>
            </Parallax>
        </section>
    )
}

export default PaymentOptions