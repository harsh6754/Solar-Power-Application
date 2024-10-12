//Error Handling

class ErrorsHandling {
    constructor(statusCode, message) {
        this.error = new Error(message);
        this.error.statusCode = statusCode;
    }

    getError() {
        return this.error;
    }
}
export default ErrorsHandling; // Ensure you export the class as default
