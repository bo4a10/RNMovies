'use strict';

var React = require('react-native');
var {
    Component,
    View,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    ProgressBarAndroid
} = React;

class SplashPage extends Component {
  componentWillMount() {
    var navigator = this.props.navigator;
     setTimeout(() => {
       navigator.replace({
         id: 'LoginPage',
       });
     }, 3000);
  }

  onClickStart () {
    this.props.navigator.push({
      id: 'LoginPage',
      name: 'LoginPage',
    });
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#246dd5', justifyContent: 'center'}}>
        <TouchableOpacity onPress={this.onClickStart.bind(this)}>
          <View style={{alignItems: 'center'}}>
              <Text style={{color: 'white', fontSize: 28}}>Business Easy</Text>
          </View>
        </TouchableOpacity>
        <ProgressBarAndroid styleAttr="LargeInverse"/>
      </View>
    );
  }
}

module.exports = SplashPage;