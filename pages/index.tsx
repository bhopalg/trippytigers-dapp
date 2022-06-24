import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Image from "next/image";

const Home: NextPage = () => {



    return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles['mint-page-main']} flex justify-center items-center`}>
          <div className={styles['nft-table-container']}>
              <Image src={'/images/nft-table.svg'} alt={'nft-table'} layout='fill' objectFit='contain'/>

              <div className={`${styles['content-container']}`}>
                  <h1 className={`${styles['content-title']} text-white text-center`}>How many NFTs do you want to mint?</h1>
                  <div className={`${styles['quantity-container']} mx-auto px-4 sm:px-6 lg:px-8`}>
                      <ul role={'list'} className={'flex flex-col xl:flex-row'}>
                          {[1,2,3].map((li: number) => (
                              <li key={li} className={'basis-full'}>
                                  <div className={`${styles['quantity-box']}`}>
                                      <img src={'/images/nft-radio-btn.svg'} className={`${styles['nft-radio-image']} w-full`}/>
                                        <p className={styles['quantity']}>{li}</p>
                                  </div>
                              </li>
                          ))}
                      </ul>
                      <ul role={'list'} className={'flex flex-col xl:flex-row  mt-5'}>
                          {[4,5].map((li: number) => (
                              <li key={li} className={'basis-full'}>
                                  <div className={`${styles['quantity-box']}`}>
                                      <img src={'/images/nft-radio-btn.svg'} className={`${styles['nft-radio-image']} w-full`}/>
                                      <p className={styles['quantity']}>{li}</p>
                                  </div>
                              </li>
                          ))}
                      </ul>
                  </div>
                  <div className={`${styles['price-container']} mx-auto px-4 sm:px-6 lg:px-8`}>
                      <div className={'flex flex-row justify-center mt-8 gap-24'}>
                          <h2 className={styles['price']}>PRICE:</h2>
                          <h2 className={styles['total']}>X</h2>
                          <h2 className={styles['blockchain']}>ETH</h2>
                      </div>
                  </div>
              </div>
          </div>
      </main>

    </div>
  )
}

export default Home
