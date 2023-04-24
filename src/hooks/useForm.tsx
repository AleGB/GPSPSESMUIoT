import { useEffect, useState } from 'react';

export const useForm = <T extends Object>(initState: T) => {

    const [state, setState] = useState(initState);

    const onChange = (value: string, field: keyof T) => {
        setState({
            ...state,
            [field]: value
        });
    }

    return {
        ...state,
        form: state,
        onChange,
    }

}



export const useFormEdit = <T extends Object>(initState: T) => {

    const [state, setState] = useState(initState);

    const setValues = (newState: T) => {
        setState({ ...state, ...newState });
    }

    const onChange = (value: string, field: keyof T) => {
        setValues({
            ...state,
            [field]: value
        });
    }

    return {
        ...state,
        form: state,
        onChange,
        setValues,
    }

}

