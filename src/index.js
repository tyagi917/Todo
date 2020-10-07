import ReactDOM from 'react-dom';
import React,{Component} from  'react';
import TodoList from './Todolist.js';
import Todosearch from './todoserach.js';
import Card from "react-bootstrap/Card";
import './App.css';
var ch=[];
class Counters extends Component {
	 constructor(props)
    {
      super(props);
      this.state = {
      	list:[],
        moviename:"",
        filter:"All",
        s:"",

      	
      }
      this.handlechange = this.handlechange.bind(this);
      this.additem = this.additem.bind(this);
      this.reset = this.reset.bind(this);
      this.search=this.search.bind(this);

    }
    handlechange(e)
    {
      this.setState({
        moviename:e.target.value
      })
    }
    search(e)
    {
      this.setState({
        s:e.target.value
      })
      console.log(this.state.s);


    }
    additem(e)
    {
      if(this.state.moviename!==''){
        const moviename={
          id:Math.random(),
          value:this.state.moviename,
            status: "active"
        }
    
      
      const list=[...this.state.list];
      list.unshift(moviename);
      console.log(list);
      
        this.setState({ 
        list:list, 
        moviename:""
      });
     }
   }
  
  applyfilter=(data)=>(ev)=>{
  this.setState({
  filter:data
  })
}
  toggleComplete=(id)=>(ev)=>{
    console.log(id);
    this.setState({
      list:this.state.list.map(todo=>
        todo.id===id?{
          ...todo,
          status:todo.status==="active"?"completed":"active",
        }
        :todo

      ),
    });
    console.log(this.state.list);
  }

  getitem=()=>{
    switch(this.state.filter){
      case "active":{
        return this.state.list.filter((todo)=>
          todo.status==="active"
        );
      }
      case "completed":{
        return this.state.list.filter((todo)=>
          todo.status==="completed"
        );
      }

    }
    return this.state.list;
  }
componentWillMount() {
    let itemsList = localStorage.getItem('items')
    if (itemsList) {
      this.setState({
        list: JSON.parse(localStorage.getItem('items'))
      })
    }
  }
       componentDidUpdate() {
    localStorage.setItem('items', JSON.stringify(this.state.list))
  }
reset()
   {
    this.setState({
      list:[],
      moviename:"",
    })
    console.log("reset");
    localStorage.removeItem('items');

   }
    render(){


      const items = this.state.list.filter((data)=>{
      if(this.state.s)
if(data.value.toLowerCase().includes(this.state.s.toLowerCase())){
          return data
        
    }
  

    })

    console.log({items});
    var x=items.length
    console.log(x);
  
return(
			<div>
			<div>
       
			<input style={{background:"white",textAlign:"center"}} className="a" type="text"   placeholder="add todo" onChange={this.handlechange} />
      <center>
      <input className="b" type="button" value="Add-Todo" onClick={this.additem}/>
      <input  className="b" type="button" value="Reset-Todo" onClick={this.reset}/>
      
      <TodoList 
          todos={this.getitem()} 
          toggleComplete={this.toggleComplete} />
          

      <input className="b" type="button" value="All-Todo" onClick={this.applyfilter("All")}/>
      <input  className="b" type="button" value="Active-Todo" onClick={this.applyfilter("active")}/>
      <input className="b" type="button" value="Completed-Todo" onClick={this.applyfilter("completed")}/>
      <input style={{textAlign:"center",background:"white"}}  type="text" placeholder="serch todo here" onChange={this.search}/>
        <table >
    <tbody>
    {
      x==0&&this.state.s?<Card style={{ width: '18rem' }}><Card.Body>
      <Card.Title> Todo Not Found</Card.Title></Card.Body></Card>:
    items.map(todo=>(
  <Todosearch cou={todo} />
      ))}
    </tbody>
    </table>
    </center>

          </div>
      </div>
				
		);

	}
}
ReactDOM.render(
  <React.StrictMode>
    <Counters />
  </React.StrictMode>,
  document.getElementById('root')
);

