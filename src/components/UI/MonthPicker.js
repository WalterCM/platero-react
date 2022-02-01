import { Fragment, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import styles from './MonthPicker.module.css';
import { Button, Col, Modal } from 'react-bootstrap';

const MonthPicker = props => {
  const [startDate, setStartDate] = useState(new Date());
  const [newDate, setNewDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleCurrentMonth = () => {
    setStartDate(new Date());
    handleClose()
  };
  const handleMonth = (month) => {
    setStartDate(new Date(newDate.setMonth(month)))
    handleClose()
  };

  const handleShow = () => {
    console.log('startDate: ', startDate)
    console.log('newDate: ', newDate)
    setNewDate(new Date(startDate))
    setShow(true);
  };

  const nextYear = () => {
    setNewDate(new Date(newDate.setFullYear(newDate.getFullYear() + 1)));
  };

  const prevYear = () => {
    setNewDate(new Date(newDate.setFullYear(newDate.getFullYear() - 1)));
  };

  const monthStr = startDate.toLocaleString('default', { month: 'long' });
  const year = newDate.getFullYear()
  const months = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  }

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
          <Button variant="secondary" onClick={prevYear}></Button>
          <Modal.Title>{year}</Modal.Title>
          <Button variant="secondary" onClick={nextYear}></Button>
        </Modal.Header>
        <Modal.Body>
          {
            Object.entries(months).map(([month, monthId]) => {
              console.log('monthId: ', monthId)
              return (
                  <Button size="lg" variant="secondary" onClick={() => handleMonth(monthId)}>{month}</Button>
              )

            })
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCurrentMonth}>
            Current month
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  )
};

export default MonthPicker;
