import React from 'react';
import s from './Modal.module.css'

type ModalType = {
    setShow: (isShow: boolean) => void,
}

export const Modal: React.FC<ModalType> = ({setShow, children}) => {

    return (
        <div className={s.body}>
            <div onClick={() => {setShow(false)}} className={s.veil}> </div>
            <div className={s.modal}>
                {children}
            </div>

        </div>


    );
};

