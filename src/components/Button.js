// import React from "react";

// class Button extends React.Component {
//     render() {
//         return <button style={{color: this.props.color}}>
//             Klik {this.props.name}
//             </button>
//     }
// }

// function Button (props){
//     return <button style={{color:this.props.color}}>
//         Klik {props.name}
//         </button>
// }

const Button = (props)=> {
    if (props.login !== true) {
        return <h1>login dulu bro</h1>
    }
    return<button style={{color:props.color, paddingLeft:"2 rem", fontSize: 46, fontFamily:"fantasy"}}>Klik{props.name}</button>
}

export default Button;