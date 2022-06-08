import { configureStore } from '@reduxjs/toolkit'
import { impi } from '../reduser/redusers'
import combineReduser from '../reduser/redusers'





export let store = configureStore({reducer:combineReduser})
export let storeImpi  = configureStore({reducer:impi})


