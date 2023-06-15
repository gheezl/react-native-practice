import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, SIZES, icons, images } from "../constants";
import { Nearbyjobs, Popularjobs, ScreenHeaderBt, Welcomd } from "../components";

const Home = () => {
    const router = useRouter();

    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}

export default Home;