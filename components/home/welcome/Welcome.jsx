import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';

import { useRouter } from 'expo-router';

import styles from "./welcome.style";

import { icons, SIZES } from "../../../constants";

const Welcome = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <View>
      <View style={styles.container} >
        <Text style={styles.userName} >Hello Jacob</Text>
        <Text style={styles.welcomeMessage} >Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer} >
        <View style={styles.searchWrapper} >
          <TextInput
            style={styles.searchInput}
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            placeholder='What job are you looking for?'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
            style={styles.searchBtnImage}
            source={icons.search}
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Welcome;