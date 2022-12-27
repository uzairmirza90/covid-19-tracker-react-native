import React, {useState, useEffect} from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity, Text, Image, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = () => {
    const [countryImg, setCountryImg] = useState()
    const [data, setData] = useState();
    const [search, setSearch] = useState('');
    const [stats, setStats] = useState({});
    const [country, setCountry] = useState('Global');
    
    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData(){
        let getData = await fetch('https://api.covid19api.com/summary')
        let res = await getData.json(); 
        setData(res)
        setStats({
            ActiveCases: res.Global.TotalConfirmed,
            NewCases: res.Global.NewConfirmed,
            Deaths: res.Global.NewDeaths,
            Recovered: res.Global.NewRecovered
        })
        setCountry('Global')
    }

    function showResults(){
        data.Countries.map((item, index) => {
            const {Country, CountryCode} = item
            if(search === Country){
                setStats({
                    ActiveCases: item.TotalConfirmed,
                    NewCases: item.NewConfirmed,
                    Deaths: item.NewDeaths,
                    Recovered: item.NewRecovered
                })
                setCountry(search)
                setCountryImg(CountryCode.toLowerCase())
            }
        })
        Keyboard.dismiss()
        setSearch('')
    }

    return (
        
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        
            <View style={styles.container}>
    
                <View style={styles.searchContainer}>
                    <TextInput style={styles.input} placeholder='Search country...' placeholderTextColor="lightgrey" 
                    value={search} onChangeText={(text) => setSearch(text)}/>
                    <TouchableOpacity style={styles.searchButton} onPress={() => showResults()} disabled={search == '' ? true : false}>
                        <Icon name='search' color="white" size={30} />
                    </TouchableOpacity>
                </View>

                <View style={styles.headingContainer}>
                    <View style={styles.headings}>
                        <Text style={styles.headingText}>Stay Home</Text>
                        <Text style={styles.headingText}>Stay Safe</Text>
                    </View>
                    <Image style={styles.headingImage} source={require('../assets/dose.jpeg')}/>
                </View>

                <View style={styles.divider}></View>

                <View>
                    <View style={styles.countryHeading}>
                    <Image style={{width: 20, height: 20, marginRight: 10, borderRadius: 5}} 
                    source={country == 'Global' 
                    ? require('../assets/world.jpeg') 
                    : { uri: `https://countryflagsapi.com/png/${countryImg}`}}/>
                    <Text style={styles.countryName}>{country}</Text>
                    </View>

                    <View style={styles.cards}>
                        <View style={[styles.card, {borderLeftColor: 'yellow'}]}>
                            <Text style={styles.cardText}>Active Cases</Text>
                            <Text style={[styles.text, {color: 'yellow'}]}>{stats.ActiveCases}</Text>
                        </View>
                        <View style={[styles.card, {borderLeftColor: 'orange'}]}>
                            <Text style={styles.cardText}>New Cases </Text>
                            <Text style={[styles.text, {color: 'orange'}]}>{stats.NewCases}</Text>
                        </View>
                        <View style={[styles.card, {borderLeftColor: 'red'}]}>
                            <Text style={styles.cardText}>Deaths </Text>
                            <Text style={[styles.text, {color: 'red'}]}>{stats.Deaths}</Text>
                        </View>
                        <View style={[styles.card, {borderLeftColor: 'lightgreen'}]}>
                            <Text style={styles.cardText}>Recovered </Text>
                            <Text style={[styles.text, {color: 'lightgreen'}]}>{stats.Recovered}</Text>
                        </View>
                    </View>
                </View>
                <View>
                <Image style={styles.preventionImage} source={require('../assets/new4.png')}/>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2F3A64',
        padding: 15,
    },
    searchContainer: {
        flexDirection: 'row',
        marginTop: 50,
    },
    input: {
        backgroundColor: '#3E4F7A',
        height: 50,
        borderRadius: 15,
        paddingLeft: 20,
        fontSize: 18,
        width: '80%',
        marginRight: 10,
        color: 'lightgrey'
    },
    searchButton: {
        backgroundColor: '#3E4F7A',
        borderRadius: 15,
        padding: 10,
        width: 60,
        alignItems: 'center'
    },
    headingContainer: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headingText: {
        color: 'white',
        fontSize: 35,
        fontWeight: '700',
    },
    headingImage: {
        width: 150,
        height: 90,
        borderRadius: 15
    },
    divider: {
        width: '100%',
        backgroundColor: '#3E4F7A',
        height: 3,
        marginTop: 15
    },
    countryHeading: {
        backgroundColor: '#3E4F7A',
        marginTop: 10,
        alignItems: 'center',
        height: 40,
        borderRadius: 15,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    countryName: {
        fontSize: 25, 
        color: 'white', 
        fontWeight: '700', 
    },
    cards: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 10
    },
    card: {
        backgroundColor: '#3E4F7A',
        width: 170,
        height: 100,
        borderRadius: 15,
        marginBottom: 10,
        padding: 10,
        borderLeftWidth: 15,
        borderLeftColor: 'white',
    },
    cardText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600'
    },
    text: {
        fontSize: 23,
        fontWeight: '700',
        marginTop: 20
    },
    preventionImage: {
        width: '100%',
        height: 210,
        borderRadius: 15,
        marginTop: 5
    }
})
export default Home;