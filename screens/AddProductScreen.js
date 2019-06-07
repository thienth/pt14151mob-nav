import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Picker,
  TextInput
} from 'react-native';
import { WebBrowser } from 'expo';

export default class AddProductScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      cate_id: "",
      name: "",
      image: "",
      price: 0,
      detail: "",
      cates: [],
      cateListUrl: "http://5ceb727b77d47900143b895f.mockapi.io/categories",
      saveProductUrl: 'http://5ceb727b77d47900143b895f.mockapi.io/products'
    }
  }
  componentDidMount() {
    fetch(this.state.cateListUrl, {
      method: "GET"
    })
    .then(data => data.json())
    .then(jsonData => {
      this.setState({
        cates: jsonData
      })
    });
  }
  static navigationOptions = {
    header: null,
  };

  submitForm = () => {
    var data = {
      product_name: this.state.name,
      image: this.state.image,
      price: this.state.price,
      detail: this.state.detail,
      cate_id: this.state.cate_id
    }
    fetch(this.state.saveProductUrl, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(jsonData => {
      const {navigate} = this.props.navigation;
    });
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.headerText}>Thêm mới sản phẩm</Text>
        <View>
          <Text>Tên sản phẩm</Text>
          <TextInput 
            onChangeText={(currentName) => {this.setState({name: currentName})}}
          style={styles.input} />
        </View>
        <View>
          <Text>Ảnh sản phẩm</Text>
          <TextInput 
            onChangeText={(currentImage) => {this.setState({image: currentImage})}}
          style={styles.input} />
        </View>
        <View>
          <Text>Giá</Text>
          <TextInput 
            onChangeText={(currentPrice) => {this.setState({price: currentPrice})}}
          style={styles.input} />
        </View>
        <View>
        <Text>Mô tả</Text>
          <TextInput 
            onChangeText={(currentDetail) => {this.setState({detail: currentDetail})}}
          multiline={true} style={styles.inputMultiple} />
        </View>
        <View>
          <Text>Danh mục</Text>
          <Picker
            selectedValue={this.state.cate_id}
            style={{height: 50, width: '100%'}}
            onValueChange={(selectedValue) => {
              this.setState({cate_id: selectedValue});
            }}
            >
              <Picker.Item label="---- Vui long chon ngon ngu -----" value="" />
              {this.state.cates.map((item) =>
                <Picker.Item key={item.id} label={item.name} value={item.id} />
              )}
          </Picker>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {this.submitForm()}}
          >
            <Text>Lưu</Text>
          </TouchableOpacity>
        </View>
        
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#fff',
  },
  headerText:{
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20
  },
  input:{
    height: 30,
    borderWidth: 1,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5
  },
  inputMultiple: {
    height: 100,
    borderWidth: 1,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5
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
