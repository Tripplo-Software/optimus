import React, { MouseEvent } from 'react'
// import { storiesOf } from '@storybook/react'
import { Button } from '../src/buttons'
// import { Meta, Story } from '@storybook/react'

const onClick = (event: MouseEvent) => {
  event.preventDefault()
  alert(event.currentTarget.tagName + ' clicked')
}
// const meta: Meta = {
//   title: 'Buttons/Buttons',
// }
// export default meta

export default {
  title: 'Buttons/Buttons',
  component: Button,
};

export const BlueActionButton = () => (
  <div>
    <ul>
      <li>
        <Button
          variant="BlueActionButton"
          onClick={onClick}
          disabled={false}
          isloading={false}
          size="square">
          +
         </Button>
      </li>
      <li>
        <Button
          variant="BlueActionButton"
          onClick={onClick}
          disabled={false}
          isloading={true}
          size="square">
          +
      </Button>
      </li>
    </ul>
  </div>
)

export const BlueDarkButton = () => (
  <div>
    <ul>
      <li>
        <Button
          variant="BlueDarkButton"
          onClick={onClick}
          disabled={false}
          isloading={false}
          size='small'
        >
          Small
         </Button>
      </li>
      <li>
        <Button
          variant="BlueDarkButton"
          onClick={onClick}
          disabled={false}
          isloading={true}
        >
          Button
        </Button>
      </li>
      <li>
        <Button
          variant="BlueDarkButton"
          onClick={onClick}
          disabled={false}
          isloading={false}
        >
          Regular
         </Button>
      </li>
      <li>
        <Button
          variant="BlueDarkButton"
          onClick={onClick}
          disabled={false}
          isloading={false}
          size='long'
        >
          Long
         </Button>
      </li>
    </ul>
  </div>
)

export const BlueDarkTransparentOutlinedButton = () => (
  <div>
    <ul>
      <li>
        <Button
          variant="BlueDarkTransparentOutlinedButton"
          onClick={onClick}
          disabled={false}
          isloading={false}
          size='small'
        >
          Small
         </Button>
      </li>
      <li>
        <Button
          variant="BlueDarkTransparentOutlinedButton"
          onClick={onClick}
          disabled={false}
          isloading={true}
        >
          Button
        </Button>
      </li>
      <li>
        <Button
          variant="BlueDarkTransparentOutlinedButton"
          onClick={onClick}
          disabled={false}
          isloading={false}
        >
          Regular
         </Button>
      </li>
      <li>
        <Button
          variant="BlueDarkTransparentOutlinedButton"
          onClick={onClick}
          disabled={false}
          isloading={false}
          size='long'
        >
          Long
         </Button>
      </li>
    </ul>
  </div>
)

export const BlueLightestOutlinedButton = () => (
  <div>
    <ul>
      <li>
        <Button
          variant="BlueLightestOutlinedButton"
          onClick={onClick}
          disabled={false}
          isloading={false}
          size='small'
        >
          Small
         </Button>
      </li>
      <li>
        <Button
          variant="BlueLightestOutlinedButton"
          onClick={onClick}
          disabled={false}
          isloading={true}
        >
          Button
        </Button>
      </li>
      <li>
        <Button
          variant="BlueLightestOutlinedButton"
          onClick={onClick}
          disabled={false}
          isloading={false}
        >
          Regular
         </Button>
      </li>
      <li>
        <Button
          variant="BlueLightestOutlinedButton"
          onClick={onClick}
          disabled={false}
          isloading={false}
          size='long'
        >
          Long
         </Button>
      </li>
    </ul>
  </div>
)

export const GreenButton = () =>
  <div>
    <ul>
      <li>
        <Button
          variant="GreenButton"
          onClick={onClick}
          disabled={false}
          isloading={false}
          size='small'
        >
          Small
         </Button>
      </li>
      <li>
        <Button
          variant="GreenButton"
          onClick={onClick}
          disabled={false}
          isloading={true}
        >
          Button
        </Button>
      </li>
      <li>
        <Button
          variant="GreenButton"
          onClick={onClick}
          disabled={false}
          isloading={false}
        >
          Regular
         </Button>
      </li>
      <li>
        <Button
          variant="GreenButton"
          onClick={onClick}
          disabled={false}
          isloading={false}
          size='long'
        >
          Long
         </Button>
      </li>
    </ul>
  </div>

export const RedButton = () =>
<div>
  <ul>
    <li>
      <Button
        variant="RedButton"
        onClick={onClick}
        disabled={false}
        isloading={false}
        size='small'
      >
        Small
       </Button>
    </li>
    <li>
      <Button
        variant="RedButton"
        onClick={onClick}
        disabled={false}
        isloading={true}
      >
        Button
      </Button>
    </li>
    <li>
      <Button
        variant="RedButton"
        onClick={onClick}
        disabled={false}
        isloading={false}
      >
        Regular
       </Button>
    </li>
    <li>
      <Button
        variant="RedButton"
        onClick={onClick}
        disabled={false}
        isloading={false}
        size='long'
      >
        Long
       </Button>
    </li>
  </ul>
</div>


