import React, { useEffect, useState } from "react";

// class Clock extends React.compinent{
//     constructor(props){
//         super(props);
//         this.state = {date: new Date()}
//     }
//     componentDidMount() {
//         console.log("mounted");
//         this.timeID.setInterval(
//             ()=> this.tick(),
//             1000
//         );
//     }
//     commponentWillUnmount() {
//         console.log("unmounted");
//         clearInterval(this.timeID)
//     }
//     tick() {
//         return.setState({
//             date: new Date()
//         });
//     }
//     render() {
        
//     }
// }

function Clock () {
    const [date, setDate] = useState(new Date())
    useEffect(()=>{
        setTimeout(()=>{
            setDate(new Date())
        },1000)
    },)
    // function setTime () {
    //     const [time.]
    // }
    return (
        <div>
            <h2>Sekarang jam {date.toTimeString()}</h2>
        </div>
    )
}

export default Clock;