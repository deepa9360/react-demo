import React, {Component} from "react";

class CountComp extends Component{

    state = {
        count:1,
    };
handleadd=()=>{
    
    this.setState({count:this.state.count+1})

    console.log("aa");


};
    render(){
        return(

            <>
          <h1>Count {this.state.count} </h1> 
          <button onClick={this.handleadd}>add</button> 
               
            </>
        );

    }


}

export  default CountComp;














