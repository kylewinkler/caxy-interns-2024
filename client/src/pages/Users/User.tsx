import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"

const User = () => {
  const [userData, setUserData] = useState<any[]>()

  const fetchUsers = () => {
    axios
      .get("http://localhost:8000/user")
      .then((response) => {
        setUserData(response.data)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  console.log({ userData })

  return (
    <>
      <h1>Users</h1>
      <ul>
        {userData?.map((user, index) => (
          <li key={index}>{`${user.firstName} ${user.lastName}`}</li>
        )) ?? <p>No users found</p>}
      </ul>
    
    </>
  )
}
export default User
