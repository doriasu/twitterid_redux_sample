import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import { twitterSlice, TwitterState } from './stores/twitter'

export type AppState = {
    twitter: TwitterState;
}
const rootReducer = combineReducers<AppState>({
    twitter:twitterSlice.reducer
})

const store = configureStore({reducer:rootReducer})

export default store;