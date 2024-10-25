import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../config/Usercontext'
import { apiCall } from '../../config/Appconfig'

function TopupAccounts() {

    const [fund_bal, setFund_bal] = useState(0)
    const { login } = useContext(UserContext)
    const [loading, setLoading] = useState(false)
    const [alertmsg, setAlertmsg] = useState({ message: '', type: '' })
    const [username, setUsername] = useState('')
    const [usermsg, setUsermsg] = useState<any>('')
    const [plan_amt, setPlan_amt] = useState('0')
    const [valid, setValid] = useState(false)

    useEffect(() => {
        getBalance();
    }, [])

    const getBalance = () => {
        apiCall('get-balance-info', { user_id: login.id }).then(resp => {
            console.log(resp)
            if (resp?.success) {
                setFund_bal(resp.data.fund_balance)
            }
        })
    }

    const validateUsername = () => {
        setUsermsg(<span className='text-primary smalll'>Checking...</span>)
        apiCall('userinfo', { username }).then(resp => {
            if (resp?.success) {
                setUsermsg(<span className='text-success smalll'> {resp.data.first_name + ' ' + resp.data.last_name}</span>)
                setValid(true)
            } else {
                setUsermsg(<span className='text-danger smalll'> Invalid Username</span>)
                setValid(false)
            }
        })
    }

    const actionActivation = () => {
        setAlertmsg({ ...alertmsg, message: '' });
        if (username.trim() == '' || plan_amt == '0') {
            setAlertmsg({ message: 'Fill all fields', type: 'danger' });
            return;
        }
        setLoading(true)
        apiCall('activate', { username: username, amount: plan_amt, user_id: login.id }).then((resp: any) => {
            if (resp?.success) {
                setAlertmsg({ message: resp.message, type: 'success' })
                getBalance();
            } else {
                setAlertmsg({ message: resp.message, type: 'danger' })
            }
        }).finally(() => setLoading(false))
    }

    return (
        <>
            <div className="page-header">
                <h5>Account Activation</h5>
            </div>
            <div className='row'>
                <div className='col-sm-6 m-auto'>
                    <div className="box p-3 shadow-sm mb-2">
                        {alertmsg.message.length > 0 && <div className={'alert alert-' + alertmsg.type}>{alertmsg.message}</div>}

                        <div className="card-body">
                            <div className="mb-3 row align-items-center">
                                <label className="col-sm-3">Fund Balance</label>
                                <div className="col-sm-8 d-flex gap-3">
                                    <label className='fs-5'>
                                        <b>{fund_bal}</b>
                                    </label>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-3">Username</label>
                                <div className="col-sm-8">
                                    <input type="text"
                                        value={username}
                                        onChange={(ev) => setUsername(ev.target.value)}
                                        onBlur={() => validateUsername()}
                                        className="form-control" />
                                    <div>{usermsg}</div>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-3">Activation Amount</label>
                                <div className="col-sm-8">
                                    <select
                                        value={plan_amt}
                                        onChange={ev => setPlan_amt(ev.target.value)}
                                        className="form-select">
                                        <option value="0">Select</option>
                                        <option value="1100">Rs 1100</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <label className="col-sm-3"></label>
                                <div className="col-sm-8">
                                    <button
                                        onClick={actionActivation}
                                        disabled={loading || !valid} className="btn btn-primary">{loading ? 'Please wait...' : 'Activate'}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-danger p-2 text-white text-center' style={{ borderRadius: 3 }}>
                        Don't have sufficient Funds? <Link className='text-warning' to={'/dashboard/add-fund'}>Click here</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopupAccounts