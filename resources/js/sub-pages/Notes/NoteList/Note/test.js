import 'regenerator-runtime';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Note from './index';

test('Note renders correctly', () => {
  const initialState = {
    notes: {
      collectionId: 1
    },
    note: {
      data: {}
    }
  };
  const mockStore = configureStore();

  const component = renderer.create(
    <Provider store={mockStore(initialState)}>
      <Note />
    </Provider>
  );
  const NoteComponent = component.toJSON();
  expect(NoteComponent).toMatchSnapshot();
});