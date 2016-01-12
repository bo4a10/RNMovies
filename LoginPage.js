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
    TextInput,
    BackAndroid,
    Alert
    } = React;

var dismissKeyboard = require('dismissKeyboard')

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {login: '', pass: ''};
    }

    render() {
        return (
            <Navigator
                renderScene={this.renderScene.bind(this)}
                navigator={this.props.navigator}
                navigationBar={<Navigator.NavigationBar style={{backgroundColor: '#246dd5'}} routeMapper={NavigationBarRouteMapper} />}
            />
        );
    }

    renderScene(route, navigator) {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <TextInput style={{marginHorizontal: 10}} placeholder={'Login'} onChangeText={(text) => this.setState({login: text})} value={this.state.login}></TextInput>
                <TextInput style={{marginHorizontal: 10}} placeholder={'Password'} secureTextEntry={true} onChangeText={(text) => this.setState({pass: text})} value={this.state.pass}></TextInput>
                <TouchableOpacity onPress={this.loginAction.bind(this)}>
                    <Text style={{color: 'black', marginTop: 50}}>Log in</Text>
                </TouchableOpacity>
            </View>
        );
    }

    gotoNext() {
        this.props.navigator.push({
            id: 'MainPage',
            name: 'Home',
        });
    }

    loginAction() {

        var login = this.state.login;
        var pass  = this.state.pass;
        this.setState({login: '', pass: ''});
        dismissKeyboard();

        if (login === 'demo' && pass === 'demo') {
            this.gotoNext();
        } else {
            Alert.alert('Authorization failed', 'There are invalid login or pass, or both!');
        }
    }
}

var NavigationBarRouteMapper = {
    LeftButton(route, navigator, index, navState) {
        return (
            <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={BackAndroid.exitApp/*() => navigator.parentNavigator.pop()*/}>
                <Text style={{color: 'white', margin: 10, fontSize: 16}}>
                    Exit
                </Text>
            </TouchableOpacity>
        );
    },
    RightButton(route, navigator, index, navState) {
        //return (
        //    <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        //        <Text style={{color: 'white', margin: 10, fontSize: 16}}>
        //            Next
        //        </Text>
        //    </TouchableOpacity>
        //);
    },
    Title(route, navigator, index, navState) {
        //return (
        //    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        //        <TouchableOpacity>
        //            <Text style={{color: 'white', margin: 10, fontSize: 16}}>
        //                Log in
        //            </Text>
        //        </TouchableOpacity>
        //    </View>
        //);
    }
};

module.exports = LoginPage;
