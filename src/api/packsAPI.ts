import {instance} from "./config";
import {PacksType} from "../state/reducers/packs";

export const packsAPI = {
    getPacks(payload: CardPacksParamsType) {
        return instance.get<PacksType>('cards/pack', {params: payload})
    },
    postPack(cardsPack: Omit<PostCardsPacksBodyType, '_id'>) {
        return instance.post(`cards/pack`, {cardsPack})
    },
    deletePack(packId: string) {
        return instance.delete(`cards/pack?id=${packId}`)
    },
    updatePack(cardsPack: PostCardsPacksBodyType) {
        return instance.put(`cards/pack`, {cardsPack})
    },
}

// types
export type CardPacksParamsType = {
    packName?: string
    min?: number
    max?: number
    sortPacks?: '0updated' | '1updated'
    page?: number
    pageCount?: number
    user_id?: string
}

export type PostCardsPacksBodyType = {
    name?: string
    deckCover?: string
    private?: boolean
    _id: string
}