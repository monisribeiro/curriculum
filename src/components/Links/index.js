import { Container, Col, Row, Button, Image } from 'react-bootstrap';
import './styles.css';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import download from '../../assets/download.png';
import pdf from '../../assets/MoniqueRDelbel_CV.pdf';

function Links() {
  return (
    <Container id="links" className="Links mx-auto justify-content-sm-evenly">
      <Row >
        <Col xs={12} sm={4} >
          <Button variant="light" size="lg" href="https://www.linkedin.com/in/monique-ribeiro/" target="_blank">
            <Image src={linkedin} height={24} className="me-2 pb-1" />Linkedin
          </Button>
        </Col>
        <Col xs={12} sm={4} >
          <Button variant="light" size="lg" href="https://github.com/monisribeiro" target="_blank">
            <Image src={github} height={24} className="me-2 pb-1" />Github
          </Button>
        </Col>
        <Col xs={12} sm={4}>
          <Button variant="light" size="lg" href={pdf} target="_blank">
            <Image src={download} height={24} className="me-2 pb-1" />Resumé
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Links;
