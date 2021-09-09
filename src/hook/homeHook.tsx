import {useSelector} from 'react-redux';
import {ArrayInfoType, ArrayYourGivingImpactType} from '../../types/homeTypes';
import {getUserActionsInfo, getUserGiving} from '../redux/reducers/selectors';

interface useHome {
  actionsInfo: ArrayInfoType[];
  userGiving: ArrayYourGivingImpactType[];
}

export const useHome = (): useHome => {
  const actionsInfo = useSelector(getUserActionsInfo);
  const userGiving = useSelector(getUserGiving);
  return {actionsInfo, userGiving};
};
