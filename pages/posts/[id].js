import React from 'react';
import Head from 'next/head';

import Layout from '../../components/layout';
import Date from '../../components/date';
import { getPostData, getAllPostIds } from '../../utils/posts';

import utilStyles from '../../styles/utils.module.css';

export const getStaticPaths = async () => {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const postData = await getPostData(context.params.id);
	return {
		props: {
			postData,
		},
	};
};

const Post = ({ postData }) => {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article>
				<h1 className={utilStyles.headingXl}>{postData.title}</h1>
				<div className={utilStyles.lightText}>
					<Date dateString={postData.date} />
				</div>

				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</article>
		</Layout>
	);
};

export default Post;
