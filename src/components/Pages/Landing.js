import { Fragment, useState, useRef } from 'react';
import {Button, Card, Col, Container, Image, Modal, Row} from 'react-bootstrap';

import AccountCard from '../UI/AccountCard';
import Header from '../Layout/Header';
import Section from '../Layout/Section';
import styles from './Accounts.module.css';
import ColorPicker from "../UI/ColorPicker";

const Landing = props => {
  return (
    <div>
      <Section>
        <h2>Debe loguearse primero</h2>
      </Section>
    </div>
  )
};

export default Landing;
