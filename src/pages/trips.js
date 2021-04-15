import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Trips from "../components/Trips"

const TripsPage = () => {
  return (
    <Layout>
      <SEO title="Trips" />
      <Trips heading="Our Favorite Destinations" />
    </Layout>
  )
}

export default TripsPage
