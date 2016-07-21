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
                        budget:250,
                        Stayhere: {
                            name: 'Marriot Hotel',
                            averageRate: '$100',
                            fullAddress: '60 Madison Ave',
                            picture: '',
                            link: 'http://www.freshmedleydesigns.com'
                        },
                        Playhere:[{
                            fromPrice: '50',
                            imageUrl: '',
                            title: 'Let us play'
                        },{
                            fromPrice: '50',
                            imageUrl: '',
                            title: 'Let us play'
                        }],
                        total:0
                        }
                    }
                }
    // note that classes do **not** have commas between their methods

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
            }
        )
    }



    render(){
        return(
            <container>
                <header>
                    <Nav />
                </header>
                <section id="intro-area">
                    <h1>Explore the wonders of New York.</h1>
                    <h3>plan your next staycation</h3>
                </section>
                <SearchForm
                getHotels={this.getHotels.bind(this)}
                />
                <section className="container">
                    <div className="row">
                       <article className="col-md-6">
                            <PlayHere
                            play={this.state.Playhere}
                            />
                        </article>

                        <article className="col-md-6">
                            <StayHere
                             places={this.state.Stayhere}
                            />
                        </article>

                        <Total tripTotal={this.state.currentTotal} />
                    </div>
                </section>
                <Footer />
            </container>
        )
    }
}

// mount our App at #container
ReactDOM.render(<App/>, document.querySelector('#container'))
