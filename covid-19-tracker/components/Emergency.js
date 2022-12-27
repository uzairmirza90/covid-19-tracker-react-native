import React, { useCallback } from 'react';
import { Text, View, StyleSheet, Linking } from 'react-native';
import {styles} from './Home';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Emergency = () => {
    return (
        <View style={styles.container}>
            <View style={style.emergency}>
                <Text style={style.text}>What to Do if You Are Sick?</Text>
                <View style={style.call}>
                    <Icon name='call' color="white" size={35} />
                    <Text style={style.callText}>Call 911 immediately if you are having a medical emergency.</Text>
                </View>
            </View>

            <View style={{marginTop: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Text style={{color: 'white', fontSize: 30, fontWeight: '700'}}>Resources</Text>
                <View style={{backgroundColor: 'white', width: 200, height: 3}}></View>
            </View>

            <View style={style.resources}>
                <View style={style.card}>
                    <Text style={style.cardText}>CDC in Action</Text>
                    <Icon name='chevron-forward' color="white" size={35} onPress={() => {
                        Linking
                        .openURL('https://www.cdc.gov/coronavirus/2019-ncov/cases-updates/cdc-in-action.html')
                        .catch(err => console.error('Error', err));
                    }}/>
                </View>
                <View style={style.card}>
                    <Text style={style.cardText}>Communication Resources</Text>
                    <Icon name='chevron-forward' color="white" size={35} onPress={() => {
                        Linking
                        .openURL('https://www.cdc.gov/coronavirus/2019-ncov/communication/index.html')
                        .catch(err => console.error('Error', err));
                    }}/>
                </View>
                <View style={style.card}>
                    <Text style={style.cardText}>Global COVID-19</Text>
                    <Icon name='chevron-forward' color="white" size={35} onPress={() => {
                        Linking
                        .openURL('https://www.cdc.gov/coronavirus/2019-ncov/global-covid-19/index.html')
                        .catch(err => console.error('Error', err));
                    }}/>
                </View>
                <View style={style.card}>
                    <Text style={style.cardText}>Guidance for COVID-19</Text>
                    <Icon name='chevron-forward' color="white" size={35} onPress={() => {
                        Linking
                        .openURL('https://www.cdc.gov/coronavirus/2019-ncov/communication/guidance.html')
                        .catch(err => console.error('Error', err));
                    }}/>
                </View>
                <View style={style.card}>
                    <Text style={style.cardText}>Laboratories</Text>
                    <Icon name='chevron-forward' color="white" size={35} onPress={() => {
                        Linking
                        .openURL('https://www.cdc.gov/coronavirus/2019-ncov/lab/index.html')
                        .catch(err => console.error('Error', err));
                    }}/>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    emergency: {
        backgroundColor: '#3E4F7A',
        marginTop: 60,
        height: 170,
        borderRadius: 15,
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 25,
        fontWeight: '700',
        paddingTop: 20
    },
    call: {
        backgroundColor: 'brown',
        width: '100%',
        height: 100,
        borderRadius: 15,
        marginTop: 20,
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 18,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    callText: {
        fontSize: 20,
        color: 'white',
        fontWeight: '600'
    },
    cardText: {
        color: 'white',
        fontSize: 22,
        fontWeight: '600',
    },
    card: {
        backgroundColor: '#3E4F7A',
        marginVertical: 10,
        height: 65,
        borderRadius: 15,
        justifyContent: 'space-between',
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        borderLeftWidth: 18,
        borderLeftColor: 'lightgreen'
    },

})
export default Emergency;