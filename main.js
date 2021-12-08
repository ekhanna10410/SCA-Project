function startClassification()
{
   navigator.mediaDevices.getUserMedia({audio:true});
   classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/uhvgbc09r/.json');
}

function modelReady()
{
  classifier.classify(gotResults);
}