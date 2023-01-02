import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Discover = () => {
    const navigate = useNavigation()
    useLayoutEffect(() => {

        navigate.setOptions({
            headerShown: false
        })

    }, [])

  return (
    <SafeAreaView>
      <Text>Discover</Text>
    </SafeAreaView>
  )
}

export default Discover