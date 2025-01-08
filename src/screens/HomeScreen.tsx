import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import CreateScreeen from './CreateScreeen';
import AllItems from './AllItems';

export type arrObj ={
    id: number,
    name: string,
    stock: number,
    unit: string,
}

const dummyData: arrObj[] = [
    {id:1, name: "Wheat", stock: 21, unit: "kg"},
    {id:2, name: "Rice", stock: 5, unit: "kg"},
    {id:3, name: "Corn", stock: 30, unit: "kg"},
    {id:4, name: "Basmati Rice", stock: 5, unit: "kg"},
]



const HomeScreen = (): React.JSX.Element => {
    const [view, setview] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.btnContainer}>

        <Pressable style={[styles.button, view === 0 ? {backgroundColor: 'green'} : null]} onPress={() => setview(0)}>
            <Text style={[styles.btnText, view === 0 ? {color: 'white'} : null]}>All Items</Text>
        </Pressable>

        <Pressable style={[styles.button, view === 1 ? {backgroundColor: 'green'} : null]} onPress={() => setview(1)}>
            <Text style={[styles.btnText, view === 1 ? {color: 'white'} : null]}>Low Stock</Text>
        </Pressable>

        <Pressable style={[styles.button, view === 2 ? {backgroundColor: 'green'} : null]} onPress={() => setview(2)}>
            <Text style={[styles.btnText, view === 2 ? {color: 'white'} : null]}>Create</Text>
        </Pressable>

      </View>

      {view === 0 && <AllItems data={dummyData} />}
      {/* {view === 1 && <AllItems />} */}
      {view === 2 && <CreateScreeen />}
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 15,
        backgroundColor: '#ffffff'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    btnContainer: {
        flexDirection: 'row',
        gap: 10,
        marginVertical: 10,
    },
    button: {
        paddingVertical: 3.5,
        paddingHorizontal: 10,
        borderWidth: 0.8,
        borderRadius: 40,
        borderColor: 'green'
    },
    btnText: {
        color: 'green',
        fontSize: 12
    }, 
})