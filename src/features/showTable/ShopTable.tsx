import React, {useEffect} from 'react';
import {Button} from "../../components/common/button";
import show_Table from './shopTable.module.css'
import {useDispatch} from "react-redux";
import {shopTableGet} from "../../state/middlewares/shopTable";


const ShopTable = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(shopTableGet())
    },[])


    return (
        <div>
            <h2>Table</h2>
            <div className={show_Table.container}>
                <div>Product Name</div>
                <div>price</div>
                <Button>Add</Button>
            </div>
        </div>
    );
};

export default ShopTable;