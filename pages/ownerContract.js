import Component from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Head from "next/head";
import Card from "react-bootstrap/Card";
import HeaderLogged from '../components/HeaderLogged';
import Footer from '../components/Footer';

function Home(){
  return <div>
    <Head>
      <title>Заполнение контракта арендодателя</title>
      <script type="text/javascript" src="//vk.com/js/api/openapi.js?122"></script>
      <link rel="shortcut icon" href="https://sun9-28.userapi.com/N_0nedgWtI-4iqd51k7hkB9Ei-gR_yXzolLn_g/o2lxrwNNQ3Y.jpg" type="image/x-icon"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
    </Head>
  </div>
}

export default class rentingContract extends React.Component{
  constructor(props){
    super(props);
    this.props = props;
  }

  render(){
    return(
      <div style={{'background-image':'url(https://sun9-62.userapi.com/c854528/v854528944/213539/HGqRoLIeGC0.jpg)', 'min-height':'100vh'}}>
	  	<Home/>
		<HeaderLogged/>
        <Container>
		<Row>
		<Col lg={12}>
		<Card>
		<Card.Header as='h3'>Заполните информацию для контракта:</Card.Header>
		<Card.Body>
              <Row>
                <Col lg={3} className="border-right-1">
                  <h4>Дата договора</h4>
                </Col>
                <Col lg={9}>
                <Form>
                  <Form.Group>
                    <Form.Control id="contractDate" as="input" type="date">
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
                      <Form.Control id="ownerName" as="input" placeholder="Введите ФИО (Без инициалов)">
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
                      <Form.Control id="ownerPassportSeries" as="input" placeholder="Введите серию паспорта">
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
                      <Form.Control id="ownerPassportNumber" as="input" placeholder="Введите номер паспорта">
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
                      <Form.Control id="ownerIssuedDate" as="input" type="date">
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
                      <Form.Control id="ownerLivesAt" as="input" placeholder="Введите ваш адрес проживания">
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
			  
			  <Row>
                <Col lg={3} className="border-right-1">
                  <h4>Адрес сдаваемой квартиры</h4>
                </Col>
                <Col lg={9}>
                  <Form>
                    <Form.Group>
                      <Form.Control id="apartmentAdress" as="input" placeholder="Введите полный адрес сдаваемой квартиры">
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
			  
			  <Row>
                <Col lg={3} className="border-right-1">
                  <h4>Этаж</h4>
                </Col>
                <Col lg={9}>
                  <Form>
                    <Form.Group>
                      <Form.Control id="apartmentFloor" as="input" placeholder="Введите этаж">
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
			  
			  <Row>
                <Col lg={3} className="border-right-1">
                  <h4>Государственная регистрация права</h4>
                </Col>
                <Col lg={9}>
                  <Form>
                    <Form.Group>
                      <Form.Control id="gosRegistration" as="input" placeholder="Введите государственную регистрацию права">
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
			  
			  <Row>
                <Col lg={3} className="border-right-1">
                  <h4>Кем выдана</h4>
                </Col>
                <Col lg={9}>
                  <Form>
                    <Form.Group>
                      <Form.Control id="gosRegistrationIssuedWhom" as="input" placeholder="Введите кем была выдана государственная регистрация права">
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
			  
			  <Row>
                <Col lg={3} className="border-right-1">
                  <h4>Запись регистрации в ЕГРП №</h4>
                </Col>
                <Col lg={9}>
                  <Form>
                    <Form.Group>
                      <Form.Control id="gosRegistrationEGRPNumber" as="input" placeholder="Введите номер записи регистрации в ЕГРП">
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
			  
			  <Row>
                <Col lg={3} className="border-right-1">
                  <h4>Дата регистрации в ЕГРП</h4>
                </Col>
                <Col lg={9}>
                  <Form>
                    <Form.Group>
                      <Form.Control id="gosRegistrationEGRPIssuedDate" as="input" type="date">
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
			  
			  <Row>
                <Col lg={3} className="border-right-1">
                  <h4>Количество комплектов ключей от квартиры</h4>
                </Col>
                <Col lg={3}>
                  <Form>
                    <Form.Group>
                      <Form.Control id="apartmentKeysNumber" as="input" placeholder="Комплект(а) ключей" type="number">
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
                <Col lg={4} className="border-right-1">
                  <h4>Ключ(а) от почтового ящика</h4>
                </Col>
                <Col lg={2}>
                  <Form>
                    <Form.Group>
                      <Form.Control id="apartmentMailKeysNumber" as="input" placeholder="Ключ(а) от почтового ящика" type="number">
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
			  
			  <Row>
                <Col lg={3} className="border-right-1">
                  <h4>Количество проверок квартиры</h4>
                </Col>
                <Col lg={3}>
                  <Form>
                    <Form.Group>
                      <Form.Control id="apartmentChecksNumber" as="input" placeholder="Количество проверок" type="number">
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
                <Col lg={2} className="border-right-1">
                  <h4>раза в</h4>
                </Col>
                <Col lg={4}>
                  <Form>
                    <Form.Group>
                      <Form.Control id="apartmentChecksPeriod" as="input" placeholder="Период проверок (неделю, месяц, год)">
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
			  		  
			  <Row>
                <Col lg={3} className="border-right-1">
                  <h4>Дней на восполнение ущерба</h4>
                </Col>
                <Col lg={9}>
                  <Form>
                    <Form.Group>
                      <Form.Control id="apartmentDamageDays" as="input" placeholder="Введите количество дней на восполнение ущерба, нанесённого нанимателем имуществу или квартире" type="number">
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
			   			  
			  <Row>
                <Col lg={3} className="border-right-1">
                  <h4>Плата за наём квартиры</h4>
                </Col>
                <Col lg={9}>
                  <Form>
                    <Form.Group>
                      <Form.Control id="apartmentRentPrice" as="input" placeholder="Введите плату за наём квартиры в рублях">
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
			  
			  <Row>
                <Col lg={3} className="border-right-1">
                  <h4>Плата за первый и последний период найма</h4>
                </Col>
                <Col lg={9}>
                  <Form>
                    <Form.Group>
                      <Form.Control id="firstAndLastPays" as="input" placeholder="Введите плату за первый и последний период найма в рублях">
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
			  
			  <Row>
                <Col lg={3} className="border-right-1">
                  <h4>Дней до начала квартала для внесения платы</h4>
                </Col>
                <Col lg={9}>
                  <Form>
                    <Form.Group>
                      <Form.Control id="daysBeforeQuarterPay" as="input" placeholder="Введите количество дней до начала квартала для внесения платы" type="number">
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
					  <Form.Control id="ownerRequisitesRegisrationAdress" as="input" placeholder="Введите адрес регистрации">
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
					<Form.Control id="ownerRequisitesMailAdress" as="input" placeholder="Введите ваш почтовый адрес">
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
					  <Form.Control id="ownerRequisitesPassportSeries" as="input" placeholder="Введите серию паспорта">
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
					  <Form.Control id="ownerRequisitesPassportNumber" as="input" placeholder="Введите номер паспорта">
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
					  <Form.Control id="ownerRequisitesIssuedDate" as="input" type="date">
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
					  <Form.Control id="ownerRequisitesIssuedWhom" as="input" placeholder="Введите кем был выдан паспорт">
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
					  <Form.Control id="ownerRequisitesPhone" as="input" placeholder="Введите контактный номер">
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
					<Row style={{width:100, height:100}}>
					</Row>
        </Container>
		<Footer/>
      </div>
    );
  }
}