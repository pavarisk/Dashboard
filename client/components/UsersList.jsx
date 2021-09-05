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
    <>
      <h1>Users List</h1>
      <ul>
        {users.map((user) =>
          <>
            <li key={user.id}>My name is {user.name}</li>
          </>
        )}
      </ul>
    </>
  )
}

export default UsersList
