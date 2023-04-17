import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import observer from '../../json/supervisor.json';
import {
	faFilter,
	faCirclePlus,
	faMagnifyingGlass,
	faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { supOpen } from '../../redux/modal';
import { supFilter } from '../../redux/modal';
import './observers.css';

export const Observers = () => {
	const [inputValue, setInputValue] = React.useState('');
	const dispatch = useDispatch();

	let observers = [];

	for (let i of observer) {
		observers.unshift(i);
	}

	return (
		<section className='location'>
			<div className='location__box'>
				<button
					onClick={() => dispatch(supFilter())}
					className='location__filter'
				>
					<FontAwesomeIcon className='location__filter-icon' icon={faFilter} />
					Filter
				</button>
				<div className='location__search'>
					<FontAwesomeIcon
						className='location__search-icon'
						icon={faMagnifyingGlass}
					/>
					<input
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						className='location__inp'
						placeholder='Search'
						type='text'
						name='search'
						id='search'
					/>
				</div>
				<button onClick={() => dispatch(supOpen())} className='location__add'>
					<FontAwesomeIcon className='location__add-icon' icon={faCirclePlus} />
					Add new
				</button>
			</div>
			<div className='location-main'>
				<div className='flex'>
					<input type='checkbox' name='checkbox' />
					<h4 className='location-main__title '>Full name</h4>
				</div>
				<h4 className='location-main__title'>Phone number</h4>
				<h4 className='location-main__title'>hudud</h4>
				<FontAwesomeIcon className='more' icon={faEllipsisVertical} />
			</div>
			<ul className='location__list'>
				{inputValue
					? observers.map((searchItem) =>
							searchItem.name
								.toLowerCase()
								.includes(inputValue.toLowerCase()) ? (
								<li className='location__item' key={searchItem.id}>
									<div className='flex'>
										<input type='checkbox' name='checkbox' />
										<div>
											<h5 className='location__distr'>{searchItem.name}</h5>
											<p className='location__place'>
												{searchItem.place} places attached
											</p>
										</div>
									</div>
									<p className='location__area'>{searchItem.number}</p>
									<p className='location__date'>{searchItem.hudud}</p>
									<p className='location__exp'>Expand</p>
								</li>
							) : (
								''
							)
					  )
					: observers.map((item) => (
							<li className='location__item' key={item.id}>
								<div className='flex'>
									<input type='checkbox' name='checkbox' />
									<div>
										<h5 className='location__distr'>{item.name}</h5>
										<p className='location__place'>
											{item.place} places attached
										</p>
									</div>
								</div>
								<p className='location__area'>{item.number}</p>
								<p className='location__date'>{item.hudud}</p>
								<p className='location__exp'>Expand</p>
							</li>
					  ))}
			</ul>
		</section>
	);
};
