'use strict';

var React = require('react-native');
var {
    Component,
    StyleSheet,
    View,
    Text,
    Navigator,
    TouchableHighlight,
    TouchableOpacity,
    Alert,
    Image,
    ScrollView
} = React;

var NAV_HEIGHT = 50;

class MoviePage extends Component {
    render() {
        var route = this.props.route;

        return (
            <Navigator
                renderScene={this.renderScene.bind(this, route)}
                navigator={this.props.navigator}
                navigationBar={
            <Navigator.NavigationBar style={{backgroundColor: '#246dd5', height: NAV_HEIGHT}}
                routeMapper={NavigationBarRouteMapper} />
          } />
        );
    }

    renderScene(route, navigator) {
        var movieObject = route.passProps.movie;

        return (
            <ScrollView>
                <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: NAV_HEIGHT, marginHorizontal: 10}}>
                    <Image
                        source={{uri: movieObject.posters.detailed}}
                        style={{width: 200, height: 200, margin: 5}}
                    />
                    <Text style={{fontSize: 28, textAlign: 'center', color: 'grey'}}>{movieObject.title}</Text>
                    <Text style={{fontSize: 22, color: 'grey'}}>{movieObject.year}</Text>
                </View>
            </ScrollView>
        );
    }
}

var NavigationBarRouteMapper = {
    LeftButton(route, navigator, index, navState) {
        return (
            <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => navigator.parentNavigator.pop()}>
                <Text style={{color: 'white', margin: 10}}>
                    Back
                </Text>
            </TouchableOpacity>
        );
    },
    RightButton() {
        return null;
    },
    Title() {
        return null;
    }
};

module.exports = MoviePage;
