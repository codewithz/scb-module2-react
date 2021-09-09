import React,{Component} from 'react';

class NameAgeComponent extends Component{

    state={
        name:'Zartab',
        age:31
    }

    render(){

        return(
            <div>
                <h4>Hey, my name is {this.state.name}</h4>
                <h4>I am {this.state.age} years old</h4>
            </div>

        );
    }
}

export default NameAgeComponent;