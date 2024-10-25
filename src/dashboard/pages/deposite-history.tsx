import { useContext, useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import UserContext from '../../config/Usercontext';
import { apiCall } from '../../config/Appconfig';
import PageLoader from '../../components/PageLoader';

function DepositeHistory() {
    const [items, setItems] = useState([])
    const [loader, setLoader] = useState(true);
    const { login } = useContext(UserContext)

    useEffect(() => {
        loadData();
    }, [login.id])

    const loadData = async () => {
        setLoader(true)
        apiCall('deposit-history', { user_id: login.id })
            .then((resp: any) => {
                console.log(resp.data)
                if (resp.success) {
                    setItems(resp.data)
                }
            }).finally(() => setLoader(false))
    }

    return (
        <>
            <div className='page-header'>
                <h5>Deposite History</h5>
            </div>
            <Card>
                <div className='card-header'><b>List</b></div>
                {loader && <PageLoader />}
                {!loader && <table className='table'>
                    <thead>
                        <tr>
                            <th>Sl no</th>
                            <th>Amount</th>
                            <th>Txn No</th>
                            <th>Comments</th>
                            <th>Created</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item: any, sl: number) => (
                            <tr key={sl}>
                                <td>{sl + 1}</td>
                                <td>{item.amount}</td>
                                <td>{item.txn_no}</td>
                                <td>{item.comments}</td>
                                <td>{item.created}</td>
                                <td>
                                    {item.status == 1 && <span className='badge bg-success'>Success</span>}
                                    {item.status == 0 && <span className='badge bg-warning'>Pending</span>}
                                    {item.status == 2 && <span className='badge bg-danger'>Rejected</span>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>}
            </Card>
        </>
    )
}

export default DepositeHistory