import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';
import Constants from 'expo-constants'
import Transaction from '../Components/Transaction';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/burger.png')}
          style={styles.menu}
        />
        <Text>325.000 RSD.</Text>
      </View>
      <View style={styles.categoryWrap}>
        <Text style={styles.title}>Kategorije</Text>
        <ScrollView
          contentContainerStyle={styles.categoryScroll}
          horizontal
        >
          <View style={styles.category}>
            <Text style={styles.categoryText}>Namirnice</Text>
          </View>
          <View style={styles.category}>
            <Text style={styles.categoryText}>Auto</Text>
          </View>
          <View style={styles.category}>
            <Text style={styles.categoryText}>Plata</Text>
          </View>
        </ScrollView>
      </View>
      <View>
        <Text style={styles.title}>Transakcije</Text>
      </View>
      <ScrollView>
        <Transaction
          name="Mleko i Hleb"
          category="Namirnice"
          price={200}
          date="22/06/2019"
          status="red"
        />
        <Transaction
          name="Tetka iz kanade"
          category="Priliv"
          price={20000}
          date="22/06/2019"
          status="green"
        />
        <Transaction
          name="Tetka iz kanade"
          category="Priliv"
          price={20000}
          date="22/06/2019"
          status="green"
        />
        <Transaction
          name="Tetka iz kanade"
          category="Priliv"
          price={20000}
          date="22/06/2019"
          status="green"
        />
        <Transaction
          name="Tetka iz kanade"
          category="Priliv"
          price={20000}
          date="22/06/2019"
          status="green"
        />
        <Transaction
          name="Tetka iz kanade"
          category="Priliv"
          price={20000}
          date="22/06/2019"
          status="green"
        />
        <Transaction
          name="Tetka iz kanade"
          category="Priliv"
          price={20000}
          date="22/06/2019"
          status="green"
        />
        <Transaction
          name="Tetka iz kanade"
          category="Priliv"
          price={20000}
          date="22/06/2019"
          status="green"
        />
        <Transaction
          name="Tetka iz kanade"
          category="Priliv"
          price={20000}
          date="22/06/2019"
          status="green"
        />
      </ScrollView>
    </View>
  );
}

App.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  menu: {
    width: 24,
    height: 24,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    marginLeft: 10,
  },
  categoryWrap: {
    marginBottom: 20,
  },
  categoryScroll: {
    paddingLeft: 20,
  },
  category: {
    paddingVertical: 15,
    paddingHorizontal: 35,
    backgroundColor: 'orange',
    marginRight: 20,
    borderRadius: 8,
  },
  categoryText: {
    color: '#fff',
  },
});
