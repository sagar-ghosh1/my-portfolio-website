import './Portfolio_card.css';
import { GrDocumentText } from 'react-icons/gr';

const Portfolio_card = ({ projects, handleData }) => {
    const {_id, Name, image } = projects;
    // console.log(projects);

    return (
        <div className='col-lg-3'>
           <div className='project-details'>
               <div className='image-div'>
                  <img src={image} alt="" />
                  <div className='view-details'>
                     <GrDocumentText className='icons' onClick={() => handleData(_id)} />
                  </div>
               </div>
               <label htmlFor="">{Name} website</label>
               <div className='linebar'></div>
           </div>
        </div>
    );
};

export default Portfolio_card;