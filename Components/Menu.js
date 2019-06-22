import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const Transaction = () => (<View
    style={styles.container}
>
    <Text style={styles.title}>Kategorije</Text>
    <View style={styles.category}>
        <Text style={styles.categoryText}>Namirnice</Text>
    </View>
    <View style={styles.category}>
        <Text style={styles.categoryText}>Plata</Text>
    </View>
    <View style={styles.category}>
        <Text style={styles.categoryText}>Alkohol</Text>
    </View>
</View>);

export default Transaction;

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight + 30,
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
        marginLeft: 10,
    },
    category: {
        paddingVertical: 15,
        width: '100%',
        backgroundColor: 'orange',
        paddingLeft: 20,
        marginBottom: 10,
    },
    categoryText: {
        color: '#fff',
        fontSize: 16,
    }
})
