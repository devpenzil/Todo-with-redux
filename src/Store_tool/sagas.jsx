import {takeEvery} from 'redux-saga/effects'
import { addingtodo } from './Todo/TodoSlice'

export function* sagaworking(){
    yield takeEvery(addingtodo, logging)
}

export function* logging(){
    yield console.log('saga working')
}