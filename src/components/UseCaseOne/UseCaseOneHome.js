import React from 'react';
import CompanyComponent from './CompanyComponent';
import CompanyFunctionalComponent from './CompanyFunctionalComponent';
import AlertComponent from './AlertComponent';
import CompanyChange from './CompanyChange';
import CounterComponent from './CounterComponent';
import ClickCounter from './ClickCounter';

function UseCaseOneHome(){
    return(
        <div>
            <center>
                <h1>Use Case 1- Components,Props and States</h1>
                <br />
                <br />
                <hr></hr>
                Counter
                <CounterComponent />
                <br />
                <br />
                <hr></hr>
                useState
                <ClickCounter />
                <br></br>
                <b>Single Prop Component[Class]</b>
                <CompanyComponent company="Standard Chartered"/>
                <br></br>
                <b>Single Prop Component [Functional]</b>
                <CompanyFunctionalComponent company="SCB"/>
                <b>Multiple Props Component [Functional]</b>
                <CompanyFunctionalComponent company="SCB" dept='IT'/>
                <br></br>
                <b>Alert Component</b>
                <AlertComponent />
                <br />
                <br />
                <hr></hr>
                <CompanyChange />
               
            </center>
        </div>

    )
}

export default UseCaseOneHome;