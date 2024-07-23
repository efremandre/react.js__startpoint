import React from 'react';
import s from './MyModal.module.css'

const MyModal = ({children, modalIsOpen, setModalIsOpen}) => {

    const classModal = [s.modalWrapper];
    if (modalIsOpen) classModal.push(s.active)

    return (
        <div
            className={classModal.join(' ')}
            onClick={() => setModalIsOpen(false)}
        >
            <div
                className={s.modalContent}
                onClick={(ev) => ev.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default MyModal;
