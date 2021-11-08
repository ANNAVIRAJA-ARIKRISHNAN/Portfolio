import React from 'react'
import { ReactTypeformEmbed } from 'react-typeform-embed'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'

import { GAmodalView } from 'index'

import './style.scss'

type FormProp = {
	onclose: Function
}

const styleDefault = {
	position: 'relative',
	width: '100%',
	height: '100%',
	overflow: 'hidden',
}
const ContactForm: React.FC<FormProp> = ({
	onclose,
}) => {
	const closeModal = () => {
		onclose(false)
	}
	React.useEffect(() => {
		GAmodalView('Contact popup')
	}, [])
	return (
		<div
			onClick={closeModal}
			className='contact-form'>
			<div className='form__inner'>
				<HighlightOffIcon
					className='form__close'
					onClick={closeModal}
				/>{' '}
				<ReactTypeformEmbed
					url='https://ba5lf142k87.typeform.com/to/a5RAco12'
					popup={false}
					style={styleDefault}
				/>{' '}
				<h3 className='form__loader'>
					loading..
				</h3>
			</div>
		</div>
	)
}

export default ContactForm
