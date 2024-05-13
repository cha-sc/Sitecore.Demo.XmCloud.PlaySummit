/* eslint-disable */
import React from 'react'
import { Container, Link, Image } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import styles from './style.module.css'

const SideTiles = (props) => {
  return (
    <Container
      className={` ${styles['container']} ${styles[props.rootClassName]} `}
    >
      <ul className={styles['ul']}>
        <li className={styles['li']}>
          <Link
            id="right_0_lvBadges_lnkBagde_0"
            href={props.fields.href}
            text={props.fields.text}
            className={styles['a']}
          >
            <Image
              src={props.fields.src}
              alt={props.fields.alt}
              className={styles['img']}
            />
          </Link>
        </li>
        <li className={styles['li1']}>
          <Link
            id="right_0_lvBadges_lnkBagde_1"
            href={props.fields.href1}
            text={props.fields.text1}
            className={styles['a01']}
          >
            <Image
              src={props.fields.src1}
              alt={props.fields.alt1}
              className={styles['img01']}
            />
          </Link>
        </li>
        <li className={styles['li2']}>
          <Link
            id="right_0_lvBadges_lnkBagde_2"
            href={props.fields.href2}
            text={props.fields.text2}
            className={styles['a02']}
          >
            <Image
              src={props.fields.src2}
              alt={props.fields.alt2}
              className={styles['img02']}
            />
          </Link>
        </li>
        <li className={styles['li3']}>
          <Link
            id="right_0_lvBadges_lnkBagde_3"
            href={props.fields.href3}
            text={props.fields.text3}
            className={styles['a03']}
          >
            <Image
              src={props.fields.src3}
              alt={props.fields.alt3}
              className={styles['img03']}
            />
          </Link>
        </li>
        <li className={styles['li4']}>
          <Link
            id="right_0_lvBadges_lnkBagde_4"
            href={props.fields.href4}
            text={props.fields.text4}
            className={styles['a04']}
          >
            <Image
              src={props.fields.src4}
              alt={props.fields.alt4}
              className={styles['img04']}
            />
          </Link>
        </li>
      </ul>
      <Container
        id="carousel-advertising-generic0112E2BC-5567-4EF3-A0D6-18A653FD8E18"
        data-ride="carousel"
        className={styles['div']}
      >
        <ol className={styles['ol']} />
        <Container role="listbox" className={styles['div1']}>
          <Container className={styles['div2']}>
            <Link
              href={props.fields.href5}
              text={props.fields.text5}
              className={styles['a05']}
            >
              <Image src={props.fields.src5} className={styles['img05']} />
            </Link>
            <Link
              href={props.fields.href6}
              text={props.fields.text6}
              className={styles['a06']}
            >
              <Image src={props.fields.src6} className={styles['img06']} />
            </Link>
            <Link
              href={props.fields.href7}
              text={props.fields.text7}
              className={styles['a07']}
            >
              <Image src={props.fields.src7} className={styles['img07']} />
            </Link>
          </Container>
          <Container className={styles['div3']}>
            <Link
              href={props.fields.href8}
              text={props.fields.text8}
              className={styles['a08']}
            >
              <Image src={props.fields.src8} className={styles['img08']} />
            </Link>
            <Link
              href={props.fields.href9}
              text={props.fields.text9}
              className={styles['a09']}
            >
              <Image src={props.fields.src9} className={styles['img09']} />
            </Link>
          </Container>
        </Container>
        <Link
          href={props.fields.href10}
          role="button"
          data-slide="prev"
          text={props.fields.text10}
          className={styles['a10']}
        >
          <Image src={props.fields.src10} className={styles['img10']} />
        </Link>
        <Link
          href={props.fields.href11}
          role="button"
          data-slide="next"
          text={props.fields.text11}
          className={styles['a11']}
        >
          <Image src={props.fields.src11} className={styles['img11']} />
        </Link>
      </Container>
    </Container>
  )
}

SideTiles.defaultProps = {
  fields: {
    href: '/en-CA/services/member-login/members-login.aspx',
    text: '',
    src: 'https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/61250cff41b50b5a764f6a3b/assets/kajoo-image-1715444894964.png',
    alt: 'Member Login',
    href1:
      '/en-CA/services/member-login/members-login/voluntary-binding-interest-arbitration.aspx',
    text1: '',
    src1: 'https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/61250cff41b50b5a764f6a3b/assets/kajoo-image-1715444905383.png',
    alt1: 'Bill 124 Remedy',
    href2:
      '/en-CA/services/member-login/members-login/voluntary-binding-interest-arbitration.aspx',
    text2: '',
    src2: 'https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/61250cff41b50b5a764f6a3b/assets/kajoo-image-1715444912405.png',
    alt2: 'Voluntary Binding Interest Arbitration',
    href3: 'https://union-store.com/osstf/',
    text3: '',
    src3: 'https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/61250cff41b50b5a764f6a3b/assets/kajoo-image-1715444918512.png',
    alt3: 'OSSTF Boutique FEESO ',
    href4: '/en-CA/about-us/what-we-stand-for/equity.aspx',
    text4: '',
    src4: 'https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/61250cff41b50b5a764f6a3b/assets/kajoo-image-1715444930973.png',
    alt4: 'Equity matters',
    href5: '/en-CA/services/member-login/members-login.aspx',
    text5: '',
    src5: 'https://www.osstf.on.ca/-/media/Provincial/Images/Ads/member-login.ashx?sc_lang=en-CA',
    href6:
      '/en-CA/services/member-login/members-login/voluntary-binding-interest-arbitration.aspx',
    text6: '',
    src6: 'https://www.osstf.on.ca/-/media/Provincial/Images/Ads/bill-124-remedy-website-badge-01.ashx?sc_lang=en-CA',
    href7:
      '/en-CA/services/member-login/members-login/voluntary-binding-interest-arbitration.aspx',
    text7: '',
    src7: 'https://www.osstf.on.ca/-/media/Provincial/Images/Ads/arbitration_web-graphic_web-badge_small-en.ashx?sc_lang=en-CA',
    href8: 'https://union-store.com/osstf/',
    text8: '',
    src8: 'https://www.osstf.on.ca/-/media/Provincial/Images/Ads/osstfboutique_webbadgesmall.ashx?sc_lang=en-CA',
    href9: '/en-CA/about-us/what-we-stand-for/equity.aspx',
    text9: '',
    src9: 'https://www.osstf.on.ca/-/media/Provincial/Images/Ads/equity-matters_125-132-badge_en.ashx?sc_lang=en-CA',
    href10: '#carousel-advertising-generic0112E2BC-5567-4EF3-A0D6-18A653FD8E18',
    text10: '',
    src10: 'https://www.osstf.on.ca/Content/images/left-arrow.png',
    href11: '#carousel-advertising-generic0112E2BC-5567-4EF3-A0D6-18A653FD8E18',
    text11: '',
    src11: 'https://www.osstf.on.ca/Content/images/right-arrow.png',
  },
  rootClassName: '',
  rendering: {},
}

SideTiles.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default SideTiles
