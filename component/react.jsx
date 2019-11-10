import React,{Component} from 'react';
import Add from './add.jsx'
class RecentBooksList extends Component
{
    constructor()
    {
        super();
        this.state=
        {
           bookList:[
            { author:"san",name:"hii",version:3.122,id:0 },
            { author:"san1",name:"hello",version:3.221,id:1 },
            { author:"san2",name:"byy",version:9.87,id:2 }

            ]
        }
        this.remove=this.remove.bind(this);
        this.add=this.add.bind(this);
    }
    componentDidMount()
    {
        console.log("Mounted");
        fetch(' http://localhost:4000/bookList')
        .then(res => {return res.json()})
        .then(res => {
            console.log(JSON.stringify(res));
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


    //    this.setState(
    //        {
    //           bookList:this.state.bookList.push(temp)
    //        }
    //        )
   }
    render()
    {

        return  (
        <table className="table">
            <thead>
                <tr>
                    <th>Book Author</th>
                    <th>Book Name</th>
                    <th>Book id</th>
                    <th>Book Version</th>
                </tr>
            </thead>
            <tbody>
                {this.state.bookList.map(book =>
                {
                    return  <tr>
                    <td>{book.author}</td>
                    <td>{book.name}</td>
                    <td>{book.id}</td>
                    <td>{book.version}</td>
                    <td><button onClick={() => this.remove(book.id)}>Delete</button></td>
                </tr>

                 } )}
                  <Add onSubmit={this.add}/>
            </tbody>
           
        </table>
        )
    }
}
export default RecentBooksList;