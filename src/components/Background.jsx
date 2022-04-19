import React, { Component} from 'react'
import { Canvas} from '@react-three/fiber'
import { Stars } from '@react-three/drei';
import { PerspectiveCamera } from '@react-three/drei'



export default class Background extends Component {
  constructor(props) {
    super(props)
    this.state = {
       x:0, y:0,
    }
  }

  _onMouseMove(e) {
    this.setState({ x: e.screenX, y: e.screenY });
  }


  render() {
    const { x, y } = this.state;
    return (
      <div className='canvas' onMouseMove={this._onMouseMove.bind(this)}>
        <Canvas>
            <PerspectiveCamera makeDefault position={[(x*0.03), (y*.05), 5]}/>
            <Stars/>
            <ambientLight />
        </Canvas>
      </div>
    )
  }
}
