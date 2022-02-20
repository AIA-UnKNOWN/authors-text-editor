import { useSelector } from 'react-redux';
import useCollections from './hook';
import Collection from './Collection';
import AddButton from './AddButton';
import FetchLoading from '@animations/FetchLoading';

const Collections = () => {
  const collections = useSelector(state => state.collections.list);
  useCollections();

  return (
    <div className="flex flex-col flex-1">
      <div className="wrapper w-full lg:w-[800px] bg-light-gray-1 flex flex-col flex-1">
        <div className="flex flex-col flex-1 px-4 w-full md:w-[540px] mx-auto">
          <p className="text-[30px] font-medium text-center py-4 border-b border-dark-gray">
            Collections
          </p>
          
          {collections.length > 0 ? (
            <div className="pt-4 flex flex-col flex-1 overflow-auto">
              {collections.map(collection => (
                <Collection
                  key={collection.id}
                  data={collection}
                />
              ))}
              <AddButton />
            </div>
          ) : (
            <FetchLoading />
          )}
        </div>
      </div>
    </div>
  );
}

export default Collections;