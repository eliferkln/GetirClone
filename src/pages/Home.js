import Header from 'components/Header'
import HeroSection from 'components/HeroSection';
import Categories from 'components/Categories';
import Campaigns from 'components/Campaigns';
import Favorites from 'components/Favorites';
import MobileApp from 'components/MobileApp';
import Cards from 'components/Cards';
import Footer from 'components/Footer';
import { useWindowWidth } from '@react-hook/window-size';
import {useState} from 'react';

function Home() {
const [showModal,setShowModal]= useState(false);
const [showModal1,setShowModal1]=useState(false);
const [showModal2,setShowModal2]=useState(false);
	const width = useWindowWidth()

	return (
		<>
			<Header setShowModal={setShowModal} showModal={showModal} setShowModal1={setShowModal1} showModal1={showModal1}  showModal2={showModal2} setShowModal2={setShowModal2} />
			{width < 640 && <Campaigns />}
			<HeroSection setShowModal={setShowModal} showModal={showModal} showModal1={showModal1} setShowModal1={setShowModal1}  showModal2={showModal2} setShowModal2={setShowModal2}/>
			<Categories />
			<div className="grid gap-y-6 py-6 pb-14 container mx-auto">
				{width > 640 && <Campaigns />}
				<Favorites />
				<MobileApp />
				<Cards />
			</div>
			<Footer />
			
		</>
	);
}

export default Home;