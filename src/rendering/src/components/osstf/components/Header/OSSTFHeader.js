/* eslint-disable */
import React from 'react'
import { Container, Link, Image } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import styles from './style.module.css'

const AppHeader = (props) => {
  return (
    <Container
      tag="header"
      className={` ${styles['header']} ${styles[props.rootClassName]} `}
    >
      <Link
        href={props.fields.href}
        text={props.fields.text}
        className={styles['a']}
      >
        <Image src={props.fields.src} className={styles['logo']} />
      </Link>
      <ul className={styles['ul']}>
        <li className={styles['li']}>
          <Link
            href={props.fields.href1}
            text={props.fields.text1}
            className={styles['a1']}
          />
        </li>
        <li className={styles['li1']}>
          <Link
            href={props.fields.href2}
            text={props.fields.text2}
            className={styles['a2']}
          />
        </li>
        <li className={styles['li2']}>
          <Link
            href={props.fields.href3}
            text={props.fields.text3}
            className={styles['a3']}
          />
        </li>
        <li className={styles['li3']}>
          <Link
            href={props.fields.href4}
            text={props.fields.text4}
            className={styles['a4']}
          />
        </li>
        <li className={styles['li4']}>
          <Link
            href={props.fields.href5}
            text={props.fields.text5}
            className={styles['a5']}
          />
        </li>
        <li className={styles['li5']}>
          <Link
            href={props.fields.href6}
            text={props.fields.text6}
            className={styles['a6']}
          >
            <Image
              src={props.fields.src1}
              alt={props.fields.alt}
              width="138"
              height="37"
              className={styles['img']}
            />
          </Link>
        </li>
      </ul>
      <Image
        src={props.fields.src2}
        id="header_0_image1"
        className={styles['img1']}
      />
    </Container>
  )
}

AppHeader.defaultProps = {
  fields: {
    href: '/en-CA',
    text: '',
    src: 'https://www.osstf.on.ca/Content/images/OSSTF-Logo_en.gif',
    href1: 'http://www.osstf.on.ca/en-CA',
    text1: 'Home | ',
    href2: '/en-CA/calendar.aspx',
    text2: 'Calendar |  ',
    href3: '/fr-CA/membership.aspx',
    text3: 'Français | ',
    href4: '/en-CA/site-map.aspx',
    text4: 'Site Map | ',
    href5: '/en-CA/about-us/contact-us.aspx',
    text5: 'Contact Us',
    href6: '/en-CA/services/member-login.aspx',
    text6: '',
    src1: 'https://www.osstf.on.ca/-/media/Provincial/Images/login_secured-services/website-template_login-and-logout-buttons/login.ashx?h=37&la=en-CA&w=138',
    alt: 'Login',
    src2: 'https://www.osstf.on.ca/Content/images/OSSTF-Protecting_en.gif',
  },
  rootClassName: '',
  rendering: {},
}

AppHeader.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default AppHeader
