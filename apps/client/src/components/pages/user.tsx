import { useParams } from "react-router-dom"

export function User() {
  // This component will render for the "/users/:id" route
  const { id } = useParams();
  console.log(id)

  return <div>User {id}</div>
}
