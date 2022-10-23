import React from 'react';
import { GetContext } from '../context/githubContext';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/layouts/Spinner';
import RepoList from '../components/repos/RepoList';
import { FaCodepen, FaStore, FaUser, FaUserFriends } from "react-icons/fa";
function User() {
  const { searchSingleUser, user, loading, GetUserRepositories, repos } = GetContext();
  const params = useParams();
  const { avatar_url, bio,blog, company, created_at, email, events_url, followers, followers_url, following,
    following_url, gists_url, gravatar_id, hireable, html_url, id, location, login, name, node_id, organizations_url,
    public_gists, public_repos, received_events_url, repos_url, site_admin, starred_url, subscriptions_url, twitter_username,
    type, updated_at, url} = user;
  useEffect(()=> {
    searchSingleUser(params['login']);
    GetUserRepositories(params['login']);
  }, []);

  if(loading) {
    return <Spinner/>
  }
  return (
    <>
    <div className="w-full mx-auto lg:w-10/12">
      <div className="mb-4">
        <Link to='/' className='btn btn-ghost' >Back To Search</Link>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
        <div className="custom-card-image mb-6 md:mb-0">
          <div className="rounded-lg shadow-xl card image-full">
            <figure>
              <img src={avatar_url} alt="avtar image"/>
            </figure>
            <div className="card-body justify-end">
              <h2 className="card title mb-0">{name}</h2>
              <p>{login}</p>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <h1 className="text-3xl card-title">
            {name}
            <div className="ml 2 mr-1 badge badge-success">
              {type}
            </div>
            {hireable && (
              <div className="mx-1 badge badge-info">Hireable</div>
            )}
          </h1>
          <p>{bio}</p>
          <div className="mt-4 card-actions">
            <a href={html_url} target="_blank" 
            className="btn btn-outline">
              Visit Github Profile
            </a>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="w-full rounded-lg shadow-md bg-base-100 stats">
              { location && (
                <div className="stat">
                  <div className="stat-title text-md">Location</div>
                  <div className="text-lg stat-value">{location}</div>
                </div>
              )}
            </div>
            <div className="w-full rounded-lg shadow-md bg-base-100 stats">
              { blog && (
                <div className="stat">
                  <div className="stat-title text-md">Website</div>
                  <div className="text-lg stat-value">
                    <a href={`https://${blog}`} target="_blank">{blog}</a>
                  </div>
                </div>
              )}
            </div>
            <div className="w-full rounded-lg shadow-md bg-base-100 stats">
              { twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md">Twitter</div>
                  <div className="text-lg stat-value">
                    <a href={`https://twitter.com/${blog}`} target="_blank">{twitter_username}</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 md:gap-8 py-5 mb-6 rouded-lg shadow-md bg-base-100 stat">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUser className="text-3xl md:text-5xl "/>
          </div>
          <div className="stat-title pr-5">
            Followers
          </div>
          <div className="stat-value pr-5 text-3xl md:text-4xl">
            {followers}
          </div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUserFriends className="text-3xl md:text-5xl "/>
          </div>
          <div className="stat-title pr-5">
            Following
          </div>
          <div className="stat-value pr-5 text-3xl md:text-4xl">
            {following}
          </div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaCodepen className="text-3xl md:text-5xl "/>
          </div>
          <div className="stat-title pr-5">
            Public Repositories
          </div>
          <div className="stat-value pr-5 text-3xl md:text-4xl">
            {public_repos}
          </div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaStore className="text-3xl md:text-5xl "/>
          </div>
          <div className="stat-title pr-5">
            Public Gists
          </div>
          <div className="stat-value pr-5 text-3xl md:text-4xl">
            {public_gists}
          </div>
        </div>
      </div>
      <RepoList repos={repos}/>
    </div>
    </>
  )
}

export default User