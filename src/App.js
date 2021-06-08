import React from 'react';
import { API } from './lib/asyncAPI';
import ButtonsGroup from './components/ButtonsGroup';

API();

const App = () => {
	return (
		<React.Fragment>
			<ButtonsGroup />
		</React.Fragment>
	)
}

export default App;
