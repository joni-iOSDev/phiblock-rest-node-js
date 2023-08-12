class ResponseModel {
  constructor(status, message, meta, data) {
    this.response = {
      statusCode: status,
      message: message,
      meta: meta,
    };
    this.results = data;
  }
}

module.exports = ResponseModel;
