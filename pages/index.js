import Head from 'next/head'
import Layout from './components/Layout'
import Content from './components/Content'
export default function Home() {
  return (
    
    <>
    <div className="bg-gradient-to-r from-black to-gray-800">
      <Head>
        <title>Content-WatchDog</title>
        <meta name="description" content="Generated by create next app"/>
      </Head>
      <main className='flex items-center text-white w-full min-h-screen'>
        <Layout>
          <div className='text-center'>
            <span className='title-word title-word-1 text-8xl font-bold'>Content-</span>
            <span className='title-word title-word-2 text-8xl font-bold'>WatchDog</span>
           
            <p className='mt-4 text-xl underline'>Safeguard Your Content with Content Watchdog API - Keeping NSFW in Check!</p>
            
          </div>
        <Content/>  
        </Layout>
      
      </main>
</div>
    </>
  )
}
