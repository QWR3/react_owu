import React, {Component} from 'react';

class Post extends Component {
    render() {
        let {post , ChoosenOne} =this.props
        let title =post.title
        return (
            <div>
            {post.id}-{post.title}
            <button onClick={()=>ChoosenOne(post.id)}> вибрати</button>
            </div>
        );
    }
}

export default  Post;