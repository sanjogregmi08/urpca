import React from 'react';
import '../../Assets/css/responsive.css';
export default function Nav() {
	return (
		<header className='header-style-two'>
			<div className='header-wrapper'>
				<div className='header-top-area bg-gradient-color d-none d-lg-block'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-6 header-top-left-part'>
								<span className='address'>
									<i className='webexflaticon flaticon-placeholder-1' /> 121
									King Street, Melbourne
								</span>
								<span className='phone'>
									<i className='webexflaticon flaticon-send' />{' '}
									example@gmail.com
								</span>
							</div>
							<div className='col-lg-6 header-top-right-part text-right'>
								<ul className='social-links'>
									<li>
										<a href='#'>
											<i className='fab fa-facebook-f' />
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='fab fa-twitter' />
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='fab fa-linkedin-in' />
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='fab fa-google-plus-g' />
										</a>
									</li>
								</ul>
								<div className='language'>
									<a className='language-btn' href='#'>
										<i className='webexflaticon flaticon-internet' /> English
									</a>
									<ul className='language-dropdown'>
										<li>
											<a href='#'>English</a>
										</li>
										<li>
											<a href='#'>Bangla</a>
										</li>
										<li>
											<a href='#'>French</a>
										</li>
										<li>
											<a href='#'>Spanish</a>
										</li>
										<li>
											<a href='#'>Arabic</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='bt_blank_nav' />
				<div className='header-navigation-area two-layers-header header-middlee bt_stick bt_sticky'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-12'>
								<a
									className='navbar-brand logo f-left mrt-10 mrt-md-0'
									href='index.html'>
									<img
										id='logo-image'
										className='img-center'
										src='images/logo.png'
										alt=''
									/>
								</a>
								<div className='mobile-menu-right' />
								<div className='header-searchbox-style-two d-none d-xl-block'>
									<div className='side-panel side-panel-trigger text-right d-none d-lg-block'>
										<span className='bar1' />
										<span className='bar2' />
										<span className='bar3' />
									</div>
									<div className='show-searchbox'>
										<a href='#'>
											<i className='webex-icon-Search' />
										</a>
									</div>
									<div className='toggle-searchbox'>
										<form action='#' id='searchform-all' method='get'>
											<div>
												<input
													type='text'
													id='s'
													className='form-control'
													placeholder='Search...'
												/>
												<div className='input-box'>
													<input type='submit' defaultValue id='searchsubmit' />
													<i className='fas fa-search' />
												</div>
											</div>
										</form>
									</div>
								</div>
								<div className='side-panel-content'>
									<div className='close-icon'>
										<button>
											<i className='webex-icon-cross' />
										</button>
									</div>
									<div className='side-panel-logo mrb-30'>
										<a href='index.html'>
											<img src='images/logo-sidebar-dark.png' alt='' />
										</a>
									</div>
									<div className='side-info mrb-30'>
										<div className='side-panel-element mrb-25'>
											<h4 className='mrb-10'>Office Address</h4>
											<ul className='list-items'>
												<li>
													<span className='fa fa-map-marker-alt mrr-10 text-primary-color' />
													121 King Street, Australia
												</li>
												<li>
													<span className='fas fa-envelope mrr-10 text-primary-color' />
													example@gmail.com
												</li>
												<li>
													<span className='fas fa-phone-alt mrr-10 text-primary-color' />
													(00) 2500-123-4567
												</li>
											</ul>
										</div>
										<div className='side-panel-element mrb-30'>
											<h4 className='mrb-15'>Pintarest</h4>
											<ul className='pintarest-list'>
												<li>
													<a href='#'>
														<img
															className='img-full'
															src='images/side-panel/1.jpg'
															alt=''
														/>
													</a>
												</li>
												<li>
													<a href='#'>
														<img
															className='img-full'
															src='images/side-panel/2.jpg'
															alt=''
														/>
													</a>
												</li>
												<li>
													<a href='#'>
														<img
															className='img-full'
															src='images/side-panel/3.jpg'
															alt=''
														/>
													</a>
												</li>
												<li>
													<a href='#'>
														<img
															className='img-full'
															src='images/side-panel/4.jpg'
															alt=''
														/>
													</a>
												</li>
												<li>
													<a href='#'>
														<img
															className='img-full'
															src='images/side-panel/5.jpg'
															alt=''
														/>
													</a>
												</li>
												<li>
													<a href='#'>
														<img
															className='img-full'
															src='images/side-panel/6.jpg'
															alt=''
														/>
													</a>
												</li>
											</ul>
										</div>
									</div>
									<h4 className='mrb-15'>Social List</h4>
									<ul className='social-list'>
										<li>
											<a href='#'>
												<i className='fab fa-facebook' />
											</a>
										</li>
										<li>
											<a href='#'>
												<i className='fab fa-twitter' />
											</a>
										</li>
										<li>
											<a href='#'>
												<i className='fab fa-instagram' />
											</a>
										</li>
										<li>
											<a href='#'>
												<i className='fab fa-google-plus' />
											</a>
										</li>
									</ul>
								</div>
								<div className='main-menu f-right'>
									<nav id='mobile-menu-right'>
										<ul>
											<li className='has-sub'>
												<a href='#'>Home</a>
												<ul className='sub-menu'>
													<li>
														<a href='index.html'>Home Layout 1</a>
													</li>
													<li>
														<a href='index2.html'>Home Layout 2</a>
													</li>
													<li>
														<a href='index3.html'>Home Layout 3</a>
													</li>
													<li>
														<a href='index4.html'>Home Layout 4</a>
													</li>
													<li>
														<a href='index-onepage.html'>Home One Page</a>
													</li>
													<li className='has-sub-child'>
														<a href='#'>Header Styles</a>
														<ul className='sub-menu'>
															<li>
																<a href='page-header-style-one.html'>
																	Header Style One
																</a>
															</li>
															<li>
																<a href='page-header-style-two.html'>
																	Header Style Two
																</a>
															</li>
														</ul>
													</li>
												</ul>
											</li>
											<li>
												<a href='page-about.html'>About</a>
											</li>
											<li className='has-sub'>
												<a href='#'>Page</a>
												<ul className='sub-menu'>
													<li className='has-sub-child'>
														<a href='#'>Our Team</a>
														<ul className='sub-menu right-view'>
															<li>
																<a href='page-our-team.html'>All Members</a>
															</li>
															<li>
																<a href='page-single-team.html'>Team Details</a>
															</li>
														</ul>
													</li>
													<li>
														<a href='page-pricing.html'>Pricing</a>
													</li>
													<li>
														<a href='page-testimonials.html'>Testimonials</a>
													</li>
													<li>
														<a href='page-contact-us.html'>Contact Us</a>
													</li>
													<li>
														<a href='page-faqs.html'>FAQs</a>
													</li>
													<li>
														<a href='404.html'>Eror Page</a>
													</li>
												</ul>
											</li>
											<li className='has-sub'>
												<a href='#'>Services</a>
												<ul className='sub-menu'>
													<li>
														<a href='page-all-services.html'>All Services</a>
													</li>
													<li>
														<a href='service-business-maintanance.html'>
															Business Maintanance
														</a>
													</li>
													<li>
														<a href='service-finance-and-management.html'>
															Finance &amp; Management
														</a>
													</li>
													<li>
														<a href='service-business-consulting.html'>
															Business Consulting
														</a>
													</li>
													<li>
														<a href='service-business-partnership.html'>
															Business Partnership
														</a>
													</li>
													<li>
														<a href='service-company-development.html'>
															Company Development
														</a>
													</li>
													<li>
														<a href='service-investment-planning.html'>
															Investment Planning
														</a>
													</li>
												</ul>
											</li>
											<li className='has-sub right-view'>
												<a href='#'>Case Study</a>
												<ul className='sub-menu'>
													<li>
														<a href='page-case-study.html'>All Case Study</a>
													</li>
													<li>
														<a href='page-single-case-study.html'>
															Single Case Study
														</a>
													</li>
												</ul>
											</li>
											<li className='has-sub right-view'>
												<a href='#'>News</a>
												<ul className='sub-menu'>
													<li>
														<a href='page-news.html'>News Classic</a>
													</li>
													<li>
														<a href='page-news-left-sidebar.html'>
															News Left Sidebar
														</a>
													</li>
													<li>
														<a href='page-news-right-sidebar.html'>
															News Right Sidebar
														</a>
													</li>
													<li>
														<a href='page-single-news.html'>Single News</a>
													</li>
												</ul>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}