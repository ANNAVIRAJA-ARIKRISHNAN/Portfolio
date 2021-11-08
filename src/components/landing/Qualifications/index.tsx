import React from 'react'

import QualificationCard from './Card'
import { QualificationData } from './data'

import './style.scss'

function Experience() {
	return (
		<div id='qualification' className='qualification'>
			<div className='qualification__container'>
				<div className='section__title'>
					<h3>Educational Qualifications 🖳</h3>
				</div>
				<p>
					
				</p>
				<div className='qualification__cards'>
					{QualificationData.map((data) => (
						<QualificationCard {...data} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Experience
