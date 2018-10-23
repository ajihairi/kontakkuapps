import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { Container, Icon, Fab } from 'native-base'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import UserActions from '../Redux/UserRedux'

import {ContactRow} from '../Components/ContactRow'
import { Colors } from '../Themes';

// Styles
// import styles from './Styles/ContactListScreenStyle'

class ContactListScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userList: [],
      refreshing: true
    }
  }

  componentDidMount () {
    this.props.getUserList()
  }

  componentWillReceiveProps (nextProps) {
    if (!nextProps.userList.fetching) {
      if (nextProps.userList.payload) {
        this.setState({userList: [...nextProps.userList.payload.data], refreshing: false})
      } else {
        this.setState({refreshing: false})
      }
    }
  }

  _onRefresh () {
    this.setState({refreshing: true})
    this.props.getUserList()
  }

  render () {
    const {navigate} = this.props.navigation

    return (
      <Container>
        <FlatList
          data={this.state.userList}
          keyExtractor={(item, index) => index}
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh.bind(this)}
          renderItem={({item, index}) => {
            return <ContactRow key={index} userData={item} onPress={() => navigate('ContactDetailScreen', {userData: item})} lastRow={index === this.state.userList.length - 1} />
          }}
        />
        <Fab
          direction='up'
          containerStyle={{ }}
          style={{ backgroundColor: Colors.primaryColor4 }}
          position='bottomRight'
          onPress={() => navigate('ContactAddScreen')}>
          <Icon name='add' />
        </Fab>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userList: state.user.userList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserList: () => dispatch(UserActions.getUserListRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactListScreen)