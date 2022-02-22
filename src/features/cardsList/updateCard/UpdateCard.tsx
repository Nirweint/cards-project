import React, {ChangeEvent, useState} from 'react';
import {Button, InputText} from "../../../components";
import s from './UpdateCard.module.css';
import {EMPTY_STRING} from "../../../constants";

type UpdatePackTitleType = {
    cancelHandler: () => void,
    submitHandler: (questionValue: string, answerValue: string) => void,
    question?: string
    answer?: string
}

export const UpdateCard = ({cancelHandler, submitHandler, question, answer}: UpdatePackTitleType) => {

    const [questionValue, setQuestionValue] = useState(question || EMPTY_STRING)
    const [answerValue, setAnswerValue] = useState(answer || EMPTY_STRING)

    const handleQuestionValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuestionValue(e.currentTarget.value)
    }

    const handleAnswerValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAnswerValue(e.currentTarget.value)
    }

    return (
        <>
            <div className={s.title}>
                <h2>Card Info</h2>
            </div>
            <h2>Question</h2>
            <InputText style={{marginBottom: '20px', width: '95%'}} autoFocus
                       placeholder={'Question'} value={questionValue}
                       onChange={handleQuestionValueChange}/>
            <h2>Answer</h2>
            <InputText style={{marginBottom: '20px', width: '95%'}} autoFocus
                       placeholder={'Answer'} value={answerValue}
                       onChange={handleAnswerValueChange}/>
            <div className={s.btn}>
                <Button onClick={cancelHandler}>Cancel</Button>
                <Button
                    onClick={() => submitHandler(questionValue, answerValue)}>Save</Button>
            </div>

        </>
    );
};