import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

import { CM } from './shortcuts';

import svgChart from '../../static/img/chart.svg';
import svgMetronome from '../../static/img/metronome.svg';
import svgBand from '../../static/img/band.svg';

const FeatureList = [
	{
		title: 'Easy to Write',
		Svg: svgChart,
		description: (
			<>
				<CM /> syntax is short, straight to the point, and yet powerful.
				Write complex songs transcriptions in a matter of minutes!
			</>
		),
	},
	{
		title: 'Complete and accurate',
		Svg: svgMetronome,
		description: (
			<>
				<CM /> is the only chord chart format that has native support
				for rhythmic information. Play simple or complex songs, whether
				you have heard them before or not!
			</>
		),
	},
	{
		title: 'For everyone',
		Svg: svgBand,
		description: (
			<>
				<CM /> is useful to all musicians, including the ones that do
				not sing. Render nicely formatted chord grids in a single click!
			</>
		),
	},
];

function Feature({ Svg, title, description }) {
	return (
		<div className={clsx('col col--4')}>
			<div className="text--center">
				<Svg className={styles.featureSvg} alt={title} />
			</div>
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
