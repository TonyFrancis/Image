import React, { Component } from 'react'
import { getImage } from './commons.jsx'
export default class  Image extends Component {
  static propsTypes = {
    src : React.PropTypes.string
  }
  static defaultProps = {
    src : "http://placehold.it/350x150"
  }
  constructor(props) {
    super(props)
    this.state = {
      "src" : props.src,
      status : "Pending"
    }
  }
  componentWillMount(){
    getImage(this.state.src,{},res => {
      this.setState({ src : res, status : "Render"})
    })
  }
  render(){
    if(this.state.status == "Pending"){
      return (<div>Image is loading...</div>)
    }else{
      return (
        <img src={this.state.src} alt="role"/>
      )
    }
  }
}
