import { AppError } from '../error';
import { ErrorReason } from '../types/error';

export const errorMiddleware = async (error, request, response, next) => {
	let status = 500;
	let message = error.message || ErrorReason.INTERNAL_SERVER_ERROR;
	if (error instanceof AppError) {
		status = error.httpCode;
		message = error.reason;
	}

	if (process.env.NODE_ENV === 'dev' && !(error instanceof AppError)) {
		console.log(error);
	}

	return response.status(status).json({
		status: status,
		data: message,
	});
};
