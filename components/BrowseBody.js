import Component from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

export default class  BrowseBody extends React.Component{
  constructor(props){
    super(props);
    this.props = props;
    this.state = {block:<div></div>}
  }


  render(){

    const handler = (e) => {
      let pF = document.getElementById('pFrom').value;
      let pT = document.getElementById('pTo').value;
      let nR = document.getElementById('nRooms').value;
      let aRH = document.getElementById('apsRoomHouse').value;
      let url = '192.168.0.5';
      fetch('http://'+ url +':8080/api/v1/users/search/',
          {headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({priceFrom: pF, priceTo: pT, numberRooms: nR, apsType:aRH})
        }).then(res => res.json()).then((result) =>{
        if(result.code == 200){
          alert("SRABOTALO");
        }else{
          this.setState({block:<div>
            <Row className="tect-center ml-2 h-100" style={{'background-color':'rgba(255, 255, 255, .75)'}}>
              <h2 className="m-auto">По вашему запросу ничего не найдено :(</h2>
            </Row>
          </div>});
        }
      },(error)=>{
      });
    }

    return(
      <div className="m-2">
        <Container>
          <Row>
            <Col lg={3} style={{'background-color':'rgba(255, 255, 255, .75)'}}>
              <Row>
                <Form className="m-2">
                 <Form.Group controlId="apsPrice" className="border-bottom-1">
                   <Form.Label>Цена</Form.Label>
                   <Row>
                    <Col lg={6}>
                      <Form.Control id = "pFrom" type="number" placeholder="От" />
                    </Col>
                    <Col lg={6}>
                      <Form.Control id = "pTo" type="number" placeholder="До" />
                    </Col>
                   </Row>
                 </Form.Group>

                 <Form.Group controlId="apsRooms">
                   <Form.Label>Число комнат</Form.Label>
                   <Form.Control id="nRooms" as="select" placeholder="Выберите">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>Студия</option>
                   </Form.Control>
                 </Form.Group>

                 <Form.Group controlId="apsRoomsHouseChoose">
                  <Form.Label>Тип помещения</Form.Label>
                   <Form.Control id="apsRoomHouse" as="select" placeholder="Выберите">
                     <option>Квартира</option>
                     <option>Комната</option>
                     <option>Дом</option>
                   </Form.Control>
                 </Form.Group>
                 <a pF="#pFrom" pT="#pTo" nR="nRooms" aRH="apsRoomHouse" onClick={(e) => handler(e)} style={{'color':'white'}} class="btn btn-lg btn-success btn-block" type="submit">Поиск</a>
                </Form>
              </Row>
            </Col>
            <Col lg={9}>
              {this.state.block}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
