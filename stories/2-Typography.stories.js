import React from 'react'
import TextTitle from '../components/TextTitle'
import TextBody from '../components/TextBody'

export default {
  title: 'Typography'
}
export const Title = () => (
  <div>
    <TextTitle>Normal Text Title</TextTitle>
    <TextTitle bold>Bold Text Title</TextTitle>
    <TextBody>Normal Text Body</TextBody>
    <hr />
    <TextBody bold>Bold Text Body</TextBody>
    <hr />
  </div>
)
