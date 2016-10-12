import React,{Component} from "react";
import axios from "axios"
 class App extends Component {
  constructor(){
    super();
    this.state={
      words:{}
    }
  }
  componentWillMount(){
      axios.get("http://localhost:5000/posts")
      .then(res => {
        console.log("axios 成功！")
        this.setState({
          words:res.data.posts
        })
      console.log(this.state.words)
      })
      
    }
  
  
  render () {
  	let postList = this.state.words.map( (post) => {
      return (
          <div >
           <div >{post.title}</div>
         </div>
        )
    } )
    return(
      <div>
       
        <h1>{postList}</h1>
      </div>

    )
  }
}
export default App

