class InvalidPayloadException extends Error {

    constructor(message) {
        super(message);
        this.name = "InvalidPayloadException";
    }
}

export default InvalidPayloadException