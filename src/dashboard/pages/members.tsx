import { useContext, useEffect, useState } from 'react'
import { apiCall } from '../../config/Appconfig'
import UserContext from '../../config/Usercontext'

function Members(props: any) {
    const { login } = useContext(UserContext)
    const [items, setItems] = useState([])

    useEffect(() => {
        loadMembers()
    }, [props.users, login.id])

    const loadMembers = () => {
        if (props.users == 'direct') {
            apiCall('direct-members', { user_id: login.id }).then(result => {
                if (result?.success) {
                    setItems(result.data)
                }
            })
        } else if (props.users == 'downline') {
            apiCall('downline-members', { user_id: login.id }).then(result => {
                if (result?.success) {
                    setItems(result.data)
                }
            })
        } else {
            setItems([]);
        }
    }
    return (
        <>
            <div className='page-header'>
                <h5>{props.title}</h5>
            </div>
            <div className='card'>
                <div className="card-header">List</div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Sponsorid</th>
                            <th>Mobile</th>
                            <th>Position</th>
                            <th>Created</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.length > 0 && items.map((item: any, sl: number) => <tr key={item.id}>
                            <td>{sl + 1}</td>
                            <td>{item.first_name + ' ' + item.last_name}</td>
                            <td>{item.username} </td>
                            <td>{item.sponsor} </td>
                            <td>{item.mobile} </td>
                            <td>{item.position == 1 ? 'LEFT' : 'RIGHT'}</td>
                            <td>{item.created}</td>
                            <td>
                                {item.ac_status == 1 ? <span className='badge bg-success'>Active</span> : <span className='badge bg-danger'>Pending</span>}
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Members