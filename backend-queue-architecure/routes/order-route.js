import { Router } from 'express'
import { emailQueue } from '../worker.js';
import verifyToken from '../middleware.js/verifytoken.js';
import { products } from '../sample_data/product-data.js';
import { logger } from '../index.js';
const orderRouter = Router()


orderRouter.post("",verifyToken,async(req,res)=>{
  try{
   const product=products.filter((product)=>{return product.id===req.body.product_id})[0];
   if(!product){
    logger.error(`Product Not Available for user ${req.body.user_id}`);
    return res.statusCode(404).json({ message: 'Product Not Available'});
   }
   emailQueue.add("order-api",{id:req.body.product_id,userId:req.body.user_id});
  res.json({ message: 'Order Placed queued successfully' });
  }catch(err){
     logger.error(err);
  }
});


export default orderRouter;