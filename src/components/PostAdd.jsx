import React, {useState} from 'react';
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

const PostAdd = ({addPosts, setModalIsOpen}) => {

    const [post, setPost] = useState({title: '', body: ''})

    const changeInputTitle = (ev) => {
        let value = ev.target.value
        setPost({...post, title: value})
    }

    const changeDescriptionTitle = (ev) => {
        let value = ev.target.value
        setPost({...post, body: value})
    }

    const handleAddPost = (e) => {
        e.preventDefault()
        if (!post.title || !post.body) {
            setPost({...post, isEmpty: true})
            return
        }

        if (post.title && post.body) {
            addPosts(post)
            setPost({title: '', body: ''})
            setModalIsOpen(false)
        }

    }

    return (
        <>
            <h2 style={{textAlign: 'center'}}>Добавить пост</h2>
            <form>
                <div className='postAddWrapper'>
                    <MyInput
                        style={{borderColor: (post.isEmpty) ? 'red' : ''}}
                        onChange={(ev) => {changeInputTitle(ev)}}
                        value={post.title}
                        type='text'
                        placeholder={(post.isEmpty) ? 'Нет заголовка' : 'Заголовок...'}
                    />
                    <MyInput
                        style={{borderColor: (post.isEmpty) ? 'red' : ''}}
                        onChange={(ev) => {changeDescriptionTitle(ev)}}
                        value={post.body}
                        type='text'
                        placeholder={(post.isEmpty) ? 'Надо что-то написать тут' : 'Заголовок...'}
                    />
                    <MyButton
                        onClick={handleAddPost}>
                            Отправить
                    </MyButton>
                </div>
            </form>
        </>
    );
};

export default PostAdd;
