import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { arrObj } from './HomeScreen'; 

const AllItems: React.FC<{data: arrObj[]}> = ({data}): React.JSX.Element => {
//OR const AllItems = (data: arrObj[]): React.JSX.Element => {
  return (
    <View style={{ paddingVertical: 5, paddingHorizontal: 3}}>
        <View style={styles.headingContainer}>
            <Text style={styles.headingTxt}>Items</Text>
            <Text style={styles.headingTxt}>Quantity</Text>
        </View>

        <FlatList 
        
        data={data} 
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) =>(
            <View style={[styles.itemContainer, {backgroundColor: item.stock < 20 ? '#FFCCCC' : '#D7F6BF'}]}>
                <Text style={styles.itemTxt}>{item.name}</Text>
                <Text style={styles.itemTxt}>{item.stock}</Text>
            </View>
        )}
        contentContainerStyle={{gap: 10}}
        />
    </View>
  )
}

export default AllItems

const styles = StyleSheet.create({
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