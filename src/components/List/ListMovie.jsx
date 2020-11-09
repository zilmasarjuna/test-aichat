/* eslint-disable */

import React, { useState ,useEffect } from 'react'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'

import { fetchListMovie } from 'store/actions/Movie/List'
import { fetchDetailMovie } from 'store/actions/Movie/Detail'

import { setMovie, removeMovie } from 'store/actions/Movie/Favorit'

import { StarFilled } from '@ant-design/icons';

import { Table,  } from 'antd'

import DetailMovie from '../Detail/DetailMovie'

const ListMovie = ({ 
  listMovie,
  fetchDetailMovie,
  fetchListMovie,
  setMovie,
  removeMovie,
  listFavorit, 
}) => {
  const [ item, changeItem] = useState([])
  const [visible, changeVisible] = useState(false)


  const showDetail = (id) => {
    changeVisible(true)
    fetchDetailMovie(id)
  }

  const onChangePage = (page) => {
    fetchListMovie({
      page: page.current,
    })
  }

  useEffect(() => {
    async function getData() {
      if (listMovie.type === 'SEARCH_MOVIE_REQUEST') {
        changeItem([])
      } 

      if (listMovie.type === 'LIST_MOVIE_SUCCESS') {
        changeItem(item.concat(listMovie.data))
      }
    }
    getData()
  }, [listMovie])

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
      const listFav = listFavorit.data
      const isStar = listFav.filter(key => key.imdbID === data.imdbID);
      if (!isEmpty(isStar)) {
        return <button
          className="btn"
          onClick={() => removeMovie(data)}
        ><StarFilled style={{ 
          color: '#f7ff0c',
          fontSize: '20px' 
        }} /></button>
      } else {
        return <button
          className="btn"
          onClick={() => setMovie(data)}
        >
          <StarFilled style={{ 
            fontSize: '20px' 
          }}/>
        </button>
      }
      
    }
  }]

  return (
    <div 
      className="wrap-item"
    >
      <Table
        dataSource={listMovie.data}
        columns={column}
        loading={listMovie.isFetching}
        pagination={{
          total: listMovie.length,
          current: listMovie.page
        }}
        onChange={onChangePage}
      />
      <DetailMovie visible={visible} changeVisible={changeVisible} />
    </div>
  )
}

export default connect(
  ({ movie_store: { listMovie, listFavorit, detailMovie } }) => ({ 
    listMovie, listFavorit, detailMovie
  }),
  { fetchListMovie, setMovie, fetchDetailMovie, removeMovie }
)(ListMovie)