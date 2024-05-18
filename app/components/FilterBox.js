import React, { useState } from 'react';
import { StyleSheet, Text, View, LayoutChangeEvent, Pressable } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import FilterContent from './FilterContent';
import { cups, origins, types } from '../data/tracks';

function FilterBox(props) {
    const [expanded, setExpanded] = useState(false);
    const [height, setHeight] = useState(0);

    const onItemPress = () => {
        setExpanded(!expanded);
    }

    const animatedStyle = useAnimatedStyle(() => {
        const animatedHeight = expanded ? withTiming(height) : withTiming(0);
        return {
            height: animatedHeight,
            overflow: 'hidden',
            width: '100%',
        }
    })

    const onLayout = (event: LayoutChangeEvent) => {
        const layoutHeight = event.nativeEvent.layout.height;
        if (layoutHeight > 0 && layoutHeight !== height) {
            setHeight(layoutHeight)
        }
    };

    return (
        <Pressable onPress={onItemPress} style={styles.container}>
            <View style={styles.container}>
                <View style={styles.titleBackground}>
                    <Text style={styles.title}>Filters</Text>
                </View>
                <Animated.View style={animatedStyle}>
                    <View onLayout={onLayout} style={{position: "absolute"}}>
                        <FilterContent title="Cup" filters={cups}/>
                        <FilterContent title="Game of Origin" filters={origins}/>
                        <FilterContent title="Track Type" filters={types}/>
                    </View>
                </Animated.View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 5,
    },
    filterContentSection: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
    },
    filterContentTitle: {
        padding: 10,
        fontWeight: 'bold',
        fontSize: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    titleBackground: {
        width: '100%',
        backgroundColor: 'lightgray',
        padding: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray'
    }
});

export default FilterBox;