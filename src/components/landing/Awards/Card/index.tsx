import React from 'react'

import './style.scss'

type AwardCardPropType = {
	title: string
	detail: string
	image?: string
	year?:string
	link?:string
}

const AwardCard: React.FC<AwardCardPropType> = ({
	title,
	detail,
	image,
	year,
	link,
}) => {
	return (
		<div className='award-card'>
			<div className='award-card__container'>
				<div className='award-card__logo'>
					<img src={image} alt={detail} />
				</div>
				<p className='award-card__title'><a className='award-card__a' href={link} target="_blank" rel="noopener noreferrer">{title}</a></p>
				<p>{detail}</p>
				<p className='award-card__progress'>
					{year}
				</p>
			</div>
		</div>
	)
}

export default AwardCard
