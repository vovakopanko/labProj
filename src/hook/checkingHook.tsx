import {useSelector} from 'react-redux';
import {transactionOneDay} from '../redux/reducers/checkingReducer';
import {
  getAllTransactionsUser,
  getCheckingCash,
} from '../redux/reducers/selectors';

interface useChecking {
  userTransactions: transactionOneDay[];
  totalCash: number;
}

export const useChecking = (): useChecking => {
  const userTransactions = useSelector(getAllTransactionsUser);
  const totalCash = useSelector(getCheckingCash);
  return {userTransactions, totalCash};
};
