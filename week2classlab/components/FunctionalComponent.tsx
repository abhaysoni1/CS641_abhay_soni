import react,{useState} from "react";
import {View, Text, Button, GestureResponderEvent} from "react-native";
interface FunctionComponentProps{
    title: string;
    showButton: boolean;
    showButton2: boolean;
   }

const users =[
    {firstName:'',lastName:''},
    {firstName:'',lastName:''},
    {firstName:'',lastName:''},
]
const FunctionalComponent = (props: FunctionComponentProps)=>{
    function increase(){
        setCount(count+1);
    };
    function decrease(){
        setCount(count-1);
    };
    
    const [count, setCount] = useState(100);
    return(
       
        <View>
    <Text>Functional Component : {count}</Text> 
    {props.showButton?<Button title= {props.title} onPress={increase}></Button>:<View>Ternary</View>}
    {props.showButton2?<Button title= {props.title} onPress={decrease}></Button>:<View>Ternary</View>}
    
    </View>
    )
};

export default FunctionalComponent;