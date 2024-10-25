import { useContext, useEffect, useState } from "react"
import UserContext from "../../config/Usercontext"
import { apiCall } from "../../config/Appconfig"

function Withdraw() {
    const { login } = useContext(UserContext)
    const [balance, setBalance] = useState(0)
    const [amount, setAmount] = useState(0)
    const [notice, setNotice] = useState({
        type: '',
        message: ''
    })

    useEffect(() => {
        loadBalance()
    }, [login.id])

    const loadBalance = async () => {
        apiCall('get-balance-info', { user_id: login.id })
            .then((result: any) => {
                if (result.success) {
                    setBalance(result.data.wallet_balance)
                }
            })
    }

    const submitForm = () => {
        setNotice({ ...notice, message: 'ggg' });
        if (amount <= 0) {
            setNotice({ type: 'danger', message: 'Please enter amount' })
            return
        } else if (amount > balance) {
            setNotice({ type: 'danger', message: 'In-sufficient wallet balance' })
            return;
        }
        apiCall('withdraw', { user_id: login.id, amount: amount })
            .then((result: any) => {
                if (result.success) {
                    setNotice({ type: 'success', message: result.message })
                } else {
                    setNotice({ type: 'danger', message: result.message })
                }
            })
    }

    return (
        <>
            <div className='page-header'>
                <h5>Fund Withdraw</h5>
            </div>
            <div className='row'>
                <div className="col-sm-6 m-auto">
                    {notice.message.length > 0 && <div className={'alert alert-' + notice.type}>{notice.message}</div>}
                    <div className="bg-3 bg-white rounded mybox">
                        <div className="box-body border-bottom">
                            <div className="row g-2 text-center">
                                <div className="col">
                                    <div className="py-4 bg-light">
                                        <h6>Main Balance</h6>
                                        <h2 className='mb-0'> {balance}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="mb-3 row">
                                <label className="col-sm-4 control-label col-form-label"> Withdrawal Amount</label>
                                <div className="col-sm-6">
                                    <input type="number"
                                        value={amount}
                                        onChange={(ev) => setAmount(parseInt(ev.target.value))}
                                        placeholder="e.g." className="form-control" />
                                    <small className="text-muted">Min withdrawal USD  </small>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-4 control-label col-form-label"> Processing Fee (10%)</label>
                                <div className="col-sm-6">
                                    <input disabled value={(amount * 0.10).toFixed(2)} className="form-control" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-4 control-label col-form-label"> Net Payment</label>
                                <div className="col-sm-6">
                                    <input
                                        value={(amount * 0.90).toFixed(2)}
                                        disabled className="form-control" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-4 control-label col-form-label"> </label>
                                <div className="col-sm-6">
                                    <button className="btn btn-primary" onClick={submitForm}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Withdraw