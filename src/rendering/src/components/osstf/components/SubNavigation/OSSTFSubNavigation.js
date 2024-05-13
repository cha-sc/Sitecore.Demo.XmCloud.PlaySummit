/* eslint-disable */
import React from 'react'
import { Container, Link } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import styles from './style.module.css'

const SubNavigation = (props) => {
  return (
    <Container
      tag="nav"
      className={` ${styles['sub-navigation']} ${styles[props.rootClassName]} `}
    >
      <ul className={styles['ul']}>
        <li className={styles['li']}>
          <Link
            href={props.fields.href}
            text={props.fields.text}
            className={styles['a']}
          />
        </li>
        <li className={styles['li1']}>
          <Link
            href={props.fields.href1}
            text={props.fields.text1}
            className={styles['a1']}
          />
        </li>
        <li className={styles['li2']}>
          <Link
            href={props.fields.href2}
            text={props.fields.text2}
            className={styles['a2']}
          />
        </li>
      </ul>
    </Container>
  )
}

SubNavigation.defaultProps = {
  fields: {
    href: '/en-CA/askosstf.aspx',
    text: 'New Member Information',
    href1: '/en-CA/support-staff.aspx',
    text1: 'Support Staff',
    href2: '/en-CA/teachers.aspx',
    text2: 'Teachers / OT',
  },
  rootClassName: '',
  rendering: {},
}

SubNavigation.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default SubNavigation
