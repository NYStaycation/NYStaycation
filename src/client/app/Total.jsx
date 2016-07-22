import React    from 'react'

/**************************************************
budget: this.props.tripTotal.budget
total: this.props.tripTotal.total

**************************************************/

export default class Total extends React.Component{
  render(){
    return(
     <div>
      <div>
        <p>{this.props.tripTotal.Stayhere.name}</p>
        <p>{this.props.tripTotal.Stayhere.fullAddress}</p>
        <p><a href={this.props.tripTotal.Stayhere.link} target="_blank">{this.props.tripTotal.Stayhere.name}</a></p>
        <p>Trip Cost: ${this.props.tripTotal.total}</p>
      </div>
      <div className="list-group">
        {Object.keys(this.props.tripTotal.Playhere)
      .map(key=>(
        <div className="card" key={key}>
            <div className="card-block">
              <h4 className="card-title">{this.props.tripTotal.Playhere[key].title}</h4>
              <h4 className="card-title">{this.props.tripTotal.Playhere[key].fromPrice}</h4>
            </div>
          </div>
          ))
        }
      </div>
        <p>{this.props.tripTotal.budget}</p>
      </div>
      )
  }
}
