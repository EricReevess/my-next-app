import Head from 'next/head';
import Layout from '../../components/layout';
import Date from '../../components/date';
import { getAllPostIds, getPostData, PostData } from '../../lib/posts'
import { GetStaticPaths, GetStaticPathsResult, GetStaticPropsResult } from 'next';

type Props = {
  postData: PostData;
}

export default function Post({ postData }: Props): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        {postData.id}
        <br />
        <Date dateString={postData.date} />
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  // Return a list of possible value for id
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(
  { params }: { params: Record<string, string> }
  ): Promise<GetStaticPropsResult<Record<string, any>>> {
  return getPostData(params.id).then((postData) => {
    return {
      props: {
        postData
      }
    }
  })
}

