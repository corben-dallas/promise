import { getArrayLength, getValueByIndex } from "../helper/apiRequests";

export const calculateMaxValue = async(asyncArr, callback) => {
	let arrLength = await getArrayLength(asyncArr);
	let max = -Infinity;

	if (arrLength === 0) {
		return callback(0);
	};

	while(arrLength--) {
		const value = await getValueByIndex(asyncArr, arrLength);
		if(value > max) {
			max = value;
		}
	}
	callback(max);
};