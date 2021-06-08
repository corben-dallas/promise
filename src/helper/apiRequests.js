export const getArrayLength = (asyncArr) => 
	new Promise((resolve) => {
		asyncArr.length((result) => {
			resolve(result);
		});
	});

export const getValueByIndex = (asyncArr, index) => 
	new Promise((resolve) => {
		asyncArr.get(index, (result) => {
			resolve(result);
		});
	});

export const findIsEqual = (a, b) => {
	const { equal } = window.Homework;

	return new Promise((resolve) => {
		equal(a, b, (result) => {
			resolve(result);
		});
	});
};

export const subtractValues = (a, b) => {
	const { subtract } = window.Homework;

	return new Promise((resolve) => {
		subtract(a, b, (result) => {
			resolve(result);
		});
	});
};

export const findIsLess = (a, b) => {
	const { less } = window.Homework;

	return new Promise((resolve) => {
		less(a, b, (result) => {
			resolve(result);
		});
	});
};
