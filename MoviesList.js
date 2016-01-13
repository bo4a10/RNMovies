'use strict';

var React = require('react-native');

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

var {
    Component,
    AppRegistry,
    StyleSheet,
    ListView,
    Image,
    Text,
    View,
    ProgressBarAndroid,
    Alert,
    TouchableOpacity
    } = React;

var ImageTouch = require('./ImageTouch');
var _navigator;

class MoviesList extends Component {
    constructor(props) {
        super(props);
        _navigator = props.navigator;
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            loaded: false
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                setTimeout(() => {
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
                        loaded: true
                    });
                }, 2000);
            })
            .done();
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderMovie}
                style={styles.listView}
            />
        );
    }

    renderLoadingView() {
        return (
            <View style={styles.loadingStartContainer}>
                <Text style={styles.loadingStart}>
                    Loading movies...
                </Text>
                <ProgressBarAndroid styleAttr="Horizontal"/>
            </View>
        );
    }

    renderMovie(movie) {
        return (
            <View style={styles.movieContainer}>
                <ImageTouch thumbnail={movie.posters.thumbnail} movie={movie} navigator={_navigator}/>
                    <View style={{flex: 1}}>
                        <Text style={styles.title}>{movie.title}</Text>
                        <Text style={styles.year}>{movie.year}</Text>
                    </View>
            </View>
        );
    }

    goToMovie() {
        this.props.navigator.push({
            id: 'MoviePage',
            name: 'Movie',
        });
    }
}

var styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#e9eaed',
        height: 56
    },
    movieContainer: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        alignItems: 'center',
        marginHorizontal: 5
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    thumbnail: {
        width: 51,
        height: 51,
        borderRadius: 51,
        margin: 5
    },
    title: {
        fontSize: 10,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        fontSize: 10,
        textAlign: 'center',
    },
    rightContainer: {
        flex: 1
    },
    listView: {
        backgroundColor: '#F5FCFD'
    },
    loadingStart: {
        fontSize: 18,
        color: 'black'
    },
    loadingStartContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

module.exports = MoviesList;
