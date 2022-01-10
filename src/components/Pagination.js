import React from "react";
import { Link } from "react-router-dom";

function Pagination({ pageId }) {
  const getPageNum = (urlId = "page=1") => Number(urlId.match(/=\s*(.*)$/)[1]);

  const pId = getPageNum(pageId);

  return (
    <div className="btn-group flex justify-center mt-2">
      <Link to={`/page=${pId - 1 ? pId - 1 : pId}`} className="btn btn-xs">
        «
      </Link>
      <Link to={`/page=${pId}`} className="btn btn-xs btn-active">
        {pId}
      </Link>
      <Link to={`/page=${pId + 1}`} className="btn btn-xs">
        {pId + 1}
      </Link>
      <Link to={`/page=${pId + 2}`} className="btn btn-xs">
        {pId + 2}
      </Link>
      <Link to={`/page=${pId + 3}`} className="btn btn-xs">
        {pId + 3}
      </Link>
      <Link to={`/page=${pId + 1}`} className="btn btn-xs">
        »
      </Link>
    </div>
  );
}

export default Pagination;
