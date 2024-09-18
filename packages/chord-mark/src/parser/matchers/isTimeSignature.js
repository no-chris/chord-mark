const allowedTimeSignatures = [
	'1/2',
	'2/2',
	'3/2',
	'4/2',
	'1/4',
	'2/4',
	'3/4',
	'4/4',
	'5/4',
	'6/4',
	'7/4',
	'9/4',
	'10/4',
	'3/8',
	'4/8',
	'5/8',
	'6/8',
	'7/8',
	'9/8',
	'12/8',
];

export default function isTimeSignature(string) {
	return allowedTimeSignatures.includes(string);
}
