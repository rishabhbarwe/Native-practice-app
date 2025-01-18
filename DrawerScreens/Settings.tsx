import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


// const Card = ()=>{
//   return (

//     <View style={styles.card}>

//         <Image source={data.profilePicture} style={styles.pp}></Image>
//         <View style={styles.outer}>
//             <Text style={styles.text}>Name : {data.name}</Text>
//             <Text style={styles.text}>Email : {data.email}</Text>
//             <Text style={styles.text}>Phone : {data.phone}</Text>
//             <Text style={styles.text}>Address : {data.address}</Text>


//         </View>
//     </View>
// )

// }

const Settings = () => {
    const users = useSelector((state) => state.users.users);
    const [length, setLength] = useState(0)

    useEffect(() => {
        // Whenever users change, log the update or trigger actions if needed
        let length = users.length;
        setLength(length)

        console.log(length);
    }, [users]);

    return (
        <View style={styles.screen}>
            <Text style={styles.heading}>Added Users: {length}</Text>
            <FlatList
                data={users}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={item.profilePicture} style={styles.pp}></Image>
                        <View style={styles.outer}>
                            <Text style={styles.text}>Email : {item.email}</Text>
                            <Text style={styles.text}>Name : {item.name}</Text>
                            <Text style={styles.text}>Phone : {item.phone}</Text>
                            <Text style={styles.text}>Address : {item.address}</Text>
                            <View style={styles.ruler} />
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        backgroundColor: '#000000',
        padding: 15,
        borderBottomWidth: 2,
        borderBottomColor: '#ffffff'
    },
    card: {

        padding: 20,
        margin: 10,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: '#efebce',
        flexDirection: 'row',
        borderBottomWidth: 4,
        borderBottomColor: '#555',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowColor: '#000',
        textShadowRadius: 50,

    },
    outer: {
        flex: 1,


    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#555'

    },
    pp: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: '#555',
        borderRadius: 10,
        marginRight: 20
    },
    liked: {
        marginTop: 10,
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 20,
    },
    bottomImages: {

        width: 'auto',
        flexDirection: 'row',
        marginLeft: -125,
        marginTop: -30,


    },
    screen: {
        flex: 1,
        backgroundColor: "#c8b6ff"
    },
    ruler: {
        width: '100%',
        height: 1,
        backgroundColor: '#000',
        marginTop : 5
    }
})



export default Settings