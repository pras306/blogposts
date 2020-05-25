import React from 'react';

import PostList from './PostList';

class App extends React.Component{

    render(){
        return(
            <div className='ui container segment'>
                <PostList />
            </div>
        );
    };
};


export default App;