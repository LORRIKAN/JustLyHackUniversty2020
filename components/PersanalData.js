import Component from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class PersanalData extends React.Component{
  constructor(props){
    super(props);
    this.props = props;
  }

  render(){
    const handler = (e) => {
      let name = document.getElementById('name').value;
      let ndname = document.getElementById('ndname').value;
      let sex = document.getElementById('sex').value;
      let day = document.getElementById('day').value;
      let month = document.getElementById('month').value;
      let year = document.getElementById('year').value;
      let phone = document.getElementById('phone').value;
      let email = document.getElementById('email').value;
      let date = day+'.'+month+'.'+year;
      let url = '192.168.0.5';
      fetch('http://'+ url +':8080/api/v1/users/saveuserinfo/',
          {headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({name: name, ndname: ndname, date: date, phone: phone, email: email, login: this.props.login})
        }).then(res => res.json()).then((result) =>{
        if(result.code == 200){
          alert("Данные обновлены!");
        }else{
          alert("Ошибка!");
        }
      },(error)=>{
      });
    }

    return(
      <div style={{'background-color':'rgba(255, 255, 255, .75)'}}>
        <Container>
          <Row>
            <Col lg={12}>
              <Row>
                <h3 className="p-2">Заполните информацию о себе:</h3>
              </Row>
              <Row>
                <Col lg={3} className="border-right-1">
                  <h4>Имя</h4>
                </Col>
                <Col lg={9}>
                  <Form>
                    <Form.Group>
                      <Form.Control id="name" type="text" as="input" placeholder="Введите имя">
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col lg={3} className="border-right-1">
                  <h4>Фамилия</h4>
                </Col>
                <Col lg={9}>
                  <Form>
                    <Form.Group>
                      <Form.Control id="ndname" as="input" placeholder="Введите фамилию">
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col lg={3} className="border-right-1">
                  <h4>Пол</h4>
                </Col>
                <Col lg={9}>
                  <Form>
                    <Form.Group>
                      <Form.Control id="sex" as="select">
                        <option>Мужской</option>
                        <option>Женский</option>
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col lg={3} className="border-right-1">
                  <h4>Дата рождения</h4>
                </Col>
                <Col lg={9}>
                  <Form>
                    <Form.Group>
                      <Row>
                        <Col lg={4}>
                          <Form.Control id="day" type="number" placeholder="Дата"/>
                        </Col>
                        <Col lg={4}>
                          <Form.Control id="month" type="number" placeholder="Месяц"/>
                        </Col>
                        <Col lg={4}>
                          <Form.Control id="year" type="number" placeholder="Год"/>
                        </Col>
                      </Row>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col lg={3} className="border-right-1">
                  <h4>Телефон</h4>
                </Col>
                <Col lg={9}>
                  <Form>
                    <Form.Group>
                      <Form.Control id="phone" as="input" placeholder="+71234567890">
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
              <Row>
                  <Col lg={3} className="border-right-1">
                    <h4>E-mail</h4>
                  </Col>
                  <Col lg={9}>
                    <Form>
                      <Form.Group>
                        <Form.Control id="email" as="input" placeholder="sample@mail.ru">
                        </Form.Control>
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>
                <Row>
                  <Col lg={4}></Col>
                  <Col lg={4} className="text-center">
                    <Button name="#name" ndname="#ndname" sex="#sex" day="#day" month="#month" year="#year" phone="#phone" email="#email" onClick={(e) => handler(e)} type="submit" className="btn-success w-100 my-2" action>Сохранить</Button>
                  </Col>
                  <Col lg={4}></Col>
                </Row>
              </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
