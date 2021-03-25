import Head from 'next/head'
import Layout from '../components/Layout'
import Tweet from '../components/Tweet'

export default function Home() {
  return (
    <Layout>
      <Tweet
        name={'Hatice'}
        slug={'haticekocak'}
        datetime={new Date(2021, 25, 2)}
        text={'this is more than a tweet.'}
      />
      <Tweet
        name={'Hatice'}
        slug={'haticekocak'}
        datetime={new Date(2021, 25, 2)}
        text={'this is more than a tweet.'}
      />
      <Tweet
        name={'Hatice'}
        slug={'haticekocak'}
        datetime={new Date(2021, 25, 2)}
        text={'this is more than a tweet.'}
      />
      <Tweet
        name={'Hatice'}
        slug={'haticekocak'}
        datetime={new Date(2021, 25, 2)}
        text={'this is more than a tweet.'}
      />
    </Layout>
  )
}
