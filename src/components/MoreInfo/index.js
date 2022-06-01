import { Col, Container, Image, Row } from 'react-bootstrap';
import './styles.css';
import profile from '../../assets/4.png';

  function MoreInfo() {
    return (
      <div id="more" className="MoreInfo mt-5">
        <Container className="text-start">
          <Row gap={5}>
            <Col className="more-info-img d-flex align-items-sm-center mx-3">
              <Image src={profile} height={120} />
            </Col>
            <Col className="more-info-texts">
              <h3 className="mx-3">About me</h3>
              <ul>
                <li>
                  Brazilian, 28 years old, married, pet owner 
                </li>
                <li>
                  Languages: Portuguese - native, English - fluent and Spanish - intermediate
                </li>
                <li>
                  Location: 02210, Boston - Massachussets 
                </li>
                <li>
                  Email: monisribeiro@gmail.com 
                </li>
                <li>
                  Phone: +55 (15) 99703-1333 
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

export default MoreInfo;
