import React from 'react'
import S1 from '../Component/S1'

const About = () => {
    const data = {
        name: "Abhishek",
        img: "https://cdn.leonardo.ai/users/da89bade-8c86-4f12-9c76-f8015ecf2aff/generations/b3a781a6-7171-4581-b357-081ba804de54/Leonardo_Diffusion_futuristic_teenage_boy_dystopian_2d_ilustra_2.jpg",
        btn: "/"
    }

  return (
    <div>
        <h1>About</h1>
      <S1 {...data} />
    </div>
  )
}

export default About
