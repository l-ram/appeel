import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchChange }) => {
	return (
		<div class ="search">
			<input
				class='searchbox'
				type='search'
				placeholder='Search repos'
				onChange={searchChange}
			/>
		</div>
		);
}

export default SearchBox;