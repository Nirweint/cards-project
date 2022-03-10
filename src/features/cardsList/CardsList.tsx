import React, {useEffect, useState} from 'react';
import {Navigate, NavLink, useParams} from "react-router-dom";
import {PATH} from "../../app/routes/RoutesComponent";
import s from './CardsList.module.css';
import {Button, Modal, Paginator, Search} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {
    selectCardsPackParams,
    selectCardsTotalCount,
    selectCurrentCardsPacksId,
    selectListOfCards
} from "../../state/selectors/cards";
import {getCards, setNewCard, updateCard} from "../../state/middlewares/cards";
import {
    setCardsCurrentId,
    setCurrentCardsPage,
    setSearchCard
} from "../../state/actions/cards";
import {selectIsAuth} from "../../state/selectors/auth";
import {selectProfileId} from "../../state/selectors/profile";
import {selectAppStatus} from "../../state/selectors/app";
import {CardItem} from "./cardItem";
import {selectCardPacks} from "../../state/selectors/packs";
import {EMPTY_STRING, PORTION_SIZE} from "../../constants";
import {UpdateCard} from "./updateCard/UpdateCard";

export const CardsList = () => {
    const dispatch = useDispatch()
    const {id} = useParams<'id'>()

    const isAuth = useSelector(selectIsAuth)
    const cards = useSelector(selectListOfCards)
    const cardsPacksUserId = useSelector(selectCurrentCardsPacksId)
    const profileId = useSelector(selectProfileId)
    const appStatus = useSelector(selectAppStatus)
    const packs = useSelector(selectCardPacks)
    const cardsTotalCount = useSelector(selectCardsTotalCount)
    const {page, pageCount, cardQuestion} = useSelector(selectCardsPackParams)

    const [portionNumber, setPortionNumber] = useState(1)
    const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false)

    const currentPack = packs.find(pack => pack._id === id)
    const isUserCardsPack = cardsPacksUserId === profileId

    useEffect(() => {
        if (id) {
            dispatch(setCardsCurrentId(id))
        }
        dispatch(getCards())
    }, [dispatch, page, cardsTotalCount, cardQuestion])

    const handleSetCurrentPage = (page: number) => {
        dispatch(setCurrentCardsPage(page))
    }

    const onShowModalForAddNewCardClick = () => {
        setShowUpdateModal(true)
    }

    const handleAddNewCardClick = (questionValue: string, answerValue: string) => {
        setShowUpdateModal(false)
        dispatch(setNewCard(questionValue, answerValue))
    }

    const handleCancelAddNewCardClick = () => {
        setShowUpdateModal(false)
    };

    const handleSetSearchValue = (value: string) => {
        dispatch(setSearchCard(value))
    };

    if (!isAuth) {
        return <Navigate replace to={PATH.LOGIN}/>
    }

    return (
        <>
            <div className={s.wrapper}>
                <div className={s.header}>
                    <NavLink
                        to={PATH.PACKS_LIST}
                        className={s.link}
                    >
                        ← {currentPack && currentPack.name}
                    </NavLink>
                    <Search setSearchValue={handleSetSearchValue} className={s.search}/>
                </div>

                {cards.length === 0 && isUserCardsPack && cardQuestion === EMPTY_STRING &&
				<Button
					disabled={appStatus === 'loading'}
					onClick={onShowModalForAddNewCardClick}
				>
					Add new card
				</Button>}

                {cards.length > 0 ?
                    <div className={s.tableWrapper}>
                        <table className={s.table}>
                            <thead>
                            <tr>
                                <th>Question</th>
                                <th>Answer</th>
                                <th>Last Updated</th>
                                {isUserCardsPack && <th>
									<Button disabled={appStatus === 'loading'}
											onClick={onShowModalForAddNewCardClick}>Add
										new
										card</Button>
								</th>}

                            </tr>
                            </thead>
                            {cards.map(({answer, question, updated, _id}) => {
                                return (
                                    <tbody key={_id}>
                                    <CardItem
                                        answer={answer}
                                        question={question}
                                        updated={updated}
                                        cardId={_id}
                                    />
                                    </tbody>
                                )
                            })

                            }
                        </table>
                        <div className={s.paginator}>
                            <Paginator totalCountItems={cardsTotalCount}
                                       itemsPerPage={pageCount}
                                       currentPage={page || 1} portionSize={PORTION_SIZE}
                                       portionNumber={portionNumber}
                                       setPortionNumber={setPortionNumber}
                                       setCurrentPage={handleSetCurrentPage}/>
                        </div>
                    </div>
                    :
                    <div className={s.emptyPackWrapper}>
                        {cardQuestion !== EMPTY_STRING ?
                            <p>{`This pack of cards don't have ${cardQuestion}`}</p>
                            :
                            <p>{isUserCardsPack ?
                                'This pack is empty. Click add new card to fill this pack'
                                :
                                'This pack is empty.'
                            }</p>
                        }
                    </div>
                }

            </div>
            {showUpdateModal &&
			<Modal setShow={setShowUpdateModal}>
				<UpdateCard
					cancelHandler={handleCancelAddNewCardClick}
					submitHandler={handleAddNewCardClick}
				/>
			</Modal>
            }
        </>
    );
};
