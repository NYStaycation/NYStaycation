'use strict'
import React    from 'react';

export default function SearchForm(props){

const handleSubmit = event=>{
  event.preventDefault();
  let userSearch = {}
  let city = event.target.elements.city.value;
  let budget = event.target.elements.budget.value;
  let checking_date = event.target.elements.checking_date.value;
  let Checkout_Date = event.target.elements.Checkout_Date.value;
  let dateStr = ''
  let newDate = new Date()
  dateStr += (newDate.getFullYear()) + "-";
  // dateStr += '0'+(newDate.getMonth() + 1)+ "-" ;
  if(newDate.getMonth.length < 2){
    dateStr += '0'+(newDate.getMonth() + 1)+ "-" ;
  }else{
    dateStr += (newDate.getMonth() + 1)+ "-" ;
  }
  dateStr += newDate.getDate() ;


  if(checking_date < dateStr || Checkout_Date < dateStr){
    alert('Please enter valid date')
  }else if(Checkout_Date < checking_date){
    alert('Please enter valid date')
  }else {
    userSearch = {
    'city': city,
    'budget': budget,
    'checking_date': checking_date,
    'Checkout_Date': Checkout_Date
    }
  }

  console.log(userSearch);
  //get a prop to pass usersearch object

  props.getHotels(userSearch);

  event.target.reset();
}




  return(
      <section className="searchform jumbotron">
        <h2>Search Staycation</h2>
        <form className="form-inline" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control input-lg" name="city" placeholder="City or Zip" required/>

            <input type="text" className="form-control input-lg" name="budget" placeholder="What's your budget?" required/>

            <input type="date" className="form-control input-lg" name="checking_date" required/>

            <input type="date" className="form-control input-lg" name="Checkout_Date" required/>

          </div>
          <button type="submit" className="btn btn-primary btn-lg">Search</button>
        </form>
      </section>
    )

}
