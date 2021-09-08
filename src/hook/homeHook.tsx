import {useSelector} from 'react-redux';
import {getUserActionsInfo, getUserGiving} from '../redux/reducers/selectors';

export const useHome = () => {
  const actionsInfo = useSelector(getUserActionsInfo);
  const userGiving = useSelector(getUserGiving);
  return {actionsInfo, userGiving};
};
