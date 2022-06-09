import React , {useState , useEffect} from 'react'
import { useRouter } from 'next/router'
import Head from "next/head"
import Navbar from '../../../components/navbar';
import styles from "../../../styles/post.module.css"

export default function Post({data}) {
    const [state, setstate] = useState(data); 
  return (
    <div>
      <Head>
      <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="Description"  content={"Blog Post : "+state.description}/>
         <meta property="og:image" content={state.imageUrl}/>
         <meta property="og:image:type" content="image/png"/>
         <meta property="og:image:width" content="436"/>
         <meta property="og:image:height" content="228"/>
         <meta property="og:description"  content={"Blog Post : "+state.description}/>
        <title>{state.post_title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div  className={styles.bannerContainer}  >
      <div className={styles.banner} style={{ backgroundImage : `url(${state.imageUrl})`}}></div>
      </div>
      <div  className={styles.blog}>
      <h1   style={{ marginTop : 60}}>{state.post_title}</h1>
      <p  className={styles.published} ><span>published at - </span>{state.reg_date}</p>
       <div  dangerouslySetInnerHTML={{__html: state.articale}}>
       </div>
      </div>
 </div>
  )
}


export async function getServerSideProps({params}) {

    // Fetch data from external API
    const res = await fetch(`https://hunterblog.vercel.app/api/post/`+params.id)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }