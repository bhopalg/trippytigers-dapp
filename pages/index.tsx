import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Image from "next/image";
import {useState} from "react";

const Home: NextPage = () => {
    const mintPrice = 0.1;
    const [quantity, setQuantity] = useState(1);


    return (
    <div>
      <Head>
        <title>TrippyTigers</title>
        <meta name="description" content="TrippyTigers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles['mint-page-main']} flex justify-center items-center`}>
          <div className={styles['nft-table-container']}>
              <Image src={'/images/nft-table.svg'} alt={'nft-table'} layout='fill' objectFit='contain'/>

              <div className={`${styles['content-container']}`}>
                  <h1 className={`${styles['content-title']} text-white text-center`}>How many NFTs do you want to mint?</h1>
                  <div className={`${styles['quantity-container']} mx-auto px-4 sm:px-6 lg:px-8`}>
                      <ul role={'list'} className={'flex flex-row'}>
                          {[1,2,3].map((li: number) => (
                              <li key={li} className={'basis-full cursor-pointer'} onClick={() => setQuantity(li)}>
                                  <div className={`${styles['quantity-box']}`}>
                                      <img src={'/images/nft-radio-btn.svg'} className={`${styles['nft-radio-image']} w-full`}/>
                                      <p className={`${styles['quantity']} ${quantity === li ? styles['selected-quantity'] : ''}`}>{li}</p>
                                  </div>
                              </li>
                          ))}
                      </ul>
                      <ul role={'list'} className={'flex flex-row mt-5'}>
                          {[4,5].map((li: number) => (
                              <li key={li} className={'basis-full cursor-pointer'} onClick={() => setQuantity(li)}>
                                  <div className={`${styles['quantity-box']}`}>
                                      <img src={'/images/nft-radio-btn.svg'} className={`${styles['nft-radio-image']} w-full`}/>
                                      <p className={`${styles['quantity']} ${quantity === li ? styles['selected-quantity'] : ''}`}>{li}</p>
                                  </div>
                              </li>
                          ))}
                      </ul>
                  </div>
                  <div className={`${styles['price-container']} mx-auto px-4 sm:px-6 lg:px-8`}>
                      <div className={'flex flex-row justify-center mt-8 gap-10 xl:gap-24'}>
                          <h2 className={styles['price']}>PRICE:</h2>
                          <h2 className={styles['total']}>{mintPrice * quantity}</h2>
                          <h2 className={styles['blockchain']}>ETH</h2>
                      </div>
                  </div>
                  <div className={`${styles['price-container']} mx-auto px-4 sm:px-6 lg:px-8 flex justify-center pt-5`}>
                      <img src={'/images/nft-mint-btn.svg'} alt={'mint-btn'} className={styles['mint-btn']}/>
                  </div>
              </div>
          </div>
      </main>

    </div>
  )
}

export default Home
