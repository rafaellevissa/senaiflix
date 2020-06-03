import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import Style from "./style";
import logoImg from "../../assets/logo.png";

export default function Disciplinas({ navigation }) {
  return (
    <View style={Style.container}>
      <View style={Style.header}>
        <View style={Style.header}>
          <Image source={logoImg} />
        </View>        
      </View>
      <View style={Style.content}>
        <Text style={Style.cursoNome}>Desenvolvimento de Sistemas</Text>
        <TouchableOpacity
          style={Style.coursesSubjects}
          onPress={() => navigation.navigate("Logica")}>
          <Text style={Style.coursesSubjectsText}>
            Lógica de programação
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Style.coursesSubjects}
          onPress={() => navigation.navigate("Desenvolvimento1")}>
          <Text style={Style.coursesSubjectsText}>
            Desenvolvimento de Sistemas 1
          </Text>
        </TouchableOpacity>

      </View>      
    </View>
  );
}
