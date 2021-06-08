import { 
	findIsLess, 
	findIsEqual, 
	subtractValues, 
	getArrayLength, 
	getValueByIndex, 
} from "../helper/apiRequests";

export const calculateMaxValue = async(asyncArr, callback) => {
	let arrLength = await getArrayLength(asyncArr);
	let max = -Infinity;
	const isEqual = await findIsEqual(arrLength, 0);

	if (isEqual) {
		return callback(0);
	};

	while(arrLength) {
		arrLength = await subtractValues(arrLength, 1)
		const value = await getValueByIndex(asyncArr, arrLength);
		
		if(await findIsLess(max, value)) {
			max = value;
		}
		
	}
	callback(max);
};