import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContainerApp from './containerComponents/ContainerApp'
import App4 from './App4'
import App2 from './App2';
import App5 from './DataSource/App5'
import App6 from './UncontrolledComponents/App6'
import App7 from './ControlledComponents/App7'
import App8 from './ControlledModal/App8'

import App10 from './UncontrolledOnboardingFlow/App10'
import App11 from './ControlledBoardingFlow/App11'
import App12 from './High_Order-Components/App12'
import App13 from './High_Order-Components/App13'
import ModifyingDataWithHOCs from './modifyingDataWithHOCs/Modifying-data-with-HOCs'
import App18 from './ModifyingDataWithHOCsIMPROVED/App18'

import App19 from './CustomHooksPatterns/App19'
import App20 from './CustomHooksPatterns/useUser/App20'
import App21 from './CustomHooksPatterns/useResource/App21'
import App22 from './CustomHooksPatterns/useDataSource/App22'
import App23 from './functionalProgramming/App23'
import App24 from './functionalProgramming/recursiveComponents/App24'
import App25 from './composition/App25'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);


const root2 = ReactDOM.createRoot(document.getElementById('list'));
root2.render(
    <App2></App2>
)


const root3 = ReactDOM.createRoot(document.getElementById('container-components'));
root3.render(
    <ContainerApp/>
)

const root4 = ReactDOM.createRoot(document.getElementById('resource-loader'));
root4.render(
    <App4/>
)

const root5 = ReactDOM.createRoot(document.getElementById('data-source'));
root5.render(
    <App5/>
)

const root6 = ReactDOM.createRoot(document.getElementById('uncontrolled-components'));
root6.render(
    <App6/>
)

const root7 = ReactDOM.createRoot(document.getElementById('controlled-components'));
root7.render(
    <App7/>
)
const root8 = ReactDOM.createRoot(document.getElementById('controlled-modal'));
root8.render(
    <App8/>
)


const root10 = ReactDOM.createRoot(document.getElementById('uncontrolled-onboarding-flow'));
root10.render(
    <App10/>
)

const root11 = ReactDOM.createRoot(document.getElementById('controlled-onboarding-flow'));
root11.render(
    <App11/>
)
const root12 = ReactDOM.createRoot(document.getElementById('high-order-components'));
root12.render(
    <App12/>
)

const root13 = ReactDOM.createRoot(document.getElementById('high-order-components2'));
root13.render(
    <App13/>
)

const root14 = ReactDOM.createRoot(document.getElementById('modifying-data-with-HOCs'));
root14.render(
    <ModifyingDataWithHOCs/>
)


const root15 = ReactDOM.createRoot(document.getElementById('modifying-data-with-HOCs-improved'));
root15.render(
    <App18/>
)
const root16 = ReactDOM.createRoot(document.getElementById('custom-hooks'));
root16.render(
    <App19/>
)

const root17 = ReactDOM.createRoot(document.getElementById('custom-hooks-useUser'));
root17.render(
    <App20/>
)


const root18 = ReactDOM.createRoot(document.getElementById('custom-hooks-useResource'));
root18.render(
    <App21/>
)

const root19 = ReactDOM.createRoot(document.getElementById('custom-hooks-useDataSource'));
root19.render(
    <App22/>
)

const root20 = ReactDOM.createRoot(document.getElementById('functional-programming'));
root20.render(
    <App23/>
)

const root21 = ReactDOM.createRoot(document.getElementById('recursive-component'));
root21.render(
    <App24/>
)

const root22 = ReactDOM.createRoot(document.getElementById('component-composition'));
root22.render(
    <App25/>
)





