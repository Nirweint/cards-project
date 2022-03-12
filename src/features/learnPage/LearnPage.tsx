import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useParams} from "react-router-dom";
import {CardType} from "../../state/reducers/cards";
import {getCards, updateCardGrade} from "../../state/middlewares/cards";
import {Button} from "../../components";
import {setCardsCurrentId} from "../../state/actions/cards";
import {selectListOfCards} from "../../state/selectors/cards";
import {PATH} from "../../app/routes/RoutesComponent";
import s from './LearnPage.module.css'

const grades = ['не знал', 'забыл', 'долго думал', 'перепутал', 'знал'];

const getCard = (cards: CardType[]) => {
    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
    const rand = Math.random() * sum;
    const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
            return {sum: newSum, id: newSum < rand ? i : acc.id}
        }
        , {sum: 0, id: -1});
    //console.log('test: ', sum, rand, res)

    return cards[res.id + 1];
}


export const LearnPage = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const [card, setCard] = useState<CardType>({
        answer: 'fake answer',
        question: 'fake question',
        cardsPack_id: '',
        grade: 0,
        shots: 0,
        user_id: '',
        created: '',
        updated: '',
        _id: '',
    })

    const [rating, setRating] = useState<number>(0)

    const {id} = useParams<'id'>();
    const cards = useSelector(selectListOfCards)

    const dispatch = useDispatch()
    useEffect(() => {
        if (id) {
            dispatch(setCardsCurrentId(id))
        }
        dispatch(getCards())
    }, [dispatch])

    const handleGradeClick = (grade: number) => {
        setRating(grade)
    }
    const onNext = () => {
        setIsChecked(false);
        setCard(getCard(cards))
        dispatch(updateCardGrade({grade: rating, card_id: card._id}))
        setRating(0)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.title}>
                Learn PACK_NAME
            </div>
            <div className={s.text}>
                Question: {card.question}
            </div>
            <div className={s.btnWrapper}>
                {!isChecked &&
                <NavLink to={PATH.PACKS_LIST}>
                    <Button red>Cancel</Button>
                </NavLink>
                }
                {!isChecked &&
                <Button onClick={() => {
                    setIsChecked(true)
                }}>Show answer</Button>
                }

                {isChecked && (
                    <div>
                        <div className={s.text}>Answer: {card.answer}</div>
                        <div className={s.grades}>
                            Rate yourself:
                            {grades.map((g, i) => (
                                <label key={'grade-' + i} className={s.grade}>
                                    <input type={'radio'}
                                           value={rating}
                                           checked={rating === i + 1}
                                           onChange={() => handleGradeClick(i + 1)}/>
                                    {g}
                                </label>
                            ))}
                        </div>
                        <div className={s.btnWrapper}>
                            <NavLink to={PATH.PACKS_LIST}>
                                <Button red>Cancel</Button>
                            </NavLink>
                            <Button disabled={!rating} onClick={onNext}>Next</Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}