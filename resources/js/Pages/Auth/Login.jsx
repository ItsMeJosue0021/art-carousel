import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import art1 from '@/Assets/art1.jpg';
import { useState } from 'react';

export default function Login({ status, canResetPassword }) {

    const [loading, setLoading] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        setLoading(true);

        post(route('login'), {
            onFinish: () => {
                reset('password');
                setLoading(false);
            },
        });
    };

    return (
        <GuestLayout>
            <Head title="Login" />

            {/* {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )} */}

            <div className='w-full flex items-start'>
                <form onSubmit={submit} className='min-h-screen w-full bg-transparent p-5 flex flex-col items-center justify-center space-y-10'>
                    <div className='w-4/5 flex'>
                        <Link href='/'>
                            <span className='text-5xl font-bold text-white hover:text-blue-800'>&larr;</span>
                        </Link>
                    </div>
                    <div className='w-4/5 text-white'>
                        <h1 className='font-medium text-7xl'>HELLO!</h1>
                        <h2 className='font-medium text-8xl text-blue-800'>WELCOME</h2>
                        <p className='text-lg'>We've been waiting for you, please enter your details.</p>
                    </div>
                    <div className='w-4/5'>
                        <div>
                            <InputLabel htmlFor="email" value="Email" className='text-white'/>

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                placeholder="Sample@email.com"
                                className="mt-1 text-white block w-full bg-transparent placeholder:text-gray-500"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                            />

                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password" className='text-white' />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={data.password}
                                className="mt-1 text-white block w-full bg-transparent placeholder:text-gray-500"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="mt-4 block">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData('remember', e.target.checked)
                                    }
                                />
                                <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">
                                    Remember me
                                </span>
                            </label>
                        </div>

                        <div className='w-full flex mt-4'>
                            <button className='flex items-center justify-center px-4 py-2 font-medium text-base w-full bg-blue-800 text-white transition duration-150 ease-in-out hover:bg-blue-900 border border-blue-800 hover:border-bg-blue-900 hover:text-white'>
                            {loading ? (
                                <svg
                                    className="animate-spin h-5 w-5 mr-3 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.963 7.963 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                            ) : (
                                'Login'
                            )}
                            </button>
                        </div>

                        <div className="mt-4 flex items-center justify-end">
                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="rounded-md text-sm text-gray-600 underline hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                                >
                                    Forgot your password?
                                </Link>
                            )}
                        </div>
                    </div>
                </form>
                <div className='w-full min-h-screen relative'>
                    <img src={art1} alt="" className='w-full h-screen' />
                    <div className='w-full h-screen absolute top-0 left-0 bg-gradient-to-r from-[#01161e]'></div>
                </div>
            </div>
        </GuestLayout>
    );
}
