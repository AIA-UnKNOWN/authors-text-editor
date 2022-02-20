import { useSelector } from 'react-redux';
import useCollections from './hook';
import Collection from './Collection';
import AddButton from './AddButton';
import FetchLoading from '@animations/FetchLoading';

const Collections = () => {
  const collections = useSelector(state => state.collections.list);
  const { isLoading } = useCollections();

  return (
    <div className="flex flex-col flex-1">
      <div className="wrapper w-full lg:w-[800px] bg-light-gray-1 flex flex-col flex-1">
        <div className="flex flex-col flex-1 px-4 w-full md:w-[540px] mx-auto">
          <p className="text-[30px] font-medium text-center py-4 border-b border-dark-gray">
            Collections
          </p>
          
          {isLoading ? (
            <FetchLoading />
          ) : collections.length > 0 ? (
            <div className="pt-4 flex flex-col flex-1">
              {collections.map(collection => (
                <Collection
                  key={collection.id}
                  data={collection}
                />
              ))}
              <AddButton />
            </div>
          ) : (
            <div className="pt-4 flex flex-col flex-1 justify-center items-center">
              <AddButton />
              <span>You don't have any collections.</span>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Collections;