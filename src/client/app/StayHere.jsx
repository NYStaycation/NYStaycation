import React    from 'react'

export default class StayHere extends React.Component{

  render(){
    // let self = this

    return(
      <div className="list-group">
        <h2>StayHere</h2>
        <div style={{overflow: 'auto', maxHeight: 400}}>
        {Object.keys(this.props.places)
        .map((key,index)=>(
        <div className="card" key={key}>
            <img className="card-img-top img-thumbnail" src={this.props.places[key].picture} />
            <div className="card-block">
              <h4 className="card-title">Hotel: <a href={this.props.places[key].link} target="_blank">{this.props.places[key].name}</a></h4>
              <h4 className="card-title">Price: ${this.props.places[key].averageRate}</h4>
              <p className="card-text">Address: {this.props.places[key].fullAddress}</p>
              <button onClick={()=>this.props.updateStayHereInTotal(index)} className="btn btn-default">Add to Plan</button>
            </div>
            <br/>

        </div>

      ))
    }
      </div>
    </div>
      )
  }
}

