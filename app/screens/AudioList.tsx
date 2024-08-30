import React, { createContext, useContext, useEffect, useState } from 'react';
import { View, ScrollView, Text, ActivityIndicator } from "react-native";
import Tail from "../Tail";
import { FlatList } from 'react-native-gesture-handler';

type Tail = {
    title: string,
    description: string,
}

const AudioList = ({navigation}: AudioListProps) => {
    const [isLoading, setLoading] = useState<any>(true);
    const [data, setData] = useState<Tail[]>([]);

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

    return (
        <View
        style={{
        flex: 1,
        justifyContent: "center",
        }}
        >
        <NavigationContext.Provider value={navigation}>
            {isLoading ? (
                <ActivityIndicator/>
            ) : (
                <FlatList
                numColumns={2}
                data={data}
                renderItem={({item}) => (
                <Tail title={item.title}/>
                )}
                />
            )}
        </NavigationContext.Provider>
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