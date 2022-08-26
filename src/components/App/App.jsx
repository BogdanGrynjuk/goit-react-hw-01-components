import css from './App.module.css';
import user from 'user.json';
import data from 'data.json';

import { TaskTitle } from 'components/TaskTitle/TaskTitle';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';


export const App = () => {
  return (
    <div className={css.wrapper}>
      <TaskTitle title={"Task #1"} />
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
      
    </div>    
  );
};
