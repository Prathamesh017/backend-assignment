// import { Queue, Worker } from 'bullmq';
// import { placeOrder } from './service/order-service.js';
import placeOrder from "./service/order-service";

// const redisOptions = { host: '127.0.0.1', port: 6379 };
// export const emailQueue = new Queue('api-queue', { connection: redisOptions });



// const handleApiWorker = new Worker('api-queue', async job => {
//   try {
//     if (job.name === 'order-api') {
//       return placeOrder(job.data.id,job.data.userId);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }, {
//   connection: redisOptions
// });