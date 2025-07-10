import React, { memo } from 'react'
import { useTheme } from '../context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa'
import { css } from '@emotion/react'

const themeButton = css`
  position: fixed;
  top: 20px;
  right: 20px;
  background: var(--bg-card);
  color: var(--text-primary);
  border: 2px solid var(--border-color);
  border-radius: 50px;
  padding: 12px 16px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px var(--shadow);
  backdrop-filter: blur(10px);
  z-index: 1000;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px var(--shadow-hover);
    background: var(--accent);
    color: white;
  }
  
  &:active {
    transform: translateY(0);
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: rotate(15deg);
  }
`

export const ThemeToggle: React.FC = memo(() => {
  const { mode, toggle } = useTheme()
  
  return (
    <button css={themeButton} onClick={toggle}>
      {mode ? <FaSun /> : <FaMoon />}
      {mode ? 'Jasny' : 'Ciemny'}
    </button>
  )
})

ThemeToggle.displayName = 'ThemeToggle'

export default ThemeToggle 