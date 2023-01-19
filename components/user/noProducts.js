import { Empty } from 'antd';

const NoProducts = () => {
    return (
        <>
           <div className="object-center content-center rounded-2xl border-r border-l border-b border-t border-gray-200 p-10 w-full shadow-lg mb-5 mt-5">
           <Empty
    // image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    description={
      <span>
        Nothing to show here <span className='font-semibold text-gray-700'>Browse some books</span>
      </span>
    }
  >
    <a href="/" className='text-indigo-100 hover:bg-indigo-600 bg-indigo-600 p-2 rounded-lg hover:text-white'>Browse products</a>
  </Empty>
           </div>
      
        </>
    );
}

export default NoProducts;