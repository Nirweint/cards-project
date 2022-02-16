import React, {FC} from 'react';
import {Button} from "../common/button";


type PackItemType = {
    name: string,
    cardsCount: number,
    update: string
}




export const PackItem: FC<PackItemType>= ({name,cardsCount,update}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{cardsCount}</td>
            <td>{update}</td>
            <td>
                <Button>Add</Button>
                <Button>Update</Button>
                <Button>Delete</Button>
            </td>
        </tr>
    );
};

export default PackItem;