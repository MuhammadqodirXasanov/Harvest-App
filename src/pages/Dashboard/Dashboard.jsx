import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

export const Dashboard = () => {
	return (
		<section className='dashboard'>
			<div className='dashboard__list'>
				<Link to={'locations'} className='dashboard__item green'>
					<h1 className='dashboard__title'>150+</h1>
					<p className='dashboard__text'>Locations</p>
				</Link>
				<Link to={'supervisors'} className='dashboard__item red'>
					<h1 className='dashboard__title'>700+</h1>
					<p className='dashboard__text'>Supervisors</p>
				</Link>
				<Link to={'observers'} className='dashboard__item light-green'>
					<h1 className='dashboard__title'>50+</h1>
					<p className='dashboard__text'>Observers</p>
				</Link>
			</div>
		</section>
	);
};
