'use strict'

// import the libs we need
import React            from 'react';
import ReactDOM         from 'react-dom'
import Nav              from './Nav.jsx'
import Footer           from './Footer.jsx'
import PlayHere         from './PlayHere.jsx'
import StayHere         from './StayHere.jsx'
import Results          from './Results.jsx'
import SearchForm       from './SearchForm.jsx'


// create a React Component called _App_
export default class App extends React.Component{

    // every class gets a constructor.
    // this is where we init the state.
    constructor() {

        // we also need to wake up our ancestors
        super();

        // here's our state
        this.state = {
          Playhere : {},
          Stayhere : {},
          Total: {}
        }
    }
    // note that classes do **not** have commas between their methods

    // 90% of your components will render()
    // REMEMBER you can only return **one** root element from a render fn.
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
                <SearchForm />
                <section className="container">
                    <div className="row">
                        <PlayHere />
                    </div>
                    <div className="row">
                        <StayHere />
                    </div>
                    <div className="row">
                        <Results />
                    </div>
                </section>
                <Footer />
            </container>
        )
    }
}

// mount our App at #container
ReactDOM.render(<App/>, document.querySelector('#container'))
