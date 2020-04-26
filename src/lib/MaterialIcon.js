import React from 'react'
import styled from 'styled-components/macro'

const StyledIcon = styled.button`
  color: white;
  border: none;
  background: transparent;
  width: 48px;
  height: 48px;
  padding: 12px;
  border-radius: 50%;

  &:hover {
    background: #e6bcbc;
    cursor: pointer;
  }

  :focus {
    transition: opacity 15ms linear,background-color 15ms linear;
    background: #f3d4d4;
  }
`


export const MaterialIcon = ({ icon }) => (
  <StyledIcon className="mdc-icon-button material-icons">{icon}</StyledIcon>
)