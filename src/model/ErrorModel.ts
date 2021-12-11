
export enum HttpCodes {
    INTERNAL_SERVER_ERROR = 500,
    BAD_REQUEST = 400,
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