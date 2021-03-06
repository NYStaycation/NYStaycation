'use strict'

// import the libs we need
import React            from 'react';
import ReactDOM         from 'react-dom'
import Nav              from './Nav.jsx'
import Footer           from './Footer.jsx'
import PlayHere         from './PlayHere.jsx'
import StayHere         from './StayHere.jsx'
import Total            from './Total.jsx'
import SearchForm       from './SearchForm.jsx'
import CreateUserForm   from './CreateUserForm.jsx'
// import Login            from './Login.jsx'
import ajax             from '../helpers/ajaxAdapter.js'



// create a React Component called _App_
export default class App extends React.Component{


    // every class gets a constructor.
    // this is where we init the state.
    constructor() {

        // we also need to wake up our ancestors
        super();

        // here's our state
        this.state = {
          Playhere : [{
                        fromPrice: '',
                        imageUrl: '',
                        title: ''
                    }],
          Stayhere : [{
                        name: '',
                        averageRate: '',
                        fullAddress: '',
                        picture: '',
                        link: ''
                    }],
          currentTotal: {
                        name:'',
                        budget:0,
                        Stayhere: {
                            name: '',
                            averageRate: 0,
                            fullAddress: '',
                            picture: '',
                            link: ''
                        },
                        Playhere:[],
                        total:0,
                        budgetWatch:'',
                        email:'dmaul12@gmail.com'

                        }
                    }
                }
    // note that classes do **not** have commas between their methods
    // Create our function
    //refresh the total
    updateTotal(){
        let stayhere = parseInt(this.state.currentTotal.Stayhere.averageRate)

        //calculate the total for the places to play
        let playhere = 0
        this.state.currentTotal.Playhere.forEach(item=>{
            let number = item.fromPrice
            playhere+= number
        })
        //console logging playhere to check image url
        console.log('Inside app, updateTotal',this.state.currentTotal.Playhere)

        //sum them
        this.state.currentTotal.total = stayhere + playhere

        //check if over budget
        if(this.state.currentTotal.budget < this.state.currentTotal.total){
            this.state.currentTotal.budgetWatch = "WARNING OVER BUDGET"
        }

        //update the state
        this.setState({currentTotal: this.state.currentTotal})
    }

    //save a place to sleep
    updateStayHereInTotal(id){
        // clone the properties of the source component
        this.state.currentTotal.Stayhere.name        = this.state.Stayhere[id].name
        this.state.currentTotal.Stayhere.averageRate = this.state.Stayhere[id].averageRate
        this.state.currentTotal.Stayhere.fullAddress = this.state.Stayhere[id].fullAddress
        this.state.currentTotal.Stayhere.picture     = this.state.Stayhere[id].picture
        this.state.currentTotal.Stayhere.link        = this.state.Stayhere[id].link

        //then set the state
        this.setState({currentTotal: this.state.currentTotal})

        //update the total
        this.updateTotal()
    }

    //push play here to the state
    updatePlayhereInTotal(id){
        // console.log(this.state)
        // make an object to store the info we need
        console.log('First',this.state.Playhere[id].imageUrl)
        console.log('First',this.state.Playhere[id].imageURL)

        let cleanNumber = this.state.Playhere[id].fromPrice.split('')
        cleanNumber.shift()
        cleanNumber = cleanNumber.join('')


        this.state.currentTotal.Playhere.push({
            title: this.state.Playhere[id].title,
            imageURL: this.state.Playhere[id].imageUrl,
            fromPrice: parseInt(cleanNumber)
        })

        // then set the state
        this.setState({currentTotal: this.state.currentTotal})

        //update the total
        this.updateTotal()
    }

    // 90% of your components will render()
    // REMEMBER you can only return **one** root element from a render fn.

    getHotels(hotelSearch){
        console.log('Inside app getHotels',hotelSearch)
       ajax.searchHotels(hotelSearch).then( data=>{
            console.log(data)
            this.setState({
                Stayhere: data.hotels,
                Playhere: data.activities
            })

            //if we want to update one property, use this format
            this.state.currentTotal.budget = hotelSearch.budget
            this.setState({currentTotal: this.state.currentTotal})

            }
        )
    }

    logName(event){
        let name = event.target.value
        this.state.currentTotal.name = name

        this.setState({
            name: this.state.currentTotal.name
        })
        console.log('Name inside object', this.state.currentTotal)
    }

   insertTrip(){
    let newTrip = this.state.currentTotal
    console.log('logged on Click',newTrip)

    ajax.createTrips(newTrip).then(data=>{
        console.log(data)
    })

    let emptyObject = {
                        name:'',
                        budget:0,
                        Stayhere: {
                            name: '',
                            averageRate: 0,
                            fullAddress: '',
                            picture: '',
                            link: ''
                        },
                        Playhere:[],
                        total:0,
                        budgetWatch:'',
                        email:'dmaul12@gmail.com'

                        }

    this.setState({
        currentTotal: emptyObject
    })

   }

   createUser(info){
    console.log('Inside app jsx logging users infor',info)
   }


    render(){
        return(
            <div>
                <header className="navbar-header">
                    <Nav />
                </header>
                <section id="intro-area">
                    <h1>Staycate and enjoy the adventures locally.</h1>
                </section>
                <section className="container">
                    <SearchForm
                     getHotels={this.getHotels.bind(this)} />
                </section>
                <section className="container">
                    <div className="row">
                       <article className="col-md-4">
                            <StayHere
                             places={this.state.Stayhere}
                             updateStayHereInTotal={this.updateStayHereInTotal.bind(this)}
                            />
                        </article>

                        <article className="col-md-4">
                            <PlayHere
                            play={this.state.Playhere}
                            updatePlayhereInTotal={this.updatePlayhereInTotal.bind(this)}
                            />
                        </article>

                        <article className="col-md-4">
                        <Total
                            tripTotal={this.state.currentTotal}
                            logName={this.logName.bind(this)}
                            insertTrip={this.insertTrip.bind(this)}
                        />
                        </article>
                    </div>
                </section>

                <section>
                    <article className=".col-xs-12 .col-md-8">
                        <CreateUserForm
                          createUser={this.createUser.bind(this)}
                            />
                    </article>
                </section>

                <Footer />
            </div>
        )
    }
}

// mount our App at #container
ReactDOM.render(<App/>, document.querySelector('#container'))
