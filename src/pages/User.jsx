// import React from 'react'
// import React, { useState } from "react";
// import axios from "axios";

// export default function User() {
//   return (
//     <div>
      
//     </div>
//   )
// }
import Base from "../components/Base";
import axios from "axios";
import {Navbar} from "../components/ui";
import React from "react";
import { useState } from 'react';


function User() {
  const [users, setUsers] = useState([])
  const getData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const result = res.data;
        // this.setState({ persons });
        console.log(result)
        setUsers(result)

      })
  }
  return (
    <div className="User">
      { users && users.length > 0 ? ('данные пришли'): ('данных нет') }
      <button onClick={ getData }>click</button>
      <ul>
        { users && users.length > 0 ? users.map(user => <li key={ user['id'] }>{user['name']}</li>): ('данных нет') } 
      </ul>
    </div>
  );
}

export default User;
