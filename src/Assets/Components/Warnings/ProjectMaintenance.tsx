import { useState } from 'react';
import {Main, Modal, Wrapper} from './style'

interface MaintananceChildren{
    children?: React.ReactNode;
}

export function ProjectMaintenance({children}: MaintananceChildren){
    const [isOpen, setIsOpen] = useState(true)
    return (
        <>
        <Main height={isOpen}>
        {children}
        </Main>
    <Wrapper blurry={isOpen} displayModal={isOpen}>
      <div className={`modal-overlay ${isOpen ? "show" : ""}`}/>
      {isOpen && (
        <Modal>   
          <div className='closeButton' onClick={() => setIsOpen(false)}>x</div>
          <div className='warningText'>
            <h4>Website still is in maintenance ! ⚙️⛏️⚒️</h4>
            <article>Please wait a few more days, soon will be available for everyone !</article>
          </div>
        </Modal>
      )}
    </Wrapper>
      </>
    );
}
