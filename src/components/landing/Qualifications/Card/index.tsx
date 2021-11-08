import React from 'react'

import './style.scss'

type QualificationCardPropType = {
	title: string
	university: string
	college: string
	year?: string
	percentage?:string
}

const QualificationCard: React.FC<QualificationCardPropType> = ({
	title,
	university,
	college,
	year,
	percentage,
}) => {
	return (
		<div className='qualification-card'>
			<div className='qualification-card__container'>
				<p className='qualification-card__title'>{title}</p>
				<p>{university}</p><br/>
				<p>{college}</p>
				<p className='qualification-card__progress'>
					Percentage : {percentage}
				</p>
				<p className='qualification-card__time'>{year}</p>
			</div>
		</div>
	)
}

export default QualificationCard
