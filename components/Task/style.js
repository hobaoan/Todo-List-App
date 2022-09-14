import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({ 
    item: { 
        flexDirection: 'row',
        marginTop: 25,
        marginBottom: -15,
        backgroundColor: '#fff',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 10,
        justifyContent: 'space-between',
    
      },
      square: { 
        width: 48,
        height: 36,
        borderRadius: 10,
        backgroundColor: '#53d6f2',
        alignItems: 'center',
        justifyContent: 'center'
      },
      number: { 
        fontSize: 17,
        fontWeight: '700',
        color: '#fff'
      },
      content: { 
        width: '80%',
        justifyContent: 'center'
      },
      textContent: { 
        fontSize: 15
      }
});

export default styles;