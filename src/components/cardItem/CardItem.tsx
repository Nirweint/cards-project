import React, {FC} from 'react';
import {Button} from "../common";
import {useDispatch} from "react-redux";
import {deleteCard, updateCard} from "../../state/middlewares/cards";

type CardItemType = {
    question: string
    answer: string
    updated: string
    cardId: string
}

export const CardItem: FC<CardItemType> = ({question,updated,answer, cardId}) => {

    const dispatch = useDispatch()

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
            <td>
                   <Button onClick={onDeleteCardClick}>delete</Button>
                   <Button onClick={onUpdateCardClick}>update</Button>
            </td>
        </tr>
    );
}