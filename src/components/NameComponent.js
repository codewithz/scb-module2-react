import { div } from 'prelude-ls';
import React,{Component} from 'react';

class NameComponent extends Component{

    state={

    }

    render(){

        const name='Code with Z';

        return(
            <div>
                <h1>Hey this is my first React Component</h1>
                <h2>My name is {name}</h2>
            </div>
        )

    }

}

export default NameComponent;

