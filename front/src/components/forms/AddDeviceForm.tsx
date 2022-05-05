import { useState } from "react";
import {Col, Row, Form, Dropdown, Spinner, Alert, Button} from 'react-bootstrap'
import { IBrand, IDeviceAdd, IType } from '../../interfaces/device';
import useInput from '../../hooks/useInput';
import { IChars } from '../../interfaces/chars';
import { addDevice } from '../../api/apiDevices';
import useBrands from '../../hooks/useBrands';
import useTypes from '../../hooks/useTypes';
const AddDeviceForm = () => {
  //свойства девайса
  const [brand, setBrand] = useState<IBrand>({id: +new Date(), name: ''});
  const [type, setType] = useState<IType>({id: +new Date(), name: ''});
  const model = useInput('');
  const price = useInput(0);
  const [chars, setChars] = useState<IChars[]>([]);
  const [file, setFile] = useState<File>(new File([], ''));

  const [sended, setSended] = useState(false);
  const [result, setResult] = useState({variant: '', message: ''});
  const {brands, errorBrands, loadingBrands} = useBrands();
  const {types, errorTypes, loadingTypes} = useTypes();

  const changeInfo = (key: string, value: string, id: number) => {
      setChars(chars.map(ch => ch.id === id ? {...ch, [key]: value} : ch));
  }
  const removeInfo = (id: number) => {
      setChars(chars.filter(ch => ch.id !== id));
  }

  const putFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    let file: File;
    if (e.target.files) {
      file = e.target.files[0];
      setFile(file);
    }
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSended(true);
    setTimeout(() => setSended(false), 3000);
    //brand, type, model, price, img, chars
    const obj: IDeviceAdd = {
      name: model.value,
      price: +price.value,
      img: file,
      type: type,
      brand: brand,
      chars
    }
    console.log('inputobj', obj);
    let res;
    try {
      res = await addDevice(obj);
      setResult({message: 'Агрегат добавлен успешно', variant: 'success'})
    } catch(e: any) {
      console.log(e.message);
      console.log(e.response.data.message);
      setResult({message: 'Произошла ошибка при добавлении', variant: 'danger'});
    }
    finally {
        setTimeout(() => setResult({message: '', variant: ''}), 3000);
    }
   
  }
  return <Col md={6}>
    <h4>Добавить агрегат</h4>
        <Form onSubmit={onSubmit}>
        <Row className="mb-2">
            <Col md={6}>
            <Form.Group>
                <Form.Label>Бренд</Form.Label>
                <Dropdown>
                <Dropdown.Toggle>{brand?.name || 'Бренд'}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {
                    loadingBrands
                    ? <Spinner animation='border'/>
                    : brands.map((brandItem: IBrand) => <Dropdown.Item key={brandItem.id} onClick={() => setBrand(brandItem)}>{brandItem.name}</Dropdown.Item>)
                    }
                </Dropdown.Menu>
                
                </Dropdown>
                {
                    !brand.name && sended
                    ? <Alert variant='danger'>Не задан бренд</Alert>
                    : <></>
                }
            </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group>
                <Form.Label>Тип</Form.Label>
                <Dropdown>
                <Dropdown.Toggle>{type?.name || 'Тип'}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {
                    loadingTypes
                    ? <Spinner animation='border'/>
                    : types.map((typeItem: IType) => <Dropdown.Item key={typeItem.id} onClick={() => setType(typeItem)}>{typeItem.name}</Dropdown.Item>)
                    }
                </Dropdown.Menu>
                </Dropdown>
                {
                    !type.name && sended
                    ? <Alert variant='danger'>Не задан тип</Alert>
                    : <></>
                }
            </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col>
            <Form.Group>
                <Form.Label>Модель</Form.Label>
                <Form.Control {...model}></Form.Control>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group>
                <Form.Label>Цена</Form.Label>
                <Form.Control {...price} type='number'></Form.Control>
            </Form.Group>
            </Col>
        </Row>
        <Row>
            <Form.Group>
            <Form.Label>Пикча</Form.Label>
            <Form.Control
                type='file'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => putFile(e)}
            />
            </Form.Group>
        </Row>
        <Form.Group className={'mt-4'}>
            <Button variant='outline-info' onClick={() => setChars([...chars, {title: '', description: '', id: +new Date()}])}>Добавить характеристику</Button>
            {
            chars.map(char => {
                return (<Row key={char.id}>
                    <Col>
                        <Form.Group>
                        <Form.Label>Характеристика</Form.Label>
                        <Form.Control value={char.title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeInfo('title', e.target.value, char.id)}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                        <Form.Label>Описание</Form.Label>
                        <Form.Control value={char.description} onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeInfo('description', e.target.value, char.id)}/>
                        </Form.Group>
                    </Col>
                    <Col md={2}>
                        <Form.Group>
                        <Row>
                            <Form.Label style={{color: 'transparent'}}>{'.'}</Form.Label>
                            <Button onClick={(e: React.MouseEvent<HTMLButtonElement>) => removeInfo(char.id)}>
                            Удалить
                            </Button>
                        </Row>

                        </Form.Group>
                        
                    </Col>
                    </Row>)
            })
            }
        </Form.Group>
        <Row className='mt-4'>
            <Col className='d-flex justify-content-flex-end'>
            <Button type='submit'>Добавить агрегат</Button>
            </Col>
        </Row>
        <Row className='mt-4 m-auto'>
            <Alert variant={result.variant}>{result.message}</Alert>
        </Row>

        </Form>

    </Col>
}

export default AddDeviceForm


