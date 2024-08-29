class InvalidCredentialException extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidCredentialException";
  }
}
export default InvalidCredentialException;
