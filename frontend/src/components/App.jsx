import React from 'react';
import {get} from '../apiService'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    color: ${props => props.color};
    size: ${props => props.size};
`
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    
    componentWillMount(){
        get().then(res=>{
            this.setState(res)
        })
    }
    render(){
        console.log(this.state.color)
        return this.state.title ? (<Wrapper {...this.state}>{this.state.title}</Wrapper>) : (<Wrapper>Loading</Wrapper>)
    }
}

export default App