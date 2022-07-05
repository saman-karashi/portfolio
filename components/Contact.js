import { useState} from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid,isDirty},
    clearErrors,
  } = useForm({ mode: 'all',defaultValues:{email:'',fullName:''}});

    const onSubmitHandler = async () => {
    const userData = { name, email, message };

    try {
      const request = await axios.post(`/api/contact`, userData);
      if (request.status === 200) {
        toast.success('Your email has been sent.', {
          toastId: 'success1',
        });
        setEmail('');
        setMessage('');
        setName('');
        reset()
      }
    } catch (error) {
      router.push('/404');
    }
  };

  const nameChangeHandler = e => {
    setName(e.target.value);
    clearErrors('fullName');
  };

  const emailChangeHandler = e => {
    setEmail(e.target.value);
    clearErrors('email');
  };

  return (
    <section id='contact' className='my-24 px-5'>
      <h1 className='text-2xl font-bold text-center'>Contact</h1>
      <form
        className='max-w-[500px] mx-auto'
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div className='my-2'>
          <label htmlFor='name' className='block font-semibold'>
            Full name:
          </label>
          <input
            {...register('fullName', {
              required: 'This field is required.',
              minLength: { value: 5, message: 'Min length is 5' },
            })}
            value={name}
            onChange={nameChangeHandler}
            type='text'
            id='name'
            placeholder='Enter your name'
            className={`p-1 w-full border brouder-rounded focus:outline-none ${
              errors.fullName?.message ? 'border-red-300' : ''
            }`}
          />
          <small className='text-red-300'>{errors.fullName?.message}</small>
        </div>
        <div className='my-2'>
          <label htmlFor='email' className='block font-semibold'>
            Email:
          </label>
          <input
            {...register('email', {
              required: 'This field is required.',
              pattern:{
              value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ ,
              message:'Email is not correct'},
            })}
            value={email}
            onChange={emailChangeHandler}
            type='email'
            id='email'
            placeholder='Enter your email'
            className={`p-1 w-full border brouder-rounded focus:outline-none ${
              errors.email?.message ? 'border-red-300' : ''
            }`}
          />
          <small className='text-red-300'>{errors.email?.message}</small>
        </div>
        <div className='my-4'>
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder='Write your message'
            className='p-2 resize-none border border-rounded w-full focus:outline-none sm2x:min-h-[300px] md:min-h-[400px]'
          />
        </div>
        <button
          disabled={!isValid || !isDirty}
          onClick={onSubmitHandler}
          className='bg-green-300 p-1 px-6 border-2 border-transparent font-bold text-dark-700 transition-all duration-250 hover:text-dark-700 hover:border-b-green-300 hover:border-l-green-300 hover:bg-transparent disabled:bg-gray-200 disabled:border-transparent'
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
