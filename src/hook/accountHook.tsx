import {useSelector} from 'react-redux';
import {actionsUser, typesOfPayments} from '../../types/accountTypes';
import {
  getActionsUserWithCash,
  getTypesOfPayments,
} from '../redux/reducers/selectors';

interface accontHook {
  actionsWithCash: actionsUser[];
  typesOfPayments: typesOfPayments[];
}

export const useAccount = (): accontHook => {
  const actionsWithCash = useSelector(getActionsUserWithCash);
  // eslint-disable-next-line no-shadow
  const typesOfPayments = useSelector(getTypesOfPayments);
  return {actionsWithCash, typesOfPayments};
};
