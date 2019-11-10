import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import './stylesheet.css'
import Navbar from './component/navbar.jsx'
import Mainpage from './component/mainpage.jsx'
import RecentBooksList from './component/RecentBook.jsx'
import Title from './component/title.jsx'
import Add from './component/add.jsx'
import {Switch,BrowserRouter,Route} from 'react-router-dom';
class App extends Component
{
    constructor()
    {
        super();
        this.remove=this.remove.bind(this);
        this.add=this.add.bind(this);
        this.state=
        {
            bookList:[
                { author:"san",name:"hii",version:3.122,id:0 },
                { author:"san1",name:"hello",version:3.221,id:1 },
                { author:"san2",name:"byy",version:9.87,id:2 }
                ]
        }
    }
    componentDidMount()
    {
        console.log("Mounted");
        fetch(' http://localhost:4000/bookList')
        .then(res => {return res.json()})
        .then(res => {
            console.log(JSON.stringify(res));
            setTimeout(()=>
            {
                this.setState({bookList:res})
            },1000)
        })
    }
    remove(p)
   {
       this.setState(
           {
               booklist : delete this.state.bookList[p],
           }
       )
   }
   add(prop)
   {
       let temp={
           author:prop.author,
           name:prop.name,
           version:prop.version,
           id:parseInt(prop.id),
       }
       this.state.bookList.push(temp);
        this.setState(
            {
                bookList :this.state.bookList,
            }
            );
        fetch(' http://localhost:4000/bookList',{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(temp),
        })
        .then(res => {
            if(res.ok)
            return res.json()})
        .then(res => {
            console.log(JSON.stringify(res));
        })
    }
   render()
   {
       return(  
       <React.Fragment>
            <BrowserRouter>
            <Title/>  
             <Navbar/>
              
             <Switch>
             <Route path="/"  exact component={Mainpage}/>
                <Route path="/add"  component={Add}/>
                <Route path="/Recentbook"  component={RecentBooksList}/>
             </Switch>
             
      
       </BrowserRouter>
       </React.Fragment>
       )
   }
}
export default App;