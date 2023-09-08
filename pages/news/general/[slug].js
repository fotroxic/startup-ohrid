import fs from 'fs'
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'
import Head from 'next/head'
import Link from 'next/link'

export default function Blog({ frontmatter, markdown}) {
  return (
    <div>
      <Head>
        <title>News | {frontmatter.title}</title>
      </Head>
      <hr />
      
     <div className='post__slug'>
      <div className='post__slug__container'>
    <Link href={`/news/${frontmatter.category}`}>
    <h3 className='news__text__details'>{frontmatter.category}</h3>
    </Link>
      <h1 className='post__title'>{frontmatter.title}</h1>
      <div className='user__info__news'>
      <img className='user__logo' src={frontmatter.userlogo}></img>
      <h3 className='user__news__username'>{frontmatter.username}</h3>
      </div>
      <img className='post__img' src={frontmatter.thumbnail}></img>
      <ReactMarkdown className='post__text'>
        {markdown}
      </ReactMarkdown>
      <img className='post__img' src={frontmatter.secondimage}></img>
      
      <ReactMarkdown className='post__text'>
        {frontmatter.secondtext}
      </ReactMarkdown>

      <div className='social__medias'>
        <a target="_blank" href={`/${frontmatter.facebook}`}><img className='social__media__logos' src='https://cdn-icons-png.flaticon.com/512/124/124010.png'></img></a>
        <a target="_blank" href={`/${frontmatter.linkedin}`}><img className='social__media__logos' src='https://pbs.twimg.com/profile_images/1661161645857710081/6WtDIesg_400x400.png'></img></a>
        <a target="_blank" href={`/${frontmatter.twitter}`}><img className='social__media__logos' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/292px-Logo_of_Twitter.svg.png'></img></a>

      </div>

      <div className='about__author'>
        <div className='author__image'>
        <img className='user__logo' src={frontmatter.userlogo}></img>
        </div>
        <div className='author__details'>
              <p>About author:</p>
              <h3>{frontmatter.username}</h3>
              <p>We are the first formal association of Split’s tech community which includes companies, associations, institutions, meetups, and individuals.</p>
        </div>
      </div>
      </div>
     </div>
    </div>
  )
}



export async function getStaticProps({ params: { slug } }) {
  const fileContent = matter(fs.readFileSync(`./content/news/${slug}.md`, 'utf8'))
  let frontmatter = fileContent.data
  const markdown = fileContent.content

  return {
    props: { frontmatter, markdown }
  }
}

export async function getStaticPaths() {
  const filesInProjects = fs.readdirSync('./content/news')

  // Getting the filenames excluding .md extension
  // and returning an array containing slug (the filename) as params for every route
  // It looks like this
  // paths = [
  //   { params: { slug: 'my-first-blog' }},
  //   { params: { slug: 'how-to-train-a-dragon' }},
  //   { params: { slug: 'how-to-catch-a-pokemon' }},
  // ]
  const paths = filesInProjects.map(file => {
    const filename = file.slice(0, file.indexOf('.'))
    return { params: { slug: filename }}
  })

  return {
    paths,
    fallback: false // This shows a 404 page if the page is not found
  }
}