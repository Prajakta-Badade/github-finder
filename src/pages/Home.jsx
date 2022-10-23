import React from 'react'
import UserSearch from '../components/users/UserSearch';
import UserResults from '../components/users/UserResults';
function Home({clearList}) {
  return (
    <>
      {/* user search component */}
      <UserSearch />
      <UserResults/>
    </>
  )
}

export default Home
