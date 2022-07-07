import Dashboard from '../components/Dashboard'

import type { NextPage } from 'next'

interface HomeProps {
  name: string
}

const Home: NextPage<HomeProps> = () => {
  return (
    <>
      <ion-content>
        <Dashboard />
      </ion-content>
    </>
  )
}

export default Home
