// Represents the response structure for authentication-related API calls
// This class defines the structure of the response returned by the authentication API.
export class AuthResponse {
  token: string;

  constructor() {
    this.token = '';
  }
}
