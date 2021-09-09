import React,{Component} from 'react';

class CounterComponent extends Component{

    state={
        counter:0
    }

    tick=()=>{
        this.setState({
            counter:this.state.counter+1
        })
    }

    componentDidMount(){
        this.timer=setInterval(this.tick,1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){
        return(
            <div>
                <hr/>
                Time Elapsed: {this.state.counter}

            </div>

        );
    }
}

export default CounterComponent;