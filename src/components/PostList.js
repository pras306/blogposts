import React from 'react';
import { connect } from 'react-redux';

import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component{
    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className='item' key={post.id}>
                    <i className='large user middle aligned icon'></i>
                    <div className='content'>
                        <h3 className='header'>{post.title}</h3>
                        <div className='description'>{post.body}</div>
                        <div><UserHeader userId={post.userId} /></div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return(
            <div className='ui relaxed divided list'>
                {this.renderList()}
            </div>
        );
    };
};

const mapStateToProps = state => {
    return { posts: state.posts };
};

export default connect(
    mapStateToProps, 
    { fetchPostsAndUsers }    
)(PostList);