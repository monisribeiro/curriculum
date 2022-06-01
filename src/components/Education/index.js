import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './styles.css';
import ufscar from '../../assets/ufscar.png'
import fiap from '../../assets/fiap.png'

function Education() {
  return (
    <div id="education" className="Education">
      <h1 className="text-center my-5">Education</h1>
      <Container>
        <Row className="justify-content-between">
          <Col xs={12} sm={6} className="Education-card">
            <Card style={{ width: '100%' }} bg="light" className="text-center">
              <Card.Img variant="top" src={ufscar} height={60}  width={60}/>
              <Card.Body>
                <Card.Title>BS in Computer Science</Card.Title>
                <Card.Text>
                  <small>Mar 2012 - Dec 2015</small>
                </Card.Text>
                <Card.Text>
                  UFSCAR - Universidade Federal de São Carlos
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} className="Education-card">
            <Card style={{ width: '100%' }} bg="light" className="text-center">
              <Card.Img variant="top" src={fiap}  height={60}  width={60}/>
              <Card.Body>
                <Card.Title>MBA in Software Engineering</Card.Title>
                <Card.Text>
                  <small>Apr 2020 - Apr 2021</small>
                </Card.Text>
                <Card.Text>
                  FIAP - Faculdade de Informática e Administração Paulista
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Education;
