import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { locFilter, locOpen } from '../../redux/modal';
import location from '../../json/location.json';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './locations.css';
import {
	faFilter,
	faCirclePlus,
	faMagnifyingGlass,
	faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';

export const Locations = () => {
	const [inputValue, setInputValue] = React.useState('');
	const filterList = useSelector((state) => state.locFilterRoad.locFilterList);

	const dispatch = useDispatch();

	const locFilterFunc = () => {
		dispatch(locFilter());
	};
	return (
		<section className='location'>
			<div className='location__box'>
				<button onClick={locFilterFunc} className='location__filter'>
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
				<button onClick={() => dispatch(locOpen())} className='location__add'>
					<FontAwesomeIcon className='location__add-icon' icon={faCirclePlus} />
					Add new
				</button>
			</div>
			<div className='location-main'>
				<div className='flex'>
					<input type='checkbox' name='checkbox' />
					<h4 className='location-main__title '>location name</h4>
				</div>
				<h4 className='location-main__title'>Area</h4>
				<h4 className='location-main__title'>date</h4>
				<FontAwesomeIcon className='more' icon={faEllipsisVertical} />
			</div>
			<ul className='location__list'>
				{React.useEffect(() => {
					<li className='location__item' key={filterList.id}>
						<div className='flex'>
							<input type='checkbox' name='checkbox' />
							<div>
								<h5 className='location__distr'>{filterList.name}</h5>
								<p className='location__place'>
									{filterList.place} places attached
								</p>
							</div>
						</div>
						<p className='location__area'>{filterList.area}</p>
						<p className='location__date'>{filterList.date}</p>
						<p className='location__exp'>Expand</p>
					</li>;
				}, [filterList]) || inputValue
					? location.map((searchItem) =>
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
									<p className='location__area'>{searchItem.area}</p>
									<p className='location__date'>{searchItem.date}</p>
									<p className='location__exp'>Expand</p>
								</li>
							) : (
								''
							)
					  )
					: location.map((item) => (
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
								<p className='location__area'>{item.area}</p>
								<p className='location__date'>{item.date}</p>
								<p className='location__exp'>Expand</p>
							</li>
					  ))}
			</ul>
		</section>
	);
};
