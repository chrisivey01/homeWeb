
import React, {Component} from 'react'
import Sidebar from '../navbar/Sidebar'
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';

export default class Projects extends Component {


    render() {
        return (
            <div>
                <Sidebar/>

                <div className="programList">
                    <div className="programSpacing">
                        <div>
                            <Link to="/gymcalc">
                                <button type="button" className="btn btn-dark btn-lg">Gym Calculator</button>
                            </Link>
                        </div>
                        <div>
                            A gym/barbell weight calculator to assist with plate size and count
                        </div>
                    </div>

                    <div className="programSpacing">
                        <div>
                            <Link to="/patient">
                                <button type="button" className="btn btn-dark btn-lg">Patient App</button>
                            </Link>
                        </div>
                        <div>
                            This is a patient access app to look up patient names, diagnosis, and the doctors they've seen.
                            It works off MySQL DB, using Spring/REST Service calls.
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}
