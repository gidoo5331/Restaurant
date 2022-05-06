import React from 'react'
import JumboText from '../Navbar/JumboText'
import food from "../../../Media/images/food.jpg"
import girl from "../../../Media/images/girl.jpg"
import w1 from "../../../Media/images/w1.jpg"
import old from "../../../Media/images/oldbook.jpg"
import bf2 from "../../../Media/images/bf2.jpg"
import chef from "../../../Media/images/chef.jpg"
import bf1 from "../../../Media/images/bf1.jpg"
import bf3 from "../../../Media/images/bf3.jpg"
import l1 from "../../../Media/images/l1.jpg"
import l2 from "../../../Media/images/l2.jpg"
import l3 from "../../../Media/images/l3.jpg"
import w2 from "../../../Media/images/w2.jpg"
import w4 from "../../../Media/images/w4.jpg"
import chef6 from "../../../Media/images/chef6.jpg"
import chef3 from "../../../Media/images/chef3.jpg"
import PhotoAlbum from "react-photo-album";

const Gallery = () => {
  const photos = [
      {
          src: l3,
          width: 800,
          height: 900
      },
      {
          src: chef3,
          width: 1600,
          height: 900
      },
      {
          src: chef,
          width: 1600,
          height: 2100
      },
      {
          src: w1,
          width: 1600,
          height: 900
      },
      {
          src: food,
          width: 1600,
          height: 1400
      },
      {
          src: w1,
          width: 1600,
          height: 2100
      },
      {
          src: chef6,
          width: 1600,
          height: 1900
      },
      {
          src: l2,
          width: 1600,
          height: 1000
      },
      {
          src: old,
          width: 1600,
          height: 1200
      },
      {
          src: bf2,
          width: 1600,
          height: 2500
      },
      {
          src: chef,
          width: 1600,
          height: 2400
      },
      {
          src: l1,
          width: 1600,
          height: 1900
      },
      {
          src: bf3,
          width: 1600,
          height: 2200
      },
      {
          src: bf1,
          width: 1600,
          height: 1800
      },
      {
          src: w2,
          width: 1600,
          height: 2000
      },
      {
          src: w2,
          width: 1600,
          height: 900
      },
      {
          src: w4,
          width: 1600,
          height: 2600
      },
  ];
  return (
    <>
      <JumboText 
    top="ENJOY THE VIEW"
    title="Our Galleries" 
    text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type 
    specimen book. "/>
        



{/* <PhotoAlbum layout="rows" photos={photos} /> */}
<div style={{padding: "5% 8%"}}>
<PhotoAlbum layout="masonry" photos={photos} />

</div>

    </>
  )
}

export default Gallery