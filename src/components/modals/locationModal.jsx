import React from 'react';
import location from '../../json/location.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { locClose } from '../../redux/modal';
import './Modal.css';

export const LocationModal = () => {
	const [name, setLocName] = React.useState('');
	const [area, setArea] = React.useState('');
	const [date, setDate] = React.useState('');

	const dispatch = useDispatch();

	const addItem = () => {
		const place = Math.floor(Math.random() * 20);

		const NewLocation = {
			name,
			area,
			date,
			place,
		};

		NewLocation.name && location.push(NewLocation) && dispatch(locClose());
	};

	return (
		<div className='superv-modal-box'>
			<div className='superv-modal'>
				<div className='superv-title-box'>
					<h1 className='superv-modal__title poppins'>Add location</h1>
					<FontAwesomeIcon
						onClick={() => dispatch(locClose())}
						className='superv-modal-icon'
						icon={faXmark}
					/>
				</div>
				<input
					value={name}
					onChange={(e) => setLocName(e.target.value)}
					className='superv-modal__inp poppins'
					type='text'
					placeholder='Tuman'
					name='first-name'
					required
				/>
				<input
					value={area}
					onChange={(e) => setArea(e.target.value)}
					className='superv-modal__inp poppins'
					type='number'
					placeholder='Maydon ( km2 )'
					name='phone-number'
				/>
				<input
					value={date}
					onChange={(e) => setDate(e.target.value)}
					className='superv-modal__inp poppins'
					type='email'
					placeholder='Sana'
					name='login'
				/>
				<div className='superv-btn-box'>
					<button
						onClick={() => dispatch(locClose())}
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
