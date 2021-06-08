export const getArrayLength = (asyncArr) => 
	new Promise((resolve) => {
		asyncArr.length((result) => {
			resolve(result);
		})
	});

export const getValueByIndex = (asyncArr, index) => 
	new Promise((resolve) => {
		asyncArr.get(index, (result) => {
			resolve(result);
		})
	});