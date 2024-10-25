import { useContext, useState } from 'react'
import UserContext from '../../config/Usercontext'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { AppConfig } from '../../config/Appconfig'
import { Restapi } from '../../config/Restapi'

function FundRequest() {
    const { login } = useContext(UserContext)
    const [saving, setSaving] = useState(false)
    const [alert, setAlert] = useState({
        variant: '',
        message: ''
    })
    const [form, setForm] = useState<any>({
        amount: '',
        date: '',
        user_id: login.id,
        image: '',
        txn_no: ''
    })

    const encodeImageFileAsURL = (file: any) => {
        var reader = new FileReader();
        reader.onloadend = function () {
            setForm({ ...form, image: reader.result });
        }
        reader.readAsDataURL(file);
    }

    const submitForm = () => {
        if (form.amount == '' || form.date == '') {
            setAlert({ variant: 'error', message: 'Fill all required fields' })
            return
        }
        setAlert({ variant: 'info', message: 'Uploading... please wait!!' })
        setSaving(true)

        const form_data = new FormData();
        form_data.append("user_id", login.id + '')
        form_data.append("amount", form.amount)
        form_data.append("date", form.date)
        form_data.append("txn_no", form.txn_no);
        form_data.append("image", form.image);

        let url = AppConfig.API_URL;
        url = url.replace('call', 'uploads');
        axios({
            method: 'POST',
            url: url,
            data: form_data
        }).then((result: any) => {
            let resp: Restapi = result.data;
            if (resp?.success) {
                setAlert({ variant: 'success', message: resp.message })
                setForm({ ...form, amount: '', date: '', txn_no: '' })
            } else {
                setAlert({ variant: 'error', message: resp.message })
            }
        }).finally(() => setSaving(false))
    }

    return (
        <>
            <div className='page-header'>
                <h5>Fund Request</h5>
            </div>
            <div className='row'>
                <div className='col-sm-5'>
                    {alert.message.length > 0 && <div className={'alert alert-' + alert.variant} >{alert.message}</div>}
                    <div className='card p-3'>
                        <div className='mb-2 row align-items-center'>
                            <div className='col-sm-4'>
                                <label>Request Amount <span className='text-danger'>*</span> </label>
                            </div>
                            <div className='col-sm-8'>
                                <input
                                    type="number"
                                    value={form.amount}
                                    onChange={ev => setForm({ ...form, amount: ev.target.value })}
                                    className='form-control' placeholder='0.00' />
                            </div>
                        </div>
                        <div className='mb-2 row align-items-center'>
                            <div className='col-sm-4'>
                                <label>Transaction Date <span className='text-danger'>*</span></label>
                            </div>
                            <div className='col-sm-8'>
                                <input type="date"
                                    value={form.date}
                                    onChange={ev => setForm({ ...form, date: ev.target.value })}
                                    className='form-control' />
                            </div>
                        </div>
                        <div className='mb-2 row align-items-center'>
                            <div className='col-sm-4'>
                                <label>Txn No <span className='text-danger'>*</span></label>
                            </div>
                            <div className='col-sm-8'>
                                <input type="text"
                                    value={form.txn_no}
                                    onChange={ev => setForm({ ...form, txn_no: ev.target.value })}
                                    className='form-control' />
                            </div>
                        </div>
                        <div className='mb-2 row align-items-center'>
                            <div className='col-sm-4'>
                                <label>Screenshot</label>
                            </div>
                            <div className='col-sm-8'>
                                <input type="file"
                                    accept="image/*"
                                    onChange={ev => {
                                        if (ev.target.files && ev.target.files?.length > 0) {
                                            // setFile_selected(ev.target.files[0]);
                                            encodeImageFileAsURL(ev.target.files[0])
                                        }
                                    }} className='form-control' />
                            </div>
                        </div>
                        <div className='mb-2 row align-items-center'>
                            <div className='col-sm-4'>
                                <label></label>
                            </div>
                            <div className='col-sm-8'>
                                <Button
                                    onClick={submitForm}
                                    disabled={saving}
                                    className="btn btn-primary">Submit</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FundRequest