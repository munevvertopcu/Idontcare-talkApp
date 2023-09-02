export default function (errorCode) {
  switch (errorCode) {
    case 'auth/email-already-exists':
      return 'Email is already in use by an existing user.';

    case 'auth/email-already-in-use':
      return 'This e-mail address is already in use!';

    case 'auth/wrong-password':
      return 'You entered an incorrect password!';

    case 'auth/invalid-email':
      return 'The provided value for the email user property is invalid. It must be a string email address.';

    case 'auth/user-not-found':
      return 'User not found. Please enter valid user information.';

    case 'auth/invalid-password':
      return 'The provided value for the password user property is invalid. It must be a string with at least six characters.';

    case 'auth/weak-password':
      return 'Your password is too weak! Please enter a stronger and longer password.';

    default:
      return errorCode;
  }
}
