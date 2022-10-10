import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@styles/BuiltIn.module.css';

const BuiltIn: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Built-in module example</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div className={styles.title}>This page is using Css module to display few examples related to flexbox layout</div>
        <div className={styles.examples}>
          <span className={styles.exampleName}>Flex row</span>
          <div className={styles.flexBox}>
            <div className={styles.box}>1</div>
            <div className={styles.box}>2</div>
            <div className={styles.box}>3</div>
          </div>

          <span className={styles.exampleName}>Flex row + Justify content(center)</span>
          <div className={[styles.flexBox, styles.justifyCenter].join(" ")}>
            <div className={styles.box}>1</div>
            <div className={styles.box}>2</div>
            <div className={styles.box}>3</div>
          </div>

          <span className={styles.exampleName}>Flex row + Justify content(flex-end || flex-start)</span>
          <div className={[styles.flexBox, styles.justifyEnd].join(" ")}>
            <div className={styles.box}>1</div>
            <div className={styles.box}>2</div>
            <div className={styles.box}>3</div>
          </div>

          <span className={styles.exampleName}>Flex row + Justify content(space-around)</span>
          <div className={[styles.flexBox, styles.justifyAround].join(" ")}>
            <div className={styles.box}>1</div>
            <div className={styles.box}>2</div>
            <div className={styles.box}>3</div>
          </div>

          <span className={styles.exampleName}>Flex row + Justify content(space-between)</span>
          <div className={[styles.flexBox, styles.justifyBetween].join(" ")}>
            <div className={styles.box}>1</div>
            <div className={styles.box}>2</div>
            <div className={styles.box}>3</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuiltIn