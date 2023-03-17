import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '..features/todoSlice'

export const store = configureSTore({
    reducer : {
        todos:todoReducer
    }
})