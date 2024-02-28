import './LandingPage.css'
import Navbar from '../../components/Navbar/Navbar';
import MusicCard from '../../components/MusicCard/MusicCard';
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useState } from 'react';

const LandingPage = () => {

    const [showInformation, setShowInformation] = useState(false);

    const toggleInformation = () => {
        setShowInformation(!showInformation);
    };

    return (
        <div>
            <div className="landing-page">
                <Navbar/>
                <MusicCard/>
            </div>
            <div className='main-section'>
                
                <h1>The Rhythm Of Life</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla mauris eu venenatis ultrices. Fusce sollicitudin magna vel sapien ultricies sollicitudin. Integer non purus vel purus feugiat cursus sed sed orci. Nulla ut vestibulum augue. Suspendisse a risus quis quam semper dapibus sit amet sed ante. Pellentesque sit amet enim nisi. Pellentesque eget libero et lorem fringilla pulvinar. Donec placerat blandit blandit. Integer varius eu lorem non cursus. Nam ultricies congue justo, tempor maximus est rhoncus quis. Pellentesque eu ipsum id metus sollicitudin tincidunt eu non neque. Proin porttitor vestibulum orci, sed lobortis enim. Phasellus elementum aliquam felis eu condimentum. In maximus tristique cursus.
                </p><br />
                <p>Nullam eget dapibus quam, sit amet rutrum lacus. Suspendisse erat elit, tempor vel neque in, ornare feugiat justo. Duis vitae dolor faucibus, vulputate augue sed, congue velit. Morbi luctus leo metus, ut aliquam quam feugiat sed. Mauris tempor aliquet mauris, eget dapibus tellus sollicitudin in. Nullam vitae dolor risus. Donec et augue diam. Aenean commodo, orci ac porta facilisis, lorem lectus posuere eros, et vulputate ante dolor quis sem. Sed sed tempor leo. Curabitur condimentum urna justo, eu varius nulla luctus quis. Suspendisse condimentum lorem mi, et maximus lacus gravida sit amet. Aenean vestibulum ut elit eu egestas.</p>
                <br />
                <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam elementum justo quis viverra convallis. Curabitur sed vehicula dolor. Cras nec est dapibus, ultrices nulla et, ullamcorper ligula. Nam tincidunt a leo ut sagittis. Sed ultrices tempor suscipit. Phasellus fringilla pulvinar orci, a hendrerit orci venenatis at. Quisque lobortis nec justo nec tincidunt. Fusce ac lectus et nisl accumsan lacinia sed eget elit. Morbi risus tellus, convallis at justo ac, finibus maximus mi. Donec posuere mi nec viverra efficitur. Duis consectetur neque dignissim ligula porta, ac cursus lacus luctus. Duis convallis laoreet augue a vulputate. Praesent nec feugiat est. In placerat iaculis mattis. Duis aliquet nunc ac pellentesque pharetra.</p>
                
                <div className='info'>
                    <IoMdInformationCircleOutline onClick={toggleInformation} />
                </div>
                <div className="info-text" style={{ display: showInformation ? 'block' : 'none' }}>
                    <p>Ez igen!</p>
                </div>

            </div>
        </div>
    )
}
 
export default LandingPage
