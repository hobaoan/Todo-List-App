import { StyleSheet, } from 'react-native';

const styles = StyleSheet.create ({ 
    addTask: { 
         bottom: 40,
         paddingHorizontal: 20,
         width: '100%',
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: 'center',
    },
    input: { 
        height: 45,
        width: '85%',
        backgroundColor: '#fff',
        borderColor: '#53d6f2',
        borderWidth: 2,
        borderRadius: 20,
        paddingHorizontal: 20,
        fontSize: 15
    },
    iconButton: { 
        width: 45,
        height: 45,
        backgroundColor: '#53d6f2',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#fff',
        fontWeight: 'bold'
    },
    icon: { 
        fontSize: 30,
        color: '#fff'
    }
});

export default styles;