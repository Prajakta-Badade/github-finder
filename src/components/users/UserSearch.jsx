import React from 'react'
import { useState } from 'react';
import { GetContext } from '../../context/githubContext';
import { GetAlertContext } from '../../context/alertContext';
function UserSearch() {
    const [text, setText] = useState('');
    const {users, searchUsers, clearList } = GetContext();
    const { setAlert ,alert } = GetAlertContext();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(text == '') {
            setAlert('please enter search value', 'error');
            console.log(alert, 'alert');
        } else {
            // user search 
            searchUsers(text);
            setText('');
        }
    }
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-2 gap-8">
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="relative">
                        <input type="text" 
                        className="w-full pr-40 bg-gray-200 input input-lg text-black" 
                        placeholder="Search"
                        value={text}
                        onChange={ (e) => setText(e.target.value) }/>
                        <button type="submit" 
                        className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">Go</button>
                    </div>
                </div>
            </form>
        </div>
        {
        users.length > 0 
        && 
        <div>
            <button className="btn btn-ghost btn-lg" onClick={clearList}>clear</button>
        </div>
        }

    </div>
  )
}

export default UserSearch