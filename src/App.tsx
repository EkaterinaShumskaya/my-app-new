import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./Rating/Rating";


function hello () {
    alert("hello it-kamasutra")
}
hello ();
function App() {
    console.log("App rendering")
    return (

        <div>

           <PageTitLe title={"This is App component"} />
            <PageTitLe title={"My friends"} />
            <Rating value={3} />
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

        </div>
    );
}
type  PageTitlePropsType = {
    title: string
}
function PageTitLe(props: PageTitlePropsType) {
    debugger
    console.log("PageTitLe rendering")
    return <h1>{ props.title }</h1>
}


export default App;
