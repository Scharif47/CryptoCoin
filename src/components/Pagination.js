import React from "react";

function Pagination() {
  return (
    <div className="btn-group flex justify-center mt-2">
      <button className="btn btn-xs">«</button>
      <button className="btn btn-xs">1</button>
      <button className="btn btn-xs btn-active">2</button>
      <button className="btn btn-xs">3</button>
      <button className="btn btn-xs">4</button>
      <button className="btn btn-xs">»</button>
    </div>
  );
}

export default Pagination;
