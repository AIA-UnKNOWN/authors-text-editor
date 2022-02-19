import useHome from './hook';
import Header from '@layouts/Header';

const Home = () => {
  const { currentTab, renderPage } = useHome();

  return (
    <div className="flex flex-col flex-1">
      <Header />

      <div className="wrapper flex flex-col flex-1 w-full">
        {renderPage(currentTab)}
      </div>
    </div>
  );
}

export default Home;