import {useSelector} from 'react-redux';
import {
  getGraphTransactionsUser,
  getSavingCash,
} from '../redux/reducers/selectors';

export const useSavings = () => {
  const totalCash = useSelector(getSavingCash);
  const graph = useSelector(getGraphTransactionsUser);
  return {totalCash, graph};
};
