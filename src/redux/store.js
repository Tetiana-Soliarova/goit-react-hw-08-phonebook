import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import contactReducer from './contacts/contacts-reducer'
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import authReducer from './auth/auth-reducer'

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
]

const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactReducer,
  },
  middleware,
})

//const persistor = persistStore(store)
export default store /*{store, persistor }*/
