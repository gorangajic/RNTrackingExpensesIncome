import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const colors =  {
    red: '#ff5500',
    green: '#55ff55',
}

const Transaction = ({
    name,
    category,
    price,
    date,
    status,
}) => (<View style={styles.transation}>
    <View style={[
        styles.transactionStatus, {
            backgroundColor: colors[status],
        }
    ]} />
    <View style={styles.transactionDesc}>
    <Text style={styles.transactionName}>{name}</Text>
    <Text style={styles.transactionCat}>{category}</Text>
    </View>
    <View style={styles.transactionInfo}>
    <Text style={styles.transactionPrice}>{price} RSD.</Text>
    <Text style={styles.transactionDate}>{date}</Text>
    </View>
</View>);

export default Transaction;

const styles = StyleSheet.create({
    transation: {
    flexDirection: 'row',
    paddingRight: 20,
    marginBottom: 20,
  },
  transactionStatus: {
    width: 40,
    height: 30,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: 'red',
    marginRight: 5,
  },
  transactionDesc: {
    flex: 1,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#28313B',
  },
  transactionCat: {
    fontSize: 12,
    color: '#666666',
  },
  transactionPrice: {
    fontSize: 14,
    color: '#28313B',
    textAlign: 'right',
    fontWeight: 'bold',
  },
  transactionDate: {
    fontSize: 10,
    color: '#666',
    textAlign: 'right',
  },
})
