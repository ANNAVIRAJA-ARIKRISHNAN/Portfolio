import React from 'react'

import Skill from './Skill'
import reactIcon from 'assets/icons/react-icon'
import nodeIcon from 'assets/icons/node'
import sassIcon from 'assets/icons/sass'
import toolsIcon from 'assets/icons/tools'
import microsoftIcon from 'assets/icons/microsoft'
import './style.scss'

function Skills() {
	return (
		<div id='skills' className='skills'>
			<div className='skills__container'>
				<div className='section__title'>
					<h3>My skill set</h3>
				</div>
				<div className='skills__lists'>
					<Skill
						name='Front-end'
						detail='React, Typescript, Redux, React-Router'
						icon={reactIcon}
					/>
					<Skill
						name='Back-end'
						detail='Node, Express, MongoDB'
						icon={nodeIcon}
					/>
					<Skill
						name='Style/Library'
						detail='CSS, Material UI, Bootstrap'
						icon={sassIcon}
					/>
					{/* <Skill
						name='UX/UI'
						detail='Research, user journey, wireframe, prototype, interaction, test'
						icon={uxIcon}
					/> */}
					<Skill
						name='Additional Technologies'
						detail='DotNet, C# MS Sql Server, MySql, WCF, WebApi'
						icon={microsoftIcon}
					/>
					<Skill
						name='Tools'
						detail='VS Code, Visual Studio, Guvi IDE, CodePen'
						icon={toolsIcon}
					/>
				</div>
			</div>
		</div>
	)
}

export default Skills
