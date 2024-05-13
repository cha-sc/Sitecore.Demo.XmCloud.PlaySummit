/* eslint-disable */
import React from 'react'
import { Link, Image, Text } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import styles from './style.module.css'

const DocListItem = (props) => {
  return (
    <li
      className={` ${styles['doc-list-item']} ${styles[props.rootClassName]} `}
    >
      <Link
        href="/-/media/Provincial/Documents/Membership/pamphlet-you-osstf-educational-support.ashx?sc_lang=en-CA"
        target="_blank"
        className={styles['a']}
      >
        <Image
          src="https://www.osstf.on.ca/temp/fileicon_.pdf_16x16.png"
          alt="Educational Support Staff Pamphlet"
          className={styles['img']}
        />
      </Link>
      <Link
        href="/-/media/Provincial/Documents/Membership/pamphlet-you-osstf-educational-support.ashx?sc_lang=en-CA"
        target="_blank"
        text="\n                Educational Support Staff Pamphlet\n            "
        className={styles['a1']}
      />
      <Link
        href="/-/media/Provincial/Documents/Membership/pamphlet-you-osstf-educational-support.ashx?sc_lang=en-CA"
        target="_blank"
        text="\n                pamphlet-you-osstf-educational-support.pdf\n            "
        className={styles['a2']}
      />
      <Text text="\n             A brief document outlining the advantages for educational support staff to join OSSTF/FEESO. \n        " />
    </li>
  )
}

DocListItem.defaultProps = {
  fields: {},
  rootClassName: '',
  rendering: {},
}

DocListItem.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default DocListItem
