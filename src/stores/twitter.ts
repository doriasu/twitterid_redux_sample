import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type TwitterState = {
    id: string;
}
const initialState: TwitterState = { id: "" }

export const twitterSlice = createSlice({
    name: 'twitter',
    initialState: initialState,
    reducers: {
        updateId: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                id:action.payload
            }
        }
    }
})