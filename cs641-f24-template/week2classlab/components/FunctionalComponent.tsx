import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import customStyle from "../styles/custom";

interface FunctionalComponentProps
{
    buttonTitle: string;
    showButton: boolean;
}




const FunctionalComponent = (props: FunctionalComponentProps) => {
    const [count, setCount] = useState(100);
    const [onScreenTimer, setOnScreenTimer] = useState(0);
    const [dummyText, setDummyText] = useState('Initial');
    function increase() {
        setCount(count + 1);
    }

    const users = [
        {firstName: 'A', lastName: 'B'},
        {firstName: 'C', lastName: 'D'},
        {firstName: 'E', lastName: 'F'},

    ];

    function handleButtonPress() {
        setDummyText('Button pressed');
    }

    function decrease() {
        setCount(count - 1);
    }

    useEffect(() => {
        const value = setInterval(() => setOnScreenTimer((onScreenTimer) => onScreenTimer + 2), 2000)
        return () => clearInterval(value);
    }, []);
    
    return (
        <View style={customStyle.container}>
           <Text>Time on screen : {onScreenTimer}</Text>
           <Text>{dummyText}</Text>
            {users.map((user) => (
                <Text>{user.lastName}, {user.firstName}</Text>
            ))}
           <Button title={props.buttonTitle} onPress={increase} disabled></Button>
           { props.showButton ?
            <Button title={props.buttonTitle} onPress={handleButtonPress}></Button> : <Text>Ternary False</Text>}
        </View>
    );
}

export default FunctionalComponent;