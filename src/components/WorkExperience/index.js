import { Carousel, Image } from 'react-bootstrap';
import './styles.css';
import firstSlide from '../../assets/2.png';
import secondSlide from '../../assets/3.png';

function WorkExperience() {
  return (
    <div id="work" className="WorkExperience">
      <h1 className="text-center my-5">Work Experience</h1>
      <Carousel variant="dark" interval={15000}>
        <Carousel.Item>
          <div className="d-block w-100 CarouselImage">
            <Image
              className="d-block"
              src={firstSlide}
              alt="First slide"
            />
          </div>
          <Carousel.Caption>
            <h3>Mercado Livre <small className="">May 2019 - Apr 2022</small></h3>
            <ul>
              <li>
                Front end development using React , Node and Express
              </li>
              <li>
                Built of large scale applications for Fintech (Mercado Pago) including own design system
              </li>
              <li>
                Unit testing with Jest
              </li>
              <li>
                Contribution to deliveries, team organization and agile ceremonies
              </li>
              <li>
                Close interaction with UX, Product and Business team
              </li>
              <li>
                Multi-located team (Brasil, Argentina, Colombia and Mexico)
              </li>
              <li>
                Usage of GIT, JIRA and Confluence
              </li>
              <li>
                CI/CD - Git, Docker, Jenkins, Datadog
              </li>
            </ul>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-block w-100 CarouselImage">
            <Image
              className="d-block"
              src={secondSlide}
              alt="First slide"
            />
          </div>
          <Carousel.Caption>
            <h3>GFT <small>Jan 2015 - Apr 2019</small></h3>
            <ul>
              <li>Front end development using Angular</li>
              <li>Design of new features and new screens</li>
              <li>Usage of charting and table libraries such as Handsontable, Highcharts and DhmtlX</li>
              <li>Agile methodologies</li>
              <li>Unit testing with Jasmine</li>
              <li>Usage of GIT, JIRA and Confluence</li>
              <li>Multi-located team (Brasil, United States, Costa Rica and India)</li>
              <li>Close interaction with client - demos, presentations and brainstorming</li>
              <li>Some interaction with backend - Java, MongoDB, Oracle</li>
            </ul>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default WorkExperience;
