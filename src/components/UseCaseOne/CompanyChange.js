import React,{Component} from 'react';

class CompanyChange extends Component{

    state={
        company:'Standard Chartered'
    }

    changeCompany=()=>{
        //this.state.company='Standard Charetered Bank' Not allowed in this way
        this.setState({
            company:'Standard Chartered Bank'
        })
    }

    render(){
        return(
            <div>
                Company Name: {this.state.company}
                <br></br>
                <button onClick={this.changeCompany}>Change</button>
            </div>

        );
    }
}

export default CompanyChange;