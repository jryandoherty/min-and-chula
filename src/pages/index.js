import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />


    <nav>

      <Link to="#bio">OUR STORY</Link>
      <Link to="#link-section">GET OUTSIDE</Link>

    </nav>

<div style={{
  background: `#EBB052`,
  maxWidth: 1170,
  padding: `0 1.0875rem 1.45rem`,

  minHeight:`500px`,
  margin: `0 auto`,


}}>


<div style={{
  display: `flex`,
  flexDirection: `row`,
  marginTop:`4rem`,
  marginBottom:`4rem`,
}}>


    <StaticImage
      src="../images/cover.png"
      width={300}
      quality={95}
      formats={["auto", "webp"]}
      alt="book"

    />

    <div style={{

      padding: `0 1.0875rem 1.45rem`,
      display: `flex`,
      flexDirection: `column`,
      width:`75%`,

    }}>
    <h1>MIN <span className="smaller">AND THE</span> DANCING CACTUS</h1>
    <h2>By Nahyon Lee and Marshall Illif</h2>
    <h3>Illustrated by Lucy Shin</h3>
    <p>This book was born from a trip together to Organ Pipe Cactus National Monument in Arizona. </p>
    <p>Our hope in writing this book is to help our kids, families, and adults reconnect with the wonders of the natural world. In the past decades, we've seen society drift more and more into the metaverse and our mission is to remind all of us to appreciate the wonders of nature that are often right outside our door. With more reliance on technology and the ever increasing pace of life, it is even more vital that our children actively engage with the natural world, benefit from its restorative effects on mental and physical health, and see the magic that exists there. </p>

    <p>We hope that Min and Chula's adventures wow and fascinate us with the place we all call home and do what we can to protect, preserve, and restore it.</p>

    </div>
</div>


</div>

    <div className="fixed-image"></div>





    <div id="bio">

    <div style={{
      background: `#EBB052`,
      maxWidth: 968,
      padding: `0 1.0875rem 1.45rem`,
  margin: `3rem auto`,

    }}>
    <StaticImage
      src="../images/IMG_1995.jpg"
      width={500}
      quality={95}
      formats={["auto", "webp"]}
      alt="marshall"

      style={{ margin: `6.45rem` },{ float: `right` }}
    />

    <h1>Our Story</h1>
    <p>Nahyon and Marshall met in their first year of Bowdoin College. </p>
<p>Nahyon was born in Seoul, South Korea, and emigrated to Minnesota when she was six years old. In Korea and in Minnesota, her parents regularly took her outdoors for weekend trips to the mountains around Seoul at young age, swam in many Minnesota lakes, and hikes to the waterfalls at Taylor Falls. Her love of nature was ingrained at an early age. Nahyon is currently a history teacher and has been teaching since 2001. </p>

<p>Marshall was born in Annapolis, Maryland, and he found his love of nature at an early age with an interest in dinosaurs. His interests moved to reptiles and amphibians, wildlife tracking, and wilderness survival; he even tried to live off the land for one summer, eating bulrush pancakes, dandelion salads, and other roots and vegetables from the land (one of his friend's mothers said Marshall could survive anywhere as long as he had a bottle of wishbone salad dressing). He then went on to take an interest in birdwatching, attending bird camp (Camp Chiricahua by Victor Emanuel Nature Tours) at age 13 to fuel that passion which continues to this day. Marshall pursued birds in his professional life and currently is a project leader for eBird at the Cornell Lab of Ornithology. </p>

<p>In their years together, Nahyon and Marshall have traveled as much as possible, including three cross-country road trips, a Pacific Coast Highway roadtrip from Los Angeles, California to Victoria, Canada, a trip way down the Baja California Peninsula, and two road-trips throughout Canada. They have traveled to over fifty countries and continue to explore the world as much as they can with their son and dogs. They currently live in the Boston area, USA. </p>



    </div>


    </div>


<div className="fixed-image-2"></div>

<div id="link-section" className="link-section" style={{
  background: `#EBB052`,
  maxWidth: 968,
  padding: `0 1.0875rem 1.45rem`,
  margin: `3rem auto`,

}}>

<h1>Get Outside!</h1>
<div><img src="https://www.nps.gov/theme/assets/dist/images/branding/logo.png" alt="Organ Pipe National Park" /><Link to="https://www.nps.gov/orpi/index.htm" target="_blank">Organ Pipe Cactus National Park</Link></div>

<div><img src="https://ncbaclusa.coop/content/uploads/2018/10/rei-coop-500_4fb8b.jpg" alt="REI COOP" class="rei" /><Link to="https://www.rei.com/learn/expert-advice/camping-kids.html" target="_blank">Camping with Kids (from REI)</Link></div>

<div><img src="https://www.nps.gov/theme/assets/dist/images/branding/logo.png" alt="Organ Pipe National Park" /><Link to="https://www.nps.gov/subjects/camping/camping-with-kids.htm" target="_blank">Camping with Kids (from NPS)</Link></div>

<div><img src="https://merlin.allaboutbirds.org/wp-content/themes/birdpress2/images/cornell-lab-logo.svg" alt="Merlin" /><Link to="https://merlin.allaboutbirds.org/" target="_blank">Identify the birds you see or hear with Merlin Bird ID</Link></div>

<div><img src="https://static.inaturalist.org/sites/1-logo.svg?1573071870" alt="iNaturalist" /><Link to="https://inaturalist.org/" target="_blank">Explore and share your observations from the natural world with iNaturalist</Link></div>

<div><img src="https://www.nps.gov/theme/assets/dist/images/branding/logo.png" alt="NPS" /><Link to="https://www.nps.gov/findapark/index.htm" target="_blank">How to find national parks in your state</Link></div>


<a title="U.S. government, National Park Service, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:US-NationalParkService-Logo.svg"><img width="256" alt="US-NationalParkService-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/US-NationalParkService-Logo.svg/256px-US-NationalParkService-Logo.svg.png" /></a>

<div><img src="https://www.nps.gov/theme/assets/dist/images/branding/logo.png" alt="NPS" /><Link to="https://www.nps.gov/subjects/camping/campground.htm" target="_blank">Finding a campground from NPS</Link></div>

<div><img src="https://www.nps.gov/theme/assets/dist/images/branding/logo.png" alt="NPS" /><Link to="https://www.outwardbound.org" target="_blank">Outward Bound - great for older kids to live nature!</Link></div>

    Outward Bound - great for older kids to live nature!
    Trustees of Massachusetts- https://thetrustees.org/  (we live in here for include this?? what do you think?)
    Why the outdoors is good for kids articles:
    Why the outdoors is good for kids article from Nature Conservancy: https://www.nature.org/en-us/about-us/who-we-are/how-we-work/youth-engagement/benefits-of-outdoors-for-kids/
    Why Kids Need Nature article- https://www.scholastic.com/parents/family-life/parent-child/why-kids-need-nature.html
    Backyard activities for kids: https://www.outdoors.org/resources/amc-outdoors/outdoor-resources/10-backyard-nature-activities-for-kids/
    From PBS- observing nature: https://www.pbs.org/parents/observing-nature
</div>


  </Layout>


)

export default IndexPage
