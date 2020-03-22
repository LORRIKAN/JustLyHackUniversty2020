import Component from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import axios from 'axios';

export default class ProfileInner extends React.Component{
  constructor(props){
    super(props);
    this.props = props;
    this.state = {name: "", ndname: "", sex: "", date: "", phone: "", email: ""}
  }

  async componentDidMount(){
    let currComp = this;
    let url = '192.168.0.5';
    await axios.get('http://'+ url +':8080/api/v1/users/userinfo/'+ this.props.login).then(function (response) {
        if(response.data.code == 200){
          try{
            currComp.setState({sex: response.data.sex});
            currComp.setState({name: response.data.name});
            currComp.setState({ndname: response.data.surname});
            currComp.setState({date: response.data.dateborn});
            currComp.setState({phone: response.data.phone});
            currComp.setState({email: response.data.email});
        }catch(err){
          alert("Внутренняя ошибка!");}
        }else{
          alert("Внутренняя ошибка! Данные не загружены!");
        }

    }).catch(function (error) {
      // handle error
    }).finally(function () {
      // always executed
    });
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
                <h3>{this.state.name + " " +this.state.ndname}</h3>
              </Row>
              <Row>
                <h5>{this.props.login}</h5>
              </Row>
              <Row className="border-bottom-1">
                <h4>{this.state.date}</h4>
              </Row>
              <Row className="border-bottom-1">
                <h4>{this.state.sex}</h4>
              </Row>
              <Row className="border-bottom-1">
                <h3>Контакты</h3>
              </Row>
              <Row className="border-bottom-1">
                <h4>{this.state.phone}</h4>
              </Row>
              <Row>
                <h4>{this.state.email}</h4>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
