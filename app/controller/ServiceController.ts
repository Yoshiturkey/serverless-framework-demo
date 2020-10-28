import dayjs from 'dayjs'
import 'dayjs/locale/ja'
import relativeTime from 'dayjs/plugin/relativeTime'

export default class ServiceControler {
  async index() {
    dayjs.locale('ja')
    dayjs.extend(relativeTime)

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Hello My API [GET /]',
        access: dayjs().locale('ja').format(),
      }),
    }
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
