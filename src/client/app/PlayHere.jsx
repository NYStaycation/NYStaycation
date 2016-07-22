import React    from 'react'

export default class PlayHere extends React.Component{
  render(){

    return(
      <div className="list-group">
        {Object.keys(this.props.play)
      .map((key,index)=>(
        <div className="card" key={key}>
            <img src={this.props.play[key].imageUrl}  className="card-img-left"/>
            <div className="card-block">
              <h4 className="card-title">{this.props.play[key].title}</h4>
              <h4 className="card-title">{this.props.play[key].fromPrice}</h4>

              <button onClick={()=>this.props.updatePlayhereInTotal(index)} className="btn btn-default">Add to Plan</button>
            </div>

        </div>
      ))
    }
      </div>
      )
  }
}

