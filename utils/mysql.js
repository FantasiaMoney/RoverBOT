const mysql = require('mysql')
const regex = require('./regex')
const util = require('util')

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOSTNAME,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
})

connection.connect(error => {
  if (error) {
    console.log('MySQL Database Handshake', error)
  }
})

module.exports = {
  // Create
  Create: async (id, columns) => {
    let query_string =
      'INSERT INTO ' + process.env.MYSQL_TABLENAME + ' (telegramId, '

    let column_array = [],
      value_array = []
    for (let i in columns) {
      column_array.push(i)
      if (isNaN(columns[i])) {
        value_array.push(`'${columns[i]}' `)
      } else {
        if (regex.walletAddress.test(columns[i])) {
          value_array.push(`'${columns[i]}' `)
        } else {
          value_array.push(columns[i] + ' ')
        }
      }
    }
    query_string +=
      column_array.toString() +
      ') VALUES (' +
      id +
      ',' +
      value_array.toString() +
      ')'

    let results
    try{
      results = await connection.query(query_string)
    }catch(error){
      console.log(error)
    }
    return results
  },

  // Read
  Read: async (id = 'all') => {
    const query = util.promisify(connection.query).bind(connection);
    let query_string =
      id === 'all'
        ? 'SELECT * FROM ' + process.env.MYSQL_TABLENAME
        : 'SELECT * FROM ' +
          process.env.MYSQL_TABLENAME +
          ' WHERE telegramId = ' +
          id

    let results
    try{
      data = await query(query_string)
      parseData = JSON.parse(JSON.stringify(data))
      results = id === 'all' ? parseData : parseData[0]
    }catch(error){
      console.log(error)
    }
    return results
  },

  // Update
  Update: async (id, columns) => {
    let query_string = 'UPDATE ' + process.env.MYSQL_TABLENAME + ' SET '

    let column_array = []
    for (let i in columns) {
      if (isNaN(columns[i])) {
        column_array.push(`${i} = '${columns[i]}' `)
      } else {
        if (regex.walletAddress.test(columns[i])) {
          column_array.push(`${i} = '${columns[i]}' `)
        } else {
          column_array.push(i + ' = ' + columns[i] + ' ')
        }
      }
    }
    query_string += column_array.toString() + ' WHERE telegramId = ' + id

    let results
    try{
      results = await connection.query(query_string)
    }catch(error){
      console.log(error)
    }
    return results
  },

  // Delete
  Delete: async (id, column = 'all') => {
    let query_string = ''

    if (column === 'all') {
      query_string =
        'DELETE FROM ' +
        process.env.MYSQL_TABLENAME +
        ' WHERE telegramId = ' +
        id
    } else {
      query_string =
        'UPDATE ' +
        process.env.MYSQL_TABLENAME +
        ' SET ' +
        column +
        ' = NULL WHERE telegramId = ' +
        id
    }

    let results
    try{
      results = await connection.query(query_string)
    }catch(error){
      console.log(error)
    }
    return results
  },

  // sum referals
  SumRefs: async(referralID) => {
    const query = util.promisify(connection.query).bind(connection)
    const query_string =
      'SELECT SUM(Balance) FROM ' +
      process.env.MYSQL_TABLENAME +
      ' WHERE referralID = ' +
      referralID

    let results = 0
    try{
      data = await query(query_string)
      parseData = JSON.parse(JSON.stringify(data))
      results = parseData[0]['SUM(Balance)']
      ? parseData[0]['SUM(Balance)']
      : 0
    }catch(error){
      console.log(error)
    }
    return results
  },

  // count referals
  CountRefs: async(referralID) => {
    const query = util.promisify(connection.query).bind(connection)
    const query_string =
      'SELECT COUNT(telegramId) FROM ' +
      process.env.MYSQL_TABLENAME +
      ' WHERE referralID = ' +
      referralID

    let results = 0
    try{
      data = await query(query_string)
      parseData = JSON.parse(JSON.stringify(data))
      results = parseData[0]['SUM(Balance)']
      ? parseData[0]['SUM(Balance)']
      : 0
    }catch(error){
      console.log(error)
    }
    return results
  }
}
