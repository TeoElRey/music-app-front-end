import React from 'react'
import './Hero.css'
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@mui/material'

const Hero = ({music}) => {
  return (
    <div>
      <Carousel>
        {
          music?.map((music) => {
            return(
              <Paper>
                <div className='music-card-container'>
                  <div className='music-card' style={{"--img": `url(${music.artwork})`}}>
                    <div className='music-detail'>
                      <div className='music-artwork'>
                        <img src={music.artwork} alt=""/>
                      </div>
                      <div className='music-title'>
                        <h2>{music.title}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </Paper>
            )
          })
        }
      </Carousel>
    </div>
  )
}

export default Hero