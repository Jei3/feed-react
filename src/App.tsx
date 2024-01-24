import { Header } from "./Components/Header"
import { Post } from "./Components/Post"
import { Sidebar } from "./Components/Sidebar"
import { PostType } from "./Components/Post"

import "./global.css"
import styles from "./App.module.css"


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/jei3.png',
      name: 'Jonas Jabriel',
      role: 'Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋',},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋',},
      { type: 'paragraph', content: 'teste Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-05-03 20:00:00')
  },
]

function App() {

  return (
    <div>
      < Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map( post => {
              return (
                <Post 
                  key={post.id}
                  post={post}
                />
              )
          })}
        </main>
      </div>
    </div>

  )
}

export default App


