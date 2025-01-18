import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Components/API/EmojiApi';



const AboutUs = () => {
  const dispatch = useDispatch();


  // dispatch(fetchData())

  useEffect(()=>{
    dispatch(fetchData())
  },[dispatch])

const  { data, loading, error } = useSelector((state) => state.emojis);


  // useEffect(() => {
  //   console.log(data)
  //  }, [data])


  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <>
      <Text style={styles.header}>Flowers details</Text>
      <View style={styles.container}>

        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.card}>
             <View style={styles.nameandflower}>
             <Text style={styles.emojiName}>Name: {item.name}</Text>
             <Text style={styles.emojiCharacter}>{item.htmlCode.map((code) => (
                <Text style={{ fontSize: 50 }}>{String.fromCodePoint(parseInt(code.replace("&#", "").replace(";", ""), 10))}</Text>
              ))}</Text>
              
              
             </View>
              <Text style={styles.emojiCategory}>Category: {item.category}</Text>
              <Text style={styles.emojiGroup}>Group: {item.group}</Text>
              <Text style={styles.emojiUnicode}>Unicode: {item.unicode.join(', ')}</Text>
              <Text style={styles.emojiHtmlCode}>HTML Code: {item.htmlCode[0]}</Text>
              <View style={styles.ruler} />


            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        {/* <Text style={{
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 300,
        color : '#000000'
      }}>
        {JSON.stringify(data)}
      </Text> */}

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  nameandflower: {
       flexDirection : 'row',
       justifyContent : 'space-between'
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    backgroundColor: '#000000',
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#ffffff'
  },
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: '#c8b6ff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c8b6ff'
  },
  loadingText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#efebce',
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
    borderBottomWidth: 4,
    borderBottomColor: '#000000',
    textShadowRadius: 50,

  },
  emojiName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    color : '#000'


  },
  emojiCategory: {
    fontSize: 18,
    marginTop : -35,
    color: '#555',
    marginBottom: 5,

  },
  emojiGroup: {
    fontSize: 18,
    color: '#555',
    marginBottom: 5,
  },
  emojiUnicode: {
    fontSize: 18,
    color: '#555',
    marginBottom: 5,
  },
  emojiHtmlCode: {
    fontSize: 18,
    color: '#555',
    marginBottom: 5,
  },
  emojiCharacter: {
    color: '#333',
  },
  ruler: {
    width: '100%',
    height: 2,
    backgroundColor: '#000000',
    marginTop : 5
}
});
export default AboutUs