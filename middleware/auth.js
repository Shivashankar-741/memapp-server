import jwt from 'jsonwebtoken';

// const secret = "test";

const auth = async (req, res, next) => {
  try {
    // console.log(req.headers);
    const token = req.headers.authorization.split(' ')[1]; //Google Auth
    const isCustomAuth = token.length < 500; //Custom Auth

    let decodedData;

    if (token && isCustomAuth) {
      //Custom Auth
      decodedData = jwt.verify(token, 'test');

      req.userId = decodedData?.id;
    } else {
      //Google Auth
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
