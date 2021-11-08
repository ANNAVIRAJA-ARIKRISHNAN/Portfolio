import React, { useState } from 'react'

import Button from 'components/common/Button'
import ContactForm from 'components/common/ContactForm'

import './style.scss'

type CtaCardPropType = {
	title: string
	detail?: string
	btVariant:
		| 'solid'
		| 'outline'
		| 'normal'
		| 'solid-primary'
	label: string
}
const CtaCard: React.FC<CtaCardPropType> = ({
	title,
	detail,
	btVariant,
	label,
}) => {
	const [value, setValue] = useState(false)
	const handleClose = (value: boolean) => {
		setValue(value)
	}

	const handleOpen = () => {
		setValue(true)
	}
	return (
		<div className='cta-card'>
			<div className='cta-card__container'>
				<h1>{title}</h1>
				<p>I am always energetic and eager to learn new skills.</p>
				<p>I work with the team to provide imaginative solutions for our customers.</p>
				<p>I delivered all projects in a timely fashion.</p>
				<p>I am extremely driven, with a clear goal to succeed.</p>
				<Button
					label={label}
					variant={btVariant}
					onClick={handleOpen}
				/>
				<div>
					{value && <ContactForm onclose={handleClose} />}
				</div>
			</div>
		</div>
	)
}

export default CtaCard
