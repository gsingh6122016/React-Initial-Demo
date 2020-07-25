import React from 'react';
import classess from './Person.css';
// import styled from 'styled-components';
// import Radium from 'radium' 

// const StyledDiv = styled.div`
// width:60%;
// border: solid 1px rgb(53, 28, 19);
// padding: 8px;
// box-shadow: 1px 3px 5px rgb(175, 76, 96);
// margin: auto;
// margin-bottom: 10px;
// margin-top: 10px;;
// text-align: center;

// @media (min-width: 500px): {
//        width: '450px';
// }
// `;

const person = (props) => {

    // this is radium syntex
    // const style ={
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };



    return  (
    
        // this is radium version of doing things
        /* <div className="Person" style={style}> */

    <div className = {classess.Person}>
            <p onClick = {props.click}>i'm {props.name} and I am {props.age} years old{props.children}</p>
            <input type = "text" onChange = {props.change} value = {props.name} ></input>
    </div>

    // </div>
    );

};

export default person;
// export default Radium(person);