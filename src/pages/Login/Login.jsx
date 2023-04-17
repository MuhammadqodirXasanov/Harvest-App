import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import './Login.css';

export const Login = () => {
	const navigate = useNavigate();

	function loginSubmit(e) {
		e.preventDefault();

		localStorage.setItem('token', 'dj892hfgbt548fphv3gvvg438grgf2');

		localStorage.getItem('token') && navigate('home');
	}

	return (
		<div className='login'>
			<section className='login__section'>
				<h1 className='login__title'>
					<span className='login__thin'>Agro</span>Monitoring
				</h1>
				<h1 className='login__title' id='login__title2'>
					Login to your account
				</h1>
				<form className='login__form' onSubmit={loginSubmit}>
					<FontAwesomeIcon className='person-icon' icon={faUser} />
					<input
						className='login__inp'
						placeholder='Email...'
						type={'email'}
						name='email'
						id='email'
						required
					/>
					<FontAwesomeIcon className='lock' icon={faLock} />
					<input
						className='login__inp'
						placeholder='Password...'
						type={'password'}
						name='password'
						id='password'
						required
					/>
					<button className='login__btn'>Login now</button>
				</form>
			</section>
		</div>
	);
};
