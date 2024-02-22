import { useState } from 'react';
import { Currency } from '../../@types/currency';
import Header from '../Header/Header';
import Result from '../Result/Result';
import CurrencyList from '../CurrencyList/CurrencyList';

import currencies from '../../data/currencies';

import './App.scss';

function App() {
  const [currentCurrency, setCurrentCurrency] = useState<Currency>();
  const [baseAmount, setBaseAmount] = useState(0);
  const currentValue = baseAmount * (currentCurrency?.rate || 0);

  return (
    <div className="app">
      <Header baseAmount={baseAmount} setBaseAmount={setBaseAmount} />

      <main>
        <CurrencyList
          currencies={currencies}
          setCurrentCurrency={setCurrentCurrency}
        />
        {currentCurrency ? (
          <Result currency={currentCurrency.description} value={currentValue} />
        ) : (
          <div
            style={{
              color: 'red',
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            Veuillez selectionner une devise
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
