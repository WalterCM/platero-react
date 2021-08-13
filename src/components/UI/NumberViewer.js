import styles from './NumberViewer.module.css';
import { Col, Row } from 'react-bootstrap';

 const NumberViewer = props => {
   let numberClassName = 'fw-bold fs-4';
   if (props.text) {
     numberClassName += ' text-' + props.text
   }

   let numerViewerClassName = `${styles.NumberViewer}`;
   if (props.vertical) {
     numerViewerClassName += ` ${styles.vertical}`
     console.log(numberClassName)
   }

   return (
    <div>
      <div className="fs-4">{props.label}</div>
      <div className={numberClassName}>{props.number}</div>
    </div>
  )
 };

export default NumberViewer;
