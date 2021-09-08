import {useSelector} from 'react-redux';
import {
  getGoodnessPoints,
  getGraphTransactionsUser,
  getLastDataTransactions,
  getSavingCash,
  getTotalInterestGained,
  getTransactionsRawsUser,
} from '../redux/reducers/selectors';

export const useSavings = () => {
  const transactionsRaws = useSelector(getTransactionsRawsUser);
  const totalCash = useSelector(getSavingCash);
  const data = useSelector(getLastDataTransactions);
  const graph = useSelector(getGraphTransactionsUser);
  const goodnessPoints = useSelector(getGoodnessPoints);
  const totalInterestGained = useSelector(getTotalInterestGained);

  return {
    totalCash,
    graph,
    goodnessPoints,
    totalInterestGained,
    data,
    transactionsRaws,
  };
};
