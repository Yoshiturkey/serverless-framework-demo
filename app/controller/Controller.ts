export default class Controller {
  protected response(code: number, data: any) {
    return {
      statusCode: code,
      body: JSON.stringify(data),
    }
  }
}
