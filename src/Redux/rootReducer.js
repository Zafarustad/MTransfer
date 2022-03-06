import {combineReducers} from 'redux';
import transaction from './transactionSlice';

export default combineReducers({
  transaction: transaction,
});
