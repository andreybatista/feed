import { Header } from "./components/Header"
import { Post, PostProps } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

interface Post extends PostProps {
  id: number;
}


const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/andreybatista.png',
      name: 'Andrey',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 github.com/andreybatista' },
    ],
    publishedAt: new Date('2022-11-22 17:08:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/andreybatista.png',
      name: 'Andrey do Multiverso',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 github.com/andreybatista' },
    ],
    publishedAt: new Date('2022-11-10 17:08:00')
  },
];

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  )
}

export default App
