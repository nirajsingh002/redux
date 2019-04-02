import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Posts extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.posts.map((post, i) => (
                        <li key={i}>{post.title}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired
}