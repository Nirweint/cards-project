import React, {FC} from 'react';
import {Button} from "../common";
import {NavLink} from "react-router-dom";
import {PATH} from "../../app/routes/RoutesComponent";


type PackItemType = {
    name: string
    cardsCount: number
    update: string
    _id: string
}

export const PackItem: FC<PackItemType>= ({name,cardsCount,update, _id}) => {


    const addHandler = () => {
        console.log("addHandler")
    };
    const updateHandler = () => {
        console.log("updateHandler")
    };
    const deleteHandler = () => {
        console.log("deleteHandler")
    };

    return (
        <tr>
            <td>
                <NavLink to={`/cards-list/${_id}`}>{name}</NavLink>
            </td>
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