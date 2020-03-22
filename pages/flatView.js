import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Head from "next/head";
import React from 'react';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Router from "next/router";
import HeaderLogged from '../components/HeaderLogged';
import Footer from '../components/Footer';

function Home(props){
  return <div>
    <Head>
		  <title>{props.flatShort}</title>
		  <script type="text/javascript" src="//vk.com/js/api/openapi.js?122"></script>
		  <link rel="shortcut icon" href="https://sun9-28.userapi.com/N_0nedgWtI-4iqd51k7hkB9Ei-gR_yXzolLn_g/o2lxrwNNQ3Y.jpg" type="image/x-icon"/>
		  <link
		  rel="stylesheet"
		  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
		  integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
		  crossorigin="anonymous"
		  />
    </Head>
  </div>
}

  const GoMakeEmployerContract = (e) =>{
    Router.push({
      pathname: '/employerContract',
      search: '?query='+e,
      state: { userLogin: e }})
  }

export default function flatView(props){
	return(
		<div style={{ 'background-image': 'url(https://sun9-12.userapi.com/VjptDjuK4wfiu0h9w-D76kG95KUYVfNUHrSzZA/hsl-nw7Ziew.jpg)', 'min-height': '100vh' }}>
		<Container>
			<Func
			flatShort='Аренда 1-комнатной квартиры' 
			flatAdress='Санкт-Петербург, Московский проспект, 25к1'
			metro='Технологический институт'
			imageArray='https://sun9-22.userapi.com/slcKjeq7xhgWIJLYPuG2Sksnvnq0KJ9aoQbB1Q/S161sUg4PEY.jpg'
			flatCost='29 000 ₽ / мес.'
			sellerPic='https://sun9-24.userapi.com/c855120/v855120424/20c2e3/g3ctW4HYepA.jpg'
			sellerName='Иванов Иван'
			space='52,3'
			roomsNum='3'
			rentType='Посуточная'
			floorNum='4'
			floorsCount='5'
			description='Лучшая квартира в районе, рядом с метро'
			sellerPhone='+72281488228'
			sellerMail='ivanov.sobaka@sobaka.sru'
			login={props.login}/>
		</Container>
	</div>
	);
}

function Func(props){
	return(
		<div>
			<Home flatShort={props.flatShort} />
			<HeaderLogged/>
				<Container className='my-2'>
					<Row>
						<Col lg={8} className='p-2'>
							<h3 className='p-2'>{props.flatShort}</h3>
							<p1 className='p-2'>{props.flatAdress}</p1>
							<p1 className='p-2'>
							<Image src='https://sun9-69.userapi.com/c858532/v858532145/1297dc/mYNxGfApp5w.jpg'/>
							{' '+props.metro}
							</p1>
						</Col>
					</Row>
					<Row>
						<Col lg={8} >
							<Carousel>
							  <Carousel.Item style={{width:1000, height:350}}>
								<Image src={props.imageArray} fluid/>
							  </Carousel.Item>
							</Carousel>
						</Col>
						<Col lg={4} style={{'background-color': '#fff'}}>
							<h2 className='my-5 mx-2'>{props.flatCost}</h2>
							<h4>
							<Image src={props.sellerPic} roundedCircle/>
							{' ' + props.sellerName}
							</h4>
							<h>
							<Button className='p-3 my-4' variant="success">Связаться</Button>
							<Button className='p-3 mx-3' onClick={(e) => GoMakeEmployerContract(props.login)} variant="success">Перейти к контракту</Button>
							</h>
						</Col>
					</Row>
					<Row>
						<Col lg={8} className='p-2 mx-2'>
							<Card>
								<Card.Header as='h4'>Описание</Card.Header>
								<Card.Body>
									<Card.Text>
									<h6 className='p-2'>{'Общая площадь: '+props.space+' м²'}</h6>
									<h6 className='p-2'>{'Комнат: '+props.roomsNum}</h6>
									<h6 className='p-2'>{'Тип аренды: '+props.rentType}</h6>
									<h6 className='p-2'>{'Этаж: '+props.floorNum+' из '+props.floorsCount}</h6>
									<h6 className='p-2'>{'Описание от арендодателя: '+props.description}</h6>
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col lg={8} className='p-2 mx-2'>
						<Card>
							<Card.Header as='h4'>Контакты</Card.Header>
							<Card.Body>
								<Card.Text>
								<h6 className='p-2'>{'Телефон: '+props.sellerPhone}</h6>
								<h6 className='p-2'>{'E-mail: '+props.sellerMail}</h6>
								</Card.Text>
							</Card.Body>
						</Card>
						</Col>
					</Row>
				</Container>
			<Footer/>
		</div>
	);
}