// src/components/App.js

import React from "react";
//needed to make a POST request to the API
import axios from "axios";
import CommentForm from "../components/CommentForm";
//import ReactDOM from "react-dom";
var myResponse;
let apiResponse;
var flirtScore;
let a,b,c,d;
let moods = {
  flirty: a,
  insulting:b,
  threatening:c,
  toxic:d
}
var myarr;
//setup Perspective API credentials
export const PERSPECTIVE_API_URL =
  "https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=AIzaSyC7ZdB66-GcKQCz64MwnFz_9VpYnNp3gHw";



function printRes(object) {
 // apiResponse.forEach(parseToxins);
const element = <h1>Your comment was THIS flirty: {apiResponse[0].attributeScores.FLIRTATION.summaryScore.value}</h1>;
// myResponse=JSON.stringify(myResponse);
for (var i = 0; i < apiResponse.length; i++) {
  a=apiResponse[i].attributeScores.FLIRTATION.summaryScore.value;
  b=apiResponse[i].attributeScores.INSULT.summaryScore.value;
  c=apiResponse[i].attributeScores.THREAT.summaryScore.value;
  d=apiResponse[i].attributeScores.TOXICITY.summaryScore.value; 
}
console.log(element);
return element;
//ReactDOM.render(element, document.getElementById('root'));
console.log(a);
console.log("ApiResposne holds: "+ apiResponse[0]); 
const {flirty,insulting,threatening,toxic}=this.props

console.log("Flirty:"+flirty);
}




  class App extends React.Component {
    constructor(props){
      super(props)
      {
      this.state = {
       apiResponse:[]
      }
    }
  }
    handleSubmit = comment => {
      axios
        .post(PERSPECTIVE_API_URL, {
          comment: {
            text: comment
          },
          languages: ["en"],
          requestedAttributes: {
            TOXICITY: {},
            INSULT: {},
            FLIRTATION: {},
            THREAT: {}
          }
        })
        .then(res => {
         // apiResponse.push(res.data);

       console.log(res);
       const intents = res.data.attributeScores;
       let validComment = true;
       Object.keys(intents).forEach(key => {
         const probability = intents[key].summaryScore.value;
         if (probability >= 0.75) {
           validComment = false;
         }
       });
       console.log(validComment ? "Good to go!" : "Clean it up!");
          flirtScore=res.data.attributeScores.FLIRTATION.summaryScore.value;
        console.log(res.data.attributeScores.FLIRTATION.summaryScore.value);

     })


        .catch(() => {
          // The perspective request failed, put some defensive logic here!
        });
       
    };
  
    

  render() {
    const { apiResponse } = this.state;
    return (
    <section>
        <div className="App">
        <h1>{flirtScore} </h1>        

              <h1>Please leave a comment </h1>        
        <CommentForm onSubmit={this.handleSubmit} />
        <p> lets see if you were nice</p> <p>{apiResponse || "Nothing yet"}</p>
      </div>
      <div> </div>
  
    </section>
   
    );
  }
}
/*ReactDOM.render(
  <App 
    flirty={moods.flirty}
    insulting={b}
    threatening={c}
    toxic={d} />,
    document.getElementById('root')
)*/
export default App;
/*

 <div className="results">
      
          <ul>
            {this.state.apiResponse.map(apiResponse=> <li>{apiResponse.attributeScores.FLIRTATION.summaryScore.value}</li> )}
          </ul>
       
      </div> 
 <h3>Lets see your comment...</h3>
        <p>Flirty:{a}
        Your comment is:
         {this.state.Flirty} Flirty,
          {this.state.Insulting} Insulting,
          {this.state.Threatening}Threatening,
          {this.state.Toxic} Toxic.
        
        </p>
<section>
       
       <div>
         <p>
         Your comment is:
      Flirty: {flirty}
         </p>
         </div>
         <div>
         <p>
         Your comment is:
         insulting: {insulting}
         </p>
         </div>
         <div>
         <p>
         Your comment is:
         threatening: {threatening}
         </p>
         </div>
         <div>
         <p>
         Your comment is:
         toxic: {toxic}
         </p>
         </div>
   
     </section>


         constructor(props){
      super(props);{
        this.state = {
          Flirty: a,
          Insulting: b,
          Threatening: c,
          Toxic:d
        };
       
      }
    }
*/