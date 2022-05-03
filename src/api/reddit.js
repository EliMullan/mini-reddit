export const getReddits = async (subreddit) => {   
    try{
        const response = await fetch(`https://www.reddit.com/${subreddit}.json`);
        if(response.ok){
        const json = await response.json();
        return json.data.children.map((post) => post.data)
      }
    }
    catch(error){
      console.log(error)
    }
  }

  export const getSubreddits = async () => {
    const response = await fetch(`https://www.reddit.com/subreddits.json`);
    const json = await response.json();
  
    return json.data.children.map((subreddit) => subreddit.data);
  };
  
  export const getPostComments = async (permalink) => {
    const response = await fetch(`https://www.reddit.com/${permalink}.json`);
    const json = await response.json();
  
    return json[1].data.children.map((subreddit) => subreddit.data);
  };