// export const BlueActionButton = () =>
//   <ul>
//     <li>
//       <Button
//         variant="BlueActionButton"
//         onClick={onClick}
//         disabled={false}
//         isloading={false}
//         size="square"
//       >
//         +
//       </Button>
//     </li>
//     <li>
//       <Button
//         variant="BlueActionButton"
//         onClick={onClick}
//         disabled={false}
//         isloading={true}
//         size="square"
//       >
//         +
//       </Button>
//     </li>
//   </ul>

// storiesOf('Buttons', module)
//   .add('Buton1', () => (
//     <Button
//       variant="BlueActionButton"
//       onClick={onClick}
//       disabled={false}
//       isloading={false}
//       size="square"
//     >
//       +
//     </Button>
//   ))
// storiesOf('Blue Action Button', Meta)
//   .add('Regular', () => (
//     <Button
//       variant="BlueActionButton"
//       onClick={onClick}
//       disabled={false}
//       isloading={false}
//       size="square"
//     >
//       +
//     </Button>
//   ))
//   .add('Loading', () => (
//     <Button
//       variant="BlueActionButton"
//       onClick={onClick}
//       disabled={true}
//       isloading={true}
//       size="square"
//     >
//       loading
//     </Button>
//   ))

// //BlueDarkButton stories
// storiesOf("Blue Dark Button", module).add("Regular", () => (
//   <Button
//     variant="BlueDarkButton"
//     onClick={onClick}
//     disabled={false}
//   >
//     Button
//   </Button>
// )).add("Long", () => (
//   <Button
//     variant="BlueDarkButton"
//     onClick={onClick}
//     disabled={false}
//     size='long'
//   >
//     Button
//   </Button>
// )).add("Small", () => (
//   <Button
//     variant="BlueDarkButton"
//     onClick={onClick}
//     disabled={false}
//     size='small'
//   >
//     Button
//   </Button>
// )).add("Loading", () => (
//   <Button
//     variant="BlueDarkButton"
//     onClick={onClick}
//     disabled={true}
//     isloading={true}
//   >
//     Button
//   </Button>
// ))
// //BlueDarkTransparentOutlinedButton stories
// storiesOf("Blue Dark Transparent Outlined Button", module).add("Regular", () => (
//   <Button
//     variant="BlueDarkTransparentOutlinedButton"
//     onClick={onClick}
//     disabled={false}
//   >
//     Button
//   </Button>
// )).add("Long", () => (
//   <Button
//     variant="BlueDarkTransparentOutlinedButton"
//     onClick={onClick}
//     disabled={false}
//     size="long"
//   >
//     Button
//   </Button>
// )).add("Small", () => (
//   <Button
//     variant="BlueDarkTransparentOutlinedButton"
//     onClick={onClick}
//     disabled={false}
//     size='small'
//   >
//     Button
//   </Button>
// )).add("Loading", () => (
//   <Button
//     variant="BlueDarkTransparentOutlinedButton"
//     onClick={onClick}
//     disabled={true}
//     isloading={true}
//   >
//     Button
//   </Button>
// ))

// //BlueLightestOutlinedButton stories
// storiesOf("Blue Lightest Outlined Button", module).add("Regular", () => (
//   <Button
//     variant="BlueLightestOutlinedButton"
//     onClick={onClick}
//     disabled={false}
//   >
//     Button
//   </Button>
// )).add("Long", () => (
//   <Button
//     variant="BlueLightestOutlinedButton"
//     onClick={onClick}
//     disabled={false}
//     size='long'
//   >
//     Button
//   </Button>
// )).add("Small", () => (
//   <Button
//     variant="BlueLightestOutlinedButton"
//     onClick={onClick}
//     disabled={false}
//     size='small'
//   >
//     Button
//   </Button>
// )).add("Loading", () => (
//   <Button
//     variant="BlueLightestOutlinedButton"
//     onClick={onClick}
//     disabled={true}
//     isloading={true}
//   >
//     Button
//   </Button>
// ))

// //GreenButton stories
// storiesOf("Green Button", module).add("Regular", () => (
//   <Button
//     variant="GreenButton"
//     onClick={onClick}
//     disabled={false}
//   >
//     Button
//   </Button>
// )).add("Long", () => (
//   <Button
//     variant="GreenButton"
//     onClick={onClick}
//     disabled={false}
//     size='long'
//   >
//     Button
//   </Button>
// )).add("Small", () => (
//   <Button
//     variant="GreenButton"
//     onClick={onClick}
//     disabled={false}
//     size='small'
//   >
//     Button
//   </Button>
// )).add("Loading", () => (
//   <Button
//     variant="GreenButton"
//     onClick={onClick}
//     disabled={true}
//     isloading={true}
//   >
//     Button
//   </Button>
// ))

// //RedButton stories
// storiesOf("Red Button", module).add("Regular", () => (
//   <Button
//     variant="RedButton"
//     onClick={onClick}
//     disabled={false}
//   >
//     Button
//   </Button>
// )).add("Long", () => (
//   <Button
//     variant="RedButton"
//     onClick={onClick}
//     disabled={false}
//     size='long'
//   >
//     Button
//   </Button>
// )).add("Small", () => (
//   <Button
//     variant="RedButton"
//     onClick={onClick}
//     disabled={false}
//     size='small'
//   >
//     Button
//   </Button>
// )).add("Loading", () => (
//   <Button
//     variant="RedButton"
//     onClick={onClick}
//     disabled={true}
//     isloading={true}

//   >
//     Button
//   </Button>
// ))
