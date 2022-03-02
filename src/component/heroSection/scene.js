import { OrthographicCamera } from '@react-three/drei'
import { CustomSphere } from './CustomSphere'
import WordCloud from './wordCloud'

const Scene = () => {
  return (
    <>
    <OrthographicCamera makeDefault position={[3, 0, 10]} zoom={65} >
        <ambientLight/>
        <pointLight color="white" position={[0, 5, 0]} />
        <directionalLight color="white" position={[15, 5, 0]} />
    </OrthographicCamera>
    {/*[x,y,z]*/}
    <CustomSphere position={[1,1,0]} color={"red"} />  
    <CustomSphere position={[0,1,0]} color={"hotpink"}/>

    <WordCloud position={[3,-8,0]}/>
    </>

    
  )
}

export default Scene