import './Post.css';

const Post = (props) => {
    const {post} = props;
    
    return (
        <article 
        className='main-child'
        key={post.id}
         >
         {post.name}
        </article>
    )
}

export default Post;