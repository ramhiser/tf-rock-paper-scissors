import * as tf from '@tensorflow/tfjs';
import * as knnClassifier from '@tensorflow-models/knn-classifier';


// Number of classes to classify
const NUM_CLASSES = 3;
// Webcam Image size. Must be 227. 
const IMAGE_SIZE = 224;
// K value for KNN
const TOPK = 10;


const MOBILENET_MODEL_PATH =
    // tslint:disable-next-line:max-line-length
    'https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json';

class ImageClassifier {
    constructor() {
        this.mobilenet = await tf.loadModel(MOBILENET_MODEL_PATH);
    }

    train(image, image_class) {
        return;
    }

    async predict(imgElement) {
        status('Predicting...');
      
        const startTime = performance.now();
        const logits = tf.tidy(() => {
          // tf.fromPixels() returns a Tensor from an image element.
          const img = tf.fromPixels(imgElement).toFloat();
      
          const offset = tf.scalar(127.5);
          // Normalize the image from [0, 255] to [-1, 1].
          const normalized = img.sub(offset).div(offset);
      
          // Reshape to a single-element batch so we can pass it to predict.
          const batched = normalized.reshape([1, IMAGE_SIZE, IMAGE_SIZE, 3]);
      
          // Make a prediction through mobilenet.
          return this.mobilenet.predict(batched);
        });
      
        // Convert logits to probabilities and class names.
        const classes = await getTopKClasses(logits, TOPK_PREDICTIONS);
        const totalTime = performance.now() - startTime;
        status(`Prediction completed in ${Math.floor(totalTime)}ms`);
      
        // Show the classes in the DOM.
        showResults(imgElement, classes);
      }
}

var knn_classifier = new knnClassifier(NUM_CLASSES, TOPK);

// Create the classifier.
const classifier = knnClassifier.create();

// // Add MobileNet activations to the model repeatedly for all classes.
const img0 = tf.fromPixels(document.getElementById('class0'));
const logits0 = mobilenet.infer(img0, 'conv_preds');
classifier.addExample(logits0, 0);

const img1 = tf.fromPixels(document.getElementById('class1'));
const logits1 = mobilenet.infer(img1, 'conv_preds');
classifier.addExample(logits1, 1);

// Make a prediction.
const x = tf.fromPixels(document.getElementById('test'));
const xlogits = mobilenet.infer(x, 'conv_preds');
console.log('Predictions:');
console.log(classifier.predictClass(xlogits));
