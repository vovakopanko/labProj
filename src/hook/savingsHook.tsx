import {useSelector} from 'react-redux';
import {
  getGoodnessPoints,
  getGraphTransactionsUser,
  getSavingCash,
  getTotalInterestGained,
} from '../redux/reducers/selectors';

export const useSavings = () => {
  const totalCash = useSelector(getSavingCash);
  const graph = useSelector(getGraphTransactionsUser);
  const goodnessPoints = useSelector(getGoodnessPoints);
  const totalInterestGained = useSelector(getTotalInterestGained);

  return {totalCash, graph, goodnessPoints, totalInterestGained};
};
