import Component from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Head from "next/head";
import Card from "react-bootstrap/Card";

function Home(){
  return <div>
    <Head>
      <title>Заполнение контракта заказчика</title>
      <script type="text/javascript" src="//vk.com/js/api/openapi.js?122"></script>
      <link rel="shortcut icon" href="https://sun9-28.userapi.com/N_0nedgWtI-4iqd51k7hkB9Ei-gR_yXzolLn_g/o2lxrwNNQ3Y.jpg" type="image/x-icon"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
    </Head>
  </div>
}

export default class employerContract extends React.Component{
  constructor(props){
    super(props);
    this.props = props;
  }

  render(){
    return(
      <div style={ {'background-image':'url(https://sun9-12.userapi.com/VjptDjuK4wfiu0h9w-D76kG95KUYVfNUHrSzZA/hsl-nw7Ziew.jpg)', 'min-height':'100vh'}}>
	  	<Home/>
        <Container>
		<Row>
		<Col lg={12}>
		<Card>
		<Card.Header as='h3'>Заполните информацию для контракта:</Card.Header>
		<Card.Body>			  
              <Row>
                <Col lg={3} className="border-right-1">
                  <h4>Ваш город</h4>
                </Col>
                <Col lg={9}>
                  <Form>
                    <Form.Group>
                      <Form.Control id="employerCity" as="input" placeholder="Введите ваш город">
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
			  
              <Row>
                <Col lg={3} className="border-right-1">
                  <h4>ФИО</h4>
                </Col>
                <Col lg={9}>
                  <Form>
                    <Form.Group>
                      <Form.Control id="employerName" as="input" placeholder="Введите ФИО (Без инициалов)">
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
			  
              <Row>
                <Col lg={3} className="border-right-1">
                  <h4>Серия паспорта</h4>
                </Col>
                <Col lg={3}>
                  <Form>
                    <Form.Group>
                      <Form.Control id="employerPassportSeries" as="input" placeholder="Введите серию паспорта">
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
                <Col lg={2} className="border-right-1">
                  <h4>Номер</h4>
                </Col>
                <Col lg={4}>
                  <Form>
                    <Form.Group>
                      <Form.Control id="employerPassportNumber" as="input" placeholder="Введите номер паспорта">
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
			  
			  <Row>
                <Col lg={3} className="border-right-1">
                  <h4>Выдан</h4>
                </Col>
                <Col lg={9}>
                  <Form>
                    <Form.Group>
                      <Form.Control id="employerPassportIssuedDate" as="input" type="date">
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
			  
			  <Row>
                <Col lg={3} className="border-right-1">
                  <h4>Адрес проживания</h4>
                </Col>
                <Col lg={9}>
                  <Form>
                    <Form.Group>
                      <Form.Control id="employerLivesAt" as="input" placeholder="Введите ваш адрес проживания">
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
			  
			  <Row>
                <Col lg={3} className="border-right-1">
                  <h4>Кто также будет проживать</h4>
                </Col>
                <Col lg={9}>
                  <Form>
                    <Form.Group>
                      <Form.Control id="employerLivesWith" as="input" placeholder="Введите ваших сожителей">
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
			</Card.Body>
		</Card>
		</Col>
		</Row>
		  
		  <Row className="py-4">
		  <Col lg={12}>
		  <Card>
		  <Card.Header as="h3">Заполните реквизиты для контракта:</Card.Header>
		  <Card.Body>
			  <Row>
				<Col lg={3} className="border-right-1">
				  <h4>Регистрация</h4>
				</Col>
				<Col lg={9}>
				  <Form>
					<Form.Group>
					  <Form.Control id="employerRequisitesRegisrationAdress" as="input" placeholder="Введите адрес регистрации">
					  </Form.Control>
					</Form.Group>
				  </Form>
				</Col>
			  </Row>
			  
			  <Row>
				<Col lg={3} className="border-right-1">
				  <h4>Почтовый адрес</h4>
				</Col>
				<Col lg={9}>
				<Form>
				  <Form.Group>
					<Form.Control id="employerRequisitesMailAdress" as="input" placeholder="Введите ваш почтовый адрес">
					</Form.Control>
				  </Form.Group>
				</Form>
				</Col>
			  </Row>
			  
			  <Row>
				<Col lg={3} className="border-right-1">
				  <h4>Серия паспорта</h4>
				</Col>
				<Col lg={3}>
				  <Form>
					<Form.Group>
					  <Form.Control id="employerRequisitesPassportSeries" as="input" placeholder="Введите серию паспорта">
					  </Form.Control>
					</Form.Group>
				  </Form>
				</Col>
				<Col lg={2} className="border-right-1">
				  <h4 className="px-1">Номер</h4>
				</Col>
				<Col lg={4}>
				  <Form>
					<Form.Group>
					  <Form.Control id="employerRequisitesPassportNumber" as="input" placeholder="Введите номер паспорта">
					  </Form.Control>
					</Form.Group>
				  </Form>
				</Col>
			  </Row>
			  
			  <Row>
				<Col lg={3} className="border-right-1">
				  <h4>Выдан</h4>
				</Col>
				<Col lg={9}>
				  <Form>
					<Form.Group>
					  <Form.Control id="employerRequisitesIssuedDate" as="input" type="date">
					  </Form.Control>
					</Form.Group>
				  </Form>
				</Col>
			  </Row>
			  
			  <Row>
				<Col lg={3} className="border-right-1">
				  <h4>Кем выдан</h4>
				</Col>
				<Col lg={9}>
				  <Form>
					<Form.Group>
					  <Form.Control id="employerRequisitesIssuedWhom" as="input" placeholder="Введите кем был выдан паспорт">
					  </Form.Control>
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
					  <Form.Control id="employerRequisitesPhone" as="input" placeholder="Введите контактный номер">
					  </Form.Control>
					</Form.Group>
				  </Form>
				</Col>
			  </Row>
			</Card.Body>
		</Card>
		</Col>
		</Row>
				  
					<Row>
					  <Col lg={4}></Col>
					  <Col lg={4} className="text-center">
						<Button type="submit" className="btn-success w-100 my-2" action>Сохранить</Button>
					  </Col>
					  <Col lg={4}></Col>
					</Row>
        </Container>
      </div>
    );
  }
}