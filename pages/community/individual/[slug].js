import fs from 'fs'
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'
import Head from 'next/head'

export default function Blog({ frontmatter, markdown}) {
  return (
    <div>
      <Head>
        <title>Demo Blog | {frontmatter.title}</title>
      </Head>
      <hr />
      
     <div className='post__slug'>
      <div className='post__slug__container'>
      <img className='user__logo' src={frontmatter.logo}></img>
      <h1 className='post__title'>{frontmatter.title}</h1>
      <div className='user__category__set'>
      <p className='user__category'>{frontmatter.category}</p>
      <p className='user__category'>{frontmatter.title}</p>
      </div>
      <img className='post__img' src={frontmatter.thumbnail}></img>
      <ReactMarkdown className='post__text'>
        {markdown}
      </ReactMarkdown>

        <div className='user__personal__info'>
          <h2 className='firmname'>{frontmatter.firmname}</h2>
          <p className='oibnum'>OIB:{frontmatter.oibnum}</p>
          <p className='oibnum'>{frontmatter.adress}</p>

          <div className='social__medias'>
        <a target="blank" rel="noreferrer" href='/' className='website'>www.website.com</a>
        <a target="blank" rel='noreferrer' href={`${frontmatter.facebook}`}><img className='social__media__logos' src='https://cdn-icons-png.flaticon.com/512/124/124010.png'></img></a>
        <a target="blank" rel='noreferrer' href={`${frontmatter.linkedin}`}><img className='social__media__logos' src='https://pbs.twimg.com/profile_images/1661161645857710081/6WtDIesg_400x400.png'></img></a>
        <a target="blank" rel='noreferrer' href={`${frontmatter.twitter}`}><img className='social__media__logos' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/292px-Logo_of_Twitter.svg.png'></img></a>

      </div>

        </div>
      
      </div>
     </div>
    </div>
  )
}



export async function getStaticProps({ params: { slug } }) {
  const fileContent = matter(fs.readFileSync(`./content/users/${slug}.md`, 'utf8'))
  let frontmatter = fileContent.data
  const markdown = fileContent.content

  return {
    props: { frontmatter, markdown }
  }
}

export async function getStaticPaths() {
  const filesInProjects = fs.readdirSync('./content/users')

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