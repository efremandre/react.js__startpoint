import React, {useEffect, useState} from 'react'
import {useFetch} from "../hooks/useFetch.js";
import PostService from "../API/PostService.js";
import {getTotalCount} from "../utils/getTotalCount.jsx";
import {useButtonsPagination} from "../hooks/useButtonsPagination.js";
import {usePosts} from "../hooks/usePosts.js";
import PostList from "../components/PostList.jsx";
import MyModal from "../UI/mymodal/MyModal.jsx";
import PostAdd from "../components/PostAdd.jsx";
import MyButton from "../UI/button/MyButton.jsx";


const PostsPage = () => {
    const [posts, setPosts] = useState([])
    const [filters, setFilters] = useState({query: '', sort: ''})
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [totalCount, setTotalCount] = useState(0)
    const [limit] = useState(10)
    const [page, setPage] = useState(1)
    const [getPosts, isLoading, error] = useFetch(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalCount(getTotalCount(totalCount, limit))
    })

    const getButtonsPagination = useButtonsPagination(totalCount, page)

    const sortedAndSearchedPosts = usePosts(posts, filters.sort, filters.query)

    useEffect(() => {
        getPosts()
    }, [page])

    const getSorting = (sort) => {
        setFilters({...filters, sort: sort})
    }

    const getSearching = (ev) => {
        setFilters({...filters, query: ev.target.value})
    }

    const changePosts = (newArr) => {
        setPosts(newArr)
    }

    const addPosts = (newPost) => {
        let id = totalCount
        setPosts([...posts, {id: ++id, ...newPost}])
    }

    const removePost = (newArr) => {
        setPosts(newArr)
    }

    const handleSwitchPagePosts = (buttonNumber) => {
        setPage(buttonNumber)
    }

    return (
        <>
            <MyModal
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
            >
                <PostAdd
                    posts={posts}
                    addPosts={addPosts}
                    setModalIsOpen={setModalIsOpen}
                />
            </MyModal>

            <MyButton
                onClick={() => setModalIsOpen(true)}
            >
                Создать пост
            </MyButton>

            <PostList
                titlePostList={'Список постов'}
                posts={sortedAndSearchedPosts}
                removePost={removePost}
                changePosts={changePosts}
                filters={filters}
                setFilters={setFilters}
                getSorting={getSorting}
                getSearching={getSearching}
                isLoading={isLoading}
                error={error}
                getPosts={getPosts}
                getButtonsPagination={getButtonsPagination}
                limit={limit}
                page={page}
                handleSwitchPagePosts={handleSwitchPagePosts}
            />
        </>
    )
}

export default PostsPage
