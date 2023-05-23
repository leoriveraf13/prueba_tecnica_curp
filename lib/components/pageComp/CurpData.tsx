import { Sexo } from 'lib/objects/Sexo'
import { CurpValidationRequest } from 'lib/objects/CurpValidationRequest'
import React, { ReactElement, useState } from 'react'
import { Button, Col, Form, InputGroup } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { prevent } from 'lib/functions/pageFunctions'
import { curpValidation } from 'lib/functions/curpValidation'

const CurpData = () : ReactElement => {
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<CurpValidationRequest>()

    const [isChecked, setIsChecked] = useState(true);
    const [gender, setGender] = useState('')

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setGender(event.target.value)
    }

    const handleCheckboxChange = () => {
        isChecked ? setIsChecked(false) : setIsChecked(true)
    }

    const validateCurp = (data: CurpValidationRequest) => {
        curpValidation(data)
    }
    
    return (
        <div className='curp-data'>
            <Form onSubmit={handleSubmit(validateCurp)}>
                <Form.Group>
                    <InputGroup>
                        <Col>
                            <label className='label-form'>CURP</label>
                        </Col>
                        <Col>
                            <Form.Control
                            maxLength={18}
                            onInput={prevent}
                            {...register('curp', {
                                required: true
                            })}></Form.Control>
                        </Col>    
                    </InputGroup>
                </Form.Group>
                <Form.Group>
                    <InputGroup>
                        <Col>
                            <label className='label-form'>Nombres</label>
                        </Col>
                        <Col>
                            <Form.Control
                            {...register('nombres', {
                                required: true
                            })}></Form.Control>
                        </Col>    
                    </InputGroup>
                </Form.Group>
                <Form.Group>
                    <InputGroup>
                        <Col>
                            <label className='label-form'>Apellido Paterno</label>
                        </Col>
                        <Col>
                            <Form.Control
                            {...register('apellidoPaterno', {
                                required: true
                            })}></Form.Control>
                        </Col>    
                    </InputGroup>
                </Form.Group>
                <Form.Group>
                    <InputGroup>
                        <Col>
                            <label className='label-form'>Apellido Materno</label>
                        </Col>
                        <Col>
                            <Form.Control
                            {...register('apellidoMaterno', {
                                required: true
                            })}></Form.Control>
                        </Col>    
                    </InputGroup>
                </Form.Group>
                <Form.Group>
                    <InputGroup>
                        <Col>
                            <label className='label-form'>Fecha de Nacimiento</label>
                        </Col>
                        <Col>
                            <Form.Control 
                            type='date'
                            {...register('fechaNacimiento', {
                                required: true
                            })}></Form.Control>
                        </Col>    
                    </InputGroup>
                </Form.Group>
                <Form.Group>
                    <InputGroup>
                        <Col>
                            <label className='label-form'>Sexo</label>
                        </Col>
                        <Col>
                            <Form.Select
                            value={gender}
                            {...register('sexo', {
                                required: true
                            })}
                            onInput={(event: React.ChangeEvent<HTMLSelectElement>) => handleSelectChange(event)}
                            >
                                <option value={Sexo.Masculino}>Hombre</option>
                                <option value={Sexo.Femenino}>Mujer</option>
                            </Form.Select>
                        </Col>    
                    </InputGroup>
                </Form.Group>
                <Form.Group>
                    <InputGroup>
                        <Col>
                            <label className='label-form'>Es Mexicano</label>
                        </Col>
                        <Col>
                            <Form.Check
                            {...register('esMexicano')}
                            type='checkbox'
                            checked={isChecked}
                            onClick={handleCheckboxChange}
                            />
                        </Col>    
                    </InputGroup>
                </Form.Group>
                <Form.Group>
                    <Button
                    variant="primary"
                    className="add-modal"
                    type="submit"
                    >
                        Validar
                    </Button>
                </Form.Group>
                {Object.keys(errors).length > 0 && (
                    <p className="error-message">Hay errores en los campos obligatorios</p>
                )}
            </Form>
        </div>
    )
}

export default CurpData