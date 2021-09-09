import {ImageSourcePropType} from 'react-native';
import {useSelector} from 'react-redux';
import {transactionsRaws} from '../redux/reducers/savingReducer';
import {
  getGoodnessPoints,
  getGraphTransactionsUser,
  getLastDataTransactions,
  getSavingCash,
  getTotalInterestGained,
  getTransactionsRawsUser,
} from '../redux/reducers/selectors';

interface useSavings {
  transactionsRaws: transactionsRaws[];
  totalCash: number;
  data: string;
  graph: ImageSourcePropType;
  goodnessPoints: number;
  totalInterestGained: number;
}

export const useSavings = (): useSavings => {
  // eslint-disable-next-line no-shadow
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
