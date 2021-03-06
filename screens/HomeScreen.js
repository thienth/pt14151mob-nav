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
  Modal
} from 'react-native';
import { WebBrowser } from 'expo';

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      products: [],
      modalShow: false
    }
    
  }
  componentDidMount() {
    const {navigation} = this.props;
    navigation.addListener('willFocus', () =>{
      this.fetchData();
    });
  }

  fetchData = () => {
    fetch('http://5ceb727b77d47900143b895f.mockapi.io/products', {
      method: "GET"
    })
    .then(data => data.json())
    .then(jsonData => {
      this.setState({
        products: jsonData
      })
    });
  }

  static navigationOptions = {
    header: null,
  };

  onRemoveProduct = (removeId) => {
    // 1. gửi request lên server để xóa sản phẩm có id = removeId
    fetch(`http://5ceb727b77d47900143b895f.mockapi.io/products/${removeId}`, {
      method: "DELETE"
    })
    .then(data => data.json())
    .then(jsonData => {
      // 2. Nếu server xóa thành công => xóa sản phẩm có id tương ứng khỏi state.products
      // hiển thị thông báo xóa thành công
      let newProducts = this.state.products.filter(item => item.id != jsonData.id);
      this.setState({
        products: newProducts
      });

      alert(`Đã xóa thành công sản phẩm "${jsonData.product_name}"`);
    })
    .catch(err => {
      // 3. Nếu server xóa không thành công => hiển thị thông báo xóa không thành công
      alert("Xóa không thành công, đã có lỗi xảy ra");
    })
  }
  toggleModal = (status) => {
    console.log(status);
    this.setState({modalShow: status});
  }

  sendNewProduct = () => {
    var data = {
      product_name: "something new",
      image: "http://file.vforum.vn/hinh/2017/12/bai-van-ta-con-cho-lop-2.jpg",
      price: 1234,
      detail: "something"
    }
    fetch('http://5ceb727b77d47900143b895f.mockapi.io/products', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(jsonData => {
      var newProducts = [...this.state.products];
      newProducts.push(jsonData);
      this.setState({products: newProducts});
    });
  }
  render() {

    // const { navigation } = this.props;
    // const newItem = navigation.getParam('newItem', null);
    // if(newItem != null){
    //   var newProducts = [...this.state.products];
    //   newProducts.push(newItem);
    //   this.setState({products: newProducts});
    // }
    if(this.state.products.length == 0){
      return (
        <View style={{ marginTop: 50}}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }else{
      return (
        <ScrollView>
          <View style={styles.container}>

          <TouchableOpacity
                  style={{
                    height: 30,
                    backgroundColor:'green'
                  }}
                  onPress={() => {
                    this.sendNewProduct();
                  }}
                >
                <Text>Gui data</Text>
              </TouchableOpacity>
            <Modal
              visible={this.state.modalShow}
            >
              <View style={
                {
                  marginTop: 100,
                  backgroundColor: 'grey',
                  
                }
              }>
                <TouchableOpacity
                  style={{
                    height: 30,
                    backgroundColor:'green'
                  }}
                  onPress={() => {
                    this.toggleModal(false);
                  }}
                >
                  <Text style={{color: 'white'}}>Tat di</Text>
                </TouchableOpacity>
                <Text>Noi dung cua modal</Text>
                
              </View>
            </Modal>
            <TouchableOpacity
              style={
                {
                  height: 30,
                  backgroundColor: 'red'
                }
              }
              onPress={() => {
                this.toggleModal(true)
              }}
            >
              <Text>Show modal</Text>
            </TouchableOpacity>
            {this.state.products.map(item => 
              <View key={item.id}>
                <Image source={{uri: item.image}} style={{
                  width: 100, height: 100
                }}/>
                <Text>{item.product_name}</Text>
                <Text>Giá: ${item.price}</Text>
                <TouchableOpacity
                  onPress={() => {
                    this.onRemoveProduct(item.id)
                    }
                  }
                >
                  <Text>Xóa</Text>
                </TouchableOpacity>
              </View>  
            )}
          </View>
        </ScrollView>
      );
    }
    
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
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
