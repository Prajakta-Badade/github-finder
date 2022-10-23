import React from 'react'
import ReposItem from './ReposItem';
function RepoList({repos}) {
  return (
    <div className="rounded-lg shadow-lg card-bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          Latest reposetories
        </h2>
        {repos.map((repo)=> <ReposItem repo={repo} key={repo.id}/>)}
      </div>
    </div>
  )
}

export default RepoList