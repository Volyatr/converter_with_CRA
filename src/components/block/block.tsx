import { IBlock } from "../../interfaces/block";

export default function Block({
  value,
  currency,
  onChangeValue,
  onChangeCurrency,
}: IBlock) {
  const defaultCurrencies = ["RUB", "USD", "EUR"];
  return (
    <div className="block">
      <ul className="currencies">
        {defaultCurrencies.map((cur) => (
          <li
            onClick={() => onChangeCurrency(cur)}
            key={cur}
            className={currency === cur ? "active" : ""}
          >
            {cur}
          </li>
        ))}
      </ul>
      <input
        onChange={(e) => onChangeValue(e.target.value)}
        value={value}
        type="number"
      />
    </div>
  );
}
