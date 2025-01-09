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


const HomeScreen = (): React.JSX.Element => {
    const [view, setview] = useState(0);
    const [dummyData, setDummyData] = useState<arrObj[]>([
        {id:1, name: "Wheat", stock: 21, unit: "kg"},
        {id:2, name: "Rice", stock: 5, unit: "kg"},
        {id:3, name: "Corn", stock: 30, unit: "kg"},
        {id:4, name: "Basmati Rice", stock: 5, unit: "kg"},
    ])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.btnContainer}>

        <Pressable style={[styles.button, view === 0 ? {backgroundColor: '#72C37AFF'} : null]} onPress={() => setview(0)}>
            <Text style={[styles.btnText, view === 0 ? {color: 'white'} : null]}>All Items</Text>
        </Pressable>

        <Pressable style={[styles.button, view === 1 ? {backgroundColor: '#72C37AFF'} : null]} onPress={() => setview(1)}>
            <Text style={[styles.btnText, view === 1 ? {color: 'white'} : null]}>Low Stock</Text>
        </Pressable>

        <Pressable style={[styles.button, view === 2 ? {backgroundColor: '#72C37AFF'} : null]} onPress={() => setview(2)}>
            <Text style={[styles.btnText, view === 2 ? {color: 'white'} : null]}>Create</Text>
        </Pressable>

      </View>

      {view === 0 && <AllItems data={dummyData} />}
      {view === 1 && <AllItems  data={dummyData.filter((item) => item.stock < 20)}/>}
      {view === 2 && <CreateScreeen data={dummyData} setDummyData={setDummyData} />}
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
        borderColor: '72C37AFF'
    },
    btnText: {
        color: 'green',
        fontSize: 12
    }, 
})