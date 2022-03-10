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

    const {id} = useParams<'id'>();
    const cards = useSelector(selectListOfCards)

    const dispatch = useDispatch()
    useEffect(() => {
        if (id) {
            dispatch(setCardsCurrentId(id))
        }
        dispatch(getCards())
    }, [dispatch])

    const onNext = () => {
        setIsChecked(false);
        setCard(getCard(cards))
    }

    const handleGradeClick = (grade: number) => {
        dispatch(updateCardGrade({grade, card_id: card._id}))
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
                <NavLink to={PATH.PACKS_LIST}>
                    <Button>Cancel</Button>
                </NavLink>

                {isChecked && (
                    <div>
                        <div className={s.text}>Answer: {card.answer}</div>
                        <div className={s.grades}>
                            {grades.map((g, i) => (
                                <Button key={'grade-' + i}
                                        onClick={() => handleGradeClick(i)}>{g}</Button>
                            ))}
                        </div>

                        <div className={s.btn}><Button onClick={onNext}>Next</Button>
                        </div>
                    </div>
                )}

                {!isChecked &&
				<Button onClick={() => {
                    setIsChecked(true)
                    setCard(getCard(cards))
                }}>Show answer</Button>
                }

            </div>

        </div>
    )
}


// export const LearnPage = () => {
//     const [isChecked, setIsChecked] = useState<boolean>(false);
//     const [first, setFirst] = useState<boolean>(true);
//     // const [first, setFirst] = useState<boolean>(0);
//     const {cards} = useSelector((store: RootStateType) => store.cards.cardsPack);
//     const {id} = useParams();
//
//     const [card, setCard] = useState<CardType>({
//         _id: 'fake',
//         cardsPack_id: '',
//
//         answer: 'answer fake',
//         question: 'question fake',
//         grade: 0,
//         shots: 0,
//
//         user_id: 'USER_ID_FROM_PROPS',  //add
//
//         // type: '',
//         // rating: 0,
//         // more_id: '',
//
//         created: '',
//         updated: '',
//     });
//
//     const dispatch = useDispatch();
//
//     useEffect(() => {
//         console.log('LearnContainer useEffect');
//
//         if (first) {
//             dispatch(getCards());
//             // dispatch(getCards(id));
//             setFirst(false);
//         }
//
//         console.log('cards', cards)
//         if (cards.length > 0) setCard(getCard(cards));
//
//         return () => {
//             console.log('LearnContainer useEffect off');
//         }
//     }, [dispatch, id, cards, first]);
//
//     const onNext = () => {
//         setIsChecked(false);
//
//         if (cards.length > 0) {
//             // dispatch
//             setCard(getCard(cards));
//         } else {
//
//         }
//     }
//
//     return (
//         <div>
//             LearnPage
//
//             <div>{card.question}</div>
//             <div>
//                 <Button onClick={() => setIsChecked(true)}>check</Button>
//             </div>
//
//             {isChecked && (
//                 <>
//                     <div>{card.answer}</div>
//
//                     {grades.map((g, i) => (
//                         <Button key={'grade-' + i} onClick={() => {
//                         }}>{g}</Button>
//                     ))}
//
//                     <div><Button onClick={onNext}>next</Button></div>
//                 </>
//             )}
//         </div>
//     );
// };