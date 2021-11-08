import React from 'react'

import Header from 'components/landing/Header/Header'
import Skills from 'components/landing/Skills'
import RecentProjects from 'components/landing/RecentProjects'
import Qualifications from 'components/landing/Qualifications'
import Awards from 'components/landing/Awards'
import Experience from 'components/landing/Experience'
import CtaCard from 'components/common/CtaCard'
import Footer from 'components/common/Footer'
import { initGA } from 'index'

import './style.scss'

const Home = () => {
	React.useEffect(() => {
		initGA()
	}, [])
	return (
		<div>
			<Header />
			<Skills />
			<RecentProjects />
			<Experience />
			<Awards />
			<Qualifications/>
			<CtaCard
				title='A Little More About Me'
				detail=""
				btVariant='solid'
				label='Get in touch'
			/>
			<Footer />
		</div>
	)
}

export default Home
