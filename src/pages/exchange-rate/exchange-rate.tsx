import CurrentExchangeRate from "../../components/current-exchange-rate/current-exchange-rate";
import { ExchangeConfig } from "../../const/Exchange-rate-api-config";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ExchangeRate() {
  const [fromCurrency, setFromCurrency] = useState("RUB");
  const [toCurrency, setToCurrency] = useState();

  const urlRates = `https://api.apilayer.com/currency_data/live?source=${fromCurrency}&currencies=RUB,USD,EUR`;
  const fetchData = async () => {
    const response = await axios(urlRates, ExchangeConfig);
    const result = response.data.quotes;
    setToCurrency(result);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <CurrentExchangeRate
        currency={fromCurrency}
        onChangeCurrency={(cur: string) => setFromCurrency(cur)}
      />
    </div>
  );
}
