import React from 'react'
import S1 from '../Component/S1'

const Home = () => {

    const data = {
        name: "XYZ",
        img: "https://cdn.leonardo.ai/users/da89bade-8c86-4f12-9c76-f8015ecf2aff/generations/78293b18-ae71-4ac1-a0fb-2ba0171f1f42/Leonardo_Diffusion_Creating_metaverse_by_writing_code_in_lapto_2.jpg",
        btn: "/about"
    }

  return (
    <div>
        <h1>Home</h1>
      <S1 {...data} />
    </div>
  )
}

export default Home
