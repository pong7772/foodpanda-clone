import { View, Text, SafeAreaView, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from 'react';
import { userIcon, ChevronDownIcon, SearchIcon, AdjustmentsIcon } from "react-native-heroicons/solid"
const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
    return (
        <SafeAreaView>
            <View className="flex-row items-centered mx-4 space-x-2 pb-3 ">
                <Image source={require('../assets/logo.png')}
                    className="h-9 mt-9 w-9 bg-gray-300 rounded-full "
                />
                <View className="mt-9 flex-column items-left" >
                    <Text className="text-gray-500 font-bold text-xs">Delivery Now!</Text>
                    <View className="flex-row ">
                        <Text className="text-pink-500 font-bold text-sm items-start" >Current Location
                        </Text>
                        <ChevronDownIcon size={24} color="#ff69b4" />
                    </View>
                </View>
            </View >
        </SafeAreaView >
    );
}
export default HomeScreen;
