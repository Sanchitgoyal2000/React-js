import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import './stylesheet.css'                                     //route passes three props location hisstory and
import Navbar from './component/navbar.jsx'                    //authenication and redirection
import Mainpage from './component/mainpage.jsx'
import RecentBooksList from './component/RecentBook.jsx'
import Title from './component/title.jsx'
import Add from './component/add.jsx'
import Update from './component/updatebook.jsx'
import {Switch,BrowserRouter,Route} from 'react-router-dom';
class App extends Component
{
    constructor()                                     //must bind methods ,import app.js in all
    {
        super();
        this.remove=this.remove.bind(this);
        this.add=this.add.bind(this);
        this.add2=this.add2.bind(this);

        this.update=this.update.bind(this);
        this.state=
        {
            bookList:[
            //  { author:"san",name:"hii",version:3.122,id:0 },
            //     { author:"san1",name:"hello",version:3.221,id:1 },
            //     { author:"san2",name:"byy",version:9.87,id:2 }//
                ],
                idd:1,
        }
        this.update=this.update.bind(this);
    }
    componentDidMount()
    {
        console.log("Mounted");
        fetch(' http://localhost:3000/bookList')
        .then(res => {return res.json()})
        .then(res => {
             console.log(JSON.stringify(res));
             this.setState({bookList:res});
             console.log(this.state.bookList);
                      }
            )
    }
    update(p)
    {
        console.log("heelo");
        
        this.setState(
            {
                idd:p-1,
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

        this.setState(  {
                bookList :this.state.bookList,
            } );
        fetch(' http://localhost:3000/bookList',{
        method: "POST",
        headers:{  "Content-Type":"application/json",  },
        body:JSON.stringify(temp),
        })
        .then(res => {
            if(res.ok)
            return res.json()})
        .then(res => {
            console.log(JSON.stringify(res));
        })
    }
    add2(prop1)
    {
        console.log("hello");
        console.log(prop1.id);
        this.setState(
            {
                bookList:this.state.bookList,
            }
        )
        fetch(' http://localhost:3000/bookList/'+parseInt(prop1.id),{
        method: "PUT",
        headers:{  "Content-Type":"application/json",},
        body:JSON.stringify(prop1),
        })
        .then(res => {
            if(res.ok)
            return res.json()})
        .then(res => {
            console.log(JSON.stringify(res));
        })
    }
    remove(p)
    {
        fetch('http://localhost:3000/bookList/'+p,
        {
            method: "DELETE",
             headers: { "Content-Type":"application/json",  },
        })
       .then(res => {
            if (res) {
               return res.json();
             }  })
         .then(res => {
              alert("is deleted");
             })
        this.setState
            (
            {
              bookList:this.state.bookList.filter(books=>books.id !==p)
            }
            );
       
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
             <Route path="/add"  render={() => <Add onAdd={this.add}></Add>}/>
             <Route path="/Recentbook"  render={() => <RecentBooksList onremove={this.remove} onupdate={this.update} bookList1={this.state.bookList}></RecentBooksList>} />
             <Route path="/update"  render={() => <Update  boo={this.state.bookList} idd1={this.state.idd} onadd2={this.add2}></Update>}/>
             </Switch>
            </BrowserRouter>
       </React.Fragment>
       )
   }
}
export default App;