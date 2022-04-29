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
        return res;
      } catch(e: any) {
        setAlert({variant: 'danger', message: e.response.data.message});
        setTimeout(() => setAlert({variant: '', message: ''}), 3000);
        // alert.message = e.response.data.message;
        // alert.variant = 'danger';
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

  