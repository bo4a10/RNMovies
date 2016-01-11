'use strict';

var React = require('react-native');
var {
    Component,
    View,
    Text,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    Alert
    } = React;

class ImageTouch extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.clickAction.bind(this)}>
                <Image
                    source={{uri: this.props.thumbnail}}
                    style={{width: 51, height: 51, borderRadius: 51, margin: 5}}
                />
            </TouchableOpacity>
        );
    }

    clickAction() {
        Alert.alert(new String(this.props.movie.year), new String(this.props.movie.title));
    }
}

module.exports = ImageTouch;
