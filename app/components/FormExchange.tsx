import React from "react";

const FormExchange = () => {
  return (
    <form>
      <input type="number" name="amount" id="amount" />
      <select name="fromCurrency" id="fromCurrency"></select>

      <select name="toCurrency" id="toCurrency"></select>
    </form>
  );
};

export default FormExchange;
