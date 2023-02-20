import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextNProgress height={6} stopDelayMs={600} options={{ easing: 'ease', speed: 200 }} />
      <Component {...pageProps} />
    </>)
}
