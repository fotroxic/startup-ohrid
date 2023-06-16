import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Home({ users }) {
  return (
  <div className={styles['container']}>
    <Head>
      <title>Demo Blog</title>
    </Head>
    <h1 className={styles['header']}>Users</h1>
    <p className={styles['subtitle']}>All users</p>
    <ul className={styles['blog-list']}>
      {users.map(user => (
        <li key={user.slug}>
          <Link href={`/users/${user.slug}`}>
            <a>{user.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>)
}

export async function getStaticProps() {
  // List of files in blgos folder
  const filesInBlogs = fs.readdirSync('./content/users')

  // Get the front matter and slug (the filename without .md) of all files
  const users = filesInBlogs.map(filename => {
    const file = fs.readFileSync(`./content/users/${filename}`, 'utf8')
    const matterData = matter(file)

    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf('.'))
    }
  })

  return {
    props: {
      users
    }
  }

}