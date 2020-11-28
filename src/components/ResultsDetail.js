import React from 'react'
import { View, Image, Text, StyleSheet, TouchableHighlight } from 'react-native'

const ResultsDetail = ({ result }) => {
  return (
    <View>
      <Image style={styles.imgStyle} source={{ uri: result.image_url }} />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text>{result.rating} Stars</Text>
      <TouchableHighlight>
        <Text>{result.phone}</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  imgStyle: {
    width: 250,
    height: 120,
    borderRadius: 5,
  },
  nameStyle: {
    fontWeight: 'bold',
  },
})

export default ResultsDetail
