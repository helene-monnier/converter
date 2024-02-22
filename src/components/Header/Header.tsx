import { ChangeEvent } from 'react';
import './Header.scss';

type HeaderProps = {
  baseAmount: undefined | number;
  setBaseAmount: React.Dispatch<React.SetStateAction<number>>;
};

function Header({ baseAmount, setBaseAmount }: HeaderProps) {
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const numValue = Number(value);
    setBaseAmount(numValue);
  };

  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">Converter </h1>
        <p className="header__subtitle">
          <input
            className="input"
            type="number | undefined"
            value={baseAmount}
            onChange={handleChangeInput}
          />
          euro
        </p>
      </div>
    </header>
  );
}

export default Header;
