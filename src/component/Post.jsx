const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23'
}

const Post = ({ post, author, timezone }) => {
    const convertedDate = new Date(new Date(post.created_at))
        .toLocaleString("en-US", {
            ...options,
            timeZone: timezone || "Asia/Bangkok"
        }).replace(' at', ',')

    return (
        <div className='post' style={{ backgroundColor: post.id % 2 == 0 ? '#ccecff' : 'white' }}>
            <div className='head'>
                <img src={author.avatar_url} alt='avatar' />
                <p>
                    <span>{author.name} </span>
                    posted on {convertedDate}
                </p>
            </div>
            <div className='body'>
                <img src={post.image_url} />
                <div className='text'>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            </div>
        </div>
    )
}

export default Post