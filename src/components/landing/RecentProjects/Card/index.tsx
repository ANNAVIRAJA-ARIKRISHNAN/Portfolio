import React from 'react'

import Tag from '../../../common/Tag'
import './style.scss'

type CardPropType = {
	title: string
	tech: string
	description:string
	image: string
	status?: string
}
const Card: React.FC<CardPropType> = ({
	title,
	tech,
	description,
	image,
	status,
	children,
}) => {
	return (
		<div className='rp-card'>
			<div className='rp-card__image'>
				<img src={image} alt={title} />
			</div>
			<div className='rp-card__contents'>
				<h4>{title}</h4>
				<p><span>Description : </span>{description}</p>
				<p><b>Tech Stack : </b>{tech}</p>
				<div className='rp-card__buttons'>{children}</div>
			</div>
			{status && (
				<div className='repo-tag'>
					<Tag label={status} color='secondary' />
				</div>
			)}
		</div>
	)
}

export default Card
