import Layout from './components/Layout.js'
import Scene from './components/Scene.js'
import Box from './components/Box.js'
import Wall from './components/Wall.js'
import Floor from './components/Floor.js'
import Ceiling from './components/Ceiling.js'

new Vue({
    el: '#app',
    components: { Layout, Scene, Box, Wall, Floor, Ceiling },
    template: `
    <Layout>
      <Scene>
        <template v-slot:assets>
          <a-assets>
            <a-asset-item id="chandelier" src="./assets/models/Artichoke_Lamp.obj"></a-asset-item>
          </a-assets>
        </template>
        <Ceiling position="0 4 0"/>
        <a-entity material="color:white; emissive:yellow; emissiveIntensity:2" class="chandelier" position="0 -1 0" scale="0.02 0.02 0.02" obj-model="obj: #chandelier"></a-entity>
        <a-entity light="type:point; intensity:1, color:#ffffaa; castShadow:true" position="0.08 1.928 -0.362"></a-entity>
        <a-entity light="type:ambient;intensity:0.25; color:#ffffaa;"></a-entity>
        </Ceiling>
        <Wall position="0 0 -5"/>
      	<Wall position="-5 0 0" rotation="0 90 0"/>
      	<Wall position="5 0 0" rotation="0 -90 0"/>
        <Wall position="0 0 5" rotation="0 -180 0"/>
        <Box position="-2.5 0.5 -0.04" scale="1.29 0.3 1.29" shadow="cast:true"/>
        <Box position="-2.5 1 -0.04"  scale="1 0.3 1" shadow="cast:true"/>
        <Box position="-2.5 0.46 -0.04" rotation="90 0 0" scale="0.550 0.8 1" color="#8A2BE2" width="0.5" heigth="1" shadow="cast:true"/>
        <Floor />
        
      </Scene>
    </Layout>
    `,
})