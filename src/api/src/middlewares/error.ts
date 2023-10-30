import { AppError } from '../error';
import { ErrorReason } from '../types/error';

export const errorMiddleware = async (error, request, response, next) => {
	let status = 500;
	let message = error.message || ErrorReason.INTERNAL_SERVER_ERROR;
	if (error instanceof AppError) {
		status = error.httpCode;
		message = error.reason;
	}

	let formattedError = {
		status: status,
		data: message,
	}

	console.log("Error: ", formattedError);
	return response.status(status).json(formattedError);
};
