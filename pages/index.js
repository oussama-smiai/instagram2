import Head from 'next/head'
import Header from "../components/Header"
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>this is the instagram 2.0 build</h1>
      {/* Header */}
      <Header />
      {/* Feed */}
      {/* Modal */}
    </div>
  )
}
