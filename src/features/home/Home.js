import './Home.css';
import Post from '../post/Post';

const Home = () => {
    const posts = [ {
        id: 1,
        name: 'Mama 1'
    },  {
        id: 2,
        name: 'Mama 2'
    }, {
        id: 3,
        name: 'Mama 3'
    }, {
        id: 4,
        name: 'Mama 4'
    }];

    return (
        <div className='main-container'>
        {posts.map((post, index) => (
            <Post 
              className='main-child'
              key={post.id}
              post={post}
            />
          ))}
        </div>
      );
}

export default Home;