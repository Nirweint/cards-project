import React, {FC, useState} from 'react';
import {Button} from "../../../components";
import {useDispatch} from "react-redux";
import {deletePackTC, updatePackTC} from "../../../state/middlewares/packs";
import {NavLink} from "react-router-dom";
import {Modal} from "../../../components";
import {DeletePack} from "../deletePack/DeletePack";
import {UpdatePackTitle} from "../updatePackTitle/UpdatePackTitle";
import s from './PackItem.module.css';

type PackItemType = {
    name: string,
    cardsCount: number,
    update: string
    _id: string
}

export const PackItem: FC<PackItemType> = ({name, cardsCount, update, _id}) => {

    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false)
    const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false)

    const dispatch = useDispatch();

    const updateDate = new Date(update).toLocaleDateString()

    const updateHandler = () => {
        setShowUpdateModal(true)
    };
    const deleteHandler = () => {
        setShowDeleteModal(true)
    };

    const cancelModalHandler = () => {
        setShowDeleteModal(false)
    };
    const deleteModalHandler = () => {
        setShowDeleteModal(false)
        dispatch(deletePackTC(_id));
    };
    const cancelUpdateHandler = () => {
        setShowUpdateModal(false)
    };
    const updateModalHandler = (title: string) => {
        setShowUpdateModal(false)
        dispatch(updatePackTC(_id, title));
    };

    const learnHandler = () => {

    };

    return (
        <>
            <tr>
                <td>
                    <NavLink className={s.link} to={`/cards-list/${_id}`}>{name}</NavLink>
                </td>
                <td>{cardsCount}</td>
                <td>{updateDate}</td>
                <td>
                    <Button className={s.btn} onClick={updateHandler}>Update</Button>
                    <Button className={s.btn} onClick={deleteHandler}>Delete</Button>
                    <NavLink className={s.link} to={`/learn/${_id}`}>
                        <Button className={s.btn} onClick={learnHandler}>Learn</Button>
                    </NavLink>
                </td>
            </tr>
            {showDeleteModal &&
            <Modal setShow={setShowDeleteModal}>
                <DeletePack deletedTitle={name}
                            cancelHandler={cancelModalHandler}
                            submitHandler={deleteModalHandler}/>
            </Modal>
            }
            {showUpdateModal &&
            <Modal setShow={setShowUpdateModal}>
                <UpdatePackTitle title={'Change title'}
                                 cancelHandler={cancelUpdateHandler}
                                 submitHandler={updateModalHandler}/>
            </Modal>
            }
        </>
    );
};

export default PackItem;