import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'

import styles from './popularjobs.style';

import { COLORS, SIZES } from "../../../constants";

import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import { useRouter } from 'expo-router';
import { isLoading } from 'expo-font';
import useFetch from "../../../hook/useFetch";


const Popularjobs = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);
  const router = useRouter();

  const { data, isLoading, error } = useFetch("React Developer in Los Angeles")


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn} >Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer} >
        {
          isLoading
            ? <ActivityIndicator size="large" colors={COLORS.primary} />
            : error
              ? <Text>Something went wrong :(</Text>
              :
              <FlatList
                data={data}
                renderItem={({ item }) => (
                  <PopularJobCard item={item} />
                )}
                keyExtractor={item => item.job_id}
                horizontal
              />
        }
      </View>
    </View>
  )
}

export default Popularjobs