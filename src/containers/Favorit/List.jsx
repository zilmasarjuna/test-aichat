import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Col, Row, Table } from 'antd'

import { removeMovie } from 'store/actions/Movie/Favorit'

import { StarFilled } from '@ant-design/icons';
import { fetchDetailMovie } from 'store/actions/Movie/Detail'

import DetailMovie from 'components/Detail/DetailMovie'
import Header from 'components/Header/Header';

const List = ({ 
  listFavorit,
  fetchDetailMovie,
  removeMovie
}) => {
  const [visible, changeVisible] = useState(false)
  const showDetail = (id) => {
    changeVisible(true)
    fetchDetailMovie(id)
  }
  const column = [{
    title: 'Title',
    dataIndex: 'Title',
    render: (text, data) => {
      return (
        <div
          className="key-title"
          onClick={() => showDetail(data.imdbID)}
        >
          {text}
        </div>
      )
    }
  }, {
    title: 'Year',
    dataIndex: 'Year'
  }, {
    title: 'ImdbID',
    dataIndex: 'imdbID',
  }, {
    title: '',
    render: (data) => {
     return <button
        className="btn"
        onClick={() => removeMovie(data)}
      ><StarFilled style={{ 
        color: '#f7ff0c',
        fontSize: '20px' 
      }} /></button>
    }
  }]
  return (
    <>
      <Header />
      <div className="container">
        <div className="container-list">
          <div className="title-page">
            <h2>List Favorit</h2>
          </div>
          <div className="body-page">
            <Row>
              <Col md={24}>
                <Table 
                  dataSource={listFavorit.data}
                  columns={column}
                  pagination={false}
                />
              </Col>
            </Row>
          </div>
        </div>
        <DetailMovie visible={visible} changeVisible={changeVisible} />
      </div>
    </>
  )
}


export default connect(
  ({ movie_store: { listFavorit } }) => ({ 
    listFavorit
  }),
  { fetchDetailMovie, removeMovie }
)(List)