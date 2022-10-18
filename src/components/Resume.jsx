import React from 'react';

const Resume = () => {
        return (
            <div name="resumee" className='w-full h-full bg-[#4b75ac] text-white'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className="sm:text-left pb-8 pl-4">
                        <p className='text-4xl font-bold inline border-b-4 border-[#7f779b]'>Resumee</p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div>
                        <p className='sm:text-left text-4xl font-bold pb-2 pl-4'>Studies</p>
                        <p className='pb-2 pl-4'>CodeCool, 2022 - Frontend Developer</p>
                        <p className='pb-2 pl-4'>University of Kodolányi János, 2013-2016 - Jazz-guitar faculty</p>
                        <p className='pb-2 pl-4'>Egressy Béni Reformed Art Vocational School, 2009-2013 - Jazz-guitar faculty</p>
                    </div>
                    <div>
                        <p className='sm:text-left text-4xl font-bold pb-2 pl-4'>Experience</p>
                        <p className='pb-2 pl-4'>Energom Electronic Kft. 2021-2022 - Warehouse Manager</p>
                        <p className='pb-2 pl-4'>Budapest Airport, 2020-2021 - Passenger Security Agent</p>
                        <p className='pb-2 pl-4'>Mezzoforte Music Store, 2018-2020 - Logistics and financial associate</p>
                        <p className='pb-2 pl-4'>Martonvásár Primary Artschool, 2015-2018 - Classcial-guitar teacher</p>
                    </div>
                </div>
            </div>
        </div>
        );
    }


export default Resume;