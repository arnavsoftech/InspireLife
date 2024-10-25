import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import UserContext from '../../config/Usercontext'
import { AppConfig, apiCall } from '../../config/Appconfig'
import { Button } from 'react-bootstrap'

function FundTransfer() {
    const [balance, setBalance] = useState("0.00")
    const { login } = useContext(UserContext)
    const [found, setFound] = useState(false)
    const [errmsg, setErrmsg] = useState('')
    const [notice, setNotice] = useState({
        type: '',
        message: ''
    })
    const [form, setForm] = useState({
        from_id: login.id,
        amount: '',
        to_id: ''
    })
    const [username, setUsername] = useState('')

    useEffect(() => {
        getBalance()
    }, [login.id])

    const getBalance = () => {
        apiCall('get-balance-info', { user_id: login.id })
            .then((result: any) => {
                console.log(result)
                if (result.success)
                    setBalance(result.data.fund_balance)
            })
    }

    const doSearch = () => {
        if (username !== '') {
            let url = AppConfig.API_URL + 'userinfo'
            axios.post(url, { username: username }).then(result => {
                const resp = result.data;
                if (resp.success) {
                    let us = resp.data;
                    setErrmsg(us.first_name + ' ' + us.last_name)
                    setFound(true)
                    setForm({ ...form, to_id: us.id })
                } else {
                    setFound(false)
                    setErrmsg('Username is invalid. Try again')
                    setForm({ ...form, to_id: '' })
                }
            })
        }
    }

    const submitForm = () => {
        if (username == '') {
            setNotice({ type: 'danger', message: 'Please fill receiver userid' })
            return;
        }
        if (!found) {
            setNotice({ type: 'danger', message: 'Userid is invalid' })
            return;
        }
        if (parseFloat(form.amount) < 0) {
            setNotice({ type: 'danger', message: 'Please enter amoun to transfer' })
            return;
        }
        apiCall('fund-transfer', form).then((result: any) => {
            if (result.success) {
                setNotice({ type: 'success', message: result.message })
                setForm({ ...form, amount: '', to_id: '' })
                setUsername('')
                getBalance();
            } else {
                setNotice({ type: 'danger', message: result.message })
            }
        })

    }

    return (
        <>
            <div className="page-header">
                <h5>Fund Transfer</h5>
            </div>
            <div id="origin" className="row">
                <div className="col-sm-6">
                    {notice.message.length > 0 && <div className={'alert alert-' + notice.type}>{notice.message} </div>}
                    <div className="card">
                        <div className="p-3 align-items-center" id="funds">
                            <div className="form-group row align-items-center">
                                <label className="col-sm-4 control-label">Fund Balance </label>
                                <div className="col-md-8">
                                    <i className="fa fa-usd"></i> <span className="fs-5">{balance + ''}</span>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 control-label">Amount <span className="required">*</span> </label>
                                <div className="col-md-8">
                                    <input
                                        value={form.amount}
                                        onChange={ev => setForm({ ...form, amount: ev.target.value })}
                                        className="form-control" type="number" placeholder="0.00" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-4 control-label">Transfer To <span className="required">*</span></label>
                                <div className="col-sm-7">
                                    <input
                                        value={username}
                                        onChange={ev => setUsername(ev.target.value)}
                                        onBlur={doSearch}
                                        className="form-control text-uppercase" type="text" placeholder="Username" />
                                    {found == false && errmsg.length > 0 && <div className='text-danger'>{errmsg}</div>}
                                    {found == true && errmsg.length > 0 && <div className='text-success'>{errmsg}</div>}
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-4"></div>
                                <div className="col-md-8 d-flex space">
                                    <button className='btn btn-primary me-2' onClick={submitForm}>Submit</button>
                                    <Button type="reset" className="btn btn-danger">Cancel</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FundTransfer