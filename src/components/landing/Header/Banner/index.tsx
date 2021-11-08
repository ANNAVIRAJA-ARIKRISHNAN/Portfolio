import React from 'react'

import HeroImage from '../../../../assets/images/annaviraja.png'
import HeaderBg from '../../../../assets/images/header__bg.png'
import Button from '../../../common/Button'

import './style.scss'

export const Banner = () => {
	return (
		<div className='banner'>
			<div className='banner__container'>
				<div className='banner__content'>
					<h3>Hi There! <span role="img" aria-label="">👋</span></h3>
					<h4>I’M ANNAVI RAJA A</h4>
					<h1>Full Stack Web Developer - MERN Stack <span role="img" aria-label="Developer image">👨‍💻</span></h1>
					<h5 style={{lineHeight: "40px"}}>
					I fell in love with programming and I have at least learnt something, I think..<span role="img" aria-label="">🤷‍♂️</span><br/>
						<span className='text-highlight'>
						DotNet technologies
						</span>
						{" "} [ASP.Net, MVC, SQL Server, WCF, WebAPI and MySQL] in 7 years of total experience and {" "}
						<span className='text-highlight'>
						Full Stack 
						</span>
						{" "} [JavaScript, NodeJS, React, TypeScript, MongoDB, HTML, CSS and Bootstrap]. <br/>My field of Interest's are building new Products, Web Technologies, Mobile Technologies, AI and ML. Whenever possible, I also apply my passion for developing products with NodeJs, Modern Javascript Library and ReactJs.
					</h5>
					<a href='#recent-projects'>
						<Button
							label='View projects'
							variant='outline'
						/>
					</a>
				</div>
				<div className='banner__image'>
					<img
						src={HeroImage}
						alt='Annavi Raja'
					/>
				</div>
			</div>
			<img
				src={HeaderBg}
				alt='code abstract background'
				className='banner__bg'
			/>
		</div>
	)
}
export default Banner
