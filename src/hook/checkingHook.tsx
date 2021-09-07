import {useSelector} from 'react-redux';
import {getAllTransactionsUser} from '../redux/reducers/selectors';

export const useCheking = () => {
  const userTransactions = useSelector(getAllTransactionsUser);
  return {userTransactions};
};
