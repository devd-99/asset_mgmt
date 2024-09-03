const config = {
  apiKey: "AIzaSyBeYILQCGCDzMKK1wCOpb4vMYhOF6axqzU",
  authDomain: "eeam-67efc.firebaseapp.com",
  projectId: "eeam-67efc",
  storageBucket: "eeam-67efc.appspot.com",
  messagingSenderId: "87734894771",
  appId: "1:87734894771:web:a15ac1cb6c2c3d162af0c6",
};


// When deployed, there are quotes that need to be stripped
Object.keys(config).forEach((key) => {
  const configValue = config[key] + "";
  if (configValue.charAt(0) === '"') {
    config[key] = configValue.substring(1, configValue.length - 1);
  }
});

export const firebaseConfig = config;
