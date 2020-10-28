import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

import Controller from './Controller'

export default class ServiceController extends Controller {
  async index() {
    dayjs.extend(utc)
    dayjs.extend(timezone)

    return this.response(200, {
      message: 'Hello My API [GET /]',
      access: dayjs().tz('Asia/Tokyo').format(),
    })
  }
  async create(event: any) {
    const response = {
      statusCode: 201,
      body: undefined,
    }
    try {
      const data = JSON.parse(event.body)
      response.body = JSON.stringify({
        created: true,
        params: data,
        message: 'Request data is not stored in any resource.',
      })
    } catch {
      response.statusCode = 400
      response.body = JSON.stringify({
        message: 'Allow Content-Type is JSON Only.',
      })
    }
    return response
  }
}
