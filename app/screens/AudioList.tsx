import React, { createContext, useContext, useEffect, useState } from 'react';
import { View, ScrollView, Text, ActivityIndicator } from "react-native";
import Tail from "../Tail";

const AudioList = ({navigation}: AudioListProps) => {
    const [isLoading, setLoading] = useState<any>(true);
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch('http://localhost:3000/tails')
            const json = await response.json();
            setData(json);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    console.log('Data:');
    console.log(data);
    return (
        <View
        style={{
        flex: 1,
        justifyContent: "center",
        }}
        >
            <ScrollView>
                <NavigationContext.Provider value={navigation}>
                    <View style={{flexDirection: "row"}}>
                        <Tail title="Story A" image='book.png'></Tail>
                        <Tail title="Story B"></Tail>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Tail title="Story C"></Tail>
                        <Tail title="Banana" image='icon.png'></Tail>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Tail title="Bunny Story"></Tail>
                    </View>
                    {isLoading ? (
                        <ActivityIndicator/>
                    ) : (
                        <Text>Data: {data.toString()}</Text>
                    )}
                </NavigationContext.Provider>
            </ScrollView>
        </View>
    );
}

type AudioListProps = {
    navigation: any,
}


const NavigationContext = createContext(null);

export const useNavigation = () => {
  return useContext(NavigationContext);
};

export default AudioList;