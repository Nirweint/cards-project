import React, {FC} from 'react';
import {Button} from "../common";
import {useDispatch} from "react-redux";
import {addPackTC, deletePackTC, updatePackTC} from "../../state/middlewares/packs";
import {NavLink} from "react-router-dom";

type PackItemType = {
    name: string,
    cardsCount: number,
    update: string
    _id: string
}

export const PackItem: FC<PackItemType>= ({name,cardsCount,update, _id}) => {

    const dispatch = useDispatch();

    const updateHandler = () => {
        dispatch(updatePackTC(_id));
    };
    const deleteHandler = () => {
        dispatch(deletePackTC(_id));
    };

    return (
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
    );
};

export default PackItem;