import Reactotron from 'reactotron-react-native'
import ApiSauce from 'apisauce'
import { takeEvery, takeLatest, put } from 'redux-saga'
import { startup } from './StartupSaga'
import * as Startup from '../actions/startup'

// define the api
const api = ApiSauce.create({
  baseURL: 'https://api.movies.i-uix.com'
})

api.addMonitor(Reactotron.apisauce)

export default function* rootSaga() {
  yield [
    takeLatest(Startup.GET_POSTS, startup, api)
  ]
}
