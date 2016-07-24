import React    from 'react'

/**************************************************
budget: this.props.tripTotal.budget
total: this.props.tripTotal.total

**************************************************/

export default class Total extends React.Component{

  render(){
    return(
     <div className="savetrips" >
     <h2>Save your trip!</h2>
     <div style={{overflow: 'auto', maxHeight: 400}}>
     <input onChange={this.props.logName} type="text" placeholder="Trip Name"/>
     <h3>Where I'm Staying</h3>
      <div className="card">
        <img className="card-img-top img-thumbnail" src={this.props.tripTotal.Stayhere.picture}/>
        <div className="card-block">
            <h4 className="card-title">Hotel Name: {this.props.tripTotal.Stayhere.name}</h4>
            <p className="card-text">Hotel Address: {this.props.tripTotal.Stayhere.fullAddress}
            <br/>
            More Info: <a href={this.props.tripTotal.Stayhere.link} target="_blank">{this.props.tripTotal.Stayhere.name}</a></p>
        </div>
      </div>
      <div className="savetrips list-group">
      <h3>My Activities</h3>
        {Object.keys(this.props.tripTotal.Playhere)
      .map(key=>(
        <div className="card" key={key}>
          <img className="card-img-top img-thumbnail" src={this.props.tripTotal.Playhere[key].imageURL}/>
            <div className="card-block">
              <h4 className="card-title">{this.props.tripTotal.Playhere[key].title}</h4>
              <h4 className="card-title">$ {this.props.tripTotal.Playhere[key].fromPrice}</h4>
            </div>
            <hr/>
          </div>
          ))
        }
      </div>
        <p><span className="bolden">Total Trip Cost:</span> ${this.props.tripTotal.total}</p>
        <p><span className="bolden">Current Budget: </span>${this.props.tripTotal.budget}</p>
        <p className="warning"><strong> {this.props.tripTotal.budgetWatch} </strong> </p>
        <button onClick={this.props.insertTrip} className="btn btn-default">Save Plan</button>
      </div>
      </div>
      )
  }
}

