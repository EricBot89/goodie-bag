import React from 'react'
import {CandyList} from './CandyList'
import { getServerCandies } from '../store'
import {connect} from 'react-redux'

class DCRoot extends React.Component {

  componentDidMount () {
   this.props.sync();
  }

  render() {
  return (
    <div>
      <nav>
        Goodie Bag
      </nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
        <CandyList />
      </main>
    </div>
  )
  }
}

const syncStoreToServer = disptach => ({
  sync: () => disptach(getServerCandies())
});

const Root = connect(null,syncStoreToServer)(DCRoot);

export { Root }
