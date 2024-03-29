import React, { MouseEvent } from 'react'
import { Button } from '../src/buttons'

const onClick = (event: MouseEvent) => {
  event.preventDefault()
  alert(event.currentTarget.tagName + ' clicked')
}

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
      </li><br />
      <li>
        <Button
          variant="BlueDarkButton"
          onClick={onClick}
          disabled={false}
          isloading={true}
        >
          Button
        </Button>
      </li><br />
      <li>
        <Button
          variant="BlueDarkButton"
          onClick={onClick}
          disabled={false}
          isloading={false}
        >
          Regular
         </Button>
      </li><br />
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
      </li><br />
      <li>
        <Button
          variant="BlueDarkTransparentOutlinedButton"
          onClick={onClick}
          disabled={false}
          isloading={true}
        >
          Button
        </Button>
      </li><br />
      <li>
        <Button
          variant="BlueDarkTransparentOutlinedButton"
          onClick={onClick}
          disabled={false}
          isloading={false}
        >
          Regular
         </Button>
      </li><br />
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
      </li><br />
      <li>
        <Button
          variant="BlueLightestOutlinedButton"
          onClick={onClick}
          disabled={false}
          isloading={true}
        >
          Button
        </Button>
      </li><br />
      <li>
        <Button
          variant="BlueLightestOutlinedButton"
          onClick={onClick}
          disabled={false}
          isloading={false}
        >
          Regular
         </Button>
      </li><br />
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
      </li><br />
      <li>
        <Button
          variant="GreenButton"
          onClick={onClick}
          disabled={false}
          isloading={true}
        >
          Button
        </Button>
      </li><br />
      <li>
        <Button
          variant="GreenButton"
          onClick={onClick}
          disabled={false}
          isloading={false}
        >
          Regular
         </Button>
      </li><br />
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
      </li><br />
      <li>
        <Button
          variant="RedButton"
          onClick={onClick}
          disabled={false}
          isloading={true}
        >
          Button
      </Button>
      </li><br />
      <li>
        <Button
          variant="RedButton"
          onClick={onClick}
          disabled={false}
          isloading={false}
        >
          Regular
       </Button>
      </li><br />
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