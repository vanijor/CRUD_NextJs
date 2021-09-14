import { useEffect, useState } from "react"
import axios from 'axios'

function Users({users}) {
    //UTLIZANDO CLIENTE SIDE RENDER
/*     const [ users, setUsers ] = useState([])

    const fetchUsers = async () => {
        const response = await axios.get(
            ('http://jsonplaceholder.typicode.com/users')
        )
        const data = await response.data
        
        setUsers(data)
    }

    console.log(users)

    useEffect(() => {
        fetchUsers()
    }, [])
     */
    return (
        <div>
            {users.map((user) => (
                <div>{user.name}</div>
            ))}
        </div>
    )
}
//UTLIZANDO SERVER SIDE RENDER
export async function getServerSideProps(context) {
    const response = await axios.get(
        'http://jsonplaceholder.typicode.com/users'
    )

    const data = await response.data

    return {
        props: { users: data },
    }
}
export default Users
