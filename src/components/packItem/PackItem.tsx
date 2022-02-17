import React, {FC} from 'react';
import {Button} from "../common";


type PackItemType = {
    name: string,
    cardsCount: number,
    update: string
}

export const PackItem: FC<PackItemType>= ({name,cardsCount,update}) => {


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