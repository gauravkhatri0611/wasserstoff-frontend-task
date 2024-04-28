import React from 'react'
import styles from './styles.module.scss'
import Logo from '../../images/Emlblem.png'
import Image from 'next/image'
import partyImage from '../../images/ImageParty.png'
import flowerImage from '../../images/Flowers.png'
import peopleImage from '../../images/people.png'
import micImage from '../../images/mic.png'
import imageCrowd from '../../images/imageCrowd.png'
import people from '../../images/ImageArt.png'
import pumpkinImage from '../../images/pumpkin.png'
import pinkFlower from '../../images/pinkflower.png'

const LandingPage = () => {
  return (
    <div className= ' bg-rose-100  h-screen ' >
        <div className={styles.container}>
            <Image className={styles.logo} src={Logo} />
            <span className={styles.name}>Astrix.</span>
        </div>
        <div className={styles.text}>
          <span className={styles.we}>WE</span>
          <Image className={styles.imageFirstLine} src={partyImage} /> 
        <span className={styles.imageFirstLineTwo}> ORGANIZE THE </span>
        <span className={styles.textSecondLine}>CONNECTION 
        <Image className={styles.imagePartySecond} src={flowerImage} /> </span>
        <Image className={styles.imageThirdLine} src={peopleImage} />
        <span className={styles.thirdLine}> BETWEEN <Image className={styles.ImageThirdMic} src={micImage} />
        <span className={styles.music}>MUSIC</span>
         </span>
          <span>
           <span className={styles.artist}>ARTIST</span>
           <Image className={styles.imagePeople} src={people} /> 
            <span className={styles.culture}>CULTURE</span>
            <Image className={styles.imageCrowd} src={imageCrowd} />
            </span>
             <Image className={styles.pinkFlower} src={pinkFlower} /> 
             <span className={styles.art}>ART </span>
             <Image className={styles.pumpkin} src={pumpkinImage} /> 
              <span className={styles.collection}>
                & COLLECTIONS
              </span>
              
        </div>
    </div>
  )
}

export default LandingPage