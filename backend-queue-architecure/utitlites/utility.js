import jwt from 'jsonwebtoken'


// @description - to generate token for authorization
export const generateToken = async (id) => {
  const token = jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: '2h',
  })

  return token
}
