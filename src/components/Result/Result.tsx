import './Result.scss';

type ResultProps = {
  currency: string;
  value: number;
};

function Result({ currency, value }: ResultProps) {
  return (
    <div className="result">
      <p className="result__number">{value.toFixed(2)}</p>
      <h3 className="result__currency">{currency}</h3>
    </div>
  );
}

export default Result;
