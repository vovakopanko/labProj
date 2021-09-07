import {useSelector} from 'react-redux';
import {
  getActionsUserWithCash,
  getTypesOfPayments,
} from '../redux/reducers/selectors';

export const useAccount = () => {
  const actionsWithCash = useSelector(getActionsUserWithCash);
  const typesOfPayments = useSelector(getTypesOfPayments);
  return {actionsWithCash, typesOfPayments};
};
