import { useEffect, useState } from 'react'

import Button from '../components/Button'
import Title from '../components/Title'

type User = {
  name :string
  age :number
}

type Character = {
  id :number
  firstName :string
  lastName :string
  fullName :string
  title :string
  family :string
  image :string
  imageUrl :string
}

const Home = () :JSX.Element => {
  const [name, setName] = useState<string>("")
  const [names, setNames] = useState<string[]>([])
  const [users, setUsers] = useState<User[]>([
    {
      name: "jacky",
      age: 22
    },
    {
      name: "nicolas",
      age: 22
    }
  ])

  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    setName("benoit")
    setNames(["albert1", "albert2"])
    setUser({
      name: "Nicolas",
      age: 22
    })
  }, [])


  return (
    <>
      <Title>
        <h1>{user?.name}</h1>
        {/* => equivalent a if (!user) {
          return null
        } else {
          return user.name
        } */}
      </Title>
      {names.map(n => (
        <p key={n}>{n}</p>
      ))}
      <Button
        label="Click me!"
        backgroundColor="salmon"
        handleCLick={() => alert("Hello there")}
      />

      <Button
        label="Click me!"
        backgroundColor="teal"
      />

      <Button
        label="Click me!"
        backgroundColor="tomato"
      />

      <Button
        label="Click me!"
        backgroundColor="aqua"
      />
    </>
  )
}

export default Home
