import React from 'react'
import { Head } from 'react-static'

// components
import ScrollButton from '../components/scrollToTop/'
import CodeProject from '../components/codeProject/'
import ImgLoad from '../components/projects/code/imgLoad/'
import ImgGrid from '../components/projects/code/imgGrid/'

// utils
import { chooseFrom } from '../utils'

// cloudinary images
const images = [
  'jr-xix/projects/conquer',
  'jr-xix/projects/santa-monica',
  'jr-xix/projects/birds',
  'adia',
  'mask',
  'paint',
  'drop',
 ]

 class Code extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      image1: chooseFrom(images),
      image2: chooseFrom(images),
      reload: 0,
    }
  }

  getImg = (img) => {
    this.setState({
      [img]: chooseFrom(images)
    })
  }

  render = () => {
    return [
      <Head key="head">
        <title>joshuar — HTML + CSS + JS)</title>
      </Head>,
      <section key="content-code-projects" className="code projects">
        <CodeProject
          title="React Grid Thing"
          description="Pretty squares... This experiment grabs a color pallet from an image to overlay a shifting sea of squares. Reload to see a different photo."
          codeUrl="https://raw.githubusercontent.com/joshuarrr/jr-xx/master/src/components/projects/code/imgGrid/imgGrid.js"
          ratio='16x9'
        >
          <ImgGrid
            url={this.state.image1}
            ratio='16x10'
            duration='.5s'
            className="rounded bordered"
            cloudinary
          />
          <button className="code-refresh" onClick={() => this.getImg('image1')}>Refresh</button>
        </CodeProject>

        <CodeProject
          title="ImgLoad"
          description="React image loader. Gracefully adds an image to the dom, using aspect ratios to presize and transitions to fade in."
          codeUrl="https://raw.githubusercontent.com/joshuarrr/jr-xx/master/src/components/projects/code/imgLoad/imgLoad.js"
          ratio='16x9'
        >
          <ImgLoad
            url={this.state.image2}
            ratio='16x9'
            duration='3s'
            className="rounded bordered"
            cloudinary
          />
          <button className="code-refresh" onClick={() => this.getImg('image2')}>Refresh</button>
        </CodeProject>
      </section>,
      <ScrollButton
        key="scroll-button"
        scrollStepInPx="50"
        delayInMs="16.66"
      />
    ]
  }
}


export default (Code)
