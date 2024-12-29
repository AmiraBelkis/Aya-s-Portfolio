import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactMeBtn from './ContactMeBtn';
import DownloadBtn from './DownloadBtn';
const Hero = () => {
    return (
        <>
            <div className="hero-section">
                <h1 className="title-hero">
                    Hi! I’m Aya <span className="text-primary">Ahlam</span>  Feliachi,
                    a <span className="text-primary">Digital Designer</span>.
                </h1>
                <h3 className="sub-title-hero">"Design is not just what it looks like and feels like. Design is how it works."
                    <br />  – Steve Jobs</h3>
                <Row>
                    <Col xs={6} className='p-0'>
                        <ContactMeBtn link="#contact">Contact Me</ContactMeBtn>
                    </Col>
                    <Col xs={6}>
                        <DownloadBtn filePath="" fileName="">Download CV</DownloadBtn>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Hero
