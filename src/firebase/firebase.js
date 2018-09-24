import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIRBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};

//database.ref('expenses').on('child_removed', (snapshot) => {
//  console.log(snapshot.key, snapshot.val());
//});
//
//database.ref('expenses').on('child_changed', (snapshot) => {
//  console.log(snapshot.key, snapshot.val());
//});
//
//database.ref('expenses').on('child_added', (snapshot) => {
//  console.log(snapshot.key, snapshot.val());
//});

//database.ref('expenses').on('value', (snapshot) => {
//  const expenses = [];
//  snapshot.forEach((childsnap) => {
//    expenses.push({
//      id: childsnap.key,
//      ...childsnap.val()
//    });
//  });
//
//  console.log(expenses)
//});

//database.ref('expenses')
//  .once('value')
//  .then((snapshot) => {
//    const expenses = [];
//    snapshot.forEach((childSS) => {
//      expenses.push({
//        id: childSS.key,
//        ...childSS.val()
//      });
//    });
//
//    console.log(expenses);
//  });

//database.ref('expenses').push({
//  description: 'Rent',
//  note: '',
//  amount: 110000,
//  createdAt: 98132198132
//});

//database.ref('notes').push({
//  title: 'To Donts',
//  body: 'Go for a doughnut.'
//});

//const firebaseNotes = {
//  notes: {
//    eoirzczah: {
//      title: 'First note',
//      body: 'First Note Body'
//    },
//    weriozxcv: {
//      title: 'Second Note',
//      body: 'Second Note Body'
//    }
//  }
//};
//
//const notes = [{
//  id: '1',
//  title: 'note',
//  body: 'this is a note'
//},{
//  id: '2',
//  title: 'note2',
//  body: 'this is another note'
//}];
//
//database.ref('notes').set(notes);

//database.ref().on('value', (snapshot) => {
//  const val = snapshot.val()
//  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
//});
//
//setTimeout(() => {
//  database.ref().update({
//    'job/title': 'sandwich artist',
//    'job/company': 'Somewhere',
//    stressLevel: 3
//  });
//}, 5000);

//const onValueChange = database.ref().on('value', (snapshot) => {
//    console.log(snapshot.val())
//  }, (e) => {
//    console.log('Error with data fetch.', e);
//  });
//
//setTimeout(() => {
//  database.ref('age').set(29);
//}, 3500);
//
//setTimeout(() => {
//  database.ref().off('value', onValueChange);
//}, 7000);
//
//setTimeout(() => {
//  database.ref('age').set(28);
//}, 10500);

//database.ref()
//  .once('value')
//  .then((snapshot) => {
//    const val = snapshot.val();
//    console.log(val);
//  })
//  .catch((e) => {
//    console.log('error fetching data', e);
//  });

//database.ref().set({
//  name: 'Cael Krigbaum',
//  age: 28,
//  stressLevel: 7,
//  job: {
//    title: 'software developer',
//    company: 'Gaggle'
//  },
//  location: {
//    city: 'Eugene',
//    state: 'Oregon',
//    country: 'United States'
//  }
//}).then(() => {
//  console.log('Data is saved.');
//}).catch((e) => {
//  console.log('This failed.',e);
//});
//
//database.ref().update({
//  stressLevel: 9,
//  'job/company': 'Amazon',
//  'location/city': 'Seattle',
//  'location/state': 'Washington'
//}).then(() => {
//  console.log('Successfully updated data.')
//}).catch((e) => {
//  console.log('Failed to update data.', e)
//});

//database.ref('isSingle').remove().then(() => {
//  console.log('Successfully removed reference.')
//}).catch((e) => {
//  console.log('Unable to remove reference. ', e)
//});
