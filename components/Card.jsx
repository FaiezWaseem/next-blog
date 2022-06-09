import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
const Card = ({post}) =>{
    let slug = post.post_title;
    slug = slug.replaceAll(/\?/ig , " ");
    slug = slug.replaceAll(/\s/ig , "-");
     return (
       <Link  href={"/post/"+post.id+"/"+slug}>
       <a className={styles.card}>
       <Image unoptimized  src={post.imageUrl} alt={slug} width={"300"} height={200} />
         <h2>{post.post_title.length > 60 ? post.title.substring(0 , 60) : post.post_title } &rarr;</h2>
         <p>{post.description.length > 80 ? post.description.substring(0 , 80) + "..."  : post.description}.   </p>
       </a>
       </Link>
     )
   }

   export default Card