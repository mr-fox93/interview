import { css } from '@emotion/react'
import { useId } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label?: string;
    icon?: React.ReactNode;
}

const inputContainer = css`
    position: relative;
    width: 100%;
`;

const labelStyle = css`
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: #374151;
    margin-bottom: 8px;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
`;

const inputWrapper = css`
    position: relative;
    display: flex;
    align-items: center;
`;

const inputStyle = css`
    width: 100%;
    height: 48px;
    padding: 12px 16px;
    padding-left: 44px;
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    background: white;
    transition: all 0.2s ease;
    outline: none;
    color: #374151;
    
    &::placeholder {
        color: #9ca3af;
    }
    
    &:focus {
        border-color: #8b5cf6;
        box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
    }
    
    &:hover:not(:focus) {
        border-color: #d1d5db;
    }
`;

const iconStyle = css`
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: #9ca3af;
    font-size: 18px;
    z-index: 1;
    pointer-events: none;
`;

const Input = ({id, label, icon, ...props}: InputProps) => {
    const autoId = useId()
    const inputId = id || autoId

    return(
        <div css={inputContainer}>
            {label && (
                <label htmlFor={inputId} css={labelStyle}>
                    {label}
                </label>
            )}
            <div css={inputWrapper}>
                {icon && <div css={iconStyle}>{icon}</div>}
                <input 
                    css={inputStyle}
                    id={inputId}
                    {...props}
                />
            </div>
        </div>
    )
}

export default Input;