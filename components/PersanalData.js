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
                      <Form.Control id="name" as="input" placeholder="Введите имя">
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
                      <Form.Control id="2ndname" as="input" placeholder="Введите фамилию">
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
                    <Button type="submit" className="btn-success w-100 my-2" action>Сохранить</Button>
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
