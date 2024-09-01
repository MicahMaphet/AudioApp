import React, { createContext, useContext, useEffect, useState } from 'react';
import { View, ActivityIndicator } from "react-native";
import Tail, { TailProps } from "../Tail";
import { FlatList } from 'react-native-gesture-handler';

const AudioList = () => {
    const [isLoading, setLoading] = useState<any>(true);
    const [data, setData] = useState<TailProps[]>([]);

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
        {isLoading ? (
            <ActivityIndicator/>
        ) : (
            <FlatList
            numColumns={2}
            data={data}
            renderItem={({item}) => (
            <Tail title={item.title} image={item.image} audio={item.audio}/>
            )}
            />
        )}
        </View>
    );
}

export default AudioList;