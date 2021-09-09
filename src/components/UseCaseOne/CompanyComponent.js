import React,{Component} from 'react';

class CompanyComponent extends Component{

    render(){
        return(
            <div>
                <h4> I work for {this.props.company}</h4>
            </div>
        );
    }
}

export default CompanyComponent;