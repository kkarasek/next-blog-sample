import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';

import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

import utilStyles from '../styles/utils.module.css';

export const getStaticProps: GetStaticProps = async () => {
	const allPostsData = getSortedPostsData();

	return {
		props: { allPostsData },
	};
};

const Home = ({ allPostsData }) => {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					✨ Hey, I'm Kuba and I'm a fullstack developer with creative flair!
				</p>
				<p>🌱 I'm currently learning how to use Next with Typescript</p>
			</section>

			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ date, id, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>{title}</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
};

export default Home;
