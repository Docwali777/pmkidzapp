import React from "react"
import { View, Text, Image, StyleSheet} from "react-native";



function TeamProfileCard({name, title, image, bio}){
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
                <View  style={styles.picAndBioContainer}> 
                    <Image 
                            source={image} 
                            style={styles.image}
                            />
                    <View style={styles.bioContainer}>
                    <Text>{bio}</Text>
                    </View>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        paddingLeft: 10, 
        // borderWidth: 1,
        width: "85%",
        borderRadius: 10,
        marginBottom: 20, 
        shadowOffset: {
            height: 1, 
            width: 10, 
            
          },
          shadowOpacity: 0.3,
          shadowRadius: 10, 
          shadowColor: "#000", 
          backgroundColor: "#fff"        
    },
    image: {
        height: 100,
        width: 100, 
        marginBottom: 15, 
        marginRight: 7
    }, 
    name: {
        fontWeight: "bold", 
        marginBottom: 5, 
        marginVertical: 10,

    }, 
    picAndBioContainer: {
        flexDirection: "row",
    }, 
    bioContainer: {
        width: "65%"
    }
})

export default TeamProfileCard