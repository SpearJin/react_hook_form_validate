import { useForm } from 'react-hook-form';

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  password1: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: '@naver.com',
    },
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError('password1', { message: '패스워드가 같지 않아!!' }, { shouldFocus: true });
    }
    setError('extraError', {
      message: '서버 오프라인',
    });
  };
  console.log(errors);

  return (
    <div>
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(onValid)}>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: 'Only naver.com write',
            },
          })}
          placeholder='Email'
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register('firstName', {
            required: 'write',
            validate: {
              noSpear: (value) => (value.includes('spear') ? 'spear는 사용하면 안되' : true),
              noJin: (value) => (value.includes('jin') ? 'jin은 사용하면 안되' : true),
            },
          })}
          placeholder='First Name'
        />
        <span>{errors?.firstName?.message}</span>
        <input {...register('lastName', { required: 'write' })} placeholder='Last Name' />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register('username', {
            required: 'write',
            minLength: {
              value: 5,
              message: '다섯글자 이상이야',
            },
          })}
          placeholder='Username'
        />
        <span>{errors?.username?.message}</span>
        <input {...register('password', { required: '패스워드 입력해', minLength: 5 })} placeholder='Password' />
        <span>{errors?.password?.message}</span>
        <input
          {...register('password1', { required: '패스워드를 입력해야되', minLength: 5 })}
          placeholder='Password1'
        />
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}
