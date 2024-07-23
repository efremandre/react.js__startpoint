import React, {forwardRef} from 'react';
import MyButton from "../UI/button/MyButton.jsx";
import {useNavigate} from "react-router-dom";

const PostItem = forwardRef(
    ({post, index, posts, removePost}, ref) => {

        if (!posts.length) return

        const handleRemovePost = (id) => {
            const tempArr = posts.filter(post => {
                if (id !== post.id) return post
            })

            removePost(tempArr)
        }

        const route = useNavigate()

        return (
            <div ref={ref} id={post.id} className='post'>
                <div className="postContent">
                    <h3>{`${post.id}. ${post.title}`}</h3>
                    <p>{post.body}</p>
                </div>
                <MyButton
                    style={{marginRight: '15px'}}
                    onClick={() => {handleRemovePost(post.id)}}
                >
                    Удалить
                </MyButton>
                <MyButton
                    onClick={() => {route(`/posts/${post.id}`)}}
                >
                    Открыть
                </MyButton>
            </div>
        );
    }
);

export default PostItem;
