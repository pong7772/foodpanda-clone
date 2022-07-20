import { View, Text, SafeAreaView, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from 'react';
const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
    return (
        <SafeAreaView>
            <View className="flex-row items-centered mx-4 space-x-2 ">
                <Image source={require('../assets/logo.png')}
                    className="h-9 mt-6 w-9 bg-gray-300 rounded-full p-2"
                />
                <View className="mt-6">
                    <Text className="text-gray-1000 font-bold size-medium">Delivery Now!</Text>
                    <Text>Current Location</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}
export default HomeScreen;
