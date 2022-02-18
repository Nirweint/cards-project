import React, {FC} from 'react';
import {Button} from "../common";
import {useDispatch, useSelector} from "react-redux";
import {deleteCard, updateCard} from "../../state/middlewares/cards";
import {selectCurrentCardsPacksId} from "../../state/selectors/cards";
import {selectProfileId} from "../../state/selectors/profile";

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
            <td>{updated}</td>
            {isUserCardsPack && <td>
				<Button onClick={onDeleteCardClick}>delete</Button>
				<Button onClick={onUpdateCardClick}>update</Button>
			</td>}

        </tr>
    );
}