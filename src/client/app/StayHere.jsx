import React    from 'react'

export default class StayHere extends React.Component{
  render(){

    return(
      <div className="list-group">
        {Object.keys(this.props.places)
      .map((key,index)=>(
        <div className="card" key={key}>
            <img src={this.props.places[key].picture}  className="card-img-left"/>
            <div className="card-block">
              <h4 className="card-title">{this.props.places[key].name}</h4>
              <h4 className="card-title">{this.props.places[key].averageRate}</h4>
              <p className="card-text">{this.props.places[key].fullAddress}</p>
              <a id={index} onClick={this.props.updateStayTotal} className="btn btn-default"> Add to Plan</a>
            </div>
        </div>
      ))
    }
      </div>
      )
  }
}

