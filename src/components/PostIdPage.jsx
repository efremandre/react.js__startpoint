import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {useFetch} from "../hooks/useFetch.js";
import PostService from "../API/PostService.js";
import {getTotalCount} from "../utils/getTotalCount.jsx";
import FetchPostId from "../API/PostService.js";
import MyButton from "../UI/button/MyButton.jsx";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [getPost, isLoading, error] = useFetch(async () => {
        const response = await FetchPostId.getById(params.id)
        setPost(response.data)
    })

    useEffect(() => {
        getPost()
    }, [])

    return (
        <>
            {
                isLoading
                    ? <h1>Загрузка...</h1>
                    : <div>
                        <div>
                            <h1>{post.id}. {post.title}</h1>
                        </div>
                        <div>
                            <p>{post.body}</p>
                        </div>
                    <MyButton>
                        <NavLink
                            to={'/posts'}
                            style={{color: '#000', textDecoration: 'none'}}
                        >
                            Вернуться к списку постов
                        </NavLink>
                    </MyButton>
                    </div>
            }
        </>

    );
};

export default PostIdPage;
