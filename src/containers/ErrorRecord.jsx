import React, { Component } from "react";

class Errorcatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            haserror:false
        }

    }
    componentDidCatch(error, info){
        this.setState({haserror:true});

    }
    render() {
        if(this.state.haserror){
            return <h1> Oooops Thats not working</h1>

        }
        else {
            return this.props.children;
        }
    }

}
export default Errorcatch;