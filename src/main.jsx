// import React from "react";
import {createRoot} from "react-dom/client"; // llamada al React DOM para renderizar componentes
// import {HelloWorldApp} from './HelloWorldApp';
// import { FirstApp } from "./FirstApp";
import { CounterApp } from "./CounterApp";
import './styles.css';
 
// const saludo = <h1>Hola mundo</h1>;
 
const root = createRoot(document.getElementById('root'));
// root.render(FirstApp);
root.render(
<CounterApp value={0} />
);

{/* <FirstApp title="Junior FrontEnd, BackEnd & UI/UX Designer" name="Edwin"  /> */}
