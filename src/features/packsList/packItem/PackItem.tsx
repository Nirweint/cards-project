import React, { FC, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { DeletePack } from '../deletePack/DeletePack';
import { UpdatePackTitle } from '../updatePackTitle/UpdatePackTitle';

import s from './PackItem.module.css';

import { Button, Modal } from 'components';
import { deletePackTC, updatePackTC } from 'state/middlewares/packs';
import { selectProfileId } from 'state/selectors/profile';

type PackItemType = {
  name: string;
  cardsCount: number;
  update: string;
  _id: string;
  userId: string;
};

export const PackItem: FC<PackItemType> = ({ name, cardsCount, update, userId, _id }) => {
  const profileId = useSelector(selectProfileId);

  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false);

  const dispatch = useDispatch();

  const updateDate = new Date(update).toLocaleDateString();

  const updateHandler = (): void => {
    setShowUpdateModal(true);
  };
  const deleteHandler = (): void => {
    setShowDeleteModal(true);
  };

  const cancelModalHandler = (): void => {
    setShowDeleteModal(false);
  };
  const deleteModalHandler = (): void => {
    setShowDeleteModal(false);
    dispatch(deletePackTC(_id));
  };
  const cancelUpdateHandler = (): void => {
    setShowUpdateModal(false);
  };
  const updateModalHandler = (title: string): void => {
    setShowUpdateModal(false);
    dispatch(updatePackTC(_id, title));
  };

  return (
    <>
      <tr>
        <td>
          <NavLink className={s.link} to={`/cards-list/${_id}`}>
            {name}
          </NavLink>
        </td>
        <td>{cardsCount}</td>
        <td>{updateDate}</td>
        {profileId === userId ? (
          <td className={s.actions}>
            <Button className={s.btn} onClick={updateHandler}>
              Update
            </Button>
            <Button className={s.btn} red onClick={deleteHandler}>
              Delete
            </Button>
            {cardsCount > 0 && (
              <NavLink className={s.link} to={`/learn/${_id}`}>
                <Button className={s.btn}>Learn</Button>
              </NavLink>
            )}
          </td>
        ) : (
          <td className={s.actions}>
            {cardsCount > 0 && (
              <NavLink className={s.link} to={`/learn/${_id}`}>
                <Button className={s.btn}>Learn</Button>
              </NavLink>
            )}
          </td>
        )}
      </tr>
      {showDeleteModal && (
        <Modal setShow={setShowDeleteModal}>
          <DeletePack
            deletedTitle={name}
            cancelHandler={cancelModalHandler}
            submitHandler={deleteModalHandler}
          />
        </Modal>
      )}
      {showUpdateModal && (
        <Modal setShow={setShowUpdateModal}>
          <UpdatePackTitle
            title="Change title"
            name={name}
            cancelHandler={cancelUpdateHandler}
            submitHandler={updateModalHandler}
          />
        </Modal>
      )}
    </>
  );
};

export default PackItem;
