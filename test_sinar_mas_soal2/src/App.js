import React, { useState, useEffect } from "react";

function App() {
  let [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    if (totalCount === 10) {
      alert("Alhamdulillah sudah mencapai target");
      setTotalCount(0);
    }
  }, [totalCount]);
  return (
    <div class="">
      <h1 class="d-flex justify-content-center">Tasbih digital</h1>
      <p class="d-flex justify-content-center">
        Cara menggunakan program ini hanya dengan klik tombol tambah hingga
        counter mencapai 10
      </p>
      <h1 class="d-flex justify-content-center">===========================</h1>
      <h2 class="d-flex justify-content-center">{totalCount}</h2>

      <div class="d-flex justify-content-center">
        <button
          onClick={(tambah) => {
            setTotalCount(totalCount + 1);
          }}
        >
          +
        </button>
        <button
          onClick={(restart) => {
            setTotalCount(0);
          }}
        >
          restart
        </button>
      </div>
    </div>
  );
}

export default App;
