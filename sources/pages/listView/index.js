import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  RefreshControl,
  TextInput,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Reactotron from 'reactotron-react-native'

import * as SeedActions from '../../actions/seed'



class ContentBody extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <View style={ styles.bodyTextWarp }>
        <Text style={styles.bodyText}>{ this.props.body }</Text>
      </View>
    );
  }
}

class ListViewEx extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      refreshing: false,
      searchText: ''
    };

    this.props.callGetPosts()
  }

  _renderRow(rowData) {
  	return <View style={ styles.itemWarp }>
    <TouchableHighlight underlayColor='red' style={ styles.list }>
        <View style={ styles.column }>
          <View style={ styles.bodyTitleWarp }>
          <Text style={styles.title}>{rowData.name}</Text>
          <Text>{rowData.imdb_id}</Text>
          </View>
          <ContentBody body={rowData.overview} />
        </View>
      </TouchableHighlight>
    </View>
  }

  _onRefresh() {
    this.setState({refreshing: true});
    this.props.callGetPosts().then(() => {
      this.setState({
        refreshing: false
      });
    });
  }

  _onScrollEnd(event) {
    this.props.callGetPostsNext(this.props.seed.meta.pagination.links.next)
  }

  _setSearchText(searchText) {
    this.setState({searchText});
  }

  render() {
    // console.log('Partners: ', this.props.seed.posts )
    Reactotron.log('list view GO!');
    Reactotron.warn('sdfasf');
    const { seed, dataSource } = this.props

    return (
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.textInput}
            onChangeText={(e) => this._setSearchText(e)}
            value={this.state.searchText}
            placeholder="搜尋....."
          />
        </View>
       	<ListView
         refreshControl={
           <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
         }
         onEndReached={this._onScrollEnd.bind(this)}
         onEndReachedThreshold={5}
      	 dataSource={ dataSource }
      	 renderRow={ this._renderRow }
         enableEmptySections />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  column: {
    flex: 1,
    flexDirection: 'column'
  },
  bodyTitleWarp: {
    flex: 1,
    paddingBottom: 10
  },
  bodyTextWarp: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#dfe0e4',
    padding: 5,
    borderRadius: 4
  },
  bodyText: {
  },
  itemWarp : {
  },
  textInput: {
    paddingLeft: 30,
    fontSize: 18,
    height: 50,
    flex: 1,
    borderWidth: 9,
    borderColor: '#E4E4E4'
  },
  list: {
    backgroundColor: '#efefef',
    borderBottomWidth:1,
    borderBottomColor: '#ccc',
    padding: 10
  }

});

const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

function mapStateToProps(state) {
  return {
    seed: state.seed,
    dataSource: dataSource.cloneWithRows(state.seed.posts),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SeedActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListViewEx)
