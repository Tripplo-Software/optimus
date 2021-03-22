import React, { MouseEvent } from 'react'
import { storiesOf } from "@storybook/react"
import { Button } from '../src/buttons'


const onClick = (event: MouseEvent) => {
  event.preventDefault();
  alert(event.currentTarget.tagName + " clicked");
}

storiesOf("Blue Action Button", module).add("Default", () => (
  <Button
    variant="BlueActionButton"
    onClick={onClick}
    disabled={false}
    isloading={false}
    size={'medium'}>
    +
  </Button>
)).add("Large", () => (
  <Button
    variant="BlueActionButton"
    onClick={onClick}
    disabled={false}
    size={'large'}
  >
    +
  </Button>
)).add("Long", () => (
  <Button
    variant="BlueActionButton"
    onClick={onClick}
    disabled={false}
    size={'long'}
  >
    +
  </Button>
)).add("Loading", () => (
  <Button
    variant="BlueActionButton"
    onClick={onClick}
    disabled={true}
    isloading={true}
    size={'medium'}
  >
    +
  </Button>
))

//BlueDarkButton stories
storiesOf("Blue Dark Button", module).add("Default", () => (
  <Button
    variant="BlueDarkButton"
    onClick={onClick}
    disabled={false}
    size={'medium'}
    >
    Button
  </Button>
)).add("Large", () => (
  <Button
    variant="BlueDarkButton"
    onClick={onClick}
    disabled={false}
    size='large'
  >
    Button
  </Button>
)).add("Long", () => (
  <Button
    variant="BlueDarkButton"
    onClick={onClick}
    disabled={false}
    size='long'
  >
    Button
  </Button>
)).add("Loading", () => (
  <Button
    variant="BlueDarkButton"
    onClick={onClick}
    disabled={true}
    isloading={true}
    size={'medium'}
  >
    Button
  </Button>
))
//BlueDarkTransparentOutlinedButton stories
storiesOf("BlueDarkTransparentOutlinedButton", module).add("Default", () => (
  <Button
    variant="BlueDarkTransparentOutlinedButton"
    onClick={onClick}
    disabled={false}
    size={'medium'}
    >
    Button
  </Button>
)).add("Large", () => (
  <Button
    variant="BlueDarkTransparentOutlinedButton"
    onClick={onClick}
    disabled={false}
    size='large'
  >
    Button
  </Button>
)).add("Long", () => (
  <Button
    variant="BlueDarkTransparentOutlinedButton"
    onClick={onClick}
    disabled={false}
    size='long'
  >
    Button
  </Button>
)).add("Loading", () => (
  <Button
    variant="BlueDarkTransparentOutlinedButton"
    onClick={onClick}
    disabled={true}
    isloading={true}
    size={'medium'}
  >
    Button
  </Button>
))

//BlueLightestOutlinedButton stories
storiesOf("Blue Lightest Outlined Button", module).add("Default", () => (
  <Button
    variant="BlueLightestOutlinedButton"
    onClick={onClick}
    disabled={false}
    size={'medium'}
    >
    Button
  </Button>
)).add("Large", () => (
  <Button
    variant="BlueLightestOutlinedButton"
    onClick={onClick}
    disabled={false}
    size='large'
  >
    Button
  </Button>
)).add("Long", () => (
  <Button
    variant="BlueLightestOutlinedButton"
    onClick={onClick}
    disabled={false}
    size='long'
  >
    Button
  </Button>
)).add("Loading", () => (
  <Button
    variant="BlueLightestOutlinedButton"
    onClick={onClick}
    disabled={true}
    isloading={true}
    size={'medium'}
  >
    Button
  </Button>
))

//GreenButton stories
storiesOf("Green Button", module).add("Default", () => (
  <Button
    variant="GreenButton"
    onClick={onClick}
    disabled={false}
    size={'medium'}
    >
    Button
  </Button>
)).add("Large", () => (
  <Button
    variant="GreenButton"
    onClick={onClick}
    disabled={false}
    size='large'
  >
    Button
  </Button>
)).add("Long", () => (
  <Button
    variant="GreenButton"
    onClick={onClick}
    disabled={false}
    size='long'
  >
    Button
  </Button>
)).add("Loading", () => (
  <Button
    variant="GreenButton"
    onClick={onClick}
    disabled={true}
    isloading={true}
    size={'medium'}
  >
    Button
  </Button>
))

//RedButton stories
storiesOf("Red Button", module).add("Default", () => (
  <Button
    variant="RedButton"
    onClick={onClick}
    disabled={false}
    size={'medium'}
    >
    Button
  </Button>
)).add("Large", () => (
  <Button
    variant="RedButton"
    onClick={onClick}
    disabled={false}
    size='large'
  >
    Button
  </Button>
)).add("Long", () => (
  <Button
    variant="RedButton"
    onClick={onClick}
    disabled={false}
    size='long'
  >
    Button
  </Button>
)).add("Loading", () => (
  <Button
    variant="RedButton"
    onClick={onClick}
    disabled={true}
    isloading={true}
    size={'medium'}
  >
    Button
  </Button>
))