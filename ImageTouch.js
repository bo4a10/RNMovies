'use strict';

var React = require('react-native');
var {
    Component,
    View,
    Text,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Alert
    } = React;

class ImageTouch extends Component {
    render() {
        return (
            <TouchableWithoutFeedback onPress={this.clickAction.bind(this)}>
                <Image
                    source={{uri: this.props.thumbnail}}
                    style={{width: 51, height: 51, borderRadius: 51, margin: 5}}
                />
            </TouchableWithoutFeedback>
        );
    }

    clickAction() {
        Alert.alert(new String(this.props.movie.year), new String(this.props.movie.title));
        this.props.navigator.push({
            id: 'MoviePage',
            passProps: {movie: this.props.movie},
        });
    }
}

module.exports = ImageTouch;
