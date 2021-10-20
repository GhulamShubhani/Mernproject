import React, { useState } from 'react'
import './main.css'

const Home =()=>{
	const [item,setItem]= useState("");
	const [alist,setalist]=useState([]);


	const itemEvent = (e)=>{
		setItem(e.target.value);
	}

	const listofitem = ()=>{
		setalist((oldItem)=>{
			return[...oldItem,item];
		});
		setItem("");
	}
	const deleteitem =(event)=>{
		const id = event.target.id;
		console.log(id);
		setalist((oldItem)=>{
			return oldItem.filter((arrele,index)=>{
				console.log(id)
				console.log("i#"+index)
				console.log(arrele)
				if(index == id){console.log("hello")}
				return index != id;
			})
		})
	}

  	return (
   		<>
   			<div className="main_div">
			   <div className="row">
					<div className="cent_div">
						<br/>
						<h1>list</h1>
						<br />
						<input className="inp1" type="text" placeholder="add a list" onChange={itemEvent} value={item} />
						{/*<button className="b1" onClick={listofitem}> + </button>*/}
						<span><i className="fas fa-plus b1" onClick={listofitem}></i></span>
						<br/>
						<br/>
						<ol>
							{/*<li>{alist}</li>*/}
							{
								alist.map((itemval,index)=>{
									return <li><i className="fas fa-times-circle" id={index} key={index} onClick={deleteitem}></i>{itemval}</li>
								})
								
							}
						</ol>
					</div>
			   </div>
			</div>
   		</>
  	)
}

export default Home