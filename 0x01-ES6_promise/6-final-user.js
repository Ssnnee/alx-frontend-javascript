import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

const handleProfileSignup = (firstName, lastName, fileName) => Promise.allSettled(
  [
    signUpUser(firstName, lastName), uploadPhoto(fileName),
  ],
)
  .then((results) => results.map((result) => (result.status === 'fulfilled'
    ? { status: result.status, value: result.value }
    : { status: result.status, value: `Error: ${result.reason.message}` })));

export default handleProfileSignup;
