import { call, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import * as Startup from '../actions/startup';

// process STARTUP actions
export function* startup (api, action) {
  try {
    const { ok, data } = yield call(api.get, '/api/v1/movies')
    yield call(delay, 1000)
    // yield put(Startup.Actions.startup(data))
  } catch (e) {
    console.log(e.message)
    console.log(e)
  }
  // yield put(RepoMessage.Actions.request())
}
