import React, {FC} from 'react';
import {Button} from "../common";


type PackItemType = {
    name: string,
    cardsCount: number,
    update: string
}


<<<<<<< HEAD
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

=======


export const PackItem: FC<PackItemType>= ({name,cardsCount,update}) => {
>>>>>>> remotes/origin/master
    return (
        <tr>
            <td>{name}</td>
            <td>{cardsCount}</td>
            <td>{update}</td>
            <td>
<<<<<<< HEAD
                <Button onClick={addHandler}>Add</Button>
                <Button onClick={updateHandler}>Update</Button>
                <Button onClick={deleteHandler}>Delete</Button>
=======
                <Button>Add</Button>
                <Button>Update</Button>
                <Button>Delete</Button>
>>>>>>> remotes/origin/master
            </td>
        </tr>
    );
};

export default PackItem;