import {useSelector} from 'react-redux';
import {
  getAllTransactionsUser,
  getCheckingCash,
} from '../redux/reducers/selectors';

export const useCheking = () => {
  const userTransactions = useSelector(getAllTransactionsUser);
  const totalCash = useSelector(getCheckingCash);
  return {userTransactions, totalCash};
};
