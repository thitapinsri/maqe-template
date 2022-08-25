import React from 'react'
import Post from './Post'

const PostList = ({ posts, authors, timezone }) => {
    const getAuthor = (post) => {
        return authors.filter(author => author.id == post.author_id)[0]
    }

    return (
        <div className="post-list">
            {
                posts.map(post => {
                    return <Post
                        post={post}
                        key={post.id}
                        author={getAuthor(post)}
                        timezone={timezone}
                    />
                })
            }
        </div>
    )
}

export default PostList