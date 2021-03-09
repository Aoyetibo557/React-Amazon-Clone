import React, { useState } from 'react'
import './Home.css';
import Carousel from 'react-elastic-carousel';
import Product from './Product';
import Tiles from './Tiles';



function Home() {
    const [state, setState] = useState(false);
    return (
           <div className="_home__caraousel">
            {state === false ? (
                <video className="home__video" onEnded = {() => setState(true)} autoPlay muted typeof="video/mp4" preload="auto" tabIndex="-1" playsInline="playsinline" >
                    <source src="https://m.media-amazon.com/images/I/A1F8Nc3MFHL.mp4" />
                </video>
            ):(
                <Carousel 
                    isLTR='true'
                    transitionMs='500'
                    easing="ease"
                    enableMouseSwipe='false'
                    enableAutoPlay autoPlaySpeed={2000}
                    className="_home__caraousel"
                >
                
                    <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Other/The_Final_1500x300_start_STATIC_EN_hero._CB658971111_.jpg" />
                    <img className="_home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZjNlMmIxN2Et/ZjNlMmIxN2Et-Nzg2YTNkMGIt-w1242._CB413189314_SY300_.jpg" alt="" />
                    <img className="_home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Nzg3NzIxZDct/Nzg3NzIxZDct-MGZkMGRhODAt-w1242._CB412119038_SY300_.jpg" alt="image two" />
                    <img className="_home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2021/Other/RB-3533_SVOD_Jan_DiamondFallback/GW_MobileHero_3P_ENG_RB-3533_SVOD_Jan_DiamondFallback_v2_1242x450._CB661988673_SY300_.jpg" alt="image two" />
                    <img className="_home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/audible/A4-1000_UseCase_GatewayMobile_1242x450_English._CB406069716_SY300_.jpg" alt="image two" />
                    <img className="_home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/RedHood/GatewayTest/US-EN_080320_RedHood_ACQ_GW-Hero_M_1242x450_CV10._CB403907331_SY300_.jpg" alt="image two" />
                    <img className="_home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/MADE_FOR_YOU/GW/RHAP_MOB_HERO_W_2._CB416867549_SY300_.jpg" alt="image two" />
                    <img className="_home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/Brand/JD/2021/Jan_default_onsite/XCM_Manual_1302634-gw_mob-control-en-1242x450_e52afa0b-d435-4f51-85cb-85af81e89025._CB411324018_SY300_.png" alt="image two" />
                </Carousel>
            )}
            
             

            {/* Product would have the following props, id, title, price, rating, image */}
            <div className="_home__row">
                <Product 
                    id={111}
                    title="Ring Indoor Cam, Compact Plug-In HD security camera with two-way talk, Works with Alexa - Black" 
                    rating={4}  
                    price={59.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/41Ggoy6fE2L._SX522_.jpg"
                />
                
                <Product 
                    id={112} 
                    title="All-new Echo Show 10 (3rd Gen | HD smart display with motion and Alexa | Charcoal" 
                    rating={5}  
                    price={249.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/41SFods8jJL._AC_SY400_.jpg"
                />

                <Product 
                    id={113}
                    title="Crocs Unisex-Adult Classic Graphic Clog | Water Slip on Shoes" 
                    rating={4.5}  
                    price={50.95} 
                    image="https://images-na.ssl-images-amazon.com/images/I/71YdF-9HzTL._AC_UL1500_.jpg"
                />
                
            </div>

            <div className="_home__row">
                
                <Product 
                    id={114} 
                    title="Citezen Watches AW1361-10H Eco-Driven Avion" 
                    rating={4}  
                    price={169.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/91G2QVp6TeL._AC_UY1000_.jpg"
                />
                
                <Product 
                    id={115}
                    title="Infinity Cube Fidget Toy, Sensory Tool EDC Fidgeting Game for Kids and Adults, Cool Mini Gadget Best for Stress and Anxiety Relief and Kill Time, Unique Idea that is Light on the Fingers and Hands" 
                    rating={4}  
                    price={9.95} 
                    image="https://images-na.ssl-images-amazon.com/images/I/41fsMxk8apL._AC_SY400_.jpg"
                />

                <Product
                    id={116}
                    title="Need Computer Desk 63 inches Large Desk Writing Desk with BIFMA Certification Workstation Office Desk,White AC3DW-160"
                    image="https://images-na.ssl-images-amazon.com/images/I/518zakZrTDL._AC_SX679_.jpg"
                    price="101.97"
                    rating={4}
                    
                />
            </div>


            <div className="_home__tilerow">

                <Tiles 
                    title={`"Tell Me Yor Secrets"`}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/TV/TMYS_S1_02478_DashboardCard_758x608_PRE_Final_noLocale_PVD6503._SY608_CB661982184_.jpg"
                    link="Coming to Prime Video on Feb 19"
                />

                <Tiles 
                    title="Tokyo Styles from the Drop"
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/FLOJO/imma_gram/JAN2021/GW/imma.gram_FLOJO_Topcard_2X._SY608_CB661817157_.jpg"
                    link="Exclusive Collection from @imma.gram"
                />

                <Tiles 
                    title="Refresh your every space"
                    image="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/NWJmMzM3MjQt/NWJmMzM3MjQt-MWVmNzM3Nzct-w758._SY608_CB411740531_.jpg"
                    link="Shop the new home essentials"
                />

                <Tiles 
                    title="Cold weather comforts"
                    image="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/NWJmMzM3MjQt/NWJmMzM3MjQt-NWVlZDA5Yzkt-w758._SY608_CB411784698_.jpg"
                    link="More ways to get cozy at home"
                />

                <Tiles 
                    title="Refresh your Kitchen"
                    image="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/MTUxNjRmMTYt/MTUxNjRmMTYt-NTY5MTA5ZjMt-w758._SY608_CB413104960_.jpg"
                    link="Shop appliances and tools"
                />

                <Tiles 
                    title="Top-rated space heaters"
                    image="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/MTUxNjRmMTYt/MTUxNjRmMTYt-ODg5YmQxMWMt-w758._SY608_CB413105482_.jpg"
                    link="See more"
                />

                <Tiles 
                    title="No green thumb required"
                    image="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/NWJmMzM3MjQt/NWJmMzM3MjQt-YTc3MWVlMzct-w758._SY608_CB411784902_.jpg"
                    link="Shop faux plants & planters"
                />

                <Tiles 
                    title="Shop Valentine's Day gifts"
                    image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Events/XCM_Manual_1298486_1522997_US_VDAY21_us_vd_2021_category_card_us_en_copy_3615783_758x608_2X_en_US._SY608_CB414105176_.jpg"
                    link="Explore the gift shop"
                />
            </div>

            <div className="_home__row">
                <Product 
                    id={117}
                    title="PlayStation 5 Digital Edition" 
                    rating={5}  
                    price={1069} 
                    image="https://images-na.ssl-images-amazon.com/images/I/61JbCra%2B7GL._SX522_.jpg"
                />

                <Product 
                    id={118}
                    title="DualSense Wireless Controller" 
                    rating={5}  
                    price={69.98} 
                    image="https://images-na.ssl-images-amazon.com/images/I/41McnBJl0FL._AC_SY400_.jpg"
                />

                <Product 
                    id={119}
                    title="DualSense Charging Station" 
                    rating={5}  
                    price={62.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/71ywUrrVHFL._SX522_.jpg"
                />

                <Product 
                    id={200}
                    title="Media Remote" 
                    rating={4}  
                    price={42.00} 
                    image="https://images-na.ssl-images-amazon.com/images/I/314f%2BrIu2gL._AC_SY400_.jpg"
                />
            </div>

            <div className="_home__row">
                <Product 
                    id={201}
                    title="Marvel's Spider-Man: Miles Morales Ultimate Launch Edition – PlayStation 5"
                    rating={5}
                    price={69.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/71bqboqDUiL._SX522_.jpg"
                />

                <Product 
                    id={202}
                    title="NBA 2K21 Mamba Forever Edition - PlayStation 5 Mamba Forever Edition"
                    rating={5}
                    price={90.94}
                    image="https://images-na.ssl-images-amazon.com/images/I/91ayxLkcHmL._SX522_.jpg"
                />

                <Product 
                    id={203}
                    title="Godfall: Ascended Edition - (PS5) Playstation 5"
                    rating={5}
                    price={86.96}
                    image="https://images-na.ssl-images-amazon.com/images/I/81NvNf0WBML._SX522_.jpg"
                />

                <Product 
                    id={204}
                    title="Madden NFL 21 Next Level Edition - PlayStation 5"
                    rating={5}
                    price={59.94}
                    image="https://images-na.ssl-images-amazon.com/images/I/81sw9R5wb1L._SX522_.jpg"
                />

            </div>
           
        </div>
    )
}

export default Home
