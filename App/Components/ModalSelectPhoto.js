import React from 'react'
// import PropTypes from 'prop-types';
import { Modal, View, TouchableWithoutFeedback, TouchableOpacity, Alert } from 'react-native'
import styles from './Styles/ModalSelectPhotoStyle'
import { Text } from 'native-base'
import {Colors} from '../Themes/'
import ImagePicker from 'react-native-image-crop-picker'
<<<<<<< HEAD
// import ImagePicker from 'react-native-image-picker';
=======
// import ImagePicker from "react-native-image-picker";

>>>>>>> fix-http

const openCamera = (callback) => {
  // console.tron.warn('open camera')
  ImagePicker.openCamera({
    width: 1024,
    height: 1024,
    cropping: true
  }).then(image => {
    if (typeof callback === 'function') {
      callback(image)
    }
  })
}

const openGallery = (callback) => {
  Alert.alert(callback)
  // console.tron.warn('open gallery')
  ImagePicker.openPicker({
    width: 1024,
    height: 1024,
    cropping: true
  }).then((image) => {
    if (typeof callback === 'function') {
      callback(image)
    }
  })
}

export const ModalSelectPhoto = (props) => {
  state = {
    pickedImage: null
  }

  reset = () => {
    this.setState({
      pickedImage: null
    });
  }

    /**
 * The first arg is the options object for customization (it can also be null or omitted for default options),
 * The second arg is the callback which sends object: response (more info below in README)
 */

pickImageHandler = () => {
  ImagePicker.launchImageLibrary({title: "Pick an Image", maxWidth: 800, maxHeight: 600}, res => {
    if (res.didCancel) {
      console.log("User cancelled!");
    } else if (res.error) {
      console.log("Error", res.error);
    } else {
      this.setState({
        pickedImage: { uri: res.uri }
      });
      
    }
  });
  // Alert.alert("Golok lu!!!");

}

resetHandler = () =>{
  this.reset();
}


  return (
    <Modal
      transparent visible={props.visible}
      onRequestClose={props.onClose}
    >
      <TouchableWithoutFeedback onPress={props.onClose}>
        <View style={styles.overlayStyle}>
          <TouchableWithoutFeedback>
            <View style={styles.containerMain}>
              <View style={styles.containerContent}>
                <TouchableOpacity onPress={() => openCamera(props.onResult)}>
                {/* <TouchableOpacity onPress={() => openCamera(props.onResult)}> */}
                  <Text style={{padding: 10, color: Colors.primaryColor2}}>Select from camera</Text>
                </TouchableOpacity>
                <View style={{height: 1, backgroundColor: Colors.cloud}} />
                <TouchableOpacity onPress={() => openGallery(props.onResult)}>
                {/* <TouchableOpacity onPress={this.pickImageHandler}> */}
                  <Text style={{padding: 10, color: Colors.primaryColor2}}>Select from gallery</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}