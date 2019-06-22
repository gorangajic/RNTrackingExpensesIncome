import React from 'react';
import { TouchableOpacity, StyleSheet, ScrollView, Text, View, Image } from 'react-native';
import Constants from 'expo-constants'
import SideMenu from 'react-native-side-menu';
import Transaction from '../Components/Transaction';
import Menu from '../Components/Menu';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  render() {
    return (
      <SideMenu
        menu={<Menu />}
        isOpen={this.state.isOpen}
        onChange={(isOpen) => {
          this.setState({
            isOpen,
          })
        }}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => this.setState({
              isOpen: true
            })}>
              <Image
                source={require('../assets/burger.png')}
                style={styles.menu}
              />
            </TouchableOpacity>
            <Text>200 RSD.</Text>
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
      </SideMenu>
    );
  }
}

App.navigationOptions = {
  header: null,
};

export default App;

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
