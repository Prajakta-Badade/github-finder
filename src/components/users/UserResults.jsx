import React from 'react'
import Spinner from '../layouts/Spinner';
import UserItem from './UserItem';
import { GetContext } from '../../context/githubContext';
function UserResults() {
    const { users, loading } = GetContext();

    if(loading) {
        return <Spinner/>
    } else {
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                { users && users.map((user) => <UserItem key={user.id} user={user}/> || '' )}
            </div>
        )
    }

}

export default UserResults