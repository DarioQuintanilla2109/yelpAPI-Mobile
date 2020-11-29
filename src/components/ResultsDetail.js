import React from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight,
  Linking,
} from 'react-native'

const linkTo = phoneNumber => {
  let number = phoneNumber
  number = number.toString()
  if (Platform.OS === 'ios') {
    number = `telprompt:${number}`
  } else {
    number = `tel:${number}`
  }
  return Linking.openURL(number)
}

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imgStyle} source={{ uri: result.image_url }} />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text>{result.rating} Stars</Text>
      <TouchableHighlight>
        <Text style={styles.numStyle} onPress={() => linkTo(result.phone)}>
          {result.phone}
        </Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginTop: 15,
  },
  imgStyle: {
    width: 250,
    height: 120,
    borderRadius: 5,
  },
  nameStyle: {
    fontWeight: 'bold',
  },
  numStyle: {
    color: 'rgb(0,50,200)',
    borderColor: 'red',
    borderWidth: 3,
    width: 110,
    borderRadius: 10,
    borderColor: 'rgb(220, 218, 238)',
  },
})

export default ResultsDetail
