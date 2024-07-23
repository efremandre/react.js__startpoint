import React, {createRef} from 'react';
import PostItem from "./PostItem.jsx";
import Filters from "./Filters.jsx";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import MyButton from "../UI/button/MyButton.jsx";
import Pagination from "../UI/pagination/Pagination.jsx";

const PostList = ({
                      titlePostList,
                      posts,
                      removePost,
                      changePosts,
                      filters,
                      setFilters,
                      getSearching,
                      getSorting,
                      isLoadingPosts,
                      error,
                      getPosts,
                      getButtonsPagination,
                      // limit,
                      page,
                      handleSwitchPagePosts
                  }) => {

    return (
        (error) ?
        <div>
            <h3 style={{textAlign: 'center'}}>
                Что-то пошло не так и посты не загрузились
                <br/>
                {error}
            </h3>
            <MyButton onClick={getPosts}>
                Попробовать еще раз
            </MyButton>
        </div> :
        <div className='postListWrapper'>
            <Filters
                posts={posts}
                changePosts={changePosts}
                filters={filters}
                setFilters={setFilters}
                getSorting={getSorting}
                getSearching={getSearching}
            />

            <h2 style={{textAlign: 'center'}}>
                { (isLoadingPosts) ? 'Идет загрузка...' :
                    (posts.length !== 0) ?
                    titlePostList :
                    'Постов нет...'
                }
            </h2>

            <TransitionGroup>
                {posts.map((post, index) => {
                    const nodeRef = createRef()
                    return (
                        <CSSTransition
                            nodeRef={nodeRef}
                            key={post.id}
                            timeout={500}
                            classNames="postWrapper"
                        >
                            <PostItem
                                ref={nodeRef}
                                index={index}
                                post={post}
                                posts={posts}
                                removePost={removePost}
                                changePosts={changePosts}
                            />
                        </CSSTransition>
                    )
                })}
            </TransitionGroup>

            <Pagination
                buttons={getButtonsPagination}
                page={page}
                handleSwitchPagePosts={handleSwitchPagePosts}
            />
        </div>
    );
};

export default PostList;
