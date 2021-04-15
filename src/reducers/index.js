import { combineReducers } from 'redux';
import search from './setSearch';
import kieumau600 from './kieumau600';
const appReducers = combineReducers({
    search,
    kieumau600
})
export default appReducers;