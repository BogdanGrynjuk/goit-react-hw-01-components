import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendListItem = ({friends}) => {
  return (friends.map(({ avatar, name, isOnline, id }) => 
    (<li key={id} className={css.item}>
      {isOnline
        ? <span className={`${css.status} ${css.statusOnLine}`}></span>
        : <span className={`${css.status} ${css.statusOffLine}`}></span>}      
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>))
  )
}

export const FriendList = ({friends}) => {
  return (<ul className={css.friendList}>
    <FriendListItem friends={friends}/>  
  </ul>)
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
}