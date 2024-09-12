
import Navigbar from '../components/navigbar';
import ProfileCard from '../components/profilecard';
import user from '../utils/user';
import { CSSProperties } from 'react';

//fake users
const users = [
  new user( 'Alice', require('../assets/clown_kid.jpg'), "female", "I am Alice", "323sef@gmail.com", new Date(), new Date(), []),
  new user( 'Bob', require('../assets/clown_kid.jpg'), "male", "I am Bob", "323sef@gmail.com", new Date(), new Date(), []),
  new user( 'Charlie', require('../assets/clown_kid.jpg'), "male", "I am Charlie", "323sef@gmail.com", new Date(), new Date(), []),
];
const currentUser = new user( 'Alice', require('../assets/clown_kid.jpg'), "323sef@gmail.com", "female", "I am Alice", new Date(), new Date(), []);


// styles
const styles: { [key: string]: CSSProperties } = {
  communityPage: {
    fontFamily: 'Arial, sans-serif',
  },
  userList: {
    padding: '20px',
  },
};

// community page
const Community = () => {
  // request users from backend
  // ...

  return (
    <div className="community-page" style={styles.communityPage}>
      <Navigbar />
      <div className="user-list" style={styles.userList}>
        {users.map((user) => (
          <ProfileCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};




export default Community;
