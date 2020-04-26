import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
  position: fixed;
  position: relative;
  top: 0;
  width: 100%;
  height: 64px;
  background: #e0aeae;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Wrapper = styled.section`
  display: flex;
  align-items: center;

`

const Menu = styled.div`
  margin: 0 20px 0 10px;
`

const Title = styled.h1`
  margin: 0;
  font-size: 20px;
  color: white;
`

const Buttons = styled.div`
  margin: 0 10px;
`

export const TopAppBar = ({ title, navigationIcon, actionItems }) => (
  <Container>
    <Wrapper>
      <Menu>{navigationIcon}</Menu>
      <Title>{title}</Title>
    </Wrapper>
    <Buttons>{actionItems}</Buttons>
  </Container>
)