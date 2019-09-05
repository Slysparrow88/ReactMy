import React from 'react';

function Post(props) {

   const {
    title, 
    user, 
    data_create, 
    data_update, 
    description, 
    likes,
} = props.post

    return (
        <div className="posts">
            <input type="checkbox"/>
           <i>{data_update}</i>
           <span>{likes}</span>
           <h1>{title}</h1>
           <p>{description}</p>
           <b>{user.name}</b>
        </div>
    );
}

export default Post;
