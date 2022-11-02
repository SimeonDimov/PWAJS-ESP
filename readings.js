// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5pI9g1mfA30pWmI7O8lTAMkZA6-9PMAc",
  authDomain: "espmonitoring-a9cc6.firebaseapp.com",
  databaseURL:
    "https://espmonitoring-a9cc6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "espmonitoring-a9cc6",
  storageBucket: "espmonitoring-a9cc6.appspot.com",
  messagingSenderId: "222908994805",
  appId: "1:222908994805:web:997dde23bdc354a03721bc",
};

// Initialize Firebase
let timestamp;
firebase.initializeApp(firebaseConfig);
let database = firebase.database();

let ref = database.ref("UsersData/RDuRSIRkMpVv2Ctn3HDK99oJv3D3/readings");
ref.on("value", gotData);
ref.on("value", gutData);

export function gotData(data) {
  let readings = data.val();
  // Grab the keys to iterate over the object
  let keys = Object.keys(readings);
  //console.log(keys);
  for (let i = 0; i < keys.length; i++) {
    let k = keys[i];
    // Look at each fruit object!
    let noise = readings[k].noise;
    let timestamp = readings[k].timestamp;

    console.log(noise);
    let li = document.createElement("li", noise);
    return noise
  }
}

export function gutData(data) {
    let readings = data.val();
    // Grab the keys to iterate over the object
    let keys = Object.keys(readings);
    //console.log(keys);
    for (let i = 0; i < keys.length; i++) {
      let k = keys[i];
      // Look at each fruit object!
      let noise = readings[k].noise;
      let timestamp = readings[k].timestamp;
  
      console.log(timestamp);
      let li = document.createElement("li", noise);
      return timestamp
    }
  }

//firebase
//.database()
//.ref("UsersData/RDuRSIRkMpVv2Ctn3HDK99oJv3D3/readings")
//.on("value", (snapshot) => {
//  let reading = (snapshot.val());
//console.log(snapshot.val());
//});

//let reading = snapshot.val();
//console.log(reading);
