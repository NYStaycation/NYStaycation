import React    from 'react'

export default class PlayHere extends React.Component{
  render(){

    return(
      <div className="list-group playlists">
      <h2>PlayHere</h2>
        <div style={{overflow: 'auto', maxHeight: 400}}>
        {Object.keys(this.props.play)
      .map((key,index)=>(
        <div className="card" key={key}>
            <img className="card-img-top img-thumbnail" src={this.props.play[key].imageUrl}/>
            <div className="card-block">
              <h4 className="card-title">Activity: <a href={this.props.play[key].link} target="_blank">{this.props.play[key].title}</a></h4>
              <h4 className="card-title">Price: {this.props.play[key].fromPrice}</h4>

              <button onClick={()=>this.props.updatePlayhereInTotal(index)} className="btn btn-default">Add to Plan</button>
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

