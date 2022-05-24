import { Col, Row, Container, Image } from 'react-bootstrap';
import './styles.css';
import image from '../../assets/1.png';

function Profile() {
  return (
    <Container id="profile" className="Profile pt-5 mx-auto">
      <Row className="align-items-sm-end justify-content-between">
        <Col xs={12} sm={6}>
          <Image src={image} fluid />
        </Col>
        <Col  xs={12} sm={6} >
          <h1 className="">Hello World.</h1>
          <p className="lead">My name is Monique, I'm a Brazilian currently living in Boston and I am a FrontEnd Software Developer with over 6 years of experience working with React, NodeJS, Angular and other Javascript frameworks and libraries.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
