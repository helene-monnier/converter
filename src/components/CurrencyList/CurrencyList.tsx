import { Currency } from '../../@types/currency';
import './CurrencyList.scss';

type CurrenciesProps = {
  currencies: Currency[];
  setCurrentCurrency: React.Dispatch<
    React.SetStateAction<Currency | undefined>
  >;
};

function CurrencyList({ currencies, setCurrentCurrency }: CurrenciesProps) {
  const handleCurrencyClick = (currency: Currency) => {
    setCurrentCurrency(currency);
  };
  return (
    <div className="currenciesList">
      <h2 className="currenciesList__title">Currencies</h2>
      <ul className="currenciesList__ul">
        {currencies
          .toSorted((a, b) => (a.description < b.description ? -1 : 1))
          .map((currency) => (
            <li className="currenciesList__li" key={currency.code}>
              <button
                type="button"
                className="btn"
                onClick={() => {
                  handleCurrencyClick(currency);
                }}
              >
                {currency.description}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CurrencyList;
