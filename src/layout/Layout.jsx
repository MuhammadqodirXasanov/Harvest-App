import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHouse,
	faLocationDot,
	faUserGroup,
	faUsers,
	faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { Outlet, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './layout.css';

export const Layout = () => {
	const navigate = useNavigate();
	!localStorage.getItem('token') && navigate('/');

	const logout = () => {
		localStorage.removeItem('token');
	};

	return (
		<div className='layout'>
			<h1 className='layout__title'>
				<span className='layout__min-title'>Agro</span>Monitoring
			</h1>
			<div className='layout__box'>
				<nav className='layout__links-box'>
					<h3 className='layout__menu'>Menu</h3>
					<Link to={'/home'} className='layout__link'>
						<FontAwesomeIcon className='layout__icon' icon={faHouse} />
						Dashboard
					</Link>
					<Link to={'locations'} className='layout__link'>
						<FontAwesomeIcon className='layout__icon' icon={faLocationDot} />
						Locations
					</Link>
					<Link to={'supervisors'} className='layout__link'>
						<FontAwesomeIcon className='layout__icon' icon={faUserGroup} />
						Supervisors
					</Link>
					<Link to={'observers'} className='layout__link'>
						<FontAwesomeIcon className='layout__icon' icon={faUsers} />
						Observers
					</Link>
					<Link to={'/'} onClick={logout} className='layout__link logout'>
						<FontAwesomeIcon
							className='layout__icon'
							icon={faArrowRightFromBracket}
						/>
						Log out
					</Link>
				</nav>
				<main>
					<Outlet />
				</main>
			</div>
		</div>
	);
};
