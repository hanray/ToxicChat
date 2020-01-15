// src/components/App.js

import React from "react";
import PostData from "../data/"
  class ResponseList extends React.Component {
      render(){
          <div>
              <h1>Hello There</h1>
              {PostData.map( (postDetail,index)=>{
                  return <h1>{postDetail.TOXICITY}</h1>
              })}
          </div>
      }
  
}

export default ResponseList;