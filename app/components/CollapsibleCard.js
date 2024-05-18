import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

function CollapsibleCard({title, children}) {
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

    const onLayout = (event) => {
        const layoutHeight = event.nativeEvent.layout.height;
        if (layoutHeight > 0 && layoutHeight !== height) {
            setHeight(layoutHeight)
        }
    };

    return (
        <Pressable onPress={onItemPress} style={styles.container}>
            <View style={styles.container}>
                <View style={styles.titleBackground}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <Animated.View style={animatedStyle}>
                    <View onLayout={onLayout} style={{position: "absolute"}}>
                        {children}
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

export default CollapsibleCard;