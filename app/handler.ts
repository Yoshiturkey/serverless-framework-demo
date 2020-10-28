import { Handler } from 'aws-lambda'
import ServiceController from './controller/ServiceController'
const Service = new ServiceController()

export const index: Handler = async () => {
  return Service.index()
}

export const create: Handler = async (event: any) => {
  return Service.create(event)
}
