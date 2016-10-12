import React,{Component} from "react";
import axios from "axios";
import Settings from "./../settings"

 class ShowPost extends Component {
  constructor(){
    super();
    this.state={
      post:{}
    }
  }
  componentWillMount(){
    let id = this.props.params.id
      axios.get(`${Settings.host}/post/${id}`).then(res => {
      // console.log("axios 成功！")
      this.setState({
        post:res.data.post
      })
      console.log(this.state.post)
      })
      //此处发ａｊａｘ请求
      //请求服务器端json数据
    }
  render () {
    let styles={
      content: {
       position: 'relative',
       width: '100%',
       minHeight: '200px',
       maxWidth: '600px',
       margin: '30px auto',
       backgroundColor: '#fff',
       borderRadius: '5px',
       padding: '16px',
       boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
     },
     category: {
       position: 'absolute',
       top: '0',
       right: '0',
       padding: '4px 6px',
       color: '#fff',
       fontSize: '.8em',
       backgroundColor: '#ed5a5a'
     },
     title: {
       fontSize: '1.3em',
       paddingTop: '10px',
       paddingBottom: '20px',
       textAlign: 'center'
     },
     text: {
       fontSize: '1em',
       color: 'rgba(0,0,0,.8)'
     }
    }
      return (
      <div style={styles.content}>
      <div style={styles.title}>{this.state.post.title}</div>
      <div style={styles.text}>{this.state.post.content}</div>
      <div style={styles.category}>{this.state.post.category}</div>
      </div>
    )
  }
}



export default ShowPost

