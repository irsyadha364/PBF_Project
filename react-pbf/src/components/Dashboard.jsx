import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="col-md-6 p-5">
                <h2 className="display6 fw-bolder mb-5">DASHBOARD</h2>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mt-4 rounded-pill">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Dashboard;