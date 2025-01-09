import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { arrObj } from './HomeScreen'

const CreateScreeen: React.FC<{data: arrObj[], setDummyData: React.Dispatch<React.SetStateAction<arrObj[]>>;}> = ({data, setDummyData}): React.JSX.Element => {

  const [itemName, setItemName] = useState('')
  const [stockAmount, setStockAmount] = useState('')

  const addItemHandler = () => {
    const newItem = {
      id: Date.now(),
      name: itemName,
      stock: Number(stockAmount),
      unit: 'kg' 
    }

    setDummyData([...data, newItem])
    setItemName('')
    setStockAmount('')
  }

  return (
    <View style={styles.container}>
      <TextInput 
      placeholder='Enter an item name'
      placeholderTextColor='#999'
      style={styles.input}
      value={itemName}
      onChangeText={(item) => setItemName(String(item))}
      />
      <TextInput 
      placeholder= 'Enter stock amount in numbers'
      placeholderTextColor='#999'
      style={styles.input}
      value={stockAmount}
      keyboardType="numeric"
      onChangeText={(item) => setStockAmount((item))}
      />
      
      <Pressable style={styles.btn} onPress={() =>addItemHandler()}>
        <Text>Add item in the stock</Text>
      </Pressable>

      <View>
              <View style={styles.headingContainer}>
                  <Text style={styles.headingTxt}>All Items in the stock</Text>
              </View>
      
              <FlatList 
              
              data={data} 
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) =>(
                  <View style={[styles.itemContainer, {backgroundColor: item.stock < 20 ? '#FFCCCC' : '#D7F6BF'}]}>
                      <Text style={styles.itemTxt}>{item.name}</Text>
                      <View style={{flexDirection: 'row', gap: 12}}>
                      <Text style={styles.itemTxt}>{item.stock}</Text>
                      <Text style={styles.itemTxt}>Edit</Text>
                      <Text style={styles.itemTxt}>Delete</Text>
                      </View>
                  </View>
              )}
              contentContainerStyle={{gap: 20}}
              />
          </View>

    </View>

    
  )
}

export default CreateScreeen

const styles = StyleSheet.create({
  container: {
    paddingVertical: '4%',
    gap: 10
  },
  input: {
    borderWidth: 1.5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 7,
    borderColor: '#D7F6BFFF'
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 7,
    backgroundColor: '#CABFEEFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
},
headingTxt: {
    fontWeight: '500',
    fontSize: 16
},
itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
},
itemTxt: {
    fontWeight: '400',
    fontSize: 14
},
})