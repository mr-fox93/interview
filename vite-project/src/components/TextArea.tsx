import { css } from '@emotion/react'
import type { TextareaHTMLAttributes } from 'react'
import { useId } from 'react'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    label?: string;
}

const TextArea = ({id, label, ...rest}: TextAreaProps) => {
    const autoId = useId()
    const textareaId = id || autoId

    return(
        <>
            {label && <label htmlFor={textareaId} css={css`
                display: block;
                font-size: 14px;
                font-weight: 600;
                color: purple;
                margin-bottom: 6px;
                cursor: pointer;
            `}>{label}</label>}
            <textarea 
                css={css`
                    border: 1px solid #ccc;
                    background-color: white;
                    border-radius: 3px;
                    width: 200px;
                    min-height: 80px;
                    padding: 8px;
                    font-size: 14px;
                    font-family: inherit;
                    resize: vertical;
                    &:focus {
                        outline: none;
                        border-color: purple;
                        box-shadow: 0 0 5px rgba(128, 0, 128, 0.3);
                    }
                `} 
                id={textareaId} 
                {...rest}
            />
        </>
    )
}

export default TextArea