import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function Widget({ props, heading }) {
  /*   const state = useSelector((state) => state);

  const dispatch = useDispatch();


  useEffect(() => {
    console.log(props)
    dispatch(props())
  }, [])
 */

  return (
    <article className=" bg-gray-100 px-10 py-5 flex flex-col justify-center text-center rounded-2xl mb-16">
      <h1 className="mb-2">{heading}</h1>
      <ul>
        {props && props.slice(0, 4).map((prop) => (
          <li className="mb-1" key={prop.item.id}>
          <img className=" w-5 inline-block mr-2" src={prop.item.small} alt="" />
          {prop.item.name} {`#${prop.item.market_cap_rank}`}
          </li>
        )
        )}
      </ul>
    </article>
  );
}

export default Widget; 
