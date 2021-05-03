import { GetStaticProps } from 'next';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';
import Head from 'next/head';
import { FiCalendar, FiUser } from 'react-icons/fi'

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home() {
  return (
    <>
        <Head>
          <title>Home | Ig.news</title>
        </Head>
        <main className={styles.container}>
          <div className={styles.logo}>
            <img src="/images/logo.svg" alt="logo"/>
          </div>
          <ul className={styles.posts}>
            <li>
              <strong>Como utilizar Hooks</strong>
              <p>Pensando em sincronização</p>
              <div>
                <div>
                  <FiCalendar />
                  19 abr 2021
                </div>
                <div>
                  <FiUser />
                  Danilo Vieira
                </div>
              </div>
            </li>
            <li>
              <strong>Como utilizar Hooks</strong>
              <p>Pensando em sincronização</p>
              <div>
                <div>
                  <FiCalendar />
                  19 abr 2021
                </div>
                <div>
                  <FiUser />
                  Danilo Vieira
                </div>
              </div>
            </li>
            <li>
              <strong>Como utilizar Hooks</strong>
              <p>Pensando em sincronização</p>
              <div>
                <div>
                  <FiCalendar />
                  19 abr 2021
                </div>
                <div>
                  <FiUser />
                  Danilo Vieira
                </div>
              </div>
            </li>
          </ul>
        </main>


    </>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
