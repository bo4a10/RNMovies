'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Component,
  View,
  Text,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
    Alert
} = React;

var MoviesList = require('./MoviesList');
var NAV_HEIGHT = 50;

class MainPage extends Component {
  render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
          navigator={this.props.navigator}
          navigationBar={
            <Navigator.NavigationBar style={{backgroundColor: '#246dd5', height: NAV_HEIGHT}}
                routeMapper={NavigationBarRouteMapper} />
          } />
    );
  }

  renderScene(route, navigator) {
    return (
      <View style={{flex: 1, marginTop: NAV_HEIGHT}}>
        <MoviesList style={{flexDirection: 'row', flex: 1}} navigator={this.props.navigator}/>
      </View>
    );
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => navigator.parentNavigator.pop()}>
        <Text style={{color: 'white', margin: 10}}>
          Log out
        </Text>
      </TouchableOpacity>
    );
  },
  RightButton(route, navigator, index, navState) {
    return (
        <TouchableHighlight style={{flex: 1, justifyContent: 'center'}} onPress={() => navigator.parentNavigator.push({id: 'PersonPage',  sceneConfig: Navigator.SceneConfigs.FloatFromBottom})}>
            <Text style={{color: 'white', margin: 10}}>Profile</Text>
        </TouchableHighlight>
    )
  },
  Title(route, navigator, index, navState) {
    return null;
  }
};

module.exports = MainPage;
