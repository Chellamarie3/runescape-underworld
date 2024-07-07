import { StyleSheet, Image, Dimensions } from "react-native";
import bg from "../assets/bg.png";

const MainImage = () => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <Image
      source={bg}
      style={{
        ...styles.image,
        width: windowWidth * 0.95,
        height: windowHeight * 0.75,
      }}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    margin: 16,
    borderRadius: 18,
  },
});

export default MainImage;
