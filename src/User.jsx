import React from 'react'

const User = (props) => {
  const { error, user } = props.request;

  if (error) {
    return <div>Error: {error.message}</div>
  }
  else {
    return (
      <div>
        <div>
          <h1>
            <a href={user.html_url} target="_blank">{user.name}</a>
          </h1>
        </div>
        
        <div>
          <img src={user.avatar_url} />
        </div>
      </div>
    )
  }
}

export default User
