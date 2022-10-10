import type { NextPage } from 'next'
import Head from 'next/head'
import Card from '@components/card';

const Home: NextPage = () => {
  const examples = [
    {
      title: 'Built in CSS',
      detail: 'Component level CSS example',
      link: '/example/built-in'
    },
    {
      title: 'Tailwind',
      detail: 'Check how tailwind is working with this page',
      link: '/example/tailwind'
    },
    {
      title: 'API call example',
      detail: 'Basics of Next Js is written here',
      link: '/example/api'
    },
    {
      title: 'Dynamic Routing example',
      detail: 'How dynamic and Static route works',
      link: '/example/route'
    }
  ];
  return (
    <div>
      <Head>
        <title>Next applicaton example with Tailwind and Ts</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-screen flex flex-col">
        <div className="w-full flex align-middle flex-wrap justify-center mt-4">
          {
            examples.map((example) => (
              <Card
                title={example.title}
                detail={example.detail}
                link={example.link}
                key={example.title}
              />
            ))
          }
        </div>
      </main>
    </div>
  )
}

export default Home
