import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';

import { useRouter } from 'expo-router';

import styles from "./welcome.style";

import { icons, SIZES } from "../../../constants";

const jobTypes = ["Full-time", "Part-time", "Contractor"]

const Welcome = () => {
  const [searchValue, setSearchValue] = useState("");
  const [activeJobType, setActiveJobType] = useState("");

  const router = useRouter();

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
        <TouchableOpacity style={styles.searchBtn} onPress={() => { }}>
          <Image
            style={styles.searchBtnImage}
            source={icons.search}
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome;