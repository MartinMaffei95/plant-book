import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { LogoutButton } from './Login/Login';

const Profile = () => {
  const { user, isAuthenticated, isLoadig, getAccessTokenSilently } =
    useAuth0();
  console.log(getAccessTokenSilently());
  if (isLoadig) return <div>CARGANDO</div>;

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>Mail: {user.email}</p>
        <LogoutButton />
      </div>
    )
  );
};

export default Profile;
