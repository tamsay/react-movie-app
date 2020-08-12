import React from 'react';
import Rows from "../../components/rows/rows.component";
import requests from '../../requests'
import Banner from '../../components/banner/banner.component';

import './home-page.styles.scss'

const HomePage = () => {
 return (
  <div className='netflix-homePage'>
   <Banner fetchUrl={requests.fetchNetflixOriginals} />

   <Rows title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />

   <Rows title="Trending Now" fetchUrl={requests.fetchTrending} />
   <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} />
   <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
   <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
   <Rows title="Comedy Movies" fetchUrl={requests.fetchComdeyMovies} />
   <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
   <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
  </div>
);
}

export default HomePage;