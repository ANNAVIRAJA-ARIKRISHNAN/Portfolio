import React from 'react'

import {LinkedIn,GitHub,Call, Email, Facebook } from '@material-ui/icons'
// import LinkedInIcon from '@material-ui/icons/LinkedIn'
// import GitHubIcon from '@material-ui/icons/GitHub'
// import FacebookIcon from '@material-ui/icons/Facebook';
// import CallIcon from  '@material-ui/icons/Call';
// import EmailIcon from '@material-ui/icons/Email';

import './style.scss'

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer__container'>
				<h4>Follow me on social media</h4>
				<div className='footer__social-icons'>
					<a
						href='https://wa.me/919791337337'
						target="_blank"
						rel='noopener noreferrer'>
						<Call className='social-icon' />
					</a>
					<a
						href='mailto:annaviraja.arikrishnan@yahoo.com'
						target="_blank"
						rel='noopener noreferrer'>
						<Email className='social-icon' />
					</a>
					<a
						href='https://github.com/ANNAVIRAJA-ARIKRISHNAN/'
						target="_blank"
						rel='noopener noreferrer'>
						<GitHub className='social-icon' />
					</a>
					<a
						href='https://www.linkedin.com/in/annaviraja-arikrishnan/'
						target="_blank"
						rel='noopener noreferrer'>
						<LinkedIn className='social-icon' />
					</a>
					<a
						href='https://www.facebook.com/annaviraja.arikrishnan'
						target="_blank"
						rel='noopener noreferrer'>
						<Facebook className='social-icon' />
					</a>
					
				</div>
				<p>
					Designed and developed by Annavi Raja A. Built
					with React. Hosted on Netlify.
				</p>
				<p>Copyright © Annavi Raja A {new Date().getFullYear()}</p>
			</div>
		</div>
	)
}

export default Footer
