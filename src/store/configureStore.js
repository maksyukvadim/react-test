import { createStore } from 'redux';
import rootReducer from '../reducers';
import * as LocalStorage from './localStorage';

console.log(LocalStorage);
export default function configureStore(initialState) {
    const initialStateNew = LocalStorage.getStorage('state');
    
    const store = createStore(rootReducer, initialStateNew || initialState)

    store.subscribe(()=>{
      LocalStorage.setStorage('state', store.getState());
    })

    return store;
}