import React from 'react'

const Display = ({
	value,
	isDataLoading,
	result,
	isResultLoading,
}) => {
	return (
		<div className='actions-group actions-group__display'>
			<p className='text text--primary'>Provided Data: </p>
			{isDataLoading &&  
				<p className='text text--primary'>
					[<span className='text text--secondary'>...Pushing value</span>]
				</p>
			}

			{!isDataLoading && 
				<div>
					<p className='text text--primary'>
						[{value.map((item) => 
							<span className='text text--primary text--value' key={item.id}>{item.value}</span>
						)}]
					</p>
				</div>
			}

			{result === null && !isResultLoading && null}
			{((result === null && isResultLoading) ||  (isResultLoading)) && <span className='text text--secondary'>Calculating result...</span>}
			{(!!result || result === 0) && !isResultLoading &&
					<div className='value-result'>
						<p className='text text--primary'>Result:</p>
						<span className={`text text--primary ${result === 0 ? 'text--danger' : ''}`}>{result === 0 ? 'Add value to array' : result}</span>
					</div>
			}
		</div>
	)
}

export default Display;
