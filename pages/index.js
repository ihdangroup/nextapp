import Image from 'next/image'
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';

export default function Home() {
  const db = require('../assets/db.png');
  return (
    <>
      <Layout title="Brand Name">
        <Navbar/>
        <section id="header">
          <div className="container text-white py-5">
            <div className="header">
              <Image src={db} width="200px" height="180px"/>
              <h1 className="h1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, fuga?</h1>
              <p className="text-xl pt-3 md:pt-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, alias ullam rem iste eligendi quia.</p>
              <button className="link start">Start Here</button>
            </div>    
          </div>
        </section>

        <section id="portofolio" className="py-5">
          <div className="container justify-center">
            <div>
              <h3 className="text-3xl text-white font-bold">Portofolio</h3>
            </div>
          </div>
          <div className="container text-white">
            <div className="inline text-center md:flex gap-x-4">
              <div className="card">
                <Image src={db} width="150px" height="120px" />
                <h3 className="card-title">Responsive</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="card">
                <Image src={db} width="150px" height="120px" />
                <h3 className="card-title">Responsive</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="card">
                <Image src={db} width="150px" height="120px" />
                <h3 className="card-title">Responsive</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
      
      
    </>
  )
}
