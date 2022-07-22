import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from 'react';
import { userIcon, ChevronDownIcon, SearchIcon, AdjustmentsIcon, UserIcon } from "react-native-heroicons/outline"
const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
    return (
        <SafeAreaView className="bg-white pb-4">
            <View className="flex-row items-centered mx-4 space-x-2 pb-3 ">
                <Image source={require('../assets/logo.png')}
                    className="h-9 mt-7 w-9 bg-gray-300 rounded-full "
                />
                <View className="mt-7 flex-column items-left flex-1" >
                    <Text className="text-gray-500 font-bold text-xs">Delivery Now!</Text>
                    <View className="flex-row " >
                        <Text className="text-pink-500 font-bold text-sm items-start" >Current Location
                        </Text>
                        <ChevronDownIcon size={24} color="#ff69b4" />
                    </View>
                </View>
                <View className="mt-8 " >
                    <UserIcon size={34} color="#ff69b4" />
                </View>
            </View >
            <View className="flex-row items-center space-x-2 mb-1">
                <View className="flex-row flex-1 bg-gray-200 rounded-r-sm p-1 mx-2 space-x-3">
                    <SearchIcon size={24} color="#ff69b4" />
                    <TextInput placeholder='Search For Food'
                        keyboardType='default' />
                </View>
                <AdjustmentsIcon size={24} color="#ff69b4" />
            </View>

            {/* scrollview */}
            <ScrollView >


            </ScrollView>
        </SafeAreaView >
    );
}
export default HomeScreen;
