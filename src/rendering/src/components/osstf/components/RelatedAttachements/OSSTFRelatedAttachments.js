/* eslint-disable */
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import RelatedDocsHeading from '../../kajoo-components/RelatedDocsHeading/KajooRelatedDocsHeading'
import DocListItem from '../../kajoo-components/DocListItem/KajooDocListItem'
import styles from './style.module.css'

const RelatedAttachements = (props) => {
  return (
    <Container
      className={` ${styles['container']} ${styles[props.rootClassName]} `}
    >
      <RelatedDocsHeading rootClassName="root-class-name" />
      <ul className={styles['ul']}>
        <Container className={styles['repeater']}>
          {props.fields.items.map((item, index) => (
            <Container key={index} className={styles['collection-item']}>
              <DocListItem rootClassName="root-class-name" />
            </Container>
          ))}
        </Container>
      </ul>
    </Container>
  )
}

RelatedAttachements.defaultProps = {
  fields: {
    items: [
      {
        fields: {},
      },
      {
        fields: {},
      },
      {
        fields: {},
      },
    ],
  },
  rootClassName: '',
  rendering: {},
}

RelatedAttachements.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default RelatedAttachements
