import React from 'react';
const Card=(Props)=>
{
    return (
        <>
        <div className="col-sm-3">
<div className="card" style={{width: '18rem'}}>
  <img src="https://images.unsplash.com/photo-1484704849700-f032a568e944?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{Props.name}</h5>
    <h5 className="card-title">{Props.price}</h5>
    <h5 className="card-title">{Props.cat}</h5>
    <h5 className="card-title">{Props.cmp}</h5>
    <a href="https://www.paypal.com/signin?returnUri=https%3A%2F%2Fwww.paypal.com%2Fcgi-bin%2Fwebscr%3fcmd%3d_account" className="btn btn-primary">Buy Now</a>
  </div>
</div>
</div>
</>
    )
}
export default Card;