import React, { useEffect, useState } from 'react'

function UsersList (props) {
  const { getUsers } = props
  const [users, setUsers] = useState([])

  useEffect(async () => {
    const allUsers = await getUsers()
    console.log(allUsers)
    return setUsers(allUsers)
  }, [])

  console.log(users)
  return (

    <ul>
      {users.map((user) =>
        <>
          <li>My name is {user.name}</li>
          <li>It is {user.isHotpot}, that I am a hotpot</li>
        </>
      )}
    </ul>
  )
}

export default UsersList
