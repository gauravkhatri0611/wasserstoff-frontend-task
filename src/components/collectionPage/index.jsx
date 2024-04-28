import React from "react";
import styles from "./styles.module.scss";
import brandName from "../../../public/Astrix Branding.png";
import Image from "next/image";
import ToggleButton from "../toggleButton";
import VerticalStrip from "../verticalStrip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import image1 from "../../../public/Image1.png";
import image2 from "../../../public/Image2.png";
import image3 from "../../../public/Image3.png";
import barCode from "../../../public/barCode.png";
import eventImage1 from '../../../public/EventImage1.png'
import eventImage2 from '../../../public/EventImage2.png'
import eventImage3 from '../../../public/EventImage3.png'
import eventImage4 from '../../../public/EventImage4.png'


const CollectionPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Image className={styles.logo} src={brandName} />
        <span className={styles.Text}> Astrix.</span>
        <div className={styles.grid}>
          <span className={styles.TextBg}>ASTRIX COLLECTIBLE</span>
        </div>
        <div className={styles.contentContainer}>
        <span className={styles.ExploreText}>Explore Youre First Event</span>
        <span className={styles.eventName}>Event Name </span>
        <span className={styles.locationIcon}>
          <FontAwesomeIcon icon={faLocationDot} />
          <span className={styles.venue}>Venue </span>
          <span className={styles.clock}>
            <FontAwesomeIcon icon={faClock} />
          </span>
          <span className={styles.date}>04/3/2024</span>
          <span className={styles.time}> @19:00</span>
          <span className={styles.content}>
            Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et
            sed ipsum. Pellentesque mattis condimentum ut nulla.
          </span>
          <span className={styles.artistLineup}>Artist Lineup</span>
        </span>
        </div>
        <div className={styles.imageContainer}>
          <Image className={styles.image1} src={image1} />
          <Image className={styles.image2} src={image2} />
          <Image className={styles.image3} src={image3} />
          <Image className={styles.image1} src={image1} />
        </div>
        <span><Image src={barCode} className={styles.barCode} /></span>
        <div className={styles.ImagesContent}>
          <Image src={eventImage1} className={styles.Image1}/>
          <Image src={eventImage2} className={styles.Image2}/>
          <Image src={eventImage3} className={styles.Image3}/>
          <Image src={eventImage4} className={styles.Image4}/>
          
        </div>
        <VerticalStrip />
        <span className={styles.waitList}>Join Waitlist</span>
        <span className={styles.toggleBtn}><ToggleButton /></span>
      </div>
    </>
  );
};

export default CollectionPage;
