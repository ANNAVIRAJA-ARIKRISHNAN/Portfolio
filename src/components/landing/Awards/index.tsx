import React from 'react'

import AwardCard from './Card'
import { AwardsData } from './data'

import './style.scss'

function Awards() {
	return (
		<div id='awards' className='award'>
			<div className='award__container'>
				<div className='section__title'>
					<h3>Awards & Achivements <span role="img" aria-label="">🏆</span></h3>
				</div>
				{/* <p>
					I have also taken part in the following projects
					and startups.{' '}
				</p> */}
				<div className='award__cards'>
					{AwardsData.map((data) => (
						<AwardCard {...data} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Awards
