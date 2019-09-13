import React, { useRef, useCallback, useState, useEffect } from 'react'
import Head from 'next/head'
import CanvasDraw from 'react-canvas-draw'
import { PageHeader, Row, Col } from 'antd'

import Settings from '../components/Settings'
import Art from '../components/Art'

const Home = () => {
  const [color, setColor] = useState('#94a3b0')
  const [width, setWidth] = useState(12)
  const [dimensions, setDimensions] = useState(null)
  const canvasRef = useRef(null)

  const getDimensions = useCallback(
    () => {
      const { canvas: { drawing } } = canvasRef.current
      const { clientHeight: height, clientWidth: width } = drawing

      return { width: width / 2, height: height / 2 }
    },
    [canvasRef]
  )

  useEffect(() => {
    const { width, height } = getDimensions()
    setDimensions({ width, height })
  }, [])

  const handleUndo = () => canvasRef.current.undo()
  const handleClear = () => canvasRef.current.clear()

  return (
    <div style={{ overflow: 'hidden' }}>
      <Head>
        <title>Artist - Become famous</title>
        <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.2/antd.min.css' />
        <script src='https://unpkg.com/ml5@0.3.1/dist/ml5.min.js' />
        <script src='/static/init.js' />
      </Head>

      <PageHeader
        title='Artist'
        subTitle='Become famous'
      />

      <Row gutter={16}>
        <Col span={18}>
          <CanvasDraw
            ref={canvasRef}
            brushColor={color}
            brushRadius={width}
            canvasWidth='100%'
            canvasHeight={500}
          />
        </Col>
        <Col span={6}>
          <Settings
            strokeColor={color}
            onSelectStrokeColor={setColor}
            strokeWidth={width}
            onSetStrokeWidth={setWidth}
            onUndo={handleUndo}
            onClear={handleClear}
            dimensions={dimensions}
          />
        </Col>
      </Row>

      <Art dimensions={dimensions} />
    </div>
  )
}

export default Home
