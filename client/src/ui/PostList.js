import React,{Component} from "react";
import axios from "axios";
import { Link } from "react-router"//引入link
import Settings from "./../settings"

 class PostList extends Component {
  constructor(){
      super();
      this.state={
        posts:[]
      }
    }
    handleClick(id){
        axios.delete(`${Settings.host}/posts/${id}`)
        .then( res => {
          console.log(res)
          //筛除
          this.context.router.push("/");//设置返回首页（添加完内容）
        } )
    }
    componentWillMount(){
      console.log("hello willmount")
      axios.get(`${Settings.host}/posts`).then(res => {
        console.log("axios 成功！")
        this.setState({
          posts:res.data.posts
        })
      console.log(this.state.posts)
      })
      //此处发ａｊａｘ请求
      //请求服务器端json数据
    }

    
  render () {
    let style={
      content: {
        position: 'relative',
        width: '100%',
        height: '60px',
        maxWidth: '600px',
        margin: '20px auto',
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '16px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
      },
      title: {
        fontSize: '1.2em'
      },
      link:{
        width:"5.5em",
        height:"1.5em",
        borderRadius:"3px",
        backgroundColor:"rgb(0, 188, 212)",
        textDecoration:"none",
        color:"rgb(255,255,255)",
        margin:"10px auto",
        display:"block",
        textAlign:"center",
        lineHeight:"45px",
        fontSize:"2em"
      },
      linkT:{
        width:"5em",
        height:"2em",
        borderRadius:"3px",
        backgroundColor:"rgb(0, 188, 212)",
        textDecoration:"none",
        color:"rgb(255,255,255)",
        display:"block",
        float:"right",
        marginTop:"-20px",
        textAlign:"center",
        lineHeight:"30px"
      },
      linkF:{
        width:"5em",
        height:"2em",
        borderRadius:"3px",
        backgroundColor:"rgb(0, 188, 212)",
        textDecoration:"none",
        color:"rgb(255,255,255)",
        display:"block",
        float:"right",
        marginTop:"-20px",
        marginLeft:"10px",
        textAlign:"center",
        lineHeight:"30px"
      },
      linkD:{
        width:"5em",
        height:"2em",
        borderRadius:"3px",
        backgroundColor:"rgb(0, 188, 212)",
        textDecoration:"none",
        color:"rgb(255,255,255)",
        display:"block",
        float:"right",
        marginTop:"-20px",
        marginLeft:"10px",
        textAlign:"center",
        lineHeight:"30px",
        cursor:"pointer"
      }
    }
    let postList = this.state.posts.map( (post) => {
      return (
          <div style={style.content} key={post._id}>
           <div style={style.title}>{post.title}</div>
           <Link style={style.linkD} onClick={this.handleClick.bind(this,post._id)} >删除</Link>
           <Link to={`/post/${post._id}/edit`} style={style.linkF}>编辑</Link>
           <Link to={`/post/${post._id}`} style={style.linkT}>查看</Link>
         </div>
        )
    } )
    return(
      <div>
      <Link to="/write" style={style.link}> 写文章 </Link>
      {postList}
      </div>
    )
  }
}

PostList.contextTypes = {
  router : React.PropTypes.object
}


export default PostList

