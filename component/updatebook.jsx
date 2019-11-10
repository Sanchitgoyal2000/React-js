import React,{Component} from 'react'
import App from '.././App.js'
class Update extends Component
{
  constructor(props)
  {
      super(props);
      this.state=
          { a:'',
            b:'',
            c:'',
            d:''
          }
      
  }

  handleSubmit()
 {
   var arr={
    author:this.state.a,
    name:this.state.b,
    id:this.state.c,
    version:this.state.d,
   }
   console.log("arr->"+arr.id);
    this.props.onadd2(arr);
 }
change = event =>
{
  this.setState({a:event.target.value});
}
change1 = event =>
{
  this.setState({b:event.target.value});
}
change2 = event =>
{
  this.setState({c:event.target.value});
  console.log("c"+this.state.c);
}
change3 = event =>
{
  this.setState({d:event.target.value});
}
  render()
  {
     var obj=this.props.boo[this.props.idd1];
    
      return(
        <div>
        <div>
        <input type="text"  defaultValue={obj.author}  id="1" onChange={this.change} />   
        <br></br>
        <br></br>
        <input type="text"    defaultValue={obj.name} id="2" onChange={this.change1}/>
        <br></br>
        <br></br>
        <input type="text"   defaultValue={obj.id} id="3" onChange={this.change2} />
        <br></br>
        <br></br>
        <input type="text"   defaultValue={obj.version} id="4" onChange={this.change3}/>
        <br></br>
        <br></br>
        <input type="button" value="submit" onClick={()=> this.handleSubmit()}/>
        </div>
      </div>
      )
  }
}
export default Update;