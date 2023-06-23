class ResponseModel {
  constructor(status, message, meta, data) {
    this.response = {
      status: status,
      message: message,
      meta: meta,
    };
    this.results = data;
  }
}

module.exports = ResponseModel;
