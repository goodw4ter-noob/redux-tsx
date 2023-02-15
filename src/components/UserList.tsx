import { FC, useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/actions/user';
import { TypedDispatchThunk } from '../hooks/useTypedDispatch'
import { useActions } from '../hooks/useActions';

type UserListProps = {
    // children?: ReactNode,
};

const UserList: FC<UserListProps> = ({ }) => {
    const { users } = useTypedSelector(state => state.user);
    const loading = useTypedSelector(state => state.user.loading);
    const error = useTypedSelector(state => state.user.error);
    // const dispatch: TypedDispatchThunk = useDispatch();
    const { fetchUsers } = useActions();


    useEffect(() => {
        // dispatch(fetchUsers());
        fetchUsers(); //если использовать useActions()
    }, []);
    
    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    console.log(users);
    return (
        <div>
            {users.map(user => {
                return <span key={user.id}>{user.name}</span>
            })}
        </div>
    )
};

export default UserList