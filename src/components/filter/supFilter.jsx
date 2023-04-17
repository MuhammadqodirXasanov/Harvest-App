import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { addSupFilterItem } from '../../redux/supFilter';
import supervisor from '../../json/supervisor.json';
import { supFilterClose } from '../../redux/modal';
import { useDispatch } from 'react-redux';
import '../modals/Modal.css';

export const SuperFilter = () => {
	const [fname, setFName] = React.useState('');
	const [lname, setLName] = React.useState('');
	const [number, setNumber] = React.useState('');

	const dispatch = useDispatch();

	function addItem() {
		const place = Math.floor(Math.random() * 20);

		const NewPerson = {
			name: fname + ' ' + lname,
			number,
			place,
		};

		supervisor.forEach((item) => {
			const includeName = item.name
				.toLowerCase()
				.includes(NewPerson.name.toLowerCase());

			const includeArea = NewPerson.area
				? item.area.toString().includes(NewPerson.number.toString())
				: '';

			if (includeName || includeArea) {
				dispatch(addSupFilterItem(item));
				dispatch(supFilterClose());
			}
		});
	}

	return (
		<div className='superv-modal-box'>
			<div className='superv-modal'>
				<div className='superv-title-box'>
					<h1 className='superv-modal__title poppins'>
						Filter observer / supervisor
					</h1>
					<FontAwesomeIcon
						onClick={() => dispatch(supFilterClose())}
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
					value={number}
					onChange={(e) => setNumber(e.target.value)}
					className='superv-modal__inp poppins'
					type='number'
					placeholder='Telefon raqam'
					name='phone-number'
				/>

				<div className='superv-btn-box'>
					<button
						onClick={() => dispatch(supFilterClose())}
						className='superv-btn-red inter'
					>
						BEKOR QILISH
					</button>
					<button onClick={addItem} className='superv__btn-green inter'>
						Filterlash
					</button>
				</div>
			</div>
		</div>
	);
};
