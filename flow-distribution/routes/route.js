import { Router } from 'express'
import { connectAstrologer, getTopAstrologer } from '../controller.js/astrologer-controller.js';
const astrologerRoute = Router()
astrologerRoute.get('/', connectAstrologer).get('/rating',getTopAstrologer)
export default astrologerRoute;
