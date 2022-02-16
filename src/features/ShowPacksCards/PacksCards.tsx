import React from 'react';
import {Button} from "../../components/common/button";
import s from '../ShowPacksCards/packsCard.module.css'

const PacksCards = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.title}>Show packs cards</div>
            <Button className={s.button}>My</Button>
            <Button className={s.button}>All</Button>
            <div className={s.title}>Number of cards</div>
        </div>
    );
};

export default PacksCards;