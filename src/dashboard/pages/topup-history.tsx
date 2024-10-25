'use client'
import { useContext, useEffect, useState } from "react"
import PageLoader from "../../components/PageLoader"
import UserContext from "../../config/Usercontext"
import { apiCall } from "../../config/Appconfig"
import Pager from "../../components/Pager";

function TopupHistory() {
    const [loader, setLoader] = useState(true)
    const [items, setItems] = useState([])
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(1)
    const { login } = useContext(UserContext)
    const perPage = 50;

    useEffect(() => {
        loadData();
    }, [page])

    const loadData = () => {
        apiCall('topup-history', { user_id: login.id, page: page, per_page: perPage }).then((resp: any) => {
            console.log(resp.data);
            if (resp.success) {
                setItems(resp.data.items)
                setTotal(parseInt(resp.data.total));
            }
        }).finally(() => setLoader(false))
    }

    return (
        <>
            <div className='page-header'>
                <h5>Topup History</h5>
            </div>
            {loader && <PageLoader />}
            {!loader && <><div className="card mb-3">
                <div className="card-header">List</div>
                <table className='table m-0'>
                    <thead>
                        <tr>
                            <th>Sl no</th>
                            <th>Member Id</th>
                            <th>Amount</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item: any, sl: number) => (
                            <tr key={item.id}>
                                <td>{((page - 1) * perPage) + (sl + 1)}</td>
                                <td>{item.username}</td>
                                <td>{item.act_info}</td>
                                <td>{item.created}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
                {total > perPage && <Pager total={total} perPage={perPage} onChange={setPage} />}
            </>}
        </>
    )
}

export default TopupHistory