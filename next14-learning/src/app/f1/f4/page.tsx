import Link from 'next/link';

const F4Page = () => {
  return (
    <div>
      <h1>F4 page</h1>
      <div>
        <Link href='/f1/f3'>F3 page</Link>
        <Link href='/about'>About</Link>
      </div>
    </div>
  );
};

export default F4Page;
