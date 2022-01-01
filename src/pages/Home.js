import React from "react";
import Widget from "../components/Widget";
import Infobar from "../components/Infobar";
import Itemlist from "../components/Itemlist";
import Pagination from "../components/Pagination";

function Home() {
  return (
    <div>

      <section>
        <Widget />
        <Widget />
        <Widget />
      </section>

      <main>
        <Infobar />
        <Itemlist />
        <Pagination />
      </main>

    </div>
  );
}

export default Home;
