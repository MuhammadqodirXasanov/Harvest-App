import React from 'react';
import location from '../../json/location.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import supervisor from '../../json/supervisor.json';
import { useDispatch } from 'react-redux';
import './Modal.css';
import { supClose } from '../../redux/modal';

export const SuperModal = () => {
	const [fname, setFName] = React.useState('');
	const [lname, setLName] = React.useState('');
	const [number, setNumber] = React.useState('');

	const dispatch = useDispatch();

	function addItem() {
		const id = Math.floor(Math.random() * 20);

		const NewPerson = {
			name: `${fname} ${lname}`,
			number: number,
			place: id,
		};
		if (NewPerson.name.length > 2) {
			supervisor.push(NewPerson) && dispatch(supClose());
		}
	}

	return (
		<div className='superv-modal-box'>
			<div className='superv-modal'>
				<div className='superv-title-box'>
					<h1 className='superv-modal__title poppins'>
						Add observer / supervisor
					</h1>
					<FontAwesomeIcon
						onClick={() => dispatch(supClose())}
						className='superv-modal-icon'
						icon={faXmark}
					/>
				</div>
				<input
					value={fname}
					onChange={(e) => setFName(e.target.value)}
					className='superv-modal__inp poppins'
					type='text'
					placeholder='Ism'
					name='first-name'
				/>
				<input
					value={lname}
					onChange={(e) => setLName(e.target.value)}
					className='superv-modal__inp poppins'
					type='text'
					placeholder='Familiya'
					name='last-name'
				/>
				<input
					className='superv-modal__inp poppins'
					type='text'
					placeholder='Otasining ismi'
					name='father`s-name'
				/>
				<input
					value={number}
					onChange={(e) => setNumber(e.target.value)}
					className='superv-modal__inp poppins'
					type='number'
					placeholder='Telefon raqam'
					name='phone-number'
				/>
				<input
					className='superv-modal__inp poppins'
					type='email'
					placeholder='Login'
					name='login'
				/>

				<select className='superv-modal__inp poppins'>
					{location.map((item) => (
						<option key={item.id}>{item.name}</option>
					))}
				</select>
				<div className='superv-btn-box'>
					<button
						onClick={() => dispatch(supClose())}
						className='superv-btn-red inter'
					>
						BEKOR QILISH
					</button>
					<button onClick={addItem} className='superv__btn-green inter'>
						QO'SHISH
					</button>
				</div>
			</div>
		</div>
	);
};
