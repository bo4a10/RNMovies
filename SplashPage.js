'use strict';

var React = require('react-native');
var {
  Component,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity
} = React;

var MoviesList = require('./MoviesList')

class SplashPage extends Component {
  componentWillMount() {
    var navigator = this.props.navigator;
    // setTimeout(() => {
    //   navigator.replace({
    //     id: 'LoginPage',
    //   });
    // }, 1000);
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
        <MoviesList style={{flexDirection: 'row', flex: 1}}/>
      </View>
    );
  }
}

module.exports = SplashPage;
