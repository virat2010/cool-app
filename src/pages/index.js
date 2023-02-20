import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Brand</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="navbar bg-primary">
        <Link href="/" className="text-white btn btn-ghost normal-case text-xl ml-52">
          <div className="avatar w-8 mr-1">
            <img src="favicon.ico" />
          </div> Brand</Link>
      </div>
      <div className="ml-96 mt-16">
      <div className="text-6xl font-bold leading-tight text-white"><span className="cool-text">Brand</span><br/>
      Next Generation <br />
      Some Field
      </div><br /><span className="font-semibold text-3xl max-w-[48px] break-words whitespace-pre-wrap">Get ready to look amazing with this template!</span></div>
    </>
  )
}
