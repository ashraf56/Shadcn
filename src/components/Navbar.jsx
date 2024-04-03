import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='flex gap-5 p-3 items-center justify-center'>

            <Button asChild>
                <Link href={'/'}>Home</Link>
            </Button>
            <Button asChild>
                <Link href={'/register'}>Register</Link>
            </Button>
            <Button asChild>
                <Link href={'/login'}>Log in</Link>
            </Button>
        </div>
    );
};

export default Navbar;