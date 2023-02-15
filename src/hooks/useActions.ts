import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../redux/actions/index'

export const useActions = function () {
    const dispatch = useDispatch();
    return bindActionCreators(ActionCreators, dispatch);
}