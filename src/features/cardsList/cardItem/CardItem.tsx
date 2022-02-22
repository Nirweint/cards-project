import React, {FC, useState} from 'react';
import {Button, Modal} from "../../../components";
import {useDispatch, useSelector} from "react-redux";
import {deleteCard, updateCard} from "../../../state/middlewares/cards";
import {
    selectCurrentCardsPacksId
} from "../../../state/selectors/cards";
import {selectProfileId} from "../../../state/selectors/profile";
import {selectAppStatus} from "../../../state/selectors/app";
import {UpdateCard} from "../updateCard/UpdateCard";

type CardItemType = {
    question: string
    answer: string
    updated: string
    cardId: string
}

export const CardItem: FC<CardItemType> = ({question, updated, answer, cardId}) => {

    const dispatch = useDispatch()

    const cardsPackId = useSelector(selectCurrentCardsPacksId)
    const profileId = useSelector(selectProfileId)
    const appStatus = useSelector(selectAppStatus)

    const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false)


    const updatedDate = new Date(updated).toLocaleDateString()

    const isUserCardsPack = cardsPackId === profileId

    const onDeleteCardClick = () => {
        dispatch(deleteCard(cardId))
    }

    const onShowModalForUpdateClick = () => {
        setShowUpdateModal(true)
    }

    const handleUpdateModalClick = (questionValue: string, answerValue: string) => {
        setShowUpdateModal(false)
        dispatch(updateCard({_id: cardId, question: questionValue, answer: answerValue}))
    }

    const handleCancelUpdateClick = () => {
        setShowUpdateModal(false)
    };


    return (
        <tr>
            <td>{question}</td>
            <td>{answer}</td>
            <td>{updatedDate}</td>
            {isUserCardsPack && <td>
				<Button disabled={appStatus === 'loading'}
						onClick={onDeleteCardClick}>delete</Button>
				<Button disabled={appStatus === 'loading'}
						onClick={onShowModalForUpdateClick}>update</Button>
			</td>}
            {showUpdateModal &&
			<Modal setShow={setShowUpdateModal}>
				<UpdateCard
					cancelHandler={handleCancelUpdateClick}
					submitHandler={handleUpdateModalClick}
					question={question}
					answer={answer}
				/>
			</Modal>
            }
        </tr>
    );
}