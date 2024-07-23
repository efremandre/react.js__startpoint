import React from 'react';
import s from './Pagination.module.css'

const Pagination = ({buttons, page, handleSwitchPagePosts}) => {

    return (
        <div className={s.paginationWrapper}>
            <ul className={s.paginationList}>
                {
                    buttons.map(button => (
                        <li
                            onClick={() => {handleSwitchPagePosts(button)}}
                            className={(page === button) ? `${s.paginationButton} ${s.active}` : s.paginationButton}
                            key={button}>
                        {button}
                    </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Pagination;
