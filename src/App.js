import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as tf from '@tensorflow/tfjs';
import * as knnClassifier from '@tensorflow-models/knn-classifier';


// Number of classes to classify
const NUM_CLASSES = 3;
// Webcam Image size. Must be 227. 
const IMAGE_SIZE = 227;
// K value for KNN
const TOPK = 10;


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My name is AJ Ramey.</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>

    );
  }
}

export default App;


//var knn_classifier = new knnClassifier(NUM_CLASSES, TOPK);



// Create the classifier.
// const classifier = knnClassifier.create();


// // Add MobileNet activations to the model repeatedly for all classes.
// const img0 = tf.fromPixels(document.getElementById('class0'));
// const logits0 = mobilenet.infer(img0, 'conv_preds');
// classifier.addExample(logits0, 0);

// const img1 = tf.fromPixels(document.getElementById('class1'));
// const logits1 = mobilenet.infer(img1, 'conv_preds');
// classifier.addExample(logits1, 1);

// // Make a prediction.
// const x = tf.fromPixels(document.getElementById('test'));
// const xlogits = mobilenet.infer(x, 'conv_preds');
// console.log('Predictions:');
// console.log(classifier.predictClass(xlogits));