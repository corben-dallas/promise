import React from 'react'

const Buttons = ({
	children,
	onRemoveClick,
	isResultLoading,
	calculateMaxValue,
}) => (
	<div className='actions-group'>
		<div className='actions-group__buttons'>
			{children}
		</div>
		<div className='actions-group__buttons'>
			<div 
				className={`button button--primary button--success ${isResultLoading ? 'button--disabled' : ''}`} 
				onClick={calculateMaxValue}
			>
				Calculate max element in this array
			</div>
			<div 
				className='button button--primary button--danger' 
				onClick={onRemoveClick}
			>
					Clear array's value
			</div>
		</div>
	</div>
);

export default Buttons
