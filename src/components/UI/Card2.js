import styles from './Card2.module.css';

const Card2 = props => {
  let className = styles.card;
  if (props.className) {
    className += ' ' + props.className;
  }
  return (
    <div className={className}>
      {props.children}
    </div>
  )
};

export default Card2;
