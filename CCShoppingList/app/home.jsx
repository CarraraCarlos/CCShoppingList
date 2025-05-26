import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import ItemList from '../components/ItemList';


export default function Home() {
  const [TextInput, setTextInput] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (TextInput == '') {
      Alert.alert(
        'ocorreu um problema :)',
        'Por favor, inorme o nome do produto'
      )
    } else { 
       const newItem = {
        id: Date.now() .tostring(),
        name: TextInput,
        bought: false
       }
       setItems([...items, newItem]);
       setTextInput('');
    }
  }

  const markItemBought = itemId => {
    const newItems = item.map((item) => {
      if (item.id == itemId) {
        return { ...item, bought: true }
      }
      return item;
    });
    setItems(newItems);
  }
  
  const unmarkItemBought = itemId => {
    const newItems = item.map((item) => {
      if (item.id == itemId) {
        return { ...item, bought: false }
      }
      return item;
    });
    setItems(newItems);
  }

  const removeItem = itemId => {
    Alert.alert(
      'Excluir Produto? ', 'Confirma a exclusão deste Produto?',
      [
        {
          text: 'Sim!', onPress: () => {
            const newItems = items.filter(item => item.id != itemId);
            setItems(newItems);
          }
        },
        {
          text: 'Cancelar', style: 'cancel'
        }
      ]
    );
  }

  const removeAll = () => {
    Alert.alert(
      'Limpar Lista?', '',
      [
        {
          text: 'Sim!',
          onPress: () => { setItems([]) }
        },
        {
          text: 'Cancelar', style: 'cancel'
        }
      ]
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
      source={require('../assets/background.jpg')}
      style={{ flex: 1, justifyContent: 'flex-start' }}
      resizeMode='repeat'
      >
        <View style={styles.header}>
          <Text style={styles.title}>Lista de produtos</Text>
          <Ionicons name="trash" size={32} color="#fff" onPress={removeAll}/>
        </View>

        <FlatList
          contentContainerStyle={{ padding: 20, paddingBottom: 100, color: '#fff' }}
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => 
            <ItemList
            item={item}
            markItem={markItemBought}
            unmarkItem={unmarkItemBought}
            removeItem={removeItem}/>
          }
        />

        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput
            color="#fff"
            fontSize={18}
            placeholderTextColor="#aeaeae"
            placeholder='Digite o nome do produto...'
            value={TextInput}
            onChangeText={(text) => setTextInput(text)}
            />
          </View>
          <TouchableOpacity style={styles.iconContainer}>
            <Ionicons name="add" size={36} color="#fff"/>
          </TouchableOpacity>
        </View>
     </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    padding: 25,
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000000c0',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30 
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff'
  },
  footer: {
    backgroundColor: '#000000c0',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: "#000",
    height: 50,
    marginVertical: 20,
    borderRadius: 30,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: '#000',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  }
})  