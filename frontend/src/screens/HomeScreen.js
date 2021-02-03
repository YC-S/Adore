import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'

const HomeScreen = () => {
	let subscriptions = products.slice(0, 3)
	let vases = products.slice(3, 10)
	let supermeVases = products.slice(11)
	return (
		<>
			<h1>Subscriptions</h1>
			<Row>
				{subscriptions.map((product) => (
					<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
			<h1>Monday Rocks Vases</h1>
			<Row>
				{vases.map((product) => (
					<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
			<h1>Adore Classics Vases</h1>
			<Row>
				{supermeVases.map((product) => (
					<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	)
}

export default HomeScreen
