import React from 'react';
import './about.scss';
import Header from "../../components/header/Header";
import Banner from '../../components/banner/Banner';
import Collapse from '../../components/collapse/Collapse';
import Footer from '../../components/footer/Footer';
import aboutData from '../../data/aboutData';


export default function About() {
	return (
		<div>
			<Header />
			<Banner />
			<main className='about_main'>
				{aboutData.map(data => {
					return (
						<div key={data.id} className="about_main_collapse">
							<Collapse style={{margin:'30px 0'}}  title={data.title} content={data.content} />
						</div>
					)}
				)}
			</main>
			<Footer />
		</div>
	)
}