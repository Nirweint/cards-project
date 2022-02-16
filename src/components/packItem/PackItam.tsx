import React, {FC} from 'react';


type PackItamType = {
    name: string,
    cardcount: number,
    update: string
}




export const PackItam: FC<PackItamType>= ({name,cardcount,update}) => {
    return (
        <div>
            <div>{name}</div>
            <div>{cardcount}</div>
            <div>{update}</div>
        </div>
    );
};

export default PackItam;