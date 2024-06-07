import { products } from "../sample_data/product-data.js";
import {logger} from "../index.js"

async function placeOrder (id,userId) {
  try {
    const product=products.filter((product)=>{return product.id===id})[0];
    if (!product) {
      throw new Error("Product Not Found");
    }
    logger.info(`Order for product id ${id} Succefull`)
    await new Promise((resolve, reject) => setTimeout(() => resolve(console.log(`Order Placed Successfully${userId}`)), 60000));
    
  } catch (err) {
    console.log(err);
    logger.error(err);
  }
}

export default placeOrder;