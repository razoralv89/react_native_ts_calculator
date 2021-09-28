import React from "react";
import {StyleSheet, Text, View, StatusBar, SafeAreaView} from "react-native";

import Button from "./components/Button";
import calculator, {initialState} from "./util/calculator";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#202020",
        justifyContent: "flex-end"
    },
    value: {
        color: "#fff",
        fontSize: 48,
        textAlign: "right",
        marginRight: 20,
        marginBottom: 10
    }
});

export default class App extends React.Component {
    state = initialState;

    buttonClick = (type, value) => {
        this.setState(state => calculator(type, value, state));
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <SafeAreaView st>
                    <Text style={styles.value}>
                        {isNaN(parseFloat(this.state.currentValue)) ? this.state.currentValue : parseFloat(this.state.currentValue).toLocaleString()}
                    </Text>
                    <View style={{flexDirection: "row", margin: 5}}>
                        <View style={{flex: 0.25, margin: 5}}>
                            <Button text="C" theme="secondary" onPress={() => this.buttonClick("clear")}/>
                            <Button text="7" onPress={() => this.buttonClick("number", 7)}/>
                            <Button text="4" onPress={() => this.buttonClick("number", 4)}/>
                            <Button text="1" onPress={() => this.buttonClick("number", 1)}/>
                            <Button text="%" onPress={() => this.buttonClick("percentage")}/>
                        </View>
                        <View style={{flex: 0.25, margin: 5}}>
                            <Button text="/" theme="secondary" onPress={() => this.buttonClick("operator", "/")}/>
                            <Button text="8" onPress={() => this.buttonClick("number", 8)}/>
                            <Button text="5" onPress={() => this.buttonClick("number", 5)}/>
                            <Button text="2" onPress={() => this.buttonClick("number", 2)}/>
                            <Button text="0" onPress={() => this.buttonClick("number", 0)}/>
                        </View>
                        <View style={{flex: 0.25, margin: 5}}>
                            <Button text="x" theme="secondary" onPress={() => this.buttonClick("operator", "*")}/>
                            <Button text="9" onPress={() => this.buttonClick("number", 9)}/>
                            <Button text="6" onPress={() => this.buttonClick("number", 6)}/>
                            <Button text="3" onPress={() => this.buttonClick("number", 3)}/>
                            <Button text="." onPress={() => this.buttonClick("number", ".")}/>
                        </View>
                        <View style={{flex: 0.25, margin: 5}}>
                            <Button text="<" theme="secondary" onPress={() => this.buttonClick("delete")}/>
                            <Button text="-" theme="secondary" onPress={() => this.buttonClick("operator", "-")}/>
                            <Button text="+" theme="secondary" onPress={() => this.buttonClick("operator", "+")}/>
                            <Button text="=" theme="accent" size="double" onPress={() => this.buttonClick("equal")}/>
                        </View>
                    </View>
                </SafeAreaView>
            </View>
        );
    }
}
