import {StyleSheet} from 'react-native';

const backgroundColor = "rgba(0,0,0,0.5)";
const borderColor = "rgba(0,0,0,0.6)";
const boldFont = "Ubuntu_700Bold";
const lightFont ="Ubuntu_400Regular";

const styles = StyleSheet.create({

//ADS

topBanner: {
  alignSelf: "center",
},

bottomBanner: {
  alignSelf: "center",
  marginBottom: 25
},

//CURRENT

currentContainer: {
  alignSelf: "center",
  alignItems: "center",
  backgroundColor: backgroundColor,
  borderColor: borderColor,
  borderWidth: 2,
  borderStyle: "solid",
  borderRadius: 10,
  maxWidth: "90%",
  padding: 10,
  marginVertical: 25
},

currentIcon: {
  resizeMode: "contain",
  width: 150,
  height: 150,  
  marginBottom: 10
},

currentDescription: {
  fontSize: 25,
  color: "white",
  fontFamily: lightFont,
  textTransform: "capitalize"
},

currentTemp: {
  fontSize: 90,
  color: "white",
  fontFamily: boldFont,
  lineHeight: 100,
  height: 95
},

degree: {
  fontFamily: lightFont
},

currentSmallText: {
  fontSize: 15,
  color: "white",
  fontFamily: lightFont,
  lineHeight: 25
},

//HOURLY & DAILY

sectionTitle: {
  color: "white",
  fontFamily: boldFont,
  textAlign: "center",
  fontSize: 30,
  backgroundColor: backgroundColor,
  borderColor: borderColor,
  borderWidth: 2,
  borderStyle: "solid",
  borderRadius: 10,
  height: 50,
  width: 275,
  lineHeight: 50,
  marginLeft: 10,
  marginBottom: 5
},

hourlyContainer: {
  flexDirection: "row",
  paddingHorizontal: 10,
  paddingBottom: 5,
  marginBottom: 25
},

hourDisplay: {
  alignItems: "center",
  backgroundColor: backgroundColor,
  borderColor: borderColor,
  borderWidth: 2,
  borderStyle: "solid",
  borderRadius: 10,
  width: 115,
  padding: 8,
  marginRight: 5
},

hourDisplayHeader: {
  color: "white",
  fontFamily: boldFont,
  fontSize: 17,
  lineHeight: 22
},

hourIcon: {
  resizeMode: "contain",
  width: 90,
  height: 90,  
  marginVertical: 10
},

hourDescription: {
  fontSize: 18,
  color: "white",
  fontFamily: lightFont,
  textTransform: "capitalize",
  textAlign: "center",
},

hourTemp: {
  fontSize: 40,
  color: "white",
  fontFamily: boldFont,
},

dayTemp: {
  fontSize: 21,
  color: "white",
  fontFamily: boldFont,
  height: 35,
  lineHeight: 35
},

hourSmallText: {
  fontSize: 11,
  color: "white",
  fontFamily: lightFont,
  lineHeight: 18
}

});

export default styles;