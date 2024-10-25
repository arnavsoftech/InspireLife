import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import UserContext from "../../config/Usercontext";
import { apiCall } from "../../config/Appconfig";
import PageLoader from "../../components/PageLoader";
import { Plus } from "react-bootstrap-icons";

function DashboardReport() {
    const { login } = useContext(UserContext)
    const [tiles, setTiles] = useState([]);
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        loadData();
    }, [login.id])

    const loadData = () => {
        setLoader(true)
        apiCall('home', { user_id: login.id })
            .then(resp => {
                if (resp?.success) {
                    setTiles(resp.data.tiles);
                }
            }).finally(() => setLoader(false))
    };

    return (
        <div id="adsview">
            <div className="page-header">
                <h5>Welcome <b>{login.first_name + ' ' + login.last_name}</b></h5>
                <Link to={'/signup/?ref=' + login.username} target="_blank" className="btn btn-sm btn-primary"><Plus /> Add New Member</Link>
            </div>
            <div className="row mb-3">
                <div className="col-sm-4">
                    {login.ac_status == 1 ? <div className="bg-success text-white p-3 rounded-1 mb-2 d-flex justify-content-between align-items-center">
                        <div>
                            <span>Account Active</span>
                        </div>
                    </div> : <div className="bg-danger text-white p-3 rounded-1 mb-2 d-flex justify-content-between align-items-center">
                        <div>
                            <span>Account Not Active</span>
                        </div>
                        <div>
                            <Link to={'/dashboard/topup-account'} className="btn btn-sm btn-warning">Activate</Link>
                        </div>
                    </div>}

                    <div className="bg-white p-2 shadow-sm rounded">
                        <table className="table m-0 table-striped">
                            <tbody>
                                <tr>
                                    <td>Username</td>
                                    <td>{login.username}</td>
                                </tr>
                                <tr>
                                    <td>Sponsor Id</td>
                                    <td>{login.sponsor_id}</td>
                                </tr>
                                <tr>
                                    <td>Joining Package</td>
                                    <td>{login.plan_total}</td>
                                </tr>
                                <tr>
                                    <td>Activated On</td>
                                    <td>{login.ac_active_date}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className="col-sm-8">
                    {loader ? <PageLoader /> : <div className="row g-2">
                        {tiles.map((item: any, indx) => (
                            <div key={indx} className="col-6 col-sm-4">
                                <div className="card p-3 card-tiles">
                                    <div className="box-p">
                                        <p>{item.label}</p>
                                        <h4>{item.value}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>}
                </div>
            </div>

            <h5>Recent Members</h5>
            <div className="card p-3">
                <table className="table m-0">
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Username</th>
                            <th>Name</th>
                            <th>Mobile Number</th>
                            <th>Created</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}

export default DashboardReport