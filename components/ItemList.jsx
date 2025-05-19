import React from 'react'

import { StyleSheet, Text, View, TouchableOpacity } from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function ItemList({ item }) {
    return (
        <View style={styles.itemList}>
            <Text style={styles.itemToBuy}>{item.name}</Text>
            <TouchableOpacity style={styles.actionIcon}>
                <Ionicons name='bag-check-outline' size={24} color='#fff'/>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionIcon, { backgroundcolor: 'darkred'}]}>
                <Ionicons name='trash-bin-outline' size={24} color='#fff'/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    itemList: {
        flex: 1,
        backgroundcolor: '#ff2f4',
        padding: 15,
        borderRadius: 7,
        borderColor: 'white',
        borderWidth: 2,
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemToBuy: {
        flex: 1,
        color: '#fff',
        fontSize: 24,
        textDecorationLine: 'none'
    },
    actionIcon: {
        height: 40,
        widht: 40,
        borderRadius: 20,
        backgroundcolor: 'darkgreen',
        justifyContent: 'center',
        alignItems: 'center',
        marginleft: 10
    }
})