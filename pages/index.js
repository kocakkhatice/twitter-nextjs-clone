import Head from 'next/head'
import Layout from '../components/Layout'
import Tweet from '../components/Tweet'
import fetcher from '../lib/fetch'
import useSWR from 'swr'
import Loading from '../components/Loading'
import style from './styles.module.css'
import TweetBox from '../components/TweetBox'

export default function Home() {
  //loading'i kullanmak için /api/tweets olarak değiştirilebilir.
  // const { data, error } = useSWR('/api/tweet', fetcher)

  const { data, error } = useSWR(
    'https://twitter-nextjs-f18f5-default-rtdb.firebaseio.com/user.json',
    fetcher
  )
  return (
    <Layout>
      {!data && (
        <div className={style.loading}>
          <Loading />
        </div>
      )}
      {data?.map((u) => {
        return (
          <Tweet
            key={u.name}
            name={u.name}
            screen_name={u.screen_name}
            profile_image_url_https={u.profile_image_url_https}
            created_at={u.tweet.created_at}
            retweet_count={u.tweet.retweet_count}
            retweeted={u.tweet.retweeted}
            favorite_count={u.tweet.favorite_count}
            favorited={u.tweet.favorited}
            text={u.tweet.text}
          />
        )
      })}
    </Layout>
  )
}
