import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{headerTitle: "",headerTransparent: true,}}/>
    <Stack.Screen name="Inicio/index" options={{headerTitle: "Inicio", headerTitleAlign: 'center'}}/>
    <Stack.Screen name="BotaoInicio/Perfil/index" options={{headerTitle: "Perfil", headerTitleAlign: 'center'}}/>
    <Stack.Screen name="Cadastro/index" options={{headerTitle:"Cadastro"}}/>
  </Stack>
  
;
}
