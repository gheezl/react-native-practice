import React from 'react'
import { View, Text } from 'react-native'

import styles from './nearbyjobs.style'

const Nearbyjobs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle} >Nearbyjobs</Text>
      </View>
    </View>
  )
}

export default Nearbyjobs