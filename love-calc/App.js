import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Appbar, Button } from "react-native-paper";
import FavoriteIcon from "@material-ui/icons/Favorite";
import axios from "axios";
import DisplayLove from "./DisplayLove";

export default function App() {
  const [mtext, setMtext] = useState("");
  const [ftext, setFtext] = useState("");
  const [percent, setPercent] = useState(0);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  const handleSubmit = async () => {
    var options = {
      method: "GET",
      url: "https://love-calculator.p.rapidapi.com/getPercentage",
      params: { fname: mtext, sname: ftext },
      headers: {
        "x-rapidapi-key": "d63e2bac11mshc63b58ca8aad52fp1b350bjsnb85f4ecf3de5",
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
      },
    };

    await axios.request(options).then((res) => {
      setPercent(res.data.percentage);
      setStatus(res.data.result);
      setLoading(false);
    });
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content
          title="Love % Calculator"
          style={{ alignItems: "center" }}
        />
      </Appbar.Header>
      <TextInput
        label="Male"
        value={mtext}
        onChangeText={(text) => setMtext(text)}
      />
      <TextInput
        label="Female"
        value={ftext}
        onChangeText={(text) => setFtext(text)}
      />
      <Button mode="contained" onPress={handleSubmit} style={{ margin: 10 }}>
        Calculate
      </Button>
      {!loading && <DisplayLove percent={percent} status={status} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
