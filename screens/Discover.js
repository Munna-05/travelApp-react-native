import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image, ScrollView, Button } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { HeroImage } from '../assets'
import axios from 'axios'

const Discover = () => {
    const navigate = useNavigation()
    const [places, setPlaces] = useState([])
    const [name,setName] = useState('')
    useLayoutEffect(() => {
        // const options = {
        //     method: 'GET',
        //     url: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
        //     params: {query: 'eiffel tower', lang: 'en_US', units: 'km'},
        //     headers: {
        //       'X-RapidAPI-Key': '98708987a5mshacfd574ef4cff3ap12c3c7jsn52d952a577b0',
        //       'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        //     }
        //   };
          
        //   axios.request(options).then(function (response) {
        //       console.log(response.data.data.Typeahead_autocomplete.results);
        //       setPlaces(response.data.data.Typeahead_autocomplete.results)
        //   }).catch(function (error) {
        //       console.error(error);
        //   });

        navigate.setOptions({
            headerShown: true
        })

    }, [])
    const search = () =>{
        const options = {
            method: 'GET',
            url: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
            params: {query: `${name}`, lang: 'en_US', units: 'km'},
            headers: {
              'X-RapidAPI-Key': '98708987a5mshacfd574ef4cff3ap12c3c7jsn52d952a577b0',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data.data.Typeahead_autocomplete.results);
              setPlaces(response.data.data.Typeahead_autocomplete.results)
          }).catch(function (error) {
              console.error(error);
          });
    }

    return (
        <SafeAreaView>
            <ScrollView className='h-screen'>
                <View className='flex-row justify-between'>
                    <View>
                        <Text className='text-4xl font-semibold mt-4 ml-5 text-teal-700'>Discover</Text>
                        <Text className='text-3xl font-normal ml-5 text-neutral-700'>the beauty today</Text>
                    </View>
                    <Image className='h-16 shadow-md shadow shadow-black w-16 rounded-full bg-yellow-400 top-2 my-auto mr-2' source={{ uri: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png' }}></Image>
                </View>
                <View className='flex-row'>
                    <TextInput onChangeText={(e)=>setName(e)} className='bg-white ml-5 mr-3 mt-5 p-3 w-[300] rounded-lg shadow-lg shadow-neutral-300' placeholder='Search'></TextInput>
                    <TouchableOpacity onPress={search} className='mt-5 p-3 bg-slate-300 rounded-lg'><Text>Search</Text></TouchableOpacity>
                </View>
                <View className=' flex-row'>
                    <TouchableOpacity className='mx-auto mt-5'>
                        <Image className='h-24 shadow-md shadow object-contain shadow-black w-24 rounded-full bg-yellow-400  my-auto ' source={{ uri: 'https://img.freepik.com/premium-vector/flat-hotel-building-background_23-2148146118.jpg?w=2000' }}></Image>
                        <Text className='mx-auto capitalize mt-2'>hotels</Text>

                    </TouchableOpacity>
                    <TouchableOpacity className='mx-auto  mt-5'>
                        <Image className='h-24 shadow-md shadow shadow-black w-24 rounded-full bg-yellow-400  my-auto ' source={{ uri: 'https://img.freepik.com/free-vector/travel-tourism-label-with-attractions_1284-52995.jpg' }}></Image>
                        <Text className='mx-auto mt-2'>Attractions</Text>

                    </TouchableOpacity>
                    <TouchableOpacity className='mx-auto  mt-5'>
                        <Image className='h-24 shadow-md shadow shadow-black w-24 rounded-full bg-yellow-400  my-auto ' source={{ uri: 'https://img.freepik.com/premium-vector/elegant-restaurant-composition_23-2147855078.jpg?w=2000' }}></Image>
                        <Text className='mx-auto  mt-2'>Restaurants</Text>

                    </TouchableOpacity>




                </View>
                <View className='flex-row justify-between mx-3 px-2 mt-10'>
                    <Text className='text-2xl font-semibold font-mono text-teal-700'>Top Tips</Text>
                    <Text className='text-lg font-semibold font-mono my-auto text-slate-400 '>Explore   > </Text>
                </View>
                <View className='w-full mt-4'>

                    <View className=' mx-3 my-3  items-center justify-evenly flex-wrap '>

                        {places.map((res,key) => {
                            return (
                                <TouchableOpacity className='mx-auto w-full shadow-md shadow-neutral-500'>
                                <Image source={{uri:res?.image?.photo?.photoSizes[7]?.url }} className='mb-3 border-white mt-3 h-40 w-[400]  mx-auto object-contain rounded-lg bg-slate-200'></Image>
                                {/* <Text className='w-40 text-sm h-4 px-3 mb-3 mx-auto'>{res.label.split(' ').slice(0,2).join(' ')}</Text> */}
                                {/* <Text>{key}</Text> */}
                                </TouchableOpacity>
                            )
                        })}

                    </View>



                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Discover