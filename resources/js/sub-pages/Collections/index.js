import { useSelector } from 'react-redux';
import useCollections from './hook';
import Collection from './Collection';

const Collections = () => {
  const collections = useSelector(state => state.collections.list);
  useCollections();

  return (
    <div className="h-full">
      <div className="wrapper w-full lg:w-[800px] bg-light-gray-1 h-full">
        <div className="h-full px-4 w-full md:w-[540px] mx-auto">
          <p className="text-[30px] font-medium text-center py-4 border-b border-dark-gray">
            Collections
          </p>
          
          <div className="pt-4">
            {collections.length > 0 && collections.map(collection => (
              <Collection
                key={collection.id}
                data={collection}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collections;