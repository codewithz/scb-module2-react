import React from 'react';

function CompanyFunctionalComponent(props){
    return(
        <div>
            <h4>I work for {props.company}</h4>
            <h4>I work in {props.dept}</h4>
        </div>
    );
}

export default CompanyFunctionalComponent;