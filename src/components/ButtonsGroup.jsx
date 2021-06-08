import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';

import Button from './Button';
import Display from './Display';
import Buttons from './Buttons';

import { calculateMaxValue } from '../tasks/basic';

const buttons = [
	{id: 0, value: 0},
	{id: 1, value: 1},
	{id: 2, value: 2},
	{id: 3, value: 3},
	{id: 4, value: 4},
	{id: 5, value: 5},
	{id: 6, value: 6},
	{id: 7, value: 7},
	{id: 8, value: 8},
	{id: 9, value: 9},
];

const ButtonsGroup = () => {
	const [result, setResult] = useState(null);
	const [asyncArr, setAsyncArr] = useState(null);
	const [displayValue, setDisplayValue] = useState([]);
	const [isDataLoading, setIsDataLoading] = useState(false);
	const [isResultLoading, setIsResultLoading] = useState(false);

	useEffect(() => {
		const { AsyncArray } = window.Homework;
		setAsyncArr(new AsyncArray([]))
		return () => {}
	}, [])

	const handleButtonClick = (btnValue) => {
		setIsDataLoading(true);
		asyncArr.push(btnValue, () => {
			setDisplayValue(prev => [...prev, {value: btnValue, id: uuid()}]);
			setIsDataLoading(false);
			setResult(null);
		});
	}

	const handleRemoveClick = () => {
		const { AsyncArray } = window.Homework;
		setAsyncArr(new AsyncArray([]))
		setDisplayValue([]);
		setResult(null);
	}

	const handleCalculateMaxValue = () => {
		setIsResultLoading(true);

		calculateMaxValue(asyncArr, (result) => {
			setResult(result);
			setIsResultLoading(false);
		});
	};
	
	return (
		<React.Fragment>
			<Buttons 
				onRemoveClick={handleRemoveClick} 
				calculateMaxValue={handleCalculateMaxValue}
				isResultLoading={isResultLoading}
			>
				{buttons.map(item => 
					<Button 
						key={item.id}
						value={item.value}
						onBtnClick={handleButtonClick}
						disabled={isDataLoading}
					/>
				)}
			</Buttons>

			<Display 
				result={result}
				value={displayValue} 
				isDataLoading={isDataLoading}
				isResultLoading={isResultLoading}
			/>
		</React.Fragment>
	)
}

export default ButtonsGroup;
