import { users } from '../sample_data/user-data.js'
import { generateToken } from '../utitlites/utility.js';
import {logger} from "../index.js"
export async function loginUser(req,res){
  try {
    const { email, password }=req.body;
    if (!(email && password)) {
      return res.status(404).json({
        status: false,
        message: 'Incomplete data',
      })
    }

    const user=users.filter((user)=>{return user.email===email})[0];
    if (!user) {
      return res.status(404).json({
        status: false,
        message: 'User Not Found',
      })
    }

    if (password!==user.password) {
      return res.status(401).json({
        status: false,
        message: 'Invalid Credentials',
      })
    }
    
    logger.info(`User ${user.email} login successfull`)
    if (user) {
      let token =await generateToken(user.id)

      res.status(201).json({
        status: true,
        content: {
          data: {
            id: user._id,
            name: user.name,
            email: user.email,
          },
          meta: {
            access_token: token,
          },
        },
      })
    }
  } catch (err) {
    logger.error(err);
    return res.status(400).json({
      status: 'failure',
      message: err.message,
    })
  }
}

export default loginUser;