import React from 'react'

import Button from '../components/Button'
import NavigationButton from '../components/NavigationButton'
import { Home } from '../components/icons'
import Navigation from '../components/Navigation'
import TextBody from '../components/TextBody'
import TweetButton from '../components/TweetButton'
import Stack from '../components/Stack'
export default {
  title: 'Button',
  component: Button
}
export const button = () => <Button>Default Button</Button>
export const tweetButton = () => (
  <Stack column gap={40}>
    <TweetButton>normal Tweet</TweetButton>
    <TweetButton full>full tweet button</TweetButton>

    <TweetButton full big>
      full big tweet button
    </TweetButton>
  </Stack>
)
export const navButton = () => (
  <NavigationButton>
    <Home />
    <TextBody>Home</TextBody>
  </NavigationButton>
)
export const navigationItems = () => (
  <Navigation selectedKey="home"></Navigation>
)
