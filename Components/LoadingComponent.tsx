import { View, Text, ActivityIndicator, StyleSheet, Modal } from 'react-native';
import React from 'react';


type loadingComponentType = {
    visible: boolean,
    onClose: any,
    message: string,
}
const LoadingComponent: React.FC<loadingComponentType> = ({ visible, onClose, message }) => {
    return (
        <Modal
            transparent={true}
            animationType='fade'
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.screen}>
                <Text style={styles.text}>{message}</Text>
                <View style={styles.inner}>

                    <Text style={styles.loadingText}>Loading...</Text>
                    <ActivityIndicator size='large' color="#FFFFFFFF" />
                </View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    loadingText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFFFFFFF'

    },
    screen: {
        flex: 1,
       
        backgroundColor: 'rgba(0,0,0,0.5)',
        
        

    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFFFFFFF',
        textAlign: 'center',
        marginTop : 85,
       
    },
    inner : {
        justifyContent : 'center',
        flexDirection : 'row',
        marginVertical : 250
        
    }
   
})

export default LoadingComponent