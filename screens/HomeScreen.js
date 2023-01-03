import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HeroImage } from '../assets'
import * as Animatable from 'react-native-animatable';

const HomeScreen = () => {
    const navigate = useNavigation()
    useLayoutEffect(() => {

        navigate.setOptions({
            headerShown: false
        })

    }, [])
    return (
        <SafeAreaView className=' bg-neutral-200 flex-1 relative'>
            {/* first section */}
            <View className='flex-row '>
                <View className=' bg-teal-900 w-14 h-14 rounded-full ml-5 mt-5'>
                    <Text className='text-3xl text-teal-500 mx-auto my-auto '>Go</Text>
                </View>
                <Text className='mt-8 ml-3 text-3xl font-bold text-neutral-800'>Travel</Text>
            </View>
            {/* second section */}
            <View className='ml-5 mt-10 '>
                <Text className='text-4xl font-mono text-neutral-800 font-light'>Enjoy the trip with</Text>
                <Text className='text-3xl mt-2 font-mono text-teal-600 font-semibold '>Good Moments</Text>

                <Text className='mt-4 text-xs text-ellipsis w-96'>Occaecat quis veniam fugiat adipisicing sint ullamco aute eiusmod Lorem. Quis proident cillum enim culpa ut labore consectetur consectetur nisi.</Text>
            </View>

            <View className='h-[400px] w-[400px] bg-teal-600 mt-4 rounded-full absolute bottom-36 -right-36'></View>
            <View className='h-[400px] w-[400px] bg-red-400 mt-4 rounded-full absolute -bottom-28 -left-36'></View>
            {/* image */}
            <View className='flex-1 relative items-center justify-center '>
                <Animatable.Image
                    animation={'fadeIn'} easing={'ease-in-out'}
                    className='w-full h-full mt-20  object-cover right-30' source={HeroImage} />


                <>
                    <TouchableOpacity 
                    onPress={()=>navigate.navigate("Discover")}
                    className='absolute bottom-20 border-r-4 rounded-full w-28 h-28 pt-1 border-teal-500 border-t-4 border-l-4'>
                        <Animatable.View animation='pulse' easing='ease-in-out' className=' w-24 h-24 bg-teal-400 border border-white my-auto mx-auto  shadow-neutral-900 rounded-full'>
                            <Text className='text-5xl font-semibold text-teal-800 mx-auto my-auto mt-6'>Go</Text>
                        </Animatable.View>
                    </TouchableOpacity>
                </>
            </View>

        </SafeAreaView>
    )
}

export default HomeScreen