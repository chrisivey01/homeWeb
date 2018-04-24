import React,{Component} from 'react'
import Sidebar from '../navbar/Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';

const API = 'http://localhost:8080/';

export default class Patient extends Component{
    constructor(props){
        super(props)

        this.state ={
            patient: [],
            patientList:[],
            patientIDRegistered:'',
            patientID:'',
            firstName:'',
            lastName:'',
            reason:'',
            doctor:'',

        }

    }

    //fetch get
    handleClick = () => {
        fetch(API + 'patient/' + this.state.patientIDRegistered)
            .then(data => data.json())
            .then((data) => this.setState({ patient: data }));
    }

    loadTable = () => {

        fetch(API + 'patient/')
            .then(data => data.json())
            .then(parsedJSON => parsedJSON.map(patient => (
                {
                    id: patient.id,
                    name: patient.firstName,
                    last: patient.lastName
                }
            )))
            .then(patientList => this.setState({
                patientList
            }))
    }

    //sends off to server/database by fetch API
    patientInput = () => {
        let {firstName, lastName, reason, doctor} = this.state;

        fetch(API + 'patient/',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                reason: reason,
                doctor: doctor,
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson.success;
            })
            .catch((error) => {
                console.error(error);
            });
    }


    //changes multiple state variables by Name, really neat
    patientRecords = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    //changes patientIDRegistered to value in state
    patientSearch = (event) => {
        this.setState({ patientIDRegistered: event.target.value })
    }


    render(){
        const {patientList, patient} = this.state;
        return <div>
            <Sidebar/>
            <div className="patientContainer row">
                <div id="patientPost" className="col-sm-4">
                    <div>
                        <label htmlFor="firstName">First Name: </label>
                        <input id="firstName" type="text" name="firstName" onChange={this.patientRecords}/>

                    </div>

                    <div>
                        <label htmlFor="lastName">Last Name: </label>
                        <input id="lastName" type="text" name="lastName" onChange={this.patientRecords}/>

                    </div>

                    <div>
                        <label htmlFor="symptoms">Symptoms: </label>
                        <input id="symptoms" type="text" name="reason" onChange={this.patientRecords}/>
                    </div>

                    <div>
                        <label htmlFor="doctor">Doctor: </label>
                        <input id="doctor" type="text" name="doctor" onChange={this.patientRecords}/>
                    </div>

                    <div>
                        <button id="submit" onClick={this.patientInput}>Submit</button>
                    </div>
                </div>


                {/*Need to research better way to display data from server, looks poor?*/}
                <div id="patient" className="pull-right col-sm-4">
                    <div>
                        <label htmlFor="employeeID">Patient ID: </label>
                        <input id="employeeID" type="text" value={patient.patientIDRegistered}
                               onChange={this.patientSearch}/>
                    </div>
                    <div>
                        <label htmlFor="firstNameRegistered">First Name:{patient.firstName} </label>
                    </div>

                    <div>
                        <label htmlFor="lastNameRegistered">Last Name: {patient.lastName}</label>
                    </div>

                    <div>
                        <label htmlFor="symptomsRegistered">Reason: {patient.reason} </label>
                    </div>

                    <div>
                        <label htmlFor="doctorRegistered">Doctor: {patient.doctor} </label>
                    </div>

                    <div>
                        <button id="submit" onClick={this.handleClick}>Search</button>
                    </div>
                </div>
            </div>


            <div className="patientContainer row">
                <table className="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                        {
                            patientList.length > 0 ? patientList.map(patients => {
                                // destructed patients.variable, new thing learned
                                const {id,name,last} = patients;
                                return <tr key={id}>
                                            <td>{id}</td>
                                            <td>{name}</td>
                                            <td>{last}</td>
                                        </tr>
                            }) : null
                        }
                    </thead>
                </table>
                <div>
                    <button id="loadTable" onClick={this.loadTable}> Load Table</button>
                </div>
            </div>
        </div>
    }
}