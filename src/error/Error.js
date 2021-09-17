export class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode || 500;
    this.message = message || "Internal server error";
  }

  getBody() {
    return {
      statusCode: this.statusCode,
      message: this.message,
    };
  }
}

export class NotFoundError extends ApiError {
  constructor(message) {
    super(404, message || "Not found");
  }

  getBody() {
    return {
      statusCode: this.statusCode,
      message: this.message,
    };
  }
}

export class UnauthorizedError extends ApiError {
  constructor(message) {
    super(401, message || "Unauthorized");
  }

  getBody() {
    return {
      statusCode: this.statusCode,
      message: this.message,
    };
  }
}

export class BadRequestError extends ApiError {
  constructor(message, errors) {
    super(400, message || "Bad request");
    this.errors = errors;
  }

  getBody() {
    return {
      ...super.getBody(),
      ...this.errors,
    };
  }
}
