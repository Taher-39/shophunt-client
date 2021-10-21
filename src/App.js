import Footer from './Components/Home/Footer';
import Header from './Components/Home/Header';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <h2>Shop Hunt</h2>
        </ Container >
      </main>
      <Footer />
    </>
  );
}

export default App;
