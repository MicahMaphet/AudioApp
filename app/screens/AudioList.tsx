import React, { createContext, useContext } from 'react';
import { View, ScrollView } from "react-native";
import Tail from "../Tail";

const AudioList = ({navigation}: AudioListProps) => {
    console.log('Navigation:', navigation);
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
                        <Tail title="Bunny Story" 
                            description="This is a story about a bunny that does things. 
                            He is not a very nice bunny and needs to do a thing a thing a thing. 
                            "></Tail>
                    </View>
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