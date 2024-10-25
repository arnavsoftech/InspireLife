import { useContext, useEffect, useState } from "react"
import UserContext from "../../config/Usercontext"
import { apiCall } from "../../config/Appconfig"

function FundTransferHistory() {

    const { login } = useContext(UserContext)
    const [items, setItems] = useState([])

    useEffect(() => {
        loadItems()
    }, [login.id])

    const loadItems = () => {
        apiCall('fund-transfer-history', { user_id: login.id })
            .then((result: any) => {
                if (result.success) {
                    setItems(result.data)
                }
            })
    }
    return (
        <>
            <div className='page-header'>
                <h5>Fund Transfer History</h5>
            </div>
            <div className="card">
                <div className="card-header">List</div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>Date</th>
                            <th>Notes</th>
                            <th>Amount</th>
                            <th>CR/DR</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.length > 0 && items.map((item: any, sl: number) => <tr key={item.id}>
                            <td>{sl + 1}</td>
                            <td>{item.created}</td>
                            <td>{item.notes.toUpperCase()}</td>
                            <td>{item.amount}</td>
                            <td>{item.cr_dr == 'cr' ? <span className='text-success'>CR</span> : <span className='text-danger'>DR</span>}</td>
                            <td>{item.comments}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default FundTransferHistory