import { IconBrandGithub } from '@tabler/icons-react';

export const Header = () => (
    <header className="flex flex-col items-center m-12">
        <h1 className="bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] text-6xl font-bold bg-clip-text text-transparent">MultiTraductor</h1>
        <p className="text-red-600">(Proximamente a definir un mejor nombre!!!)</p>
        <a className='w-3' href="http://" target="_blank" rel="noopener noreferrer"> <IconBrandGithub /></a>
    </header>
)
  