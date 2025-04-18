import { ActivityIndicator, FlatList, Text, TextInput, View } from "react-native";
import Tail, { TailProps } from "../Tail";
import { useEffect, useState } from "react";

export default function Search() {
    const [isLoading, setLoading] = useState<any>(true);
    const [tail, setTail] = useState<TailProps>();

    const getTail = async (title: string) => {
        try {
            setLoading(true);
            const response = await fetch(`http://localhost:3000/tails?title=${title}`)
            const tail = await response.json();
            setTail(tail as TailProps);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <View
        style={{
        flex: 1,
        justifyContent: "center",
        }}
        >
        <TextInput placeholder="Search for a tail" onChangeText={title => getTail(title)}></TextInput>
        {isLoading ? (
            <ActivityIndicator/>
        ) : (
            <View> 
                <Text>{tail?.title + '\n'}</Text>
                <Tail title={tail?.title as string || 'no title'} image={tail?.image} audio={tail?.audio} story={tail?.story}/>
            </View>
        
        )}
        </View>
    );
}