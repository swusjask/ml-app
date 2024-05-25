const { Firestore } = require('@google-cloud/firestore');

async function getAllPredictions() {
    const db = new Firestore();

    const predictCollection = db.collection('predictions');
    const querySnapshot = await predictCollection.get();

    const predictions = [];
    querySnapshot.forEach(doc => {
        predictions.push({
            id: doc.id,
            history: doc.data()
        });
    });

    return predictions;
}

module.exports = getAllPredictions;