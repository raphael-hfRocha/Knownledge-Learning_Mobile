import { StyleSheet } from "react-native";

const header = StyleSheet.create({
    barra: {
        backgroundColor: "#FFFFFF",
        width: 444,
        height: 80,
        justifyContent: 'space-between',
        flex: 1
    },
    SubmitButton: {
        left: 4
    },
    container: {
        left: 1
    },
    novidades: {
        fontSize: 14,
        color: "white",
        fontWeight: "500"
    },
    title: {
        fontSize: 60,
        fontWeight: "bold",
        textAlign: "center"
    }
})

export default header;  