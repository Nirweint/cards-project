import React from 'react';
import {Button} from "../../components";
import s from './packsCard.module.css';
import {useDispatch, useSelector} from "react-redux";
import {setShowAllPacks} from "../../state/actions/packs";
import {selectShowAllPacks} from "../../state/selectors/packs";
import {selectAppStatus} from "../../state/selectors/app";

const PacksCards = () => {

    const dispatch = useDispatch()

    const isShowAllPacks = useSelector(selectShowAllPacks)
    const appStatus = useSelector(selectAppStatus)

    const isMyButtonActiveStyle = !isShowAllPacks ? s.active : '';
    const isAllButtonActiveStyle = isShowAllPacks ? s.active : '';

    const onAllButtonClick = () => {
        dispatch(setShowAllPacks(true))
    }

    const onMyButtonClick = () => {
        dispatch(setShowAllPacks(false))
    }

    return (
        <div className={s.wrapper}>
            <div className={s.title}>Show packs cards</div>
            <Button className={isMyButtonActiveStyle}
                    disabled={appStatus === 'loading'}
                    onClick={onMyButtonClick}>My</Button>
            <Button className={isAllButtonActiveStyle}
                    disabled={appStatus === 'loading'}
                    onClick={onAllButtonClick}>All</Button>
            <div className={s.title}>Number of cards</div>
        </div>
    );
};

export default PacksCards;