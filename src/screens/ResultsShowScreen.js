import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native'
import yelp from '../api/yelp'
import { Fontisto } from '@expo/vector-icons'

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null)

  const id = navigation.getParam('id')

  const getResult = async id => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }

  const openMaps = address => {
    const url = Platform.select({
      ios: `maps:0,0?q=${address}`,
      android: `geo:0,0?q=${address}`,
    })

    Linking.openURL(url)
  }

  useEffect(() => {
    getResult(id)
  }, [])

  if (!result) {
    return null
  }

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.nameStyle}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imgStyle} source={{ uri: item }} />
        }}
      />
      <TouchableOpacity>
        <Fontisto
          onPress={() => openMaps(result.location.address1)}
          style={styles.iconStyle}
          name='map'
          size={24}
          color='black'
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  imgStyle: {
    height: 200,
    width: 300,
    borderRadius: 50,
    marginBottom: 15,
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(245,245,245)',
    flex: 1,
  },
  nameStyle: {
    color: '#03506f',
    fontSize: 22,
    marginBottom: 20,
    marginTop: 20,
    borderColor: '#0a043c',
  },
  iconStyle: {
    marginBottom: 35,
    fontSize: 44,
    color: '#03506f',
  },
})

export default ResultsShowScreen
