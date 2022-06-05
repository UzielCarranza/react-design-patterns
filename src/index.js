import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContainerApp from './containerComponents/ContainerApp'
import App4 from './App4'
import App2 from './App2';
import App5 from './DataSource/App5'
import App6 from './UncontrolledComponents/App6'

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


