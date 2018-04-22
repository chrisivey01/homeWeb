import React, {Component} from 'react';
import Sidebar from '../navbar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


export default class GymCalc extends Component{
    constructor(props){
        super(props);
        this.state = {
            weight:'',
            fortyFives:0,
            twentyFives:0,
            tens:0,
            fives:0,
            twoPointFives:0,

        };
    }
    weightTotal = (event) => {
        this.setState({ weight: event.target.value })
    }


    calculateWeight = () => {
        let {weight, fortyFives,twentyFives,tens,fives,twoPointFives} = this.state;
        fortyFives = 0;
        twentyFives = 0;
        tens = 0;
        fives = 0;
        twoPointFives = 0;
        this.setState({weight: weight});
        this.setState({fortyFives: fortyFives});
        this.setState({twentyFives: twentyFives});
        this.setState({tens: tens});
        this.setState({fives: fives});
        this.setState({twoPointFives: twoPointFives});

        let bar = 45;
        weight = weight - bar;

        while (weight > 0) {
            if (weight >= 90) {
                weight = weight - 90;
                fortyFives += 2;
                this.setState({fortyFives: fortyFives})
            } else if (weight >= 50) {
                weight = weight - 50;
                twentyFives += 2;
                this.setState({twentyFives: twentyFives})
            } else if (weight >= 20) {
                weight = weight - 20;
                tens += 2;
                this.setState({tens: tens})
            } else if (weight >= 10) {
                weight = weight - 10;
                fives += 2;
                this.setState({fives: fives})
            } else if (weight >= 5) {
                weight = weight - 5;
                twoPointFives += 2;
                this.setState({twoPointFives: twoPointFives})
            } else if (weight < 5) {
                return;
            }
        }
    }

    render(){
        const {fortyFives, twentyFives, tens, fives, twoPointFives} = this.state;

        return(
            <div>
          <Sidebar/>
              <div className="container">
                  <table className="table">
                      <thead>
                        <tr>
                          <th>
                              <input id="weightCalc" placeholder="Total weights" value={this.state.weight} onChange={this.weightTotal}/>
                          </th>
                            <th>
                                <button className="btn btn-primary active" onClick={this.calculateWeight}>Calculate</button>
                            </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                            <td>
                              <label>45 lb</label>
                            </td>
                            <td>
                              <label>{fortyFives} plates </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>25 lb</label>
                            </td>
                            <td>
                                <label>{twentyFives} plates</label>
                            </td>
                        </tr>
                      <tr>
                          <td>
                            <label>10 lb</label>
                          </td>
                          <td>
                            <label>{tens} plates </label>
                          </td>
                        </tr>
                      <tr>
                          <td>
                            <label>5 lb</label>
                          </td>
                          <td>
                            <label>{fives} plates </label>
                          </td>
                      </tr>
                      <tr>
                        <td>
                            <label>2.5 lb</label>
                        </td>
                          <td>
                              <label>{twoPointFives} plates</label>
                          </td>
                      </tr>
                  </tbody>

                 </table>
              </div>
            </div>

        );
    }
}
