import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchema.middleware.js"

import { userSchema } from "../schemas/auth.schemas.js"

import { signUp } from "../controllers/auth.controllers.js"
import { validateUserEmail } from "../middlewares/authValidation.middleware.js"


const authRouter = Router()

authRouter.post("/signup", validateSchema(userSchema), validateUserEmail, signUp)


export default authRouter;