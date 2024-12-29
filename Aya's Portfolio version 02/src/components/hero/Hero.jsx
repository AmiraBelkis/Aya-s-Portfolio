import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactMeBtn from './ContactMeBtn';
import DownloadBtn from './DownloadBtn';
const Hero = () => {
    return (
        <>
            <div className="hero-section" id="home">
                <h1 className="title-hero">
                    Hi! I’m Aya <span className="text-primary">Ahlam</span>  Feliachi,
                    a <span className="text-primary">Digital Designer</span>.
                </h1>
                <h3 className="sub-title-hero">"Design is not just what it looks like and feels like. Design is how it works."
                    <br />  – Steve Jobs</h3>
                <Row className='w-50 mb-5 justify-content-evenly'>
                    <Col xs={5} className='p-0'>
                        <ContactMeBtn link="#contact">Contact Me</ContactMeBtn>
                    </Col>
                    <Col xs={5} className='p-0'>
                        <DownloadBtn filePath="" fileName="CV -Feliachi Aya Ahlem">Download CV</DownloadBtn>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Hero
