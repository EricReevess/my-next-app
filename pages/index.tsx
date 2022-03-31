import type { NextPage } from 'next'
import cs from 'classnames';
import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.scss'
import { getSortedPostsData, PostData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

function Home({ allPostsData }: Record<string, any>): JSX.Element {
  console.log(allPostsData);

  return (
    // home => home={true} 
    <Layout home>
      {/* Keep the existing code here */}
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>4123412341234</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }: PostData) => {
            console.log(title);
            
            return (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            )
          })}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default Home
