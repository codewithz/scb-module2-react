import React from 'react';
import queryString from 'query-string';

function Posts(props){

    const {year,month}=props.match.params;
    const queryParams=props.location.search;

    const result=queryString.parse(queryParams);
    console.log(result);

    return (
      <div>
          <h1>Posts</h1>
          Year:{year} ,Month :{month}
      </div>
    );
}

export default Posts;
