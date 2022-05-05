import { addType } from "../../api/apiTypes";
import { useForm } from 'react-hook-form';
import { useState } from "react";

export default function useAddType() {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const [alert, setAlert] = useState({variant: '', message: ''})
  let alertMessage = {variant: '', message: ''};
  const onSubmitType = async (data: any) => {
      console.log('hookdata', data);
      try {
        const res = await addType(data.type);
        console.log('addType', res);
        alertMessage.variant = 'success';
        setAlert({variant: 'success', message: 'Бренд успешно добавлен'});
        return res;
      } catch(e: any) {
        //alert(e.response.data.message);
        setAlert({variant: 'danger', message: e.response.data.message});
        
      }
      finally {
        setTimeout(() => setAlert({variant: '', message: ''}), 3000);
      }

  }

  return {
      handleSubmitType: handleSubmit,
      onSubmitType,
      registerType: register,
      errorsType: errors,
      alertType: alert
  }
}

  