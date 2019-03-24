const allowedTimeSignatures = [
	'2/2', '3/2',
	'3/4', '4/4', '5/4',
	'3/8', '6/8', '9/8', '12/8'
];

export default function isTimeSignatureString(string) {
	return allowedTimeSignatures.includes(string);
}