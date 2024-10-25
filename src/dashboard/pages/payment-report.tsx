import { useContext, useEffect, useState } from 'react'
import PageLoader from '../../components/PageLoader'
import { apiCall } from '../../config/Appconfig'
import UserContext from '../../config/Usercontext'
import { useParams } from 'react-router-dom'
import Pager from '../../components/Pager'

function PaymentReport() {
    const { login } = useContext(UserContext)
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0)
    const [title, setTitle] = useState('Transaction')
    const perPage = 50;

    const { tab } = useParams()

    useEffect(() => {
        loadItems().then(() => {
            setLoading(false)
        })
        if (tab == 'direct') setTitle('Sponsor Income');
        else if (tab == 'level') setTitle('Level Income');
        else if (tab == 'roi') setTitle('ROI Income');
        else {
            setTitle("Transaction History")
        }

    }, [tab, page, login.id])

    const loadItems = async () => {
        if (tab == undefined) {
            apiCall('payment-history', { user_id: login.id, type: 'history', page: page })
                .then((result: any) => {
                    if (result.success) {
                        setItems(result.data.items)
                        setTotal(result.data.total)
                        setPage(1)
                    }
                })
        } else {
            apiCall('payment-history', { user_id: login.id, type: tab, page: page })
                .then((result: any) => {
                    if (result.success) {
                        setItems(result.data.items)
                        setTotal(result.data.total)
                        setPage(1)
                    }
                })
        }
    }
    return (
        <>
            <div className='page-header'>
                <h5>{title} Reports</h5>
            </div>
            <div className='card card-body mb-2'>
                {loading && <PageLoader />}
                {!loading && <table className='table'>
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>CR/DR</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.length > 0 && items.map((item: any, sl) => <tr key={item.id}>
                            <td>{sl + 1}</td>
                            <td>{item.created}</td>
                            <td>{item.amount}</td>
                            <td>{item.cr_dr == 'cr' ? <span className='text-success'>CR</span> : <span className='text-danger'>DR</span>}</td>
                            <td>{item.notes}</td>
                        </tr>)}
                    </tbody>
                </table>}
            </div>
            <Pager perPage={perPage} total={total} onChange={setPage} />
        </>
    )
}

export default PaymentReport