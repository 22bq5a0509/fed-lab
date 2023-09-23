import React,{Component} from 'react'
class ChangeText extends Component
{
    constructor(props){
        super(props);
        this.state={
             color:'#ff00ff',
        }
    }
    redHandler=()=>{
        this.setState({color:'#ff0000'});
    }
    greenHandler=()=>{
        this.setState({color:'#00ff00'});
    }
    blueHandler=()=>{
        this.setState({color:'#0000ff'});
    }
    
    render(){
        return (
            <div>
                <h1 style={{color:this.state.color}}>welcome to reactJS</h1>
                <button type="button" onClick={this.redHandler}>RED</button>&nbsp;&nbsp;
                <button type="button" onClick={this.greenHandler}>GREEN</button>&nbsp;&nbsp;
                <button type="button" onClick={this.blueHandler}>BLUE</button>
            </div>
        );
    }
}
export default ChangeText; 