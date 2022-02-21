import React, {FC} from 'react';
import {Button} from "../../../components";
import {useDispatch, useSelector} from "react-redux";
import {deleteCard, updateCard} from "../../../state/middlewares/cards";
import {
    selectCurrentCardsPacksId
} from "../../../state/selectors/cards";
import {selectProfileId} from "../../../state/selectors/profile";
import {selectAppStatus} from "../../../state/selectors/app";

type CardItemType = {
    question: string
    answer: string
    updated: string
    cardId: string
}

export const CardItem: FC<CardItemType> = ({question,updated,answer, cardId}) => {

    const dispatch = useDispatch()

    const cardsPackId = useSelector(selectCurrentCardsPacksId)
    const profileId = useSelector(selectProfileId)
    const appStatus = useSelector(selectAppStatus)

    const updatedDate = new Date(updated).toLocaleDateString()

    const isUserCardsPack = cardsPackId === profileId

    const onDeleteCardClick = () => {
        dispatch(deleteCard(cardId))
    }

    const onUpdateCardClick = () => {
        dispatch(updateCard({_id: cardId, question: 'update question'}))
    }

    return (
        <tr>
            <td>{question}</td>
            <td>{answer}</td>
            <td>{updatedDate}</td>
            {isUserCardsPack && <td>
				<Button disabled={appStatus === 'loading'} onClick={onDeleteCardClick}>delete</Button>
				<Button disabled={appStatus === 'loading'} onClick={onUpdateCardClick}>update</Button>
			</td>}

        </tr>
    );
}