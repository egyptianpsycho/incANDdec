import { Component } from "react";

class Header extends Component {
    state = {
        myNumber : 1,
    };
    increment = () => {
        this.setState({
            myNumber : this.state.myNumber +1 ,
        })
    }
    decrement = () => {
        if (this.state.myNumber > 1) {
            this.setState({
                myNumber : this.state.myNumber -1,
            })    
        }
    }
    render(){
        return (
            <div>
                <h1>{this.state.myNumber}</h1>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
                <div>
                    <h1>
                    my name is <span style={{color : `${this.state.myNumber === 5 ? 'red' : 'black' }`}}>{this.props.myName}</span>
                    </h1>
                    <h1>
                    my years old <span style={{color : `${this.state.myNumber > 5 ? 'green':'black'}`}}>{this.props.year}</span>
                    </h1>
                    <h1>
                    my city is <span style={{color : `${this.state.myNumber < 5 ? 'yellow' : 'black'}`}}>{this.props.city}</span>
                    </h1>
                </div>
            </div>
        );
    }
}

export default Header;