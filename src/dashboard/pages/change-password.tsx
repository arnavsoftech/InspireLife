import { useContext, useState } from 'react'
import UserContext from '../../config/Usercontext'
import { apiCall } from '../../config/Appconfig'
import { Button } from 'react-bootstrap'

function ChangePassword() {
    const { login } = useContext(UserContext)
    const [form, setForm] = useState({
        oldpass: '',
        newpass: '',
        cnfpass: ''
    })
    const [notice, setNotice] = useState({ type: '', message: '' })

    const submitForm = () => {
        if (form.oldpass == '' || form.newpass == '') {
            setNotice({ type: 'danger', message: 'Please fill all fields' })
            return
        }
        if (form.newpass != form.cnfpass) {
            setNotice({ type: 'danger', message: 'New password and Confirm password not matching' })
            return
        }
        apiCall('change-password',
            { old_pass: form.oldpass, new_pass: form.newpass, user_id: login.id })
            .then((result: any) => {
                if (result.success) {
                    setNotice({ type: 'success', message: result.message })
                    setForm({ oldpass: '', newpass: '', cnfpass: '' })
                } else {
                    setNotice({ type: 'danger', message: result.message })
                }
            })
    }

    return (
        <>
            <div className='page-header'>
                <h5>Change Password</h5>
            </div>
            <div className='row'>
                <div className='col-sm-5'>
                    {notice.message.length > 0 && <div className={'alert alert-' + notice.type}>{notice.message}</div>}
                    <div className='card p-3'>
                        <div className='mb-3'>
                            <label className='mb-1'>Old Password</label>
                            <input
                                type="password"
                                value={form.oldpass}
                                onChange={(ev) => setForm({ ...form, oldpass: ev.target.value })}
                                className='form-control' placeholder="Old Password" />
                        </div>
                        <div className='mb-3'>
                            <label className='mb-1'>New Password</label>
                            <input
                                type="password"
                                value={form.newpass}
                                onChange={(ev) => setForm({ ...form, newpass: ev.target.value })}
                                className='form-control' placeholder="New Password" />
                        </div>
                        <div className='mb-3'>
                            <label className='mb-1'>Confirm Password</label>
                            <input
                                type="password"
                                value={form.cnfpass}
                                onChange={(ev) => setForm({ ...form, cnfpass: ev.target.value })}
                                className='form-control' placeholder="Confirm Password" />
                        </div>
                        <Button onClick={submitForm} >SUBMIT</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChangePassword