import React, { Component } from 'react'
import HomePageBanner from '../../components/homePageBanner';
import HomeWaysToLearn from '../../components/homeWaysToLearn';
import bannerImage from '../../assets/banner-home-page.png';
import './home-page.css';

export default class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <HomePageBanner
          title="Welcome to Deeper Data"
          description={["We are a distributed learning community focused on researching and innovating on artificial intelligence and big data using Python.",
           "Meet us in Silicon Valley and the East Bay or connect with us remotely on Slack!"]}
          buttons={["Join Our Slack Community"]}
          imgUrl={bannerImage}
        />
        <HomeWaysToLearn />
      </div>
    )
  }
}
