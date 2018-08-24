import React from 'react';
import Photo from './Photo'

const Single = React.createClass({
    render() {
        // index of the post
        const index = this.props.posts.findIndex((post) => {
            return post.code === this.props.params.postId;
        });
        const post = this.props.posts[index];
        console.log(index);
        console.log(post);
        // get the post
        return (
            <div className="single-photo">
                <Photo index={index} post={post} {...this.props}/>
            </div>
        )
    }
});

export default Single;