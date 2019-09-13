import React, { useState } from 'react'
import {
  Divider,
  Slider,
  Radio,
  Button,
  Row,
  Col
} from 'antd'

const COLORS = [
  '#94a3b0',
  '#3a3949',
  '#232231',
  '#f49250',
  '#a94712',
  '#fbc9a0',
  '#c3d9f2',
  '#d2ecd1',
  '#ffc2c2',
  '#fdf4bf',
  '#ac0f16',
  '#f1792f',
  '#ede5d7',
  '#2eafc6',
  '#2a2726'
]

const STYLES = ['udnie', 'wave']

const Settings = ({
  strokeColor,
  onSelectStrokeColor,
  strokeWidth,
  onSetStrokeWidth,
  onUndo,
  onClear,
  dimensions,
  onSetIsConverting
}) => {
  const [style, setStyle] = useState(STYLES[0])
  const [isConverting, setIsConverting] = useState(false)

  return (
    <>
      <Row type='flex' justify='center' align='top'>
        <Col>
          <Button.Group size='large'>
            <Button icon='undo' onClick={onUndo}>Undo</Button>
            <Button icon='delete' onClick={onClear}>Clear</Button>
            <Button
              type='primary'
              icon='highlight'
              loading={isConverting}
              onClick={() => {
                setIsConverting(true)
                window.canvasy.convert(dimensions, style, () => setIsConverting(false))
              }}
            >
              Convert
            </Button>
          </Button.Group>
        </Col>
      </Row>

      <Divider>Settings</Divider>

      <h4>Stroke width</h4>
      <Slider
        defaultValue={strokeWidth}
        min={1}
        max={30}
        onAfterChange={onSetStrokeWidth}
      />
      <Divider />

      <h4>Stroke color</h4>
      <Radio.Group defaultValue={strokeColor} onChange={({ target }) => onSelectStrokeColor(target.value)}>
        {COLORS.map(color =>
          <Radio value={color} key={color}>
            <span style={{ color }}>■</span>
          </Radio>
        )}
      </Radio.Group>
      <Divider />

      <h4>Style</h4>
      <Radio.Group defaultValue={style} onChange={({ target }) => setStyle(target.value)}>
        {STYLES.map(style =>
          <Radio value={style} key={style}>
            {style}
          </Radio>
        )}
      </Radio.Group>
    </>
  )
}

export default Settings
