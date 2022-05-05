import { addBrand } from "../../api/apiBrands";
import { useForm } from 'react-hook-form';
import { useState } from "react";

export default function useAddBrand() {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const [alert, setAlert] = useState({variant: '', message: ''})
  const onSubmitBrand = async (data: any) => {
      console.log('hookdata', data);
      try {
        console.log('beforeadd');
        const res = await addBrand(data.brand);
        console.log('addBrand', res);
        setAlert({variant: 'success', message: 'Бренд успешно добавлен'});
        return res;
      } catch(e: any) {
        setAlert({variant: 'danger', message: e.response.data.message});
      }
      finally {
        setTimeout(() => setAlert({variant: '', message: ''}), 3000);
      }
      
  }

  return {
      handleSubmitBrand: handleSubmit,
      onSubmitBrand,
      registerBrand: register,
      errorsBrand: errors,
      alertBrand: alert
  }
}

  