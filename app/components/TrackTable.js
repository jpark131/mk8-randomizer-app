import React from 'react';
import Card from './Card';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { Row, Table } from 'react-native-reanimated-table';
import { images } from '../data/images';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

function TrackTable({tracks}) {
    const trackCheck = (checked) => (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <BouncyCheckbox
                disableText
                isChecked={checked}
                iconStyle={{borderRadius: 0}} 
                innerIconStyle={{borderRadius: 0}}
                fillColor="dodgerblue"
            />
        </View>
    );

    const trackImage = (image) => (
            <View style={{justifyContent: 'center', alignItems: 'center', padding: 5}}>
                <Image source={images[image].uri} />
            </View>
    );

    return (
        <Card title="Track Selections" contentStyle={{width: '100%'}}>
            <ScrollView horizontal>
                <View style={{width: '100%', minWidth: 550}}>
                    <Table borderStyle={{ borderWidth: 0.5, borderColor: 'gray'}}>
                        <Row data={['','','Name', 'Cup', 'Origin', 'Track Type']} widthArr={[35, 227, 180, 120, 100, 275]} style={styles.head} textStyle={styles.headText}/>
                        {tracks.map(track => (
                            <Row key={track.name.concat(track.origin)} data={[trackCheck(track.checked), trackImage(track.image),track.name, track.cup, track.origin, track.typeString]} widthArr={[35, 227, 180, 120, 100, 275]} textStyle={styles.text}/>
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