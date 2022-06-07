import AppError from '@shared/errors/AppError'
import { Router } from 'express'

const routes = Router()

routes.get('/', (req, res) => { throw new AppError('Test error', 500) })


export default routes
