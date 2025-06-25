import { useState } from "react";
import {
  SimpleGrid,
  Button,
  Text,
  Heading,
  GridItem,
  Box,
  Container,
} from "@chakra-ui/react";

interface Button {
  label: string;
  action: string;
}

function App() {
  const [inputValue, setInputValue] = useState("");
  const [previousValue, setPreviousValue] = useState("");
  const [operatorValue, setoperatorValue] = useState("");

  

  const buttons = [
    { label: "CE", action: "clearEntry" },
    { label: "C", action: "clearAll" },
    { label: "←", action: "backspace" },
    { label: "÷", action: "operator" },
    { label: "7", action: "digit" },
    { label: "8", action: "digit" },
    { label: "9", action: "digit" },
    { label: "x", action: "operator" },
    { label: "4", action: "digit" },
    { label: "5", action: "digit" },
    { label: "6", action: "digit" },
    { label: "-", action: "operator" },
    { label: "1", action: "digit" },
    { label: "2", action: "digit" },
    { label: "3", action: "digit" },
    { label: "+", action: "operator" },
    { label: "±", action: "toggleSign" },
    { label: "0", action: "digit" },
    { label: ".", action: "decimal" },
    { label: "=", action: "equals" },
  ];

  const handleClick = (label: string, action: string) =>{
    switch(action){
      case "digit":
        setInputValue((previousInput) => previousInput + label);
        break;

      case "decimal":
        if(inputValue === ''){
          setInputValue('0.')
        } else if (!inputValue.includes('.')){
          setInputValue((previousInput) => previousInput + '.');
        }
        break;

      case "operator":
        if (inputValue) {
          setPreviousValue(inputValue);
          setoperatorValue(label);
          setInputValue('');
        }
        break;

      case "clearEntry":
        setInputValue('');
        break;
      
      case "clearAll":
        setInputValue('');
        break;
    }
  }

  const onButtonClick = (btn: Button) => {
    handleClick(btn.label, btn.action);
  }

  const getColorScheme = (label: string) =>{
    if (["+", "−", "×", "÷"].includes(label)) return "blue";
    if (label === "=") return "green";
    if (["C", "CE"].includes(label)) return "red";
    return "gray";
  }

  return (
    <>
      <Container>
        <Text>{inputValue || "0"}</Text>
        <SimpleGrid columns={4}>
          {buttons.flat().map((data, index) => (
            <Button
              key={index}
              onClick={() => onButtonClick(data)}
              children={data.label}
              size="lg"
              variant="solid"
              colorScheme={getColorScheme(data.label)}
            />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}

export default App;
