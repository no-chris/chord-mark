const insertAt = (insertInto, toInsert, at) => {
	if (at > insertInto.length) {
		insertInto += ' '.repeat(at - insertInto.length);
	}
	return insertInto.slice(0, at) + toInsert + insertInto.slice(at);
};

export default insertAt;
