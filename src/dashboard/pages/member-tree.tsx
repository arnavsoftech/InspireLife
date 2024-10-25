'use client'

import { useContext, useEffect, useState } from "react"
import UserContext from "../../config/Usercontext";
import { apiCall } from "../../config/Appconfig";
import PageLoader from "../../components/PageLoader";

type User = {
    id: number,
    name: string,
    username: string,
    mobile: any,
    image: string,
    sponsor_id: string,
    sponsor_name: string,
    plan: number,
    placement_id: string,
    doj: string
}


const People = ({ item, onClick }: { item: User, onClick: (id: number) => void }) => {
    return (
        <div className="userinfo">
            <img onClick={() => onClick(item.id)} className="img-profile rounded-circle" src={'/img/' + item.image} title="" />
            <div className="text-center img-name" style={{ height: 65 }}>
                <span className="small">{item.username}</span></div>
            <div className="userdetails">
                <div className="us-row">
                    <span>Sponsor ID: </span>
                    <span>{item.sponsor_id}</span>
                </div>
                <div className="us-row">
                    <span>Sponsor name: </span>
                    <span>{item.sponsor_name}</span>
                </div>
                <div className="us-row">
                    <span>Placement ID: </span>
                    <span>{item.placement_id}</span>
                </div>
                <div className="us-row">
                    <span>Username: </span>
                    <span>{item.username}</span>
                </div>
                <div className="us-row">
                    <span>Name: </span>
                    <span>{item.name}</span>
                </div>
                <div className="us-row">
                    <span>Active Plan: </span>
                    <span>{item.plan}</span>
                </div>
                <div className="us-row">
                    <span>DOJ: </span>
                    <span>{item.doj}</span>
                </div>
                <div className="us-row">
                    <span>Matching: </span>
                    <span>-</span>
                </div>
            </div>
        </div>
    )
}

export default function MemberTree() {
    const [users, setUsers] = useState<User[]>([]);
    const { login } = useContext(UserContext);
    const [loader, setLoader] = useState(true)
    const [userId, setUserId] = useState(0)

    useEffect(() => {
        setUserId(login.id)
    }, [login.id])

    useEffect(() => {
        loadData();
    }, [userId])

    const loadData = () => {
        setLoader(true)
        apiCall('member-tree', { user_id: userId }).then(resp => {
            if (resp?.success) {
                setUsers(resp.data);
            }
        }).finally(() => setLoader(false))
    }

    return (
        <>
            <div className="page-header">
                <h5>Member Tree</h5>
            </div>
            {loader && <PageLoader />}
            {!loader && <div className="container" style={{ width: '1050px' }}>
                <div className="d-flex justify-content-center">
                    <People item={users[0]} onClick={(ev) => setUserId(ev)} />
                </div>
                <div className="divr" style={{ width: '50%' }}></div>
                <div className="d-flex justify-content-around">
                    <div><People item={users[1]} onClick={(ev) => setUserId(ev)} /></div>
                    <div><People item={users[2]} onClick={(ev) => setUserId(ev)} /></div>
                </div>
                <div className="d-flex justify-content-around">
                    <div className="divr" style={{ width: '25%' }}></div>
                    <div className="divr" style={{ width: '25%' }}></div>
                </div>
                <div className="d-flex justify-content-around">
                    <div><People item={users[3]} onClick={(ev) => setUserId(ev)} /></div>
                    <div><People item={users[4]} onClick={(ev) => setUserId(ev)} /></div>
                    <div><People item={users[5]} onClick={(ev) => setUserId(ev)} /></div>
                    <div><People item={users[6]} onClick={(ev) => setUserId(ev)} /></div>
                </div>
                <div className="d-flex justify-content-around">
                    <div className="divr" style={{ width: '12.5%' }}></div>
                    <div className="divr" style={{ width: '12.5%' }}></div>
                    <div className="divr" style={{ width: '12.5%' }}></div>
                    <div className="divr" style={{ width: '12.5%' }}></div>
                </div>
                <div className="d-flex last-row justify-content-around">
                    <div><People item={users[7]} onClick={(ev) => setUserId(ev)} /></div>
                    <div><People item={users[8]} onClick={(ev) => setUserId(ev)} /></div>
                    <div><People item={users[9]} onClick={(ev) => setUserId(ev)} /></div>
                    <div><People item={users[10]} onClick={(ev) => setUserId(ev)} /></div>
                    <div><People item={users[11]} onClick={(ev) => setUserId(ev)} /></div>
                    <div><People item={users[12]} onClick={(ev) => setUserId(ev)} /></div>
                    <div><People item={users[13]} onClick={(ev) => setUserId(ev)} /></div>
                    <div><People item={users[14]} onClick={(ev) => setUserId(ev)} /></div>
                </div>
                <div style={{ marginBottom: 100 }}></div>
            </div>}
        </>
    )
} 