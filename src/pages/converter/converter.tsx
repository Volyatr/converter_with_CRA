import Block from "../../components/block/block";
import axios from "axios";
import { ExchangeConfig } from "../../const/Exchange-rate-api-config";
import { useState, useEffect } from "react";

export default function Converter() {
  const [fromCurrency, setFromCurrency] = useState("RUB");
  const [toCurrency, setToCurrency] = useState("USD");
  const [fromPrice, setFromPrice] = useState(100);
  const [toPrice, setToPrice] = useState(0);

  const [rates, setRates] = useState(0);

  const urlConvert = `https://api.apilayer.com/currency_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${fromPrice}`;

  const fetchData = async () => {
    const response = await axios(urlConvert, ExchangeConfig);
    const result = response.data.result;
    setRates(result);
  };
  useEffect(() => {
    fetchData();
  }, [fromPrice, fromCurrency, toCurrency]);

  const OnChangeFromPrice = (value: number) => {
    setFromPrice(value);
  };
  const OnChangeToPrice = (value: number) => {
    setToPrice(value);
  };

  return (
    <>
      <Block
        value={fromPrice}
        currency={fromCurrency}
        onChangeCurrency={(cur: string) => setFromCurrency(cur)}
        onChangeValue={OnChangeFromPrice}
      />
      <Block
        value={rates}
        currency={toCurrency}
        onChangeCurrency={(cur: string) => setToCurrency(cur)}
        onChangeValue={OnChangeToPrice}
      />
    </>
  );
}
