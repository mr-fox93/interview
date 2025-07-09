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

interface MyFormValues {
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
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    min-width: 500px;
    max-width: 600px;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
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
    color: #2d3748;
    text-align: center;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    
    svg {
        color: #8b5cf6;
    }
`;

const formSubtitle = css`
    font-size: 16px;
    color: #6b7280;
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
    
    & > div:first-child {
        grid-column: 1 / -1;
    }
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        
        & > div:first-child {
            grid-column: auto;
        }
    }
`;

const submitButton = css`
    width: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
        box-shadow: 0 10px 20px rgba(102, 126, 234, 0.4);
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

const CoffeForm = () => {
    const initialValues: MyFormValues = {
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

    const handleSubmit = (
        values: MyFormValues,
        { setSubmitting }: FormikHelpers<MyFormValues>
    ) => {
        console.log('Form submitted with values:', values);
        // wysyłanie danych w przyszlosci - uzyc redux
        setSubmitting(false);
    };

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
                            options={roastOptions.map(opt => opt.label)}
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
                        options={Array.from({length: 20}, (_, i) => i + 80)}
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
};

export default CoffeForm;