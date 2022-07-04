import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import UploadModal from './UploadModal';

function UploadButton({openMenu}) {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity 
                style={styles.button}
                onPress={openMenu}>
                <Icon name="plus-a" size={28} color="white"/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        position:'absolute',
        right:25,
        top:135
    },
    button:{
        width:56,
        height:56,
        backgroundColor:'grey',
        borderRadius:28,
        alignItems:'center',
        justifyContent:'center'
    }
});

export default UploadButton
