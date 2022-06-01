import Dashboard from '../components/Dashboard'

import type { GetServerSideProps, NextPage } from 'next'
import { cronJob } from '../utils/Scheduler'

interface HomeProps {
  name: string
}

const Home: NextPage<HomeProps> = ({ name }) => {
  return (
    <>
      <ion-content>
        <Dashboard />
      </ion-content>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  return {
    props: {
      name: "test"
    }
  }
}

export default Home
