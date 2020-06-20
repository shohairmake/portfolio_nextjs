import React, { useState, useEffect } from 'react'
import { FormUserDetails } from './FormUserDetails'
import { Confirm } from './Confirm'
import { Success } from './Success'

export default function UserForm() {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    })
    const nextStep = () => setStep((prev) => prev + 1)
    const prevStep = () => setStep((prev) => prev - 1)

    // ページ遷移後にページトップまで移動
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [step])

    switch (step) {
        case 1:
            return (
                <FormUserDetails
                    formData={formData}
                    setFormData={setFormData}
                    nextStep={nextStep}
                />
            )
        case 2:
            return (
                <Confirm
                    formData={formData}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            )
        default:
            return <Success />
    }
}
