import css from './App.module.css';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json'
import transactions from 'data/transactions.json'

import { TaskTitle } from 'components/TaskTitle/TaskTitle';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';



export const App = () => {
  return (
    <div className={css.wrapper}>
      <TaskTitle title="Task #1" />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />      
      <TaskTitle title="Task #2" />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <TaskTitle title="Task #3" />
      <FriendList friends={friends} />
      <TaskTitle title="Task #4" />
      <TransactionHistory items={transactions} />
      
    </div>    
  );
};
