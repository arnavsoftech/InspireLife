import { Card, Button } from 'react-bootstrap'

function AddFunds() {
    return (
        <>
            <div className="page-header">
                <h5>Deposit Funds</h5>
            </div>
            <div id="wallet" className="hgradiant position-relative logo-box footer-margin">
                <div className="row">
                    <div className="col-sm-8 m-auto">
                        {/* <Alert severity="info">Hello </Alert> */}
                        <Card>
                            <div className="box-body py-4">
                                <div className="form-group mb-3 row">
                                    <label className="col-sm-4 text-end">Current Balance </label>
                                    <div className="col-sm-6">
                                        <h6 className="form-check-label">

                                        </h6>
                                    </div>
                                </div>
                                <div className="form-group mb-3 row align-items-center">
                                    <label className="col-sm-4 text-end">Select Coin</label>
                                    <div className="col-sm-8">
                                        <label className="btn btn-outline-primary px-2">
                                            <input checked className="form-check-input" type="radio" name="pay_type" value="BUSD" />
                                            BUSD
                                        </label>
                                        <label className="btn btn-outline-primary px-2">
                                            <input className="form-check-input" type="radio" name="pay_type" value="USDT" />
                                            USDT
                                        </label>
                                        <label className="btn btn-outline-primary px-2">
                                            <input className="form-check-input" type="radio" name="pay_type" value="MATIC" />
                                            MATIC
                                        </label>

                                    </div>
                                </div>
                                <div className="form-group mb-3 row">
                                    <label className="col-sm-4 control-label">Amount</label>
                                    <div className="col-sm-6">
                                        <input type="number" v-model="amount" name="amount" className="form-control" />
                                        <span className="small text-muted">Min. 200</span>
                                    </div>
                                </div>
                                <div className="form-group mb-3 row">
                                    <label className="col-sm-4 control-label">Amount in </label>
                                    <div className="col-sm-6">
                                        <input type="number" v-model="usd_amt" readOnly className="form-control" />
                                        <span className="small text-muted">1 USD = </span>
                                    </div>
                                </div>
                                <div className="form-group mb-3 row">
                                    <label className="col-sm-4 col-form-label"></label>
                                    <div className="col-sm-5">
                                        <Button variant="contained" >Submit</Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </ >
    )
}

export default AddFunds