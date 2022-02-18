import React, {FC} from 'react';
import {Button} from "../common";
import {useDispatch} from "react-redux";
import {addPackTC, deletePackTC, updatePackTC} from "../../state/middlewares/packs";


type PackItemType = {
    _id: string,
    name: string,
    cardsCount: number,
    update: string
}

export const PackItem: FC<PackItemType>= ({_id, name, cardsCount, update}) => {

    const dispatch = useDispatch();

    const addHandler = () => {
        dispatch(addPackTC());
    };
    const updateHandler = () => {
        dispatch(updatePackTC(_id));
    };
    const deleteHandler = () => {
        dispatch(deletePackTC(_id));
    };

    return (
        <tr>
            <td>{name}</td>
            <td>{cardsCount}</td>
            <td>{update}</td>
            <td>
                <Button onClick={addHandler}>Add</Button>
                <Button onClick={updateHandler}>Update</Button>
                <Button onClick={deleteHandler}>Delete</Button>
            </td>
        </tr>
    );
};

export default PackItem;