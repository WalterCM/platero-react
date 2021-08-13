import { Fragment, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import styles from './MonthPicker.module.css';
import { Button, Modal } from 'react-bootstrap';

const MonthPicker = props => {
  const [startDate, setStartDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const nextMonth = (prevState) => {
    const newDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
    setStartDate(newDate);
  };

  const prevMonth = () => {
    const newDate = new Date(startDate.setMonth(startDate.getMonth() - 1));
    setStartDate(newDate);
  };

  const monthStr = startDate.toLocaleString('default', { month: 'long' });

  return (
    <Fragment>
      <Button onClick={handleShow} className={props.className}>{monthStr}</Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>Select Month</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Body
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  )
};

export default MonthPicker;
