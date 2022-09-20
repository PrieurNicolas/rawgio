import Head from 'next/head'
import Footer from '../Components/Footer'
import Jeux from '../Components/Jeux'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
        <Jeux/>
        </div>

      </main>

      <Footer/>
    </div>
  )
}
