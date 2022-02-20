import React, {FC, useState} from 'react';
import {Button} from "../../../components";
import {useDispatch} from "react-redux";
import {deletePackTC, updatePackTC} from "../../../state/middlewares/packs";
import {NavLink} from "react-router-dom";
import {Modal} from "../../../components/modal";
import {DeletePack} from "../deletePack/DeletePack";
import {UpdatePackTitle} from "../updatePackTitle/UpdatePackTitle";

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

    return (
        <>
            <tr>
                <td>
                    <NavLink to={`/cards-list/${_id}`}>{name}</NavLink>
                </td>
                <td>{cardsCount}</td>
                <td>{update}</td>
                <td>
                    <Button onClick={updateHandler}>Update</Button>
                    <Button onClick={deleteHandler}>Delete</Button>
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