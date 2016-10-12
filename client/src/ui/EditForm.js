import React, { Component } from 'react';
import {Link} from 'react-router';
import Radium from 'radium';

export default class EditForm extends React.Component {
	handleSubmit(e){
		e.preventDefault()
		console.log("提交")
		const title=this.refs.title.value;
		const category=this.refs.category.value;
		const content=this.refs.content.value;
		// var dataObject={
		// 	title,
		// 	category,
		// 	content
		// }
		this.props.publishPost({title,category,content})
	}

   render() {
   	let styles={
   		form: {
          padding: '20px 40px',
        },
        div: {
          marginBottom: '10px'
        },
        label: {
          display: 'block',
          fontSize: '.9em',
          color: 'rgba(0,0,0,.6)',
          paddingBottom: '10px'
        },
        select: {
          border: '1px solid #ddd',
          borderRadius: '5px',
          fontSize: '1em',
          height: '30px',
          backgroundColor: '#fff',
          ':focus': {
            outline: 'none'
          }
        },
        input: {
          width: '100%',
          height: '48px',
          border: '1px solid #ddd',
          borderRadius: '5px',
          fontSize: '1em',
          padding: '10px',
          boxSizing: 'border-box',
          ':focus': {
            border: '1px solid #00bcd4',
            outline: 'none'
          }
        },
        actions: {
          textAlign: 'center'
        },
        button: {
          width: '120px',
          height: '36px',
          border: 'none',
          backgroundColor: '#ff4081',
          fontSize: '1em',
          color: '#fff',
          display: 'inline-block',
          margin: '20px auto 0',
          borderRadius: '20px',
          ':hover': {
            cursor: 'pointer'
          },
          ':focus': {
            outline: 'none'
          }
        },
        link: {
          display: 'inline-block',
          marginLeft: '15px',
          fontSize: '1em',
          color: '#00bcd4',
          opacity: '.8',
          textDecoration: 'none'
        }
   	}
     return(
       <div>
         <form  style={styles.form} onSubmit={this.handleSubmit.bind(this)} >
	         <div style={styles.div}>
	           <label style={styles.label}>category</label>
	           <input  style={styles.input} ref="category" defaultValue={this.props.post.category} />
	         </div>
	         <div style={styles.div}>
	           <label style={styles.label}>title</label>
	           <input  style={styles.input} ref="title" defaultValue={this.props.post.title} />
	         </div>
	         <div style={styles.div}>
	           <label style={styles.label}>content</label>
	           <textarea  style={[styles.input,{height:"100%"}]} rows='10' cols="62" key='1' ref="content" defaultValue={this.props.post.content} />
	         </div>
	         <div style={styles.actions}>
               <button type='submit' style={styles.button} key='2'>Submit</button>
               <Link to='/' style={styles.link}>取消</Link>
             </div>
         </form>
       </div>
     )
   }
}