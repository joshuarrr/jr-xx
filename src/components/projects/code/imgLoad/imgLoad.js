/* ImgLoad *//*
  - get an image from props array
  - set loading text / spinner
  - wait until image loaded successfully
  - set opacity of image when loaded
  - optionally set image aspect ratio

  props:
    image: a url
    ratio: if provided as #x#, will size the image for stenciling
    fade: defaults to true - fade image opacity of load
    duration: effect duration - defaults to .5s
    className: add a class
    loadingMessage: display a message while loading
    indicator: display a component while loading
    controls:  show controls to adjust props
    cloudinary: use cloudinary component instead of img
  */

import React from 'react'
import { Image } from 'cloudinary-react'

// styles
import './imgLoad.css'

// components
import LoadingIndicator from '../../../loadingIndicator/'
//


class ImgLoad extends React.Component {
  static defaultProps = {
    url: null,
    ratio: null,
    fade: true,
    duration: '.5s',
    className: '',
    indicator: true,
    loadingMessage: null,
    controls: false,
    cloudinary: true,
  }

  constructor(props) {
    super(props)

    this.state = {
      loaded: false,
      reload: 0
    }
  }

  componentDidMount = () => {
    /* If not using cloudinary, call loadImage */
    /* loadImage promise success */
    if (!this.props.cloudinary) {
      // console.log('...not cloudinary...')
      this.loadImage().then(() => {
        this.setState({
          loaded: true
        })
      /* loadImage promise failure */
      }, (error) => {
        console.log('Loading failed.', error)
        this.setState({loaded: false});
      });
    }
  }

  update = () => {
    this.setState({
      reload: this.state.reload++
    })
    console.log('click')
  }

  render = () => {
    const imgStyles = this.props.fade
      ? {
        opacity: this.state.loaded ? '1' : '0',
        transition: `opacity ${this.props.duration} ease-in-out`
      }
      : null

    const showLoadingIndicator = !this.state.loaded && this.props.indicator
      ? <LoadingIndicator />
      : null

    const showLoadingMessage = this.props.loadingMessage
       ? !this.state.loaded
         ? <p className="loading-message">{this.props.loadingMessage}</p>
         : null
       : null

      const showControls = this.props.showControls &&
        <div className="image-loader-controls">
          <button onClick={this.reloadImage}>
            rerender
          </button>
        </div>

      const imageLoad = () => {
        if (this.state.loaded) return;
        this.setState({
          loaded: true
        })
      }

    /* if cloudinary prop is true, use the cloudinary component... */
    const showImage = this.props.cloudinary
      ? <Image
          className={`cloudinary image ${this.props.className}`}
          cloudName="joshuar"
          publicId={this.props.url}
          width="auto"
          dpr="auto"
          crop="scale"
          progressive="false"
          f_auto="true"
          secure
          responsive
          onLoad={event => {
            // let parent know the image loaded and send back the url
            if (this.props.imgLoaded) {
              this.props.imgLoaded(event.currentTarget.src)
            }
            imageLoad()
          }}
          style={imgStyles}
        />
      : <img
          alt=""
          src={this.props.url}
          className="image"
          style={imgStyles}
        />

    return (
      <>
        <button className="force" onClick={this.update}>force</button>
        <div
          className={`image-loader ${this.props.className}`}
          key="image-loader"
          style={{
            paddingBottom: this.getAspectRatio()
          }}
        >
          {showLoadingIndicator}
          {showLoadingMessage}
          {showImage}
          {showControls}
        </div>
      </>
    )
  }

  loadImage = () => new Promise( (resolve, reject) => {
    const img = new Image()
    /* resolve promise on load */
    img.onload = () => {
      resolve(img) // return the image element
    }
    /* reject promise on not load */
    img.onerror = () => {
      reject()
    }
    /* image to load */
    img.src = this.props.url
  })

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
}

export default React.forwardRef((props, ref) => <ImgLoad {...props} imgRef={ref}/>)
