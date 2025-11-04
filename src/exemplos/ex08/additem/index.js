import { useState } from "react";
import { TouchableOpacity, Text, View, TextInput } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import styles from './styles';

export default function AddItem({ AddItems }) {

    const [text, setText] = useState('');

    return(
        <View style={styles.container}>
            <TextInput
            placeholder="Adicionar item..."
            style={styles.input}
            onChangeText={ txt => setText(txt)}
            value={text}
            />
            <TouchableOpacity style={styles.button} onPress={() => AddItems(text)}>
                <Text style={styles.buttonText}>
                    <MaterialCommunityIcons
                        name='plus'
                        size={26}
                        color='#fafafa'
                        />
                        Adicionar Item
                </Text>
            </TouchableOpacity>
        </View>
    )
}