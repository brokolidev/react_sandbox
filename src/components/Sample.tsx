import sample from "./Sample.module.css";

interface User {
    name:string,
    email:string
}

function Sample(user:User) {
  return (
      <>
          <p className={sample.userName}>Sample Name : {user.name}</p>
          <p className={sample.userEmail}>Sample Name : {user.email}</p>
      </>
  )
}

export default Sample
