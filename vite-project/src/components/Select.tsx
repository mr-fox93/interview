import { useId, memo, useMemo } from "react";
import { css } from "@emotion/react";
import { FaChevronDown } from "react-icons/fa";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>{
    label?: string;
    options?: string[];
    icon?: React.ReactNode;
}

const selectContainer = css`
    position: relative;
    width: 100%;
`;

const labelStyle = css`
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 8px;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
`;

const selectWrapper = css`
    position: relative;
    display: flex;
    align-items: center;
`;

const selectStyle = css`
    width: 100%;
    height: 48px;
    padding: 12px 16px;
    padding-left: 44px;
    padding-right: 44px;
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    background: white;
    transition: all 0.2s ease;
    outline: none;
    color: #374151;
    appearance: none;
    cursor: pointer;
    
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

const chevronStyle = css`
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: #9ca3af;
    font-size: 14px;
    pointer-events: none;
`;

const Select = memo(({id, label, options = [], icon, ...props}: SelectProps) => {
    const autoId = useId()
    const selectId = id || autoId

    const optionElements = useMemo(() => 
        options.map((option) => (
            <option key={option} value={option}>
                {option}
            </option>
        )), [options]
    )

    return(
        <div css={selectContainer}>
            {label && (
                <label htmlFor={selectId} css={labelStyle}>
                    {label}
                </label>
            )}
            <div css={selectWrapper}>
                {icon && <div css={iconStyle}>{icon}</div>}
                <select css={selectStyle} id={selectId} {...props}>
                    {optionElements}
                </select>
                <FaChevronDown css={chevronStyle} />
            </div>
        </div>
    )
})

Select.displayName = 'Select'

export default Select;