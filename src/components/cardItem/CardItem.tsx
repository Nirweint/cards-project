import React, {FC} from 'react';
import {Button} from "../common";

type CardItemType = {
    question: string
    answer: string
    updated: string
}

export const CardItem: FC<CardItemType> = ({question,updated,answer}) => {
    return (
        <tr>
            <td>{question}</td>
            <td>{answer}</td>
            <td>{updated}</td>
            <td>
                   <Button>delete</Button>
                   <Button>update</Button>
            </td>
        </tr>
    );
}