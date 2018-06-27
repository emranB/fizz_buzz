import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';


class App extends Component {

    /* Class constructor */
    constructor(props) {
        super(props);

        /* Setting default states */
        this.state = {
            inpVal: 1,
            flag: ''
        };
        this.onChangeFn = this.onChangeFn.bind(this);
    }

    /*
        Function listens to changes in input value and Reacts accordingly:
        If Input is divisible by 5 and 3
            Print 'Fizz Buzz''
        Else If Input is divisible by 5
            Print 'Buzz''
        Else If Input is divisible by 3
            Print 'Fizz''
    */
    onChangeFn(event) {
        let value = event.target.value;

        if (!value)
            value = 1;
        if (value < 1)
            value = 1;
        if (value > 100)
            value = 100;

        this.setState({
            inpVal: parseInt(value, 10)
        });

        if ( !(value % 3) && !(value % 5) )         /* If value if divisible by 3 and 5 */
            this.setState({ flag: 'Fizz Buzz' });
        else if (!(value % 5))                      /* If value if divisible by 5 only */
            this.setState({ flag: 'Buzz' });
        else if (!(value % 3))                      /* If value if divisible by 3 only */
            this.setState({ flag: 'Fizz' });
        else
            this.setState({ flag: '' });

    }

    /* Render HTML content */
    render() {
        let result = '';
        if (this.state.flag != '')
            result = <p className="white-text text-medium"> App says: {this.state.flag}! </p>;

        return (
          <div className="App">
            <header className="App-header">
                <h1 className="App-title"> FIZZ BUZZ </h1>
            </header>
            <div className="Card Top">
                <p className="white-text"> Enter a number between 1 and 100: </p>
                <Input focus placeholder="eg. 6" type="number"
                       value={this.state.inpVal}
                       onChange={(e) => this.onChangeFn(e)} />
            </div> 
            <div className="Card Bottom">
                {result}
            </div>
          </div>
        );
    }

}


export default App;
