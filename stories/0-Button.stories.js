import React from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import Button from '../components/Button'
import NavigationButton from '../components/NavigationButton'
import { Home } from '../components/icons'
import NavigationForStorybook from '../components/NavigationForStorybook'
import TextBody from '../components/TextBody'
import TweetButton from '../components/TweetButton'
import Stack from '../components/Stack'
import ProfileBox from '../components/ProfileBox'

export default {
  title: 'Button',
  decorators: [withKnobs]
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
export const navigationItems = () => {
  const flat = boolean('Flat', false)
  return <NavigationForStorybook flat={flat} />
}

export const profileBox = () => <ProfileBox />
