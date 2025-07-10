import {
    Formik,
    Form,
    Field,
} from 'formik';
import type { FormikHelpers } from 'formik';
import { css } from '@emotion/react';
import { 
    FaCoffee, 
    FaFire, 
    FaWeight, 
    FaStopwatch, 
    FaPlay,
    FaSave ,
    FaCalendar,
    FaThermometerHalf
} from 'react-icons/fa';
import Input from '../components/Input';
import Select from '../components/Select';
import { useCoffeContext } from '../context/CoffeContext';
import { useEffect, useMemo, useCallback, memo,  } from 'react';

export interface MyFormValues {
    id: string;
    coffeName: string;
    roastLevel: 'light' | 'medium' | 'dark'
    in: string;
    out: string;
    preInf?: string; 
    totaltime: string;
    firstDropStart?: string;
    dateOfRoast: string;
    temperatura?: string;
}

const formContainer = css`
    background: var(--bg-card);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 20px 40px var(--shadow);
    min-width: 500px;
    max-width: 600px;
    width: 100%;
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 25px 50px var(--shadow-hover);
    }
    
    @media (max-width: 768px) {
        min-width: auto;
        max-width: 100%;
        width: calc(100% - 20px);
        padding: 20px;
        border-radius: 16px;
        margin: 10px;
    }
    
    @media (max-width: 480px) {
        padding: 16px;
        border-radius: 12px;
        margin: 5px;
        width: calc(100% - 10px);
    }
`;

const formTitle = css`
    font-size: 32px;
    font-weight: 700;
    color: var(--text-primary);
    text-align: center;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    
    svg {
        color: var(--accent);
    }
`;

const formSubtitle = css`
    font-size: 16px;
    color: var(--text-secondary);
    text-align: center;
    margin-bottom: 30px;
    font-weight: 400;
`;

const formCoffeeName = css`
  @media (max-width: 768px) {
     display:flex;
      align-items: center;
      justify-content: center;
      width: 80%;
      margin: 0 auto;
`;

const formGrid = css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-bottom: 32px;
    
    & > div:first-of-type {
        grid-column: 1 / -1;
    }
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        
        & > div:first-of-type {
            grid-column: auto;
        }
    }
`;

const submitButton = css`
    width: 100%;
    background: var(--bg-primary);
    color: white;
    border: none;
    padding: 16px 24px;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-family: 'Inter', sans-serif;
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px var(--shadow-hover);
        opacity: 0.9;
    }
    
    &:active {
        transform: translateY(0);
    }

    @media (max-width: 768px) {
      display:flex;
      align-items: center;
      justify-content: center;
      width: 80%;
      margin: 0 auto;
    }
`;

const roastOptions = [
    { value: 'light', label: 'Jasne palenie ⚪️' },
    { value: 'medium', label: 'Średnie palenie 🟤' },
    { value: 'dark', label: 'Ciemne palenie ⚫' }
];

// Wyciągam initialValues poza komponent - są stałe
const initialValues: MyFormValues = {
    id: '',
    coffeName: '',
    roastLevel: 'light',
    in: '',
    out: '',
    preInf: '',
    totaltime: '',
    firstDropStart: '',
    dateOfRoast: '',
    temperatura: '',
};

const CoffeForm = memo(() => {
    console.log('📦CoffeForm rendered')

    const {addProfile, coffe} = useCoffeContext()

    useEffect(() => {
        console.log(coffe)
    }, [coffe])

    const temperatureOptions = useMemo(() => 
        Array.from({length: 20}, (_, i) => i + 80), []
    )

    const roastLabels = useMemo(() => 
        roastOptions.map(opt => opt.label), []
    )

    const handleSubmit = useCallback((
        values: MyFormValues,
        { setSubmitting, resetForm }: FormikHelpers<MyFormValues>
    ) => {
        addProfile(values)
        setSubmitting(false);
        resetForm();
    }, [addProfile])

    return (
        <div css={formContainer}>
            <h1 css={formTitle}>
                <FaCoffee />
                Profil Parzenia Kawy
            </h1>
            <p css={formSubtitle}>
                Zapisz swój idealny przepis na kawę
            </p>
            
     
            
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <div css={formGrid}>
                        <div css={formCoffeeName}>
                            <Field 
                                name="coffeName" 
                                as={Input} 
                                label="Nazwa kawy" 
                                placeholder="np. Ethiopia Yirgacheffe" 
                                icon={<FaCoffee />}
                            />
                        </div>
                        
                        <Field 
                            name="roastLevel" 
                            as={Select} 
                            label="Poziom palenia" 
                            options={roastLabels}
                            icon={<FaFire />}
                        />
                        <Field
                        name="dateOfRoast"
                        as={Input}
                        type="date"
                        label="Data palenia"
                        placeholder="2025-01-01"
                        icon={<FaCalendar />}
                        />
                        
                        <Field 
                            name="in" 
                            as={Input} 
                            label="Waga wejściowa" 
                            placeholder="18.0g" 
                            icon={<FaWeight />}
                        />
                        
                        <Field 
                            name="out" 
                            as={Input} 
                            label="Waga wyjściowa" 
                            placeholder="36.0g" 
                            icon={<FaWeight />}
                        />
                        
                        <Field 
                            name="totaltime" 
                            as={Input} 
                            label="Całkowity czas" 
                            placeholder="25-30s" 
                            icon={<FaStopwatch />}
                        />
                        
                        <Field 
                            name="preInf" 
                            as={Input} 
                            label="Pre-infusion (opcjonalnie)" 
                            placeholder="00:03" 
                            icon={<FaPlay />}
                        />
                        <Field
                        name="firstDropStart"
                        as={Input}
                        label="Czas pierwszej kropli"
                        placeholder="00:03"
                        icon={<FaPlay />}
                        />

                        <Field
                        name="temperatura"
                        as={Select}
                        label="Temperatura"
                        type="number"
                        options={temperatureOptions}
                        icon={<FaThermometerHalf />}
                        />
                    </div>
                    
                    <button type="submit" css={submitButton}>
                        <FaSave />
                        Zapisz profil
                    </button>
                </Form>
            </Formik>
        </div>
    );
});

CoffeForm.displayName = 'CoffeForm'

export default CoffeForm;