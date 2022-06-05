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



