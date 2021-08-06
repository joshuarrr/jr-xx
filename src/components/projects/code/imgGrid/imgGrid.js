/* ImgGrid *//*
  - load an image using ImgLoad component
  - generate a grid of cells based on the image size
  - color cells based on the image color
  - assign divs random opacities
  - change some random cell opacities on an interval to animate the cells
  */

import React from 'react'
import Palette from 'react-palette'

// components
import ImgLoad from '../imgLoad'
import GridCells from '../gridCells'

// styles
import './imgGrid.css'
//


class ImgGrid extends React.Component {
  static defaultProps = {
    url: null
  }

  constructor(props) {
    super(props)
    this.imageGrid = React.createRef();

    this.state = {
      loaded: false,
      imgUrl: this.props.url
    }
  }

  render = () =>
    <div
      ref={this.imageGrid}
      className="img-grid-wrapper"
    >
      { this.state.loaded &&
        <Palette image={this.state.imgUrl}>
          {palette => (
            <GridCells color={palette.vibrant} node={this.imageGrid} ratio />
          )}
        </Palette>
      }
      {this.renderImg()}
    </div>

  getAspectRatio = () => {
    const computeRatio = (ratio) => {
      const w = parseInt(ratio.toString().split("x")[0]) // before x
      const h = parseInt(ratio.toString().split("x")[1]) // after x
      const aspectRatio = w && h
        ? `${((h / w) * 100).toFixed(2)}%`
        : console.log("Incorrect ratio prop")
      return aspectRatio
    }

    const ratio = this.props.ratio && this.props.ratio.length
      ? computeRatio(this.props.ratio)
      : null

    return ratio
  }

  renderImg = () =>
    <ImgLoad {...this.props}
      imgLoaded ={src => {
        this.setState({
          loaded: true,
          imgUrl: src
        })
      }}
    />
}


export default (ImgGrid)
