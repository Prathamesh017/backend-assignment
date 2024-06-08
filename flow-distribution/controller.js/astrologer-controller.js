import { astrologers } from "../mock_data/astrolegers.js";

//@route GET
//@endpoint /api/connect-astrolegers
//@des - get astrollogers on based on connections
export function connectAstrologer(req,res){
  try {
    if (astrologers.length === 0) {
      return res.status(404).json({ message: 'No astrologer available' });
    }


    astrologers.sort((a, b) => {
      if (a.total_connections === b.total_connections) {
        return b.rating - a.rating; // Same Connections Level , But More Rating
      }
      return a.total_connections - b.total_connections;
    });

   

    res.json({
      message: 'List of Astrologer Based on Connection',
      astrologer: astrologers
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
}



//@route GET
//@endpoint /api/connect-astrolegers/rating
//@des - get astrollogers on based on rating
export function getTopAstrologer(req,res){
  try {
    if (astrologers.length === 0) {
      return res.status(404).json({ message: 'No astrologer available' });
    }


    astrologers.sort((a, b) => {
      return b.rating - a.rating
    });

   

    res.json({
      message: 'Highest Rated Astrologers',
      astrologer: astrologers
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
}