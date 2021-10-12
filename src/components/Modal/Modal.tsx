import applyIcon from "../../assets/img/apply.png";
import closeIcon from "../../assets/img/close.png";
import {useAppDispatch} from "../../redux/hooks";
import * as yup from 'yup';
import {useFormik} from "formik";
import React, {useEffect, useRef} from "react";
import {setIsOpen} from "../../redux/slices/modalSlice";
import {IWine} from "../../interfaceTypes/interfaceTypes";
import {addWine} from "../../redux/slices/winesSlice";
import {Overlay, FormControls, InputWrapper, Wrapper, StyledError, NumberInputWrapper} from "./styles";

export default function Modal() {
    const dispatch = useAppDispatch()

    const validationSchema = yup.object({
        name: yup.string()
            .min(3, 'Must be 3 characters or more')
            .required('Required'),
        url_1: yup.string()
            .url()
            .min(3, 'Must be 10 characters or more')
            .required('Required'),
        region: yup.string()
            .min(3, 'Must be 3 characters or more')
            .required('Required'),
        grapes: yup.string()
            .min(3, 'Must be 3 characters or more')
            .required('Required'),
        wine_type: yup.string()
            .min(3, 'Must be 8 characters or more')
            .required('Required'),
        price: yup.number()
            .min(1, 'Must be 1 characters or more')
            .positive()
            .required('Required'),
        image: yup.string()
            .url()
            .min(10, 'Must be 10 characters or more')
            .required('Required')
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            url_1: '',
            region: '',
            grapes: '',
            wine_type: '',
            price: 0,
            image: ''
        },
        validateOnBlur: true,
        validationSchema: validationSchema,
        onSubmit: (values: IWine) => {
            dispatch(addWine(values))
            dispatch(setIsOpen(false))
        },
    });

    const wrapperRef = useRef(null)

    function closeForm (e: React.SyntheticEvent) {
        e.preventDefault()
        dispatch(setIsOpen(false))
    }

    function handleClickOutside (event: any) {
        const path = event.path || (event.composedPath && event.composedPath())
        if(!path.includes(wrapperRef.current)) {
            dispatch(setIsOpen(false))
        }
    }

    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside)
        return () => {
            window.removeEventListener('mousedown', handleClickOutside)
        }
        //eslint-disable-next-line
    }, [])

    return (
        <Overlay>
            <Wrapper ref={wrapperRef}>
                <form onSubmit={formik.handleSubmit}>
                    <InputWrapper>
                        <input type="text" placeholder='Wine name' id='name' name='name'
                               value={formik.values.name}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                        />
                        {
                            formik.errors.name && formik.touched.name ? (
                                <StyledError>{formik.errors.name}</StyledError>
                            ) : null
                        }
                    </InputWrapper>
                    <InputWrapper>
                        <input type="text" placeholder='Wine link' id='url_1' name='url_1'
                               value={formik.values.url_1}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                        />
                        {
                            formik.errors.url_1 && formik.touched.url_1 ? (
                                <StyledError>{formik.errors.url_1}</StyledError>
                            ) : null
                        }
                    </InputWrapper>
                    <InputWrapper>
                        <input type="text" placeholder='Region' id='region' name='region'
                               value={formik.values.region}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                        />
                        {
                            formik.errors.region && formik.touched.region ? (
                                <StyledError>{formik.errors.region}</StyledError>
                            ) : null
                        }
                    </InputWrapper>
                    <InputWrapper>
                        <input type="text" placeholder='Grape' id='grapes' name='grapes'
                               value={formik.values.grapes}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                        />
                        {
                            formik.errors.grapes && formik.touched.grapes ? (
                                <StyledError>{formik.errors.grapes}</StyledError>
                            ) : null
                        }
                    </InputWrapper>
                    <InputWrapper>
                        <input type="text" placeholder='Type' id='wine_type' name='wine_type'
                               value={formik.values.wine_type}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                        />
                        {
                            formik.errors.wine_type && formik.touched.wine_type ? (
                                <StyledError>{formik.errors.wine_type}</StyledError>
                            ) : null
                        }
                    </InputWrapper>
                    <NumberInputWrapper>
                        <input type="number" placeholder='Price' id='price' name='price' min={1} max={1000000} step={0.01}
                               value={formik.values.price === 0 ? undefined : formik.values.price}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                        />
                        {
                            formik.errors.price && formik.touched.price ? (
                                <StyledError>{formik.errors.price}</StyledError>
                            ) : null
                        }
                    </NumberInputWrapper>
                    <InputWrapper>
                        <input type="text" placeholder='Image link' id='image' name='image'
                               value={formik.values.image}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                        />
                        {
                            formik.errors.image && formik.touched.image ? (
                                <StyledError>{formik.errors.image}</StyledError>
                            ) : null
                        }
                    </InputWrapper>
                    <FormControls>
                        <button type='submit'>
                            <p>Add</p>
                            <img src={applyIcon} alt="Add"/>
                        </button>
                        <button onClick={closeForm}>
                            <p>Cancel</p>
                            <img src={closeIcon} alt="Cancel"/>
                        </button>
                    </FormControls>
                </form>
            </Wrapper>
        </Overlay>
    );
};