import React, { Fragment, useState, useEffect } from 'react';

import styles from './ColorPicker.module.css';
import {Button, Col, Modal, Row} from 'react-bootstrap';

const ColorPicker = React.forwardRef((props, ref) => {
  const [color, setColor] = useState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setColor(props.starting)
  }, [])

  const handleClose = () => setShow(false);
  const handleColor = (color) => {
    setColor(color);
    handleClose();
  };

  const handleShow = () => {
    setShow(true);
  };

  const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']

  return (
    <Fragment>
      <Button onClick={handleShow} variant={color} />
      <input value={color} ref={ref} hidden />

      <Modal
        className={styles.ColorPicker}
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
           <Modal.Title>Select a color</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {
              colors.map(color_str => (
                <Col key={color_str} xs={3} sm={3} md={3} lg={3} xl={3} >
                  <Button
                    className={styles.ColorButton}
                    variant={color_str}
                    onClick={() => handleColor(color_str)}
                  />
                </Col>
              ))
            }
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={color} onClick={handleClose}>
              Close
          </Button>
       </Modal.Footer>
      </Modal>
    </Fragment>
  )
});

export default ColorPicker;
