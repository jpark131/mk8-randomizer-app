import React from 'react';
import { useTheme } from '@react-navigation/native';
import { Row, Table } from 'react-native-reanimated-table';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import Card from './Card';
import { images } from '../data/images';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

function TrackTable({tracks, onTrackCheck}) {
    const { colors } = useTheme();
    const trackCheck = (track) => {

        return (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <BouncyCheckbox
                    isChecked={track.checked}
                    onPress={() => onTrackCheck(track)}

                    disableText
                    iconStyle={{borderRadius: 0}} 
                    innerIconStyle={{borderRadius: 0}}
                    fillColor="dodgerblue"
                />
            </View>
        );
    };

    const trackImage = (image, name) => (
            <View style={{justifyContent: 'center', alignItems: 'center', padding: 5}}>
                <Text style={{color: colors.text, paddingBottom: 10}}>{name}</Text>
                <Image source={images[image].uri} />
            </View>
    );

    return (
        <Card title="Track Selections" contentStyle={{width: '100%'}}>
            <ScrollView horizontal>
                <View style={{width: '100%', minWidth: 550}}>
                    <Table borderStyle={{ borderWidth: 0.5, borderColor: colors.border}}>
                        <Row data={['','Name', 'Cup', 'Origin', 'Track Type']} widthArr={[35, 227, 120, 100, 455]} style={styles.head} textStyle={[styles.headText, {color: colors.text}]}/>
                        {tracks.filter(track => (!track.hidden)).map(track => (
                            <Row key={track.name.concat(track.origin)} data={[trackCheck(track), trackImage(track.image, track.name), track.cup, track.origin, track.typeString]} widthArr={[35, 227, 120, 100, 455]} textStyle={[styles.text, {color: colors.text}]}/>
                        ))}
                    </Table>
                </View>
            </ScrollView>
        </Card>
    );
}

const styles = StyleSheet.create({
    head: { height: 44 },
    headText: { fontSize: 20, fontWeight: 'bold' , textAlign: 'center'},
    text: {fontSize: 16 , textAlign: 'center' },
})

export default TrackTable;