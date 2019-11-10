import React,{Component} from 'react';
import {Link} from "react-router-dom";
import Add from './add.jsx'
import App from '.././App.js'
class RecentBooksList extends Component
{
    constructor(props)
    {
        super(props);
        this.update1=this.update1.bind(this);
    }
    update1(p)
    {
        console.log(p);
      this.props.onupdate(p);
    }
    render()
    {

        return  (
        <table className="table">
            <thead>
                <tr>
                    <th>Book Author</th>
                    <th>Book Name</th>
                    <th>Book Id</th>
                    <th>Book Version</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.props.bookList1.map((book) =>
                {
                    return  <tr>
                    <td>{book.author}</td>
                    <td>{book.name}</td>
                    <td>{book.id}</td>
                    <td>{book.version}</td>
                    <td><button onClick={() => this.props.onremove(book.id)}>Delete</button></td>
                    <td><button onClick={()=>this.update1(book.id)}> <Link to="/update">Update</Link></button></td>
                </tr>
                 } )
                  }
            </tbody>
           
        </table>
        )
    }
}
export default RecentBooksList;