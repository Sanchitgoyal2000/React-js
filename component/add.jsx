import React,{Component} from 'react'
import bookList from './RecentBook.jsx'
class Add extends Component
{
    constructor(props)
    {
        super(props);
        this.state=
            {
                book:{
                author:' ',
                name:' ',
                version:' ',
                id:' ',
                }
            }
        
    }

   handleSubmit = event =>
   {
    event.preventDefault();

     this.state.book.author=document.getElementById("1").value;
    this.state.book.name=document.getElementById("2").value;
    this.state.book.version=document.getElementById("3").value;
    this.state.book.id=document.getElementById("4").value;
   this.props.onAdd(this.state.book);

    // const p1=
    // {
    //     author:author1,
    //     name:name1,
    //     version:version1,
    //     id:id1
    // };

    
   }
  
    render()
    {
        return (
                   <div>
                      <form onSubmit= {this.handleSubmit}>
                      <div>
                      <input type="text"  placeholder="author" value={this.state.bookname} id="1" onChange={this.change}/>   
                      <br></br>
                      <br></br>
                      <input type="text"   placeholder="name"  value={this.state.bookversion} id="2" onChange={this.change1}/>
                      <br></br>
                      <br></br>
                      <input type="text"   placeholder="version" value={this.state.author} id="3" onChange={this.change2}/>
                      <br></br>
                      <input type="text"  placeholder="id" value={this.state.id} id="4" onChange={this.change3}/>
                      <br></br>
                      <br></br>
                      <input type="submit" value="submit" onClick={()=> this.handleSubmit.bind(this)}/> 
                      </div>
                      </form>
                    </div>
        )
    }    
}
export default Add;