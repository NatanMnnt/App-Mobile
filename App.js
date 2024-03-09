import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={estilos.container}>           
        <TextInput
          placeholder='Cod. Funcional' 
          style={estilos.input}/>  
        <TextInput
          placeholder='Senha Corporativa' 
          style={estilos.input}       
          secureTextEntry={true}/>
      <View style = {estilos.ViewSenha} >
        <Text style={estilos.texto}>
            Esqueceu a Senha? 
        </Text> 
        <TouchableOpacity>
          <Text>
              Clique aqui
          </Text>
        </TouchableOpacity>
      </View> 
        <TouchableOpacity style={estilos.button}>
          <Text>
            Fazer Login
          </Text>
        </TouchableOpacity>
        <Text style={estilos.texto}>
          Ainda nao tem cadastro?
        </Text> 
        <TouchableOpacity>
          <Text>
            Registre-se agora
          </Text>
        </TouchableOpacity> 
        
    </View>

  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  },
  texto:{
    color: "#000",
    fontSize: 12
  },
  input:{
    borderBottomWidth:1, 
    paddingHorizontal: 8,
    paddingVertical: 8,
    width:"80%",
    margin: 8

  },
  button:{
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 8,
    margin: 24
  },

  ViewSenha:{
    flexDirection: "row",
    
    
  }
  
});