import React, {FC} from 'react';


type PackItemType = {
    name: string,
    cardsCount: number,
    update: string
}




export const PackItem: FC<PackItemType>= ({name,cardsCount,update}) => {
    return (
        <div>
            <div>{name}</div>
            <div>{cardsCount}</div>
            <div>{update}</div>
        </div>
    );
};

export default PackItem;