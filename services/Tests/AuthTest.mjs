import assert from "assert";
import { SignIn, SignUp } from "../AuthService/AuthService.js/index.js";

describe("AuthService Sign In Test", () => {
  it("Does Sign-In return a JWT?", async function () {
    // Increase the timeout of the test to accommodate the longer timeout of SignIn
    this.timeout(35000); // Set timeout to 35 seconds

    try {
      const Token = await SignIn("test", "test");
      console.log(`Token is ${Token}`);
      assert.notEqual(Token, null);
    } catch (error) {
      console.error("Error occurred during Sign-In:", error);
      // Fail the test if there's an error
      assert.fail(error);
    }
  });
});
describe("AuthService signup test", () => {
  it("signup succeed test", async function () {
    const testEmail = "signUpTestDummyUserId";
    const testPassword = "RANDOM PASSWORD TO TEST";
    this.timeout(30000);
    try {
      await SignUp(testEmail, testPassword);
      assert.equal(true, true);
      return;
    } catch (error) {
      console.log(error);
      await SignIn(testEmail, testPassword);
      assert.equal(true, true);
      return;
    }
    assert.fail("Sign up test failed.");
  });
});
