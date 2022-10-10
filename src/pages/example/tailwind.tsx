import type { NextPage } from 'next'
import Head from 'next/head'
const Tailwind: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tailwind CSS example</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-full flex flex-col justify-center items-center text-base tablet:text-2xl">
        <div className="">This page is using TailwindCSS to display few examples related to flexbox layout</div>
        <div className="flex flex-col justify-center items-center">
          <span className="text-green mt-2">Flex row</span>
          <div className="flex flex-row bg-white h-8 w-[60vw] max-w-[500px]">
            <Boxes/>
          </div>

          <span className="text-green mt-2">Flex row + Justify content(center)</span>
          <div className="flex flex-row bg-white h-8 w-[60vw] max-w-[500px] justify-center">
            <Boxes/>
          </div>

          <span className="text-green mt-2">Flex row + Justify content(flex-end || flex-start)</span>
          <div className="flex flex-row bg-white h-8 w-[60vw] max-w-[500px] justify-end">
            <Boxes/>
          </div>

          <span className="text-green mt-2">Flex row + Justify content(space-around)</span>
          <div className="flex flex-row bg-white h-8 w-[60vw] max-w-[500px] justify-around">
            <Boxes/>
          </div>

          <span className="text-green mt-2">Flex row + Justify content(space-between)</span>
          <div className="flex flex-row bg-white h-8 w-[60vw] max-w-[500px] justify-between">
            <Boxes/>
          </div>
        </div>
      </div>
    </div>
  )
}

function Boxes() {
  return (
    <>
      <div className="bg-dark-green m-[0.2em] w-8 flex items-center justify-center">1</div>
      <div className="bg-dark-green m-[0.2em] w-8 flex items-center justify-center">2</div>
      <div className="bg-dark-green m-[0.2em] w-8 flex items-center justify-center">3</div>
    </>
  )
}

export default Tailwind