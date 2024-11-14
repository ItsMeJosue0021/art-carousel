import { Head, Link } from '@inertiajs/react';
import WebLayout from '@/Layouts/WebLayout';
import CustomCarousel from '@/Components/CustomCarousel';

export default function Welcome({ auth, laravelVersion, phpVersion, userRole }) {

    return (
        <WebLayout>
            <Head title='Home' />
            <CustomCarousel/>
            {/* <div className='bg-black h-40 w-full'>

            </div> */}
            <div className="w-full h-96 flex items-center justify-center">
                Home
            </div>
        </WebLayout>
    );
}
