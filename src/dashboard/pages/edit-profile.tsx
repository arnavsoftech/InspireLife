import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import PageLoader from '../../components/PageLoader'
import { AppConfig } from '../../config/Appconfig'
import UserContext from '../../config/Usercontext'
import { Button, Card } from 'react-bootstrap'

function EditProfile() {
    const { login } = useContext(UserContext)
    const [loader, setLoader] = useState(true)
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email_id: '',
        mobile: '',
        city_name: '',
        address: '',
        district: '',
        bank_edit: 1,
        trc20_adrs: ''
    })

    const [saving, setSaving] = useState(false)
    const [button, setButton] = useState('SUBMIT')
    const [notice, setNotice] = useState({
        type: '',
        message: ''
    })

    const navigate = useNavigate()

    useEffect(() => {
        const getDetails = () => {
            let url = AppConfig.API_URL + 'get-user'
            axios.post(url, { user_id: login.id })
                .then(result => {
                    let resp = result.data;
                    if (resp.success) {
                        let us = resp.data;
                        setUser({ first_name: us.first_name, last_name: us.last_name, mobile: us.mobile, address: us.address, city_name: us.city_name, email_id: us.email_id, district: us.district, bank_edit: us.bank_edit, trc20_adrs: us.trc20_adrs })
                    }
                }).finally(() => setLoader(false))
        }
        if (login.id > 0)
            getDetails()
    }, [login.id])

    const updateProfile = () => {
        setSaving(true)
        let url = AppConfig.API_URL + 'update-profile'
        setButton("SAVING...")
        axios.post(url, { user_id: login.id, user: user }).then(result => {
            let resp = result.data;
            if (resp.success) {
                setNotice({ type: 'success', message: resp.message })
            } else {
                setNotice({ type: 'danger', message: resp.message })
            }
            setButton("SAVE")
        }).catch(er => console.log('update-profile', er))
            .finally(() => setSaving(false))

    }

    if (loader) {
        return (
            <>
                <div className="page-header">
                    <h5>Edit Profile</h5>
                </div>
                <hr />
                <Card>
                    <PageLoader />
                </Card>
            </>
        )
    }

    return (
        <>
            <div className="page-header">
                <h5>Edit Profile</h5>
            </div>
            <Card>
                {notice.message.length > 0 && <div className={'alert alert-' + notice.type}>{notice.message}</div>}
                <div className="box-p p-4">
                    <h5>Personal Details</h5>
                    <hr />
                    <div className="form-group row">
                        <label className="col-sm-2 control-label col-form-label">Name <span className="required">*</span></label>
                        <div className="col-sm-3">
                            <input
                                value={user.first_name || ''}
                                disabled
                                onChange={ev => setUser({ ...user, first_name: ev.target.value })}
                                className="form-control" />
                        </div>
                        <label className="col-sm-2 control-label col-form-label">Mobile <span className="required">*</span></label>
                        <div className="col-sm-3">
                            <input
                                value={user.last_name}
                                onChange={ev => setUser({ ...user, last_name: ev.target.value })}
                                className="form-control" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 control-label col-form-label">Email Id<span className="required">*</span></label>
                        <div className="col-sm-3">
                            <input
                                value={user.email_id}
                                onChange={ev => setUser({ ...user, email_id: ev.target.value })}
                                className="form-control" />
                        </div>
                        <label className="col-sm-2 control-label col-form-label">Mobile no<span className="required">*</span></label>
                        <div className="col-sm-3">
                            <input
                                value={user.mobile}
                                disabled
                                onChange={ev => setUser({ ...user, mobile: ev.target.value })}
                                className="form-control" />
                        </div>

                    </div>

                    <h5>Contact Details</h5>
                    <hr />
                    <div className="form-group row">
                        <label className="col-sm-2 control-label col-form-label">City <span className="required">*</span></label>
                        <div className="col-sm-3">
                            <input
                                value={user.city_name}
                                onChange={ev => setUser({ ...user, city_name: ev.target.value })}
                                className="form-control" />
                        </div>
                        <label className="col-sm-2 control-label col-form-label">District <span className="required">*</span></label>
                        <div className="col-sm-3">
                            <input
                                value={user.district}
                                onChange={ev => setUser({ ...user, district: ev.target.value })}
                                className="form-control" />
                        </div>

                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 control-label col-form-label">Address <span className="required">*</span></label>
                        <div className="col-sm-8">
                            <input
                                value={user.address}
                                onChange={ev => setUser({ ...user, address: ev.target.value })}
                                className="form-control" />
                        </div>
                    </div>
                    <div className="row">
                        <label className="col-sm-2"></label>
                        <div className="col-sm-8">
                            <Button onClick={updateProfile} disabled={saving} className='me-2'>{button}</Button>
                            <Button onClick={() => navigate('/')} color='secondary'>CANCEL</Button>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default EditProfile