import React, { useState } from 'react'
import './Home.css'
import { AppDownload, ExploreMunu, Header, ItemDisplay } from '../../components'

const Home = () => {

  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreMunu category={category} setCategory={setCategory} />
      <ItemDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
