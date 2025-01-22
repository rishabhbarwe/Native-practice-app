import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native"

type CustomAlertType = {
    visible: boolean,
    message: string,
    onClose: any
}


const CustomAlert: React.FC<CustomAlertType> = ({ visible, message, onClose }) => {
    return (
        <Modal
            transparent={true}
            animationType='fade'
            visible={visible}
            onRequestClose={onClose}>
            <View style={styles.outer}>
                <View style={styles.inner}>
                    <Text style={styles.message}>{message}</Text>
                    <TouchableOpacity onPress={onClose}><Text style={styles.ok}>Ok</Text></TouchableOpacity>
                </View>
            </View>
        </Modal>
    );

}

const styles = StyleSheet.create({
    outer: {
        // backgroundColor: "rgba(0, 0, 0, 0.5)",
        // height: 200,
        // width: 350,
        // borderRadius: 15,
        // justifyContent: 'center',
        // alignItems: 'center',
        // marginVertical: 265,
        // marginHorizontal: 20,
        // padding: 10
        

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',

    },
    inner: {
        width: 300,
        padding: 25,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,


    },
    message: {
        fontSize: 19,
        fontWeight : 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    
    ok: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
        padding : 5,
        backgroundColor : '#007bff',
        width : 50,
        textAlign : 'center',
        borderRadius : 7,
        

    }
})
export default CustomAlert;