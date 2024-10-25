import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { AppConfig } from "../config/Appconfig";
import axios from "axios";
import UserContext from "../config/Usercontext";

const Login = () => {
    const [form, setForm] = useState({
        username: '',
        password: ''
    })
    const [error, setError] = useState({ message: '', type: '' })
    const [loading, setLoading] = useState<boolean>(false)
    const { setLogin } = useContext(UserContext)
    const navigate = useNavigate();
    const [search] = useSearchParams();

    useEffect(() => {
        let us = search.get('user');
        let ps = search.get('pass');
        if (us !== null && ps !== null) {
            setForm({ username: us, password: ps })
        }
    }, [])

    const actionLogin = () => {
        if (form.username == '' || form.password == '') {
            setError({ message: 'Enter username and Password', type: 'danger' })
            return;
        }
        setLoading(true)
        let url = AppConfig.API_URL + 'login'
        axios.post(url, form).then((result: any) => {
            let resp = result.data;
            if (resp.success) {
                setError({ message: resp.message, type: 'success' });
                localStorage.setItem("_login", JSON.stringify(resp.data));
                setLogin(resp.data)
                navigate('/dashboard')
            } else {
                setError({ message: resp.message, type: 'danger' })
            }
        }).finally(() => setLoading(false))
    }

    return (
        <div className="container">
            <div className="row pt-5">
                <div className="col-sm-5 m-auto">
                    <div className="text-center mb-4">
                        <img src="/img/logo.png" width={240} />
                    </div>

                    {error.message.length > 0 && <div className={'alert alert-' + error.type}>{error.message}</div>}
                    <div className="card mb-2 border-0 shadow-sm">
                        <div className="card-body">
                            <h4 className="text-center">Account Login</h4>
                            <div className="mb-3">
                                <label>Username</label>
                                <input
                                    value={form.username}
                                    onChange={ev => setForm({ ...form, username: ev.target.value })}
                                    className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label>Password</label>
                                <input
                                    value={form.password}
                                    onChange={ev => setForm({ ...form, password: ev.target.value })}
                                    type="password" className="form-control" />
                            </div>
                            <button
                                onClick={actionLogin}
                                disabled={loading}
                                className="btn btn-primary">{loading ? 'Please wait...' : 'Login'}</button>
                        </div>
                    </div>
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            Don't have an account? <Link to={'/signup'}>
                                Click here
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;