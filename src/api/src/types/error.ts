export enum ErrorReason {
    INTERNAL_SERVER_ERROR = "Erro interno",
    USER_NOT_LOGGED_IN = "Usuário não logado",
    LOGIN_FAILED = "Email ou senha incorretos",
    NONEXISTENT_USER = "Usuário não encontrado",
    NONEXISTENT_HABIT = "Hábito não encontrado"
}

export enum ErrorStatusCodes {
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    CONFLICT = 409,
    INTERNAL_SERVER_ERROR = 500,
  }