import Component from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";

export default class ProfileInner extends React.Component{
  constructor(props){
    super(props);
    this.props = props;
  }

  render(){
    return(
      <div style={{'background-color':'rgba(255, 255, 255, .75)'}}>
        <Container>
          <Row>
            <Col lg={3}>
              <Image src="https://sun9-55.userapi.com/-0mfdYSseuR5_9BriNswx8BPryoWf5lzwUqoyg/1h9kUj56k1A.jpg" className='p-2' roundedCircle fluid />
            </Col>
            <Col lg={9}>
              <Row>
                <h3>{this.props.fullname}</h3>
              </Row>
              <Row>
                <h5>{this.props.username}</h5>
              </Row>
              <Row className="border-bottom-1">
                <h4>{this.props.databorn}</h4>
              </Row>
              <Row className="border-bottom-1">
                <h4>{this.props.sex}</h4>
              </Row>
              <Row className="border-bottom-1">
                <h3>Контакты</h3>
              </Row>
              <Row className="border-bottom-1">
                <h4>{this.props.phone}</h4>
              </Row>
              <Row>
                <h4>{this.props.name}</h4>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
