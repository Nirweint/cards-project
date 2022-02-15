import React, {useEffect} from 'react';
import {cardsAPI} from "../../api";

export const Paginator = () => {

    useEffect(()=>{
        cardsAPI.getShopTable()
            .then(res => {
                debugger
                console.log(res)
            })
    }, [])

    return (
        <div>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </div>
    );
};

