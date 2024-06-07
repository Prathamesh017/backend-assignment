import { Router } from 'express'
// import { emailQueue } from '../worker.js';
import verifyToken from '../middleware.js/verifytoken.js';
const orderRouter = Router()


orderRouter.post("",verifyToken,async(req,res)=>{
  // emailQueue.add("order-api",{id:req.body.product_id,userId:req.body.user_id});
  res.json({ message: 'Order Placed queued successfully' });
});


export default orderRouter;