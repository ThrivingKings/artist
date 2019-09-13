import React from 'react'
import { Row, Col } from 'antd'

const Art = ({ dimensions }) => {
  if (dimensions) {
    return (
      <div className='art'>
        <Row type='flex' justify='center' align='top'>
          <Col>
            <div className='frame'>
              <img id='image' />
              <img id='i2' />
            </div>
          </Col>
        </Row>
        <style jsx>{`
          #image {
            border:solid 2px;
            border-bottom-color:#ffe;
            border-left-color:#eed;
            border-right-color:#eed;
            border-top-color:#ccb;
            max-height:100%;
            max-width:100%;
            height: ${dimensions.height}px;
            width: ${dimensions.width}px;
          }
          #i2 { display: none; }

          .frame {
            background-color:#ddc;
            border:solid 5vmin #eee;
            border-bottom-color:#fff;
            border-left-color:#eee;
            border-radius:2px;
            border-right-color:#eee;
            border-top-color:#ddd;
            box-shadow:0 0 5px 0 rgba(0,0,0,.25) inset, 0 5px 10px 5px rgba(0,0,0,.25);
            box-sizing:border-box;
            display:inline-block;
            padding:40px;
            position:relative;
            text-align:center;
          }
          .frame:before {
            border-radius:2px;
            bottom:-2vmin;
            box-shadow:0 2px 5px 0 rgba(0,0,0,.25) inset;
            content:"";
            left:-2vmin;
            position:absolute;
            right:-2vmin;
            top:-2vmin;
          }
          .frame:after {
            border-radius:2px;
            bottom:-2.5vmin;
            box-shadow: 0 2px 5px 0 rgba(0,0,0,.25);
            content:"";
            left:-2.5vmin;
            position:absolute;
            right:-2.5vmin;
            top:-2.5vmin;
          }
          .art { padding: 20px; }
        `}
        </style>
      </div>
    )
  }

  return null
}

export default Art
