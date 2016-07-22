import React    from 'react'

export default class StayHere extends React.Component{

  render(){
    // let self = this

    return(
      <div className="list-group">
        {Object.keys(this.props.places)
      .map((key,index)=>(

        <div className="card" key={key}>
            <img src={this.props.places[key].picture} className="card-img-left"/>
            <div className="card-block">
              <h4 className="card-title">{this.props.places[key].name}</h4>
              <h4 className="card-title">{this.props.places[key].averageRate}</h4>
              <p className="card-text">{this.props.places[key].fullAddress}</p>
              <button onClick={()=>this.props.updateStayHereInTotal(index)} className="btn btn-default">Add to Plan</button>
            </div>
        </div>

      ))
    }
      </div>
      )
  }
}

