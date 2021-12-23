
export enum HttpCodes {
    BAD_REQUEST = 400,
    NOT_AUTHORIZED = 401,
    ALREADY_EXIST = 409,
    INTERNAL_SERVER_ERROR = 500,
} 

export default class ErrorModel extends Error {
    public readonly name: string;
    public readonly isOperational: boolean;
    public readonly message: string;
    public readonly httpCode: HttpCodes;

    constructor(
        name: string,
        message: string,
        httpCode: HttpCodes,
        isOperational: boolean
    ){
        super(message);
        this.name = name;
        this.message = message;
        this.httpCode = httpCode;
        this.isOperational = isOperational;
    }
}