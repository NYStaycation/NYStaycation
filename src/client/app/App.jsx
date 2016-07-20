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
                    <SearchForm />
                </header>
                <div className="container">
                    <div className="row">
                        <article className="col-md-6">
                            <PlayHere />
                        </article>

                        <article className="col-md-6">
                            <StayHere />
                        </article>

                        <article className="col-md-6">
                            <Results />
                        </article>

                    </div>
                </div>

                <Footer />

            </container>
        )
    }
}

// mount our App at #container
ReactDOM.render(<App/>, document.querySelector('#container'))
