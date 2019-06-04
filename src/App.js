import React from 'react'
import '@instructure/canvas-theme'
import { Heading , Text } from '@instructure/ui-elements'
import { View } from '@instructure/ui-layout'
import { IconCheckMarkSolid } from '@instructure/ui-icons'

import Panda from './Panda'

const App = () => (
  <View
    as="main"
    background="inverse"
    padding="large medium none"
    minHeight="100%"
    textAlign="center"
  >
    <View
      padding="small"
      display="inline-block"
      background="success"
      borderRadius="large"
      shadow="topmost"
    >
      <IconCheckMarkSolid size="medium" inline={false} />
    </View>
    <div style={{marginTop: '-1.5rem'}}>
      <View
        maxWidth="40rem"
        margin="0 auto"
        padding="x-large medium medium"
        display="block"
        background="light"
        borderRadius="large"
        shadow="above"
      >
        <Panda />
        <Heading level="h1" margin="none none small">You&apos;re all ready to go!</Heading>
        <Text size="large">Just edit <Text weight="bold" size="large">App.js</Text> to start building with Instructure UI.</Text>
      </View>
    </div>
  </View>
)

export default App
