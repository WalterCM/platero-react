import NumberViewer from '../UI/NumberViewer';

const MoneyViewer = props => {
  let amount = 0;
  if (props.amount) {
    amount = props.amount;
  }
  const money = `S/. ${amount.toFixed(2)}`;

  return (
    <NumberViewer
      label={props.label}
      number={money}
      text={props.text}
      vertical={props.vertical}
    />
  )
};

export default MoneyViewer;
