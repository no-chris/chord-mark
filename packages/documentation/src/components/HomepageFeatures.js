import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

import { CM } from './shortcuts';
const FeatureList = [
	{
		title: 'Easy to Write',
		description: (
			<>
				<CM /> syntax is short and straight to the point. Write complex
				songs transcriptions in a matter of minutes!
			</>
		),
	},
	{
		title: 'Complete and accurate',
		description: (
			<>
				<CM /> is the only chord chart format that has native support
				for rhythmic information. Accurately play along simple or
				complex songs, whether you heard them before or not!
			</>
		),
	},
	{
		title: 'For everyone',
		description: (
			<>
				<CM /> is useful to all musicians, including the ones that do
				not sing. Render nicely formatted chord grids in a single click!
			</>
		),
	},
];

function Feature({ title, description }) {
	return (
		<div className={clsx('col col--4')}>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
