import React, { Fragment, useState } from 'react';

import styles from './MonthPicker.module.css';
import {Button, Col, Modal, Row} from 'react-bootstrap';

const MonthPicker = React.forwardRef((props, ref) => {
  const today = new Date();
  const [date, setDate] = useState(today);
  const [newDate, setNewDate] = useState(today);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleCurrentMonth = () => {
    handleMonth(null, today)
  };
  const handleMonth = (month, date_) => {
    if (date_) {
      setDate(date_)
    } else if (month) {
      setDate(new Date(newDate.setMonth(month)));
    }

    handleClose();
    if (props.onPick) {
      props.onPick(date);
    }
  };

  const handleShow = () => {
    setNewDate(new Date(date))
    setShow(true);
  };

  const nextYear = () => {
    setNewDate(new Date(newDate.setFullYear(newDate.getFullYear() + 1)));
  };

  const prevYear = () => {
    setNewDate(new Date(newDate.setFullYear(newDate.getFullYear() - 1)));
  };

  let monthStr = date.toLocaleString('default', { month: 'long' });
  const startYear = date.getFullYear()
  if (startYear !== new Date().getFullYear()) {
    monthStr += ', ' + startYear
  }

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
      <input value={date} ref={ref} hidden />

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Button variant="secondary" onClick={prevYear}>&lt;</Button>
          <Modal.Title>{year}</Modal.Title>
          <Button variant="secondary" onClick={nextYear}>&gt;</Button>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {
              Object.entries(months).map(([month, monthId]) => (
                <Col xs={4} sm={4} md={4} lg={3} xl={2}>
                  <Button
                    className={styles.MonthButton}
                    variant="secondary"
                    onClick={() => handleMonth(monthId)}
                  >
                    {
                        // Label of the button. The month string
                        month
                    }
                  </Button>
                </Col>
              ))
            }
          </Row>
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
});

export default MonthPicker;
