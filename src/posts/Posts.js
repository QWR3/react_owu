import React, {Component} from 'react';
import Post from "./post/Post";

class Posts extends Component {
    state ={posts:[] ,choosen:null}
    choosenOne=(id)=>{
        let postsF =this.state.posts
        let find =postsF.find(value => value.id ===id)
        this.setState({choosen:find})
    }

    render() {
        let {posts , choosen}=this.state

        return (
            <div>
                {
                    // console.log(this.state)
                    posts.map((value, index) =>
                        <Post post={value} ChoosenOne={this.choosenOne} key={index}/>
                     )
                }
                {
                    choosen &&<h2>{choosen.id}-{choosen.title}</h2>
                }
            </div>
        );
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => {
                return value.json()
            })
            .then(posts => {
                console.log(posts);
                this.setState({posts})
            })
    }
}

export default Posts;