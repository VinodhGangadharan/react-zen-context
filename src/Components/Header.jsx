import React from "react";
import { useUserContext } from "../ContextProvider";

function Header() {
  const { cardQuantity, cardAmount } = useUserContext();

  return (
    <>
      <header>
        <div className="row bg-light d-flex justify-content-between align-items-center py-3">
          <div className="col"><b>TOTAL QTY: {cardQuantity}</b></div>
          <div className="col"><b>TOTAL Price : $ { (cardAmount).toFixed(2)}</b></div>
          <div className="col-auto">
            <button className="btn btn-primary">Proceed to Buy</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;