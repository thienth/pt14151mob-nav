import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
  Modal,
  Picker
} from 'react-native';
import { WebBrowser } from 'expo';

export default class AddProductScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      lang: ""
    }
  }
  componentDidMount() {
    // fetch('http://5ceb727b77d47900143b895f.mockapi.io/products', {
    //   method: "GET"
    // })
    // .then(data => data.json())
    // .then(jsonData => {
    //   this.setState({
    //     products: jsonData
    //   })
    // });
  }
  static navigationOptions = {
    header: null,
  };

  toggleModal = (status) => {
    console.log(status);
    this.setState({modalShow: status});
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Ngon ngu lap trinh</Text>
        <Picker
          selectedValue={this.state.lang}
          style={{height: 50, width: '100%'}}
          onValueChange={(selectedValue) => {
            this.setState({lang: selectedValue});
          }}
          >
          <Picker.Item label="---- Vui long chon ngon ngu -----" value="" />
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="Android" value="android" />
          <Picker.Item label="Kotlin" value="kotlin" />
        </Picker>
          <Text>{this.state.lang}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: 'center'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});