import { useEffect, useState } from 'react'
import PostList from './component/PostList'
// import axios from "axios";
const authorsLink = 'http://maqe.github.io/json/authors.json'
const postsLink = 'http://maqe.github.io/json/posts.json'

const App = () => {
  const [posts, setPosts] = useState()
  const [authors, setAuthors] = useState()
  const [timezone, setTimezone] = useState('Asia/Bangkok')

  //  get authors
  const getAuthors = async () => {
    // const response = await fetch(authorsLink)
    // const data = await response.json()
    // console.log(data)
    const response = await axios.get(authorsLink)
    setAuthors(response.data)
  };

  //  get posts
  const getPosts = async () => {
    // const response = await fetch(postsLink)
    // const data = await response.json()
    // console.log(data)
    const response = await axios.get(postsLink)
    setPosts(response.data)
  };

  useEffect(() => {
    getAuthors()
    getPosts()
  }, [])

  return (
    <div className="App">
      <h1>MAQE Forum</h1>
      <p>Your curent timezone is: {timezone}</p>
      {
        posts &&
        <PostList posts={posts} authors={authors} timezone={timezone}/>
      }
    </div>
  )
}

export default App
