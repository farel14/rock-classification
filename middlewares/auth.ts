import { validateJWT } from "../utils/jwt";

class AuthController {
    static async verify(req, res, next) {
        console.log('req.headers', req.headers.authorization)
        // validateJWT(req.header)
        next()
    }
}

export default AuthController;