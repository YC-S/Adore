import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
	const [products, setProducts] = useState([])
	useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await axios.get('./api/products')
			setProducts(data)
		}
		fetchProducts()
	}, [])
	let subscriptions = products.slice(0, 3)
	let vases = products.slice(3, 10)
	let highEndVases = products.slice(11)
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
				{highEndVases.map((product) => (
					<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	)
}

export default HomeScreen
