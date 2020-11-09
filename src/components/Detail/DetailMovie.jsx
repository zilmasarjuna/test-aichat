import React from 'react'
import { connect } from 'react-redux'

import { Descriptions, Modal, Spin } from 'antd'

const DetailMovie = ({ detailMovie, visible, changeVisible }) => {
  return (
    <Modal
      visible={visible}
      onCancel={() => changeVisible(false)}
      closable={false}
      footer={null}
    > 
      {
        detailMovie.isFetching && <div className="loading-cont"><Spin/></div>
      }
      {
        !detailMovie.isFetching && <>
          <div className="info-poster">
            <img src={detailMovie.data.Poster} alt={detailMovie.data.Title} />
          </div>
          
          <Descriptions>
            <Descriptions.Item label="Year" span={24}>{detailMovie.data.Year}</Descriptions.Item>
            <Descriptions.Item label="Released" span={24}>{detailMovie.data.Released}</Descriptions.Item>
            <Descriptions.Item label="Director" span={24}>{detailMovie.data.Director}</Descriptions.Item>
          </Descriptions>
          <p className="info-text">
            {detailMovie.data.Plot}
          </p>
        </>
      }
    </Modal> 
  )
}

export default connect(
  ({ movie_store: { detailMovie } }) => ({
    detailMovie
  }),
  null
)(DetailMovie)