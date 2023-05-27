import React from 'react';
import LoadingImg from "../../images/loading2.gif";
import "./Loading.css";

const Loading = () => {
  return (
    <div className='loading flex flex-c'>
      <img src={LoadingImg} alt="loading" />
    </div>
  )
}

export default Loading