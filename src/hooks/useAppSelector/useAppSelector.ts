import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootStateType} from "../../state/store";

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector