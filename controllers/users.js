import { v4 as uuidv4 } from 'uuid'

let users = []

export const getUsers = (req, res) => {
  res.send(users)
}

export const createUser = (req, res) => {
  const userID = uuidv4()
  const user = req.body
  //   ...user is the spread operator
  // learn
  const userWithId = { ...user, id: userID }
  users.push(userWithId)
  res.send('User Added' + user.firstName)
}

export const getUserById = (req, res) => {
  const { id } = req.params
  const foundUser = users.find((user) => user.id == id)
  res.send(foundUser)
}

export const deleteUser = (req, res) => {
  const { id } = req.params

  users = users.filter((user) => user.id != id)

  res.send('User Deleted id: ${id}')
}

export const updateUser = (req, res) => {
  const { id } = req.params
  const { firstName, lastName, age } = req.body

  const user = users.find((user) => user.id == id)

  if (firstName) user.firstName = firstName
  if (lastName) user.lastName = lastName
  if (age) user.age = age

  res.send('User Updated')
}
