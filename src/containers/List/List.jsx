import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'antd'

import { fetchListMovie } from 'store/actions/Movie/List'

import { SearchList, ListMovie, Header } from 'components'

const List = ({ fetchListMovie }) => {
  useEffect(() => {
    fetchListMovie()
  })

  return (
    <>
      <Header />
      <div className="container">
        <div className="container-list">
          <div className="title-page">
            <h2>List Movies</h2>
          </div>
          <div className="body-page">
            <Row>
              <Col md={7}>
                <SearchList />
              </Col>
              <Col md={24}>
                <ListMovie />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}


export default connect(
  null,
  { fetchListMovie }
)(List)