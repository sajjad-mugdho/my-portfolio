import React from 'react';

const Skills = () => {
    return (
        <section className='section' id='skills'>
            <div className="container mx-auto">
                <div className='mx-auto my-5'>
                    <h2 className='h2 text-center border-b pb-3 text-accent mb-6'>MY SKILLS</h2>
                </div>
                <div className='lg:flex  lg:flex-col-4 gap-x-10 lg:gap-x-36 justify-center'>
                    <div className='flex-1 my-10'>
                        <h3 className='h3'>EXPARTISE</h3>
                        <ul >
                            <li className='border-b py-2 font-medium text-xl hover'>HTML</li>
                            <li className='border-b py-2 font-medium text-xl hover'>CSS</li>
                            <li className='border-b py-2 font-medium text-xl hover'>JAVASCRIPT</li>
                            <li className='border-b py-2 font-medium text-xl hover'>ES6</li>
                            <li className='border-b py-2 font-medium text-xl hover'>REACT JS</li>
                            <li className='border-b py-2 font-medium text-xl hover'>TAILWIND CSS</li>
                            <li className='border-b py-2 font-medium text-xl hover'>BOTSTRAP</li>
                        </ul>
                    </div>
                    <div className='flex-1 my-10'>
                        <h3 className='h3'>COMFORTABLE</h3>
                        <ul>
                            <li className='border-b py-2 font-medium text-xl hover'>Node JS</li>
                            <li className='border-b py-2 font-medium text-xl hover'>Express JS</li>
                            <li className='border-b py-2 font-medium text-xl hover'>MongoDB</li>
                            <li className='border-b py-2 font-medium text-xl hover'>Firebase</li>
                            <li className='border-b py-2 font-medium text-xl hover'>JWT</li>
                            <li className='border-b py-2 font-medium text-xl hover'>Rest API</li>
                            <li className='border-b py-2 font-medium text-xl hover'>Material UI</li>
                        </ul>
                    </div>
                    <div className='flex-1 my-10'>
                        <h3 className='h3'>FAMILIAR</h3>
                        <ul className=''>
                            <li className='border-b py-2 font-medium text-xl hover'>TypeScript</li>
                            <li className='border-b py-2 font-medium text-xl hover'>Redux</li>
                            <li className='border-b py-2 font-medium text-xl hover'>Next JS</li>
                            <li className='border-b py-2 font-medium text-xl hover'>OPP</li>
                            <li className='border-b py-2 font-medium text-xl hover'>SEO On Page</li>

                        </ul>
                    </div>
                    <div className='flex-1 my-10'>
                        <h3 className='h3'>TOOLS</h3>
                        <ul>
                            <li className='border-b py-2 font-medium text-xl hover'>VS Code</li>
                            <li className='border-b py-2 font-medium text-xl hover'>Photoshop</li>
                            <li className='border-b py-2 font-medium text-xl hover'>Illustrator</li>
                            <li className='border-b py-2 font-medium text-xl hover'>WordPress</li>
                            <li className='border-b py-2 font-medium text-xl hover'>Git & GitHub</li>
                            <li className='border-b py-2 font-medium text-xl hover'>Figma</li>

                        </ul>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Skills;