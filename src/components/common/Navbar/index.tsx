import React, { useRef, useState } from 'react'

import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import ContactForm from 'components/common/ContactForm'

import './style.scss'

const Navbar = () => {
	const hamburgerRef = useRef<HTMLDivElement>(null)
	const closeIconRef = useRef<HTMLDivElement>(null)
	const navRef = useRef<HTMLUListElement>(null)
	const toggleMenu = () => {
		hamburgerRef.current?.classList.toggle('hide')
		closeIconRef.current?.classList.toggle('hide')
		navRef.current?.classList.toggle('show')
	}
	const [value, setValue] = useState(false)
	const handleClose = (value: boolean) => {
		setValue(value)
	}

	// const handleOpen = () => {
	// 	setValue(true)
	// }

	return (
		<>
			{value && <ContactForm onclose={handleClose} />}
			<div id='nav-bar' className='navbar'>
				<div className='navbar__container'>
					<div className='navbar__logo'>
						<a className="navbar__a" href='/' rel='noopener noreferrer'>
							<h3 >Annavi Raja</h3>
						</a>
					</div>
					<div className='navbar__links'>
						<div ref={hamburgerRef}>
							<MenuIcon
								onClick={toggleMenu}
								id='nav-hamburger'
								className='navbar__hamburger '
							/>
						</div>
						<div ref={closeIconRef} className='hide'>
							<CloseIcon
								onClick={toggleMenu}
								id='nav-close'
								className='navbar__closeIcon '
							/>
						</div>

						<ul
							ref={navRef}
							onClick={toggleMenu}
							className='navigation '>
							<li>
								<a
									href='#recent-projects'
									rel='noopener noreferrer'>
									Projects
								</a>
							</li>
							<li>
								<a
									href='#recent-experience'
									rel='noopener noreferrer'>
									Experiences
								</a>
							</li>
							<li>
								<a
									href="https://drive.google.com/file/d/1S2FDUxoz4wVIQm2zawewQsjgQEVoDMIW/view?usp=sharing"
									rel='noopener noreferrer'
									target='_blank'>
									Resume
								</a>
							</li>
							{/* <Button
								onClick={handleOpen}
								label='Contact'
								variant='outline'
							/> */}
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar
