import { MongoClient } from 'mongodb'
import mongoose from 'mongoose'

async function connection() {
  const uri =
    'mongodb+srv://akshat564564:12345aks@test-cluster.gtyh5.mongodb.net/?retryWrites=true&w=majority'

  const client = new MongoClient(uri)

  try {
    await client.connect()

    await listenDatabases(client)
  } catch (error) {
    console.error(error)
  } finally {
    client.close()
  }
}

async function listenDatabases(client) {
  //   databaseList = await client.db().databaseList()
  //   console.log('Databases' + databaseList) //   databaseList.databases.forEach((db) => console.log(db.name))
  var newListing = {
    name: 'Lovely Loft',
    summary: 'A charming loft in Paris',
    bedrooms: 1,
    bathrooms: 1,
  }
  // const result = await client
  //   .db('akshat')
  //   .collection('listingsAndReviews')
  //   .insertOne(newListing)
  // console.log(`New listing created with the following id: ${result.insertedId}`)

  const fetch = await client
    .db('akshat')
    .collection('listingsAndReviews')
    .findOne({ name: 'Lovely Loft' })
  console.log(fetch['_id'])
}

connection().catch(console.error)

export default connection
