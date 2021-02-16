import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import paymentMethod from '../img/payment_methods.png'

const Footer = () => {
	return (
		<footer className='site-footer'>
			<Container>
				<Row>
					<Col className='col-lg-3 col-md-6'>
						<section className='widget widget-light-skin'>
							<h5 className='widget-title'>Get In Touch With Us</h5>
							<p className='text-white'>Phone: 1 312 123 4567</p>
							<ul className='list-unstyled text-sm text-white'>
								<li>
									<span className='opacity-50'>Monday-Friday:</span>9.00 am -
									5.00pm
								</li>
								<li>
									<span className='opacity-50'>Saturday-Sunday:</span>12.00 am -
									5.00pm
								</li>
							</ul>
							<p>
								<a className='navi-link-light' href='#'>
									yuanchen@gmail.com
								</a>
							</p>
							<a href='#' className='social-button'>
								<i class='fab fa-facebook fa-2x'></i>
							</a>
							<a href='#' className='social-button'>
								<i class='fab fa-twitter fa-2x'></i>
							</a>
							<a href='#' className='social-button'>
								<i class='fab fa-instagram fa-2x'></i>
							</a>
						</section>
					</Col>
					<Col className='col-lg-3 col-md-6'>
						<section className='widget widget-light-skin'>
							<h5 className='widget-title'>Our Mobile App</h5>
							<a className='market-button apple-button mb-light-skin' href='#'>
								<span className='mb-subtitle'>Download on the</span>
								<span className='mb-title'>App Store</span>
							</a>
							<a className='market-button google-button mb-light-skin' href='#'>
								<span className='mb-subtitle'>Download on the</span>
								<span className='mb-title'>Google Play</span>
							</a>
							<a
								className='market-button windows-button mb-light-skin'
								href='#'
							>
								<span className='mb-subtitle'>Download on the</span>
								<span className='mb-title'>Windows Store</span>
							</a>
						</section>
					</Col>
					<Col className='col-lg-3 col-md-6'>
						<section className='widget widget-links widget-light-skin'>
							<h5 className='widget-title'>About Us</h5>
							<ul>
								<li>
									<a href='#'>Careers</a>
								</li>
								<li>
									<a href='#'>About Adore Flower</a>
								</li>
								<li>
									<a href='#'>Our Story</a>
								</li>
								<li>
									<a href='#'>Services</a>
								</li>
								<li>
									<a href='#'>Our Blog</a>
								</li>
							</ul>
						</section>
					</Col>
					<Col className='col-lg-3 col-md-6'>
						<section className='widget widget-links widget-light-skin'>
							<h5 className='widget-title'>Account &amp; Shipping Info</h5>
							<ul>
								<li>
									<a href='#'>Your Account</a>
								</li>
								<li>
									<a href='#'>Shipping Rates & Policies</a>
								</li>
								<li>
									<a href='#'>Refunds & Replacements</a>
								</li>
								<li>
									<a href='#'>Taxes</a>
								</li>
								<li>
									<a href='#'>Delivery Info</a>
								</li>
								<li>
									<a href='#'>Affiliate Program</a>
								</li>
							</ul>
						</section>
					</Col>
				</Row>
				<hr class='hr-light mt-2 margin-bottom-2x'></hr>
				<Row>
					<Col className='col-md-7 padding-bottom-1x'>
						<div className='margin-bottom-1x'>
							<img src={paymentMethod} alt='Payment Methods' />
						</div>
					</Col>
					<Col className='col-md-5 padding-bottom-1x'>
						<div className='margin-top-1x'>
							<span className='form-text text-sm text-white opacity-50'>
								Subscribe to our Newsletter to receive early discount offers,
								latest news, sales and promo information.
							</span>
						</div>
					</Col>
				</Row>
				<p className='footer-copyright'>
					© 2021 All rights reserved. Made with &nbsp;
					<i class='fas fa-heart text-danger'></i>
					<a href='#' target='_blank'>
						{' '}
						&nbsp;by Adore
					</a>
				</p>
			</Container>
		</footer>
	)
}

export default Footer
