/* eslint-disable */
import React from 'react'
import { Text } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import styles from './style.module.css'

const RelatedDocsHeading = (props) => {
  return (
    <Text
      tag="h4"
      text="Related Attachments"
      className={` ${styles['related-docs-heading']} ${
        styles[props.rootClassName]
      } `}
    />
  )
}

RelatedDocsHeading.defaultProps = {
  fields: {},
  rootClassName: '',
  rendering: {},
}

RelatedDocsHeading.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default RelatedDocsHeading
