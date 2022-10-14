import mongoose from 'mongoose';

const mongooConnection = {
  isConnected: 0,
};

connect().catch((err) => console.log(err));

export async function connect() {
  if (mongooConnection.isConnected) {
    console.log('we have been connected');
    return;
  }
  if (mongoose.connections.length > 0) {
    mongooConnection.isConnected = mongoose.connections[0].readyState;
    if (mongooConnection.isConnected === 1) {
      console.log('using last conection');
      return;
    }
    await mongoose.disconnect();
  }
  await mongoose.connect(process.env.MONGO_URL || '');
  mongooConnection.isConnected = 1;
}

export const disconnect = async () => {
  if (process.env.NODE_ENV === 'development') return;

  if (mongooConnection.isConnected === 0) return;

  await mongoose.disconnect();
  console.log('desconected mongo');
};
