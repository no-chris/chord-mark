const trimArray = (array, fn) => {
	while (array.length && fn(array[0])) {
		array.shift();
	}
	while (array.length && fn(array[array.length - 1])) {
		array.pop();
	}
	return array;
};

export default trimArray;
