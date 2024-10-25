import { useContext, useEffect, useState } from 'react'
import UserContext from '../../config/Usercontext'
import { apiCall } from '../../config/Appconfig'
import PageLoader from '../../components/PageLoader'

function WithdrawHistory() {

    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])
    const { login } = useContext(UserContext)

    useEffect(() => {
        loadData();
    }, [login.id])

    const loadData = () => {
        setLoading(true)
        apiCall('withdraw-history', { user_id: login.id })
            .then((result: any) => {
                if (result.success) {
                    setItems(result.data)
                }
            }).finally(() => setLoading(false))
    }

    return (
        <>
            <div className='page-header'>
                <h5>Withdraw History</h5>
            </div>
            <div className='card'>
                <div className="card-header"><b>List</b></div>
                {loading && <PageLoader />}
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>Req. Amount</th>
                            <th>Rcv. Amount</th>
                            <th>Wallet Address</th>
                            <th>Created</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.length > 0 && items.map((item: any, sl: number) => <tr key={item.id}>
                            <td>{sl + 1}</td>
                            <td>{item.amount}</td>
                            <td>{item.paid_total}</td>
                            <td>{item.wallet_adrs}</td>
                            <td>{item.created}</td>
                            <td>
                                {item.status == 0 && <span className='badge bg-warning'>Pending</span>}
                                {item.status == 1 && <span className='badge bg-success'>Approved</span>}
                                {item.status == 2 && <span className='badge bg-danger'>Declined</span>}
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default WithdrawHistory