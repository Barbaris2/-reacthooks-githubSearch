import React from 'react';

export const About = () => {
  return (
    <div className='jumbotron'>
      <div className='container'>
        <h1 className='display-4'>Информация</h1>
        <p className='lead'>
          &nbsp;&nbsp;&nbsp;Это приложение <strong>React</strong> создано с
          использованием <strong>Bootstrap</strong> при изучении функций{' '}
          <strong>React Hooks</strong>.<br />
          &nbsp;&nbsp;&nbsp;Приложение ищет пользователей и выводит результаты
          поиска в виде карточек с последующим открытием профиля Github
        </p>
      </div>
    </div>
  );
};
