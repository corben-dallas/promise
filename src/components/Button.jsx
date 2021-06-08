import React from 'react'

const Button = ({
	value,
	onBtnClick,
	disabled,
}) => {
	return (
		<button 
			className='button button--secondary'
			onClick={() => {onBtnClick(value)}}
			disabled={disabled}
		>
			{value}
		</button>
	)
}

export default Button;
