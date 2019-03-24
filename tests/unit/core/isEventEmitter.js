export default (jExpect, object) => {
	jExpect(object).toBeInstanceOf(Object);
	jExpect(object.emit).toBeInstanceOf(Function);
	jExpect(object.on).toBeInstanceOf(Function);
	jExpect(object.off).toBeInstanceOf(Function);
};